import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { GeminiContextProvider } from "./Context/GeminiContext.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <GeminiContextProvider>
    <App />
  </GeminiContextProvider>
);
