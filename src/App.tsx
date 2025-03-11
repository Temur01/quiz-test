import { RouterProvider } from "react-router-dom";
import { router } from "./router/router";
import { Toaster } from "react-hot-toast";

const App = () => {
  return (
    <>
      <RouterProvider router={router} />
      <Toaster
        toastOptions={{
          duration: 2400,
        }}
      />
    </>
  );
};

export default App;
