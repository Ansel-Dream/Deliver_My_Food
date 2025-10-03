import Home from "../../pages/Home";

export const Routes = [
  {
    path: "/",
    name: "Home",
    element: <Home />,
  },

  {
    path: "/unauthorized",
    name: "Unauthorized",
    element: (
      <div className="p-6 text-center">
        <h1 className="text-3xl font-bold text-red-600 mb-4">Access Denied</h1>
        <p className="text-gray-600">
          You don't have permission to access this page.
        </p>
      </div>
    ),
  },
  {
    path: "*",
    name: "404",
    element: (
      <div className="pt-20 text-center">
        <h1 className="text-3xl font-bold text-red-600 mb-4">
          404 Page Not Found
        </h1>
        <p className="text-gray-600">
          The page you are looking for does not exist.
        </p>
      </div>
    ),
  },
];
