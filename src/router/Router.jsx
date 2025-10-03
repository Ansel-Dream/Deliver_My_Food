import { Route, Routes } from "react-router-dom";
import Layout from "../layouts/BasicLayout";
import { Routes as Paths } from "./Routes/Routes";

const AppRoutes = () => {
  return (
    <Routes>
      {/* Public Routes */}
      {Paths.map((item, index) => (
        <Route
          key={item ? item.name : index}
          path={item.path}
          element={<Layout>{item.element}</Layout>}
        />
      ))}
    </Routes>
  );
};

export default AppRoutes;
