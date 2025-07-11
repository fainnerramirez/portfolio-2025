import { BrowserRouter, Route, Routes } from "react-router-dom";
import { NotFoundPage } from "../components/NotFound";
import HomePage from "../pages/home-page";
import { GithubPage } from "../pages/github-page";
import { SideProjects } from "../components/side-projects";

export const RoutesApp = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/repository" element={<GithubPage />} />
        <Route path="/projects" element={<SideProjects />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  );
};