import { BrowserRouter, Route, Routes } from "react-router-dom";
import { NotFoundPage } from "../components/NotFound";
import HomePage from "../pages/home-page";
import ProjectsPage from "../pages/projects-page";
import { GithubPage } from "../pages/github-page";

export const RoutesApp = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/proyects" element={<ProjectsPage />} />
        <Route path="/github" element={<GithubPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  );
};
