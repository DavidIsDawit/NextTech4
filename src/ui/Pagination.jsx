import PropTypes from "prop-types";
import {
    MdKeyboardDoubleArrowLeft,
    MdKeyboardDoubleArrowRight,
} from "react-icons/md";

function Pagination({ currentPage, totalPages, onPageChange }) {
    if (totalPages <= 1) return null;

    const pages = Array.from({ length: totalPages }, (_, i) => i + 1);

    return (
        <div className="flex items-center justify-center space-x-2 py-8">
            <button
                onClick={() => onPageChange(1)}
                disabled={currentPage === 1}
                className="flex h-10 w-10 items-center justify-center border border-gray-200 text-gray-400 hover:bg-gray-50 disabled:opacity-50"
            >
                <MdKeyboardDoubleArrowLeft size={20} />
            </button>

            {pages.map((page) => (
                <button
                    key={page}
                    onClick={() => onPageChange(page)}
                    className={`flex h-10 w-10 items-center justify-center border text-sm font-medium transition-colors ${currentPage === page
                            ? "border-sky-500 bg-sky-500 text-white"
                            : "border-gray-200 text-gray-500 hover:bg-gray-50"
                        }`}
                >
                    {page}
                </button>
            ))}

            <button
                onClick={() => onPageChange(totalPages)}
                disabled={currentPage === totalPages}
                className="flex h-10 w-10 items-center justify-center border border-gray-200 text-gray-400 hover:bg-gray-50 disabled:opacity-50"
            >
                <MdKeyboardDoubleArrowRight size={20} />
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
