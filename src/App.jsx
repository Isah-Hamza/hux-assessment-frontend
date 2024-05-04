import "./App.css";

import { ToastContainer } from "react-toastify";
import { Route, Routes } from "react-router-dom";
import Homepage from "./pages/hompage";
import Login from "./pages/Login";

function App() {

  return (
    <>
      <ToastContainer />
      <Routes>
        <Route path="/" Component={Homepage} />
        <Route path="/login" Component={Login} />
      </Routes>
    </>
  );
}

export default App;
