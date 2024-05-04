import "./App.css";

import { ToastContainer } from "react-toastify";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Homepage from "./pages/hompage";
import Login from "./pages/Login";
import Register from "./pages/Register";
import { QueryClient, QueryClientProvider } from "react-query";
import "react-toastify/dist/ReactToastify.css";
import CreateContact from "./pages/CreateContact";
import EditContact from "./pages/EditContact";
import ContactList from "./pages/ContactList";
import ContactDetails from "./pages/ContactDetails";

function App() {

  const queryClient = new QueryClient();


  return (
    <>
       <ToastContainer/>
      <QueryClientProvider client={queryClient}>
        <BrowserRouter>
          <Routes>
            <Route path="/" Component={Homepage} />
            <Route path="/login" Component={Login} />
            <Route path="/register" Component={Register} />
            <Route path="/contacts" Component={ContactList} />
            <Route path="/contacts/create" Component={CreateContact} />
            <Route path="/contacts/:id/edit" Component={EditContact} />
            <Route path="/contacts/:id" Component={ContactDetails} />
          </Routes>
        </BrowserRouter>
      </QueryClientProvider>
    </>
  );
}

export default App;
