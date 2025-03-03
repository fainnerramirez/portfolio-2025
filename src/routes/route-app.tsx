import { BrowserRouter, Route, Routes } from "react-router-dom";
import { NotFoundPage } from "../components/NotFound";
import HomePage from "../pages/home-page";
import { GithubPage } from "../pages/github-page";

export const RoutesApp = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/github" element={<GithubPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  );
};
