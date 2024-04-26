import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Homepage from "./Pages/Homepage";
import Chat from "./Pages/Chat";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Homepage />}></Route>
          <Route path="/chatNow" element={<Chat />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
