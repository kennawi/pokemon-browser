import { Zap } from "lucide-react";
import React from "react";
import { Link, Outlet, useLocation } from "react-router-dom";

const Layout: React.FC = () => {
  const location = useLocation();

  const isActive = (path: string) => {
    return location.pathname === path
      ? "bg-gray-900 text-white shadow-sm"
      : "bg-white text-gray-600 hover:bg-gray-50";
  };

  return (
    <div
      className={`min-h-screen bg-blue-100 text-gray-900 font-sans ${
        location.pathname === "/pagination"
          ? "bg-blue-100"
          : location.pathname === "/load-more"
          ? "bg-green-100"
          : "bg-white"
      }`}
    >
      <header className="pt-12 pb-8 text-center">
        <div className="container mx-auto px-4">
          <div className="flex flex-col items-center justify-center gap-2 mb-4">
            <span className="text-yellow-400 text-3xl">
              <Zap />
            </span>
            <h1 className="text-4xl font-bold text-gray-900 tracking-tight">
              Pokemon Dex
            </h1>
            <p className="text-gray-500 text-sm font-medium">
              Discover and explore Pokemon with page controls
            </p>
          </div>

          <nav className="inline-flex p-1 gap-2 rounded-lg shadow-inner">
            <Link
              to="/pagination"
              className={`px-6 py-2 rounded-md text-sm font-medium transition-all duration-200 ${isActive(
                "/pagination"
              )}`}
            >
              Page Controls
            </Link>
            <Link
              to="/load-more"
              className={`px-6 py-2 rounded-md text-sm font-medium transition-all duration-200 ${isActive(
                "/load-more"
              )}`}
            >
              Infinite Scroll
            </Link>
          </nav>
        </div>
      </header>

      <main className="container mx-auto px-4 pb-16 max-w-7xl">
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;
