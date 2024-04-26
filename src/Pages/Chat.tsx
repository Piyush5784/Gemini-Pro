import { useEffect, useRef } from "react";
import { useContextGemini } from "../Context/GeminiContext";
import Navbar from "../Components/Navbar";

const Chat = () => {
  const {
    input,
    setInput,
    loading,
    fileInputRef,
    handleFileChange,
    array,
    imageSrcs,
    setShowMenu,
    HandlerInputWithImg,
  } = useContextGemini();

  const { res, setArray } = useContextGemini();
  const isInitialRender = useRef(true);

  useEffect(() => {
    if (!isInitialRender.current) {
      for (let i = 0; i < res.length; i++) {
        setTimeout(() => {
          setArray((prevArray) => prevArray.concat(res[i]));
        }, 15 * i);
      }
    } else {
      isInitialRender.current = false;
    }
  }, [res]);

  return (
    <>
      <div>
        <div>
          {/* <div className="bg-white dark:bg-black p-5 md:pl-[75px] flex gap-7">
            <ThemeSwitcher />

            <Link
              to={"/"}
              className="border dark:text-white dark:hover:bg-white dark:hover:text-black border-black rounded-full px-4 py-2"
            >
              Home
            </Link>
          </div> */}
          <Navbar />

          <div
            className="h-screen w-full flex justify-center items-center flex-col dark:bg-black dark:text-white"
            onClick={() => setShowMenu(false)}
          >
            {loading ? (
              <div role="status" className="w-[90%] animate-pulse">
                <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-[60%] mb-4"></div>
                <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[360px] mb-2.5"></div>
                <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5"></div>
              </div>
            ) : (
              <textarea
                rows={4}
                className="block mt-20 p-2.5 h-[120px] text-sm w-[90%]  text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                defaultValue={array}
                readOnly
              ></textarea>
            )}

            <textarea
              id="message"
              rows={4}
              value={input}
              onChange={(e) => setInput(e.target.value)}
              className="block mt-10 p-2.5 text-sm w-[90%] text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Write your thoughts here..."
            ></textarea>
            <div>
              <label
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white p-2"
                htmlFor="file_input"
              >
                Upload Image(optional)
              </label>
            </div>
            <input
              type="file"
              accept="image/*"
              className="rounded-xl border py-5 px-4 w-[90%]"
              multiple
              ref={fileInputRef}
              onChange={(e) => handleFileChange(e)}
            />
            <div className="flex flex-wrap justify-center">
              {imageSrcs.map((src, index) => (
                <div key={index} className="flex-item">
                  <img
                    src={src}
                    alt={`Uploaded ${index + 1}`}
                    className="p-3"
                    style={{ maxWidth: "100px", maxHeight: "100px" }}
                  />
                </div>
              ))}
            </div>
            <div className="p-2">
              <button
                onClick={(e) => HandlerInputWithImg(e)}
                className="px-3 py-2 rounded-full hover:bg-black hover:text-white border border-black dark:border dark:border-white"
              >
                Generate
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Chat;

{
  /* <div className="text-center border border-black  mt-[100px] overflow-scroll h-[500px]">
<div className="text-black w-[90%]">
  Hello i am piyushsdffd Hello i am piyushsdffd Hello i am
  piyushsdffd Hello i am piyushsdffd Hello i am piyushsdffd Hello
  i am piyushsdffd Hello i am piyushsdffd Hello i am piyushsdffd
  Hello i am piyushsdffd Hello i am piyushsdffd
  {loading ? <div>..loading</div> : <p>{array}</p>}
</div>
</div> */
}
