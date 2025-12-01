import React, { useState, useEffect } from "react";
import { usePagination } from "../../hooks/usePagination";
import { PaginationButton } from "./PaginationButton";

interface PaginationControlsProps {
  currentPage: number;
  totalCount: number;
  pageSize: number;
  onPageChange: (page: number) => void;
  siblingCount?: number;
  isLoading?: boolean;
}

export const PaginationControls: React.FC<PaginationControlsProps> = ({
  currentPage,
  totalCount,
  pageSize,
  onPageChange,
  siblingCount = 1,
  isLoading,
}) => {
  // Responsive sibling count
  const [responsiveSiblingCount, setResponsiveSiblingCount] =
    useState(siblingCount);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setResponsiveSiblingCount(0); // Show fewer buttons on mobile
      } else {
        setResponsiveSiblingCount(siblingCount);
      }
    };

    // Set initial value
    handleResize();

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [siblingCount]);

  const paginationRange = usePagination({
    currentPage,
    totalCount,
    siblingCount: responsiveSiblingCount,
    pageSize,
  });

  if (currentPage === 0 || (paginationRange && paginationRange.length < 2)) {
    return null;
  }

  const onNext = () => {
    onPageChange(currentPage + 1);
  };

  const onPrevious = () => {
    onPageChange(currentPage - 1);
  };

  const totalPages = Math.ceil(totalCount / pageSize);

  return (
    <div className="mt-auto flex flex-col items-center gap-4 py-4">
      <div className="flex items-center gap-2">
        <button
          onClick={onPrevious}
          disabled={currentPage === 1 || isLoading}
          className="px-4 py-2 bg-white text-gray-500 rounded-lg cursor-pointer text-sm font-medium hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed transition-colors shadow-sm flex items-center gap-1"
        >
          <span className="text-lg">‹</span>{" "}
          <span className="hidden sm:inline">Previous</span>
        </button>

        <div className="flex items-center gap-1 sm:gap-2 mx-1 sm:mx-2">
          {paginationRange?.map((pageNumber, index) => (
            <PaginationButton
              key={index}
              page={pageNumber}
              isActive={pageNumber === currentPage}
              onClick={() =>
                typeof pageNumber === "number" && onPageChange(pageNumber)
              }
              isDisabled={typeof pageNumber !== "number" || isLoading}
            />
          ))}
        </div>

        <button
          onClick={onNext}
          disabled={currentPage === totalPages || isLoading}
          className="px-4 py-2 bg-white text-gray-500 cursor-pointer rounded-lg text-sm font-medium hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed transition-colors shadow-sm flex items-center gap-1"
        >
          <span className="hidden sm:inline">Next</span>{" "}
          <span className="text-lg">›</span>
        </button>
      </div>

      <div className="text-center text-sm font-medium text-slate-500">
        Page {currentPage} of {totalPages}{" "}
        <span className="hidden sm:inline">({pageSize} Pokemon shown)</span>
      </div>
    </div>
  );
};
