import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Layout from "./components/Layout";
import PaginationPage from "./pages/PaginationPage";
import LoadMorePage from "./pages/LoadMorePage";
import DetailPage from "./pages/DetailPage";
import GlobalErrorBoundary from "./components/GlobalErrorBoundary";

const App: React.FC = () => {
  return (
    <GlobalErrorBoundary>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Navigate to="/pagination" replace />} />
          <Route path="pagination" element={<PaginationPage />} />
          <Route path="load-more" element={<LoadMorePage />} />
          <Route
            path="*"
            element={<div className="text-center p-8">Page not found</div>}
          />
        </Route>
        <Route path="pokemon/:id" element={<DetailPage />} />
      </Routes>
    </GlobalErrorBoundary>
  );
};

export default App;
