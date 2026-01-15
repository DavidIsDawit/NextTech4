// src/ui/certificateui.jsx
import { useState } from 'react';
import certificateItems from '../../data/certificate'; 
import CertificateGrid from './CertificateGrid';
// import Pagination from "./Pagination";

const ITEMS_PER_PAGE = 6;

export default function CertificateUI() {
  const [selectedImage, setSelectedImage] = useState(null);
  const [currentPage, setCurrentPage] = useState(1); 

  const totalPages = Math.ceil(certificateItems.length / ITEMS_PER_PAGE);
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const currentItems = certificateItems.slice(
    startIndex,
    startIndex + ITEMS_PER_PAGE
  );
  const visibleItems = certificateItems.slice(0, ITEMS_PER_PAGE);

  return (
    <div className="h-screen  bg-gray-50/50 py-16 px-4 sm:px-6 lg:px-8">
      <div className=" 
  mx-[4%]
  sm:mx-[5%]
  md:mx-[6%]
  lg:mx-[7%]
  xl:mx-[7.5%]
  2xl:mx-[8%]
"> 
       
        {/* Grid */}
        <CertificateGrid 
          items={visibleItems} 
          onItemClick={setSelectedImage}
        />
         {/* <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={setCurrentPage}
        /> */}
        {/* Full-screen modal on click
        {selectedImage && (
          <div 
            className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedImage(null)}
          >
            <img
              src={selectedImage}
              alt="Full screen gallery"
              className="max-w-full max-h-[90vh] object-center rounded-2xl shadow-2xl"
            />
            <button
              className="absolute top-8 right-8 text-white text-5xl font-light hover:text-gray-300 transition"
              onClick={() => setSelectedImage(null)}
            >
              ×
            </button>
          </div>
        )} */}
      </div>
    </div>
  );
}