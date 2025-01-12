import { Routes, Route, BrowserRouter } from "react-router-dom";
import HomePage from "../pages/home-page";
import ProjectsPage from "../pages/projects-page";

export const RoutesApp = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/proyects" element={<ProjectsPage />} />
      </Routes>
    </BrowserRouter>
  );
};
