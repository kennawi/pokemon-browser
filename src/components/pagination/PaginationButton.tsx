import React from "react";

interface PaginationButtonProps {
  page: number | string;
  isActive?: boolean;
  onClick?: () => void;
  isDisabled?: boolean;
}

export const PaginationButton: React.FC<PaginationButtonProps> = ({
  page,
  isActive,
  onClick,
  isDisabled,
}) => {
  if (page === "...") {
    return (
      <span className="w-10 h-10 flex items-center justify-center text-gray-400 font-medium">
        ...
      </span>
    );
  }

  return (
    <button
      onClick={onClick}
      disabled={isDisabled}
      className={`w-10 h-10 flex cursor-pointer items-center justify-center rounded-lg text-sm font-bold transition-all duration-200 shadow-sm
        ${
          isActive
            ? "bg-gray-900 text-white hover:bg-gray-800"
            : "bg-white text-gray-700 hover:bg-gray-50 border border-transparent hover:border-gray-200"
        }
        ${isDisabled ? "opacity-50 cursor-not-allowed" : ""}
      `}
    >
      {page}
    </button>
  );
};
