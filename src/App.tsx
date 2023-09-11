import React from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Wrapper from "./pages/Wrapper";

const Remote = React.lazy(() => import("remoteApp/Remote"));

const router = createBrowserRouter([
  { path: "/", element: <Wrapper /> },
  {
    path: "/remote/*",
    element: (
      <React.Suspense fallback={<div>Loading...</div>}>
        <Remote />
      </React.Suspense>
    ),
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
