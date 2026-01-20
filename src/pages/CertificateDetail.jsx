// src/pages/CertificateDetail.jsx
import { useParams, useNavigate } from "react-router-dom";
import { useState } from "react";
import certificateItems from "../../data/certificate"; // your data file


export default function CertificateDetail() {
  const { id } = useParams();
  const navigate = useNavigate();

  const certificate = certificateItems.find(c => c.id === Number(id));

  // const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const IMAGES_PER_PAGE = 2;
  const [currentPage, setCurrentPage] = useState(0);

  if (!certificate) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-red-600 mb-4">Certificate Not Found</h1>
          <button
            onClick={() => navigate("/certificate")}
            className="px-8 py-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
          >
            Back to Certificates
          </button>
        </div>
      </div>
    );
  }

  const images = certificate.images || [];
  const totalPages = Math.ceil(images.length / IMAGES_PER_PAGE);

  const visibleImages = images.slice(
    currentPage * IMAGES_PER_PAGE,
    currentPage * IMAGES_PER_PAGE + IMAGES_PER_PAGE
  );



  // const hasMultipleImages = images.length > 1;

  // const nextImage = () => {
  //   setCurrentImageIndex((prev) => (prev + 1) % images.length);
  // };

  // const prevImage = () => {
  //   setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length);
  // };

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className=" mx-[5.45%]">        
        
         <div className="w-full lg:w-full pb-10 ">
            <div className="relative lg:w-full  overflow-hidden  ">
              {/* <img
                src={images[currentImageIndex] || "/placeholder.jpg"}
                alt={certificate.title}
                className="w-full  h-[60vh]  object-cover object-center"
              />            */}
              <div className="grid grid-cols-1  md:grid-cols-[1.5fr_1fr] gap-6  h-[60vh] ">
  {visibleImages.map((img, idx) => (
    <img
      key={idx}
      src={img}
      alt={`${certificate.title} ${idx + 1}`}
      className="w-full h-full object-cover object-top"
    />
  ))}
</div>


                  {/* Dots */}
              {/* {hasMultipleImages && (
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 flex gap-3">
                  {images.map((_, idx) => (
                    <button
                      key={idx}
                      onClick={() => setCurrentImageIndex(idx)}
                      className={`w-3 h-3 rounded-full transition-all ${
                        idx === currentImageIndex ? "bg-white scale-125" : "bg-white/50"
                      }`}
                    />
                  ))}
                </div>
              )} */}       
              </div>
              <div className="p-20">
                 {totalPages > 1 && (
  <div className="flex justify-center gap-3">
    {Array.from({ length: totalPages }).map((_, idx) => (
      <button
        key={idx}
        onClick={() => setCurrentPage(idx)}
        className={`w-2 h-2 rounded-full transition-all ${
          idx === currentPage
            ? "bg-black "
            : "bg-sky-200"
        }`}
      />
    ))}
  </div>
)}
              </div>
          </div>
        <div className="flex flex-col lg:flex-row  justify-between gap-x-5 ">
          {/* Left: Image Slider */}         

          {/* Right: Title + Description + Certificate Info */}
          <div className=" lg:w-full flex flex-col justify-between ">
            {/* Title */}
            <div className="w-full">
                  <h1 className="text-3xl md:text-6xl   font-extrabold text-gray-900 mb-6">
              {certificate.title}
            </h1>
            {/* Description */}
            <p className="text-lg md:text-2xl w-full text-gray-600  leading-relaxed mb-10 whitespace-pre-line">
              {certificate.description}
            </p>
              </div>         
         
          </div>
           {/* Certificate Info Table */}
            <div className="bg-[#F4F5FB] w-full md:w-1/2 p-8   shadow-sm">
              <h2 className="text-2xl md:text-4xl font-extrabold text-gray-900 mb-6">
                Certificate Info
              </h2>
              <div className="space-y-6">
                <div className="flex justify-between border-b border-gray-200 pb-4">
                  <span className="text-gray-900 text-lg md:text-2xl font-extrabold">Client:</span>
                  <span className="text-gray-600 text-base md:text-xl ">
                    {certificate.client }
                  </span>
                </div>

                <div className="flex justify-between border-b border-gray-200 pb-4">
                  <span className=" text-gray-900 text-lg md:text-2xl font-extrabold">Project:</span>
                  <span className="text-gray-600 text-base md:text-xl">
                    {certificate.project }
                  </span>
                </div>

                <div className="flex justify-between border-b border-gray-200 pb-4">
                  <span className=" text-gray-900  text-lg md:text-2xl font-extrabold">Category:</span>
                  <span className="text-gray-600 text-base md:text-xl">
                    {certificate.category }
                  </span>
                </div>

                <div className="flex justify-between">
                  <span className=" text-gray-900 text-lg md:text-2xl font-extrabold">Issue Date:</span>
                  <span className=" text-gray-600 text-base md:text-xl">
                    {certificate.issuedate }
                  </span>
                </div>
                
              </div>
            </div>
        </div>
        <div className=" flex items-center justify-center p-16">
           <button
          onClick={() => navigate("/certificate")}
          className=" mb-8 text-xl md:text-3xl border-solid bg-blue-600 rounded-lg p-2 px-8 gap-2 text-white hover:text-black  font-medium"
        >
          Back 
        </button>
        </div>       
      </div>
    </div>
  );
}
