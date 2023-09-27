import "./App.css";
import { RouterProvider } from "react-router-dom";
import { router } from "./lib/routes";
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <>
      <RouterProvider router={router} />
      <Toaster position="top-right" reverseOrder={false} />
    </>
  );
}

export default App;
