// src/ui/GalleryCard.jsx
import PropTypes from 'prop-types';
import { useState } from "react";
import RightArrow from "/image/RightArrow.png";
import LeftArrow from "/image/LeftArrow.png";

export default function CertificateCard({ src, alt = "Certificate image", onClick }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const images = src.images;
  const description = src.description;
  const title = src.title;
  const imgicon =src.img_icon;

  const hasMultipleImages = images.length > 1;
  
  const prev = () => {
    setCurrentIndex((i) => (i === 0 ? images.length - 1 : i - 1));
    
  };

  const next = () => {
    setCurrentIndex((i) => (i === images.length - 1 ? 0 : i + 1));
  };

  
  return (
    <div>
      
    
    <div 
      className="
        group relative overflow-hidden rounded-lg 
        shadow-lg hover:shadow-2xl transition-all duration-500 
        cursor-pointer bg-gray-100  
      "
      onClick={onClick}
    >
      <img
        // src={src}
        src={images[currentIndex]}
        alt={alt}
        className="
          w-[full] h-full object-fill object-top
          transition-transform duration-700 
          group-hover:scale-110          
        "
        loading="lazy"
      />

      
       {/* Prev / Next buttons */}
       {hasMultipleImages && (
      <button
        onClick={prev}
        className="absolute left-3 top-1/2 -translate-y-1/2 bg-[#00A3E0] hover:bg-blue-600  text-white pt-2 px-1  rounded-md"
      > 
        <img
                  src={LeftArrow }
                  className="h-8 w-8 object-cover"
                  alt=""
                />
       
      </button>
      )}
       {hasMultipleImages && (
      <button
        onClick={next}
        className="absolute right-3 top-1/2 -translate-y-1/2 hover:bg-blue-600 bg-[#00A3E0]   text-white pt-2 px-1    rounded-md"
      >
         <img
                  src={RightArrow }
                  className=" h-8 w-8   "
                  alt=""
                />
      
      </button>
      )}
       
      
      {/* Subtle hover overlay */}
      {/* THUMBNAIL OVERLAY */}
        
        <div
          className="
            absolute bottom-0 left-0 right-0 z-10
            
          "
        >
          <div className="flex gap-2">
            {/* {images.slice(0, 5).map((img, index) => (
              <button
                key={index}
                onClick={(e) => {
                  e.stopPropagation();
                  setCurrentIndex(index);
                }}
                className={`h-full w-full rounded-md overflow-hidden border
                  ${
                    index === currentIndex 
                      ? "border-blue-500"
                      : "border-white/30"
                  }`}
              >
                <img
                  src={img}
                  className="h-full w-full object-cover"
                  alt=""
                />
              </button>
            ))} */}
          </div>
        </div>
        

    </div>
    <div className="pt-5 pb-5 ">
      
    <h1 className ="font-bold text-xl text-[#151515] pb-2"> {title}  </h1>
    <p className ="font-normal text-[#666666]">{description}</p>
    </div>
    </div>

  );
}

CertificateCard.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string,
  onClick: PropTypes.func,
};
