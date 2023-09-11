import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Wrapper from "./pages/Wrapper";

import Remote from "remoteApp/Remote";

const router = createBrowserRouter([
  { path: "/", element: <Wrapper /> },
  {
    path: "/remote/*",
    element: <Remote />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
