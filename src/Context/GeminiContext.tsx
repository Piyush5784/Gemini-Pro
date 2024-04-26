import {
  ChangeEvent,
  Dispatch,
  MutableRefObject,
  ReactNode,
  SetStateAction,
  createContext,
  useContext,
  useRef,
  useState,
} from "react";
import { runGenerateImageAndContent } from "../Config";
import { GoogleGenerativeAI } from "@google/generative-ai";

export const GeminiContext = createContext({} as contextValuesProp);

export function useContextGemini() {
  return useContext(GeminiContext);
}
type GeminiContextProviderProp = {
  children: ReactNode;
};

const API_KEY = import.meta.env.VITE_API_KEY;
const genAI = new GoogleGenerativeAI(API_KEY);

type contextValuesProp = {
  res: string;
  setRes: Dispatch<SetStateAction<string>>;
  array: string;
  showMenu: boolean;
  setShowMenu: Dispatch<SetStateAction<boolean>>;
  setArray: Dispatch<SetStateAction<string>>;
  imageSrcs: string[];
  setImageSrcs: Dispatch<SetStateAction<string[]>>;
  loading: boolean;
  setLoading: Dispatch<SetStateAction<boolean>>;
  fileInputRef: MutableRefObject<any>;
  input: string;
  setInput: Dispatch<SetStateAction<string>>;
  prevPrompts: string[];
  SetPrevPrompts: Dispatch<SetStateAction<string[]>>;
  filterText: (text: string) => string;
  handleFileChange: (e: ChangeEvent<HTMLInputElement>) => void;
  run: () => void;
  HandlerInputWithImg: (e: any) => void;
};

export const GeminiContextProvider = ({
  children,
}: GeminiContextProviderProp) => {
  const [showMenu, setShowMenu] = useState(false);
  const [res, setRes] = useState("");
  const [array, setArray] = useState("");
  const [imageSrcs, setImageSrcs] = useState<string[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const fileInputRef = useRef<any>();
  const [input, setInput] = useState("");
  const [prevPrompts, SetPrevPrompts] = useState<string[]>([]);

  function filterText(text: string) {
    let newText = "";
    for (let i = 0; i < text.length; i++) {
      if (text.charAt(i) == "*" || text.charAt(i) == ";") {
        newText += "\n";
      } else {
        newText += text.charAt(i);
      }
    }
    return newText;
  }

  const handleFileChange = (
    e: ChangeEvent<HTMLInputElement> | HTMLInputElement["files"] | any
  ) => {
    const files = Array.from(e.target.files);
    Promise.all(
      files.map((file) => {
        return new Promise((resolve, reject) => {
          const reader = new FileReader();
          reader.onload = (event: any) => {
            resolve(event.target.result);
          };
          reader.onerror = (error) => {
            reject(error);
          };
          // @ts-ignore
          reader.readAsDataURL(file);
        });
      })
    )
      .then((images: any) => {
        setImageSrcs((prevState) => [...prevState, ...images]);
      })
      .catch((error) => {
        console.error("Error reading file:", error);
      });
  };

  async function run() {
    if (input == "") return;
    setArray("");
    setInput("");
    const model = genAI.getGenerativeModel({ model: "gemini-pro" });
    const prompt = input;
    const result = await model.generateContent(prompt);
    const response = await result.response;
    const text: string = response.text();
    setRes(filterText(text));
  }

  async function HandlerInputWithImg(e: any) {
    e.preventDefault();
    if (input == "" && fileInputRef.current.files.length == 0) return;
    setArray("");
    SetPrevPrompts((prev) => [...prev, input]);

    if (fileInputRef.current && fileInputRef.current.files.length > 0) {
      setLoading(true);
      const text: string = await runGenerateImageAndContent(
        fileInputRef.current,
        input
      );
      setRes(filterText(text));
      setLoading(false);
      fileInputRef.current.value = "";
      setImageSrcs([]);
    } else if (fileInputRef.current.files.length == 0 || input != "") {
      setLoading(true);
      await run();
      setLoading(false);
    }
    setInput("");
  }

  const contextValues: contextValuesProp = {
    res,
    setRes,
    array,
    setArray,
    imageSrcs,
    setImageSrcs,
    loading,
    setLoading,
    fileInputRef,
    input,
    setInput,
    prevPrompts,
    SetPrevPrompts,
    filterText,
    handleFileChange,
    showMenu,
    setShowMenu,
    run,
    HandlerInputWithImg,
  };

  return (
    <GeminiContext.Provider value={contextValues}>
      {children}
    </GeminiContext.Provider>
  );
};
