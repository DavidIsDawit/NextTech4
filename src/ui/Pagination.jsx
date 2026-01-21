import PropTypes from "prop-types";
import { BiSolidArrowToLeft, BiArrowToRight } from "react-icons/bi";

function Pagination({ currentPage, totalPages, onPageChange }) {
  if (totalPages <= 1) return null;

  const MAX_VISIBLE = 4;

  let startPage = currentPage;
  let endPage = startPage + MAX_VISIBLE - 1;

  // If we go past total pages, shift back
  if (endPage > totalPages) {
    endPage = totalPages;
    startPage = Math.max(1, endPage - MAX_VISIBLE + 1);
  }

  const visiblePages = [];
  for (let i = startPage; i <= endPage; i++) {
    visiblePages.push(i);
  }

  return (
    <div className="flex flex-wrap items-center justify-center gap-2 py-6 sm:py-8">

      {/* Previous */}
      <button
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
        className="flex items-center justify-center
                   h-12 w-12 md:h-11 md:w-11 lg:h-12 lg:w-12
                   rounded-md bg-white text-black shadow-[0_10px_25px_-5px_rgba(0,0,0,0.1),0_8px_10px_-6px_rgba(0,0,0,0.1)]
                   hover:bg-primary hover:text-white
                   disabled:opacity-40 disabled:cursor-not-allowed
                   transition-all"
      >
        <BiSolidArrowToLeft className="text-base sm:text-lg md:text-xl" />
      </button>

      {/* Page Numbers (ONLY 4, SLIDING) */}
      {visiblePages.map((page) => (
        <button
          key={page}
          onClick={() => onPageChange(page)}
          className={`flex items-center justify-center
                      h-12 w-12  md:h-11 md:w-11 lg:h-12 lg:w-12
                      rounded-md text-xs sm:text-sm md:text-base
                      font-medium shadow-[0_10px_25px_-5px_rgba(0,0,0,0.1),0_8px_10px_-6px_rgba(0,0,0,0.1)]   transition-all
                      ${
                        currentPage === page
                          ? "bg-primary text-white"
                          : "bg-white text-black hover:bg-[#026184] hover:text-white"
                      }`}
        >
          {page}
        </button>
      ))}

      {/* Next */}
      <button
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        className="flex items-center justify-center
                   h-12 w-12 md:h-11 md:w-11 lg:h-12 lg:w-12
                   rounded-md bg-white text-black shadow-[0_10px_25px_-5px_rgba(0,0,0,0.1),0_8px_10px_-6px_rgba(0,0,0,0.1)]
                   hover:bg-primary hover:text-white 
                   disabled:opacity-40 disabled:cursor-not-allowed
                   transition-all"
      >
        <BiArrowToRight className="text-base sm:text-lg md:text-xl" />
      </button>
    </div>
  );
}

Pagination.propTypes = {
  currentPage: PropTypes.number.isRequired,
  totalPages: PropTypes.number.isRequired,
  onPageChange: PropTypes.func.isRequired,
};

export default Pagination;
