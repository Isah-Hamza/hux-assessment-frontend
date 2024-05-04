import "./App.css";

import { ToastContainer } from "react-toastify";
import { Route, Routes } from "react-router-dom";
import Homepage from "./pages/hompage";
import Login from "./pages/Login";
import Register from "./pages/Register";
import { QueryClient, QueryClientProvider } from "react-query";

function App() {

  const queryClient = new QueryClient();


  return (
    <>
      <ToastContainer />
      <QueryClientProvider client={queryClient}>
        <Routes>
          <Route path="/" Component={Homepage} />
          <Route path="/login" Component={Login} />
          <Route path="/register" Component={Register} />
        </Routes>
      </QueryClientProvider>
    </>
  );
}

export default App;
