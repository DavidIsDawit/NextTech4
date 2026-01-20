// src/ui/GalleryCard.jsx
import PropTypes from 'prop-types';
import { useState } from "react";
import { useNavigate } from "react-router-dom";


export default function CertificateCard({ item, index  }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const navigate = useNavigate();
  const images = item.images;
  const description = item.description;
  const title = item.title;
  const imgicon =item.img_icon;
  const goToDetail = () => {
    navigate(`/certificate/${index}`);
  };  
  const truncateWords = (text, wordLimit = 5) => {
  if (!text) return "";
  const words = text.split(" ");
  return words.length > wordLimit
    ? words.slice(0, wordLimit).join(" ") + "..."
    : text;
};

  return (
    <div className="group ">     
    <div 
      className="
        relative overflow-hidden  
        shadow-lg  transition-all duration-500 
        cursor-pointer bg-gray-100  
      "
      onClick={goToDetail}
    >
      <img
        // src={src}
        src={images[currentIndex]}
        alt="certificate image"
        className="
          xl:w-[full] xl:h-[400px] object-cover object-top
          transition-transform duration-700 
          group-hover:scale-110          
        "        loading="lazy"
      />

      
      
      {/* Subtle hover overlay */}
      {/* THUMBNAIL OVERLAY */}
        
     
          {/* <div className="flex gap-2">
            {imgicon}
          </div> */}
          {imgicon && (
          <div className="absolute top-0 right-0 w-14 h-14 lg:w-24 h-24  bg-black/30 rounded-bl-3xl p-1 shadow-lg ">
            <img
              src={imgicon}
              alt="Certificate icon"
              className="w-full h-full object-contain "
            />
          </div>
        )}     
    </div>
    <div className="pt-5 pb-5 ">      
    <h1 className ="font-bold  
      text-lg sm:text-lg lg:text-base xl:text-xl  text-[#151515] group-hover:text-[#00A3E0] pb-2">
       {title}  </h1>
    <p className ="font-normal text-sm sm:text-sm lg:text-xs xl:text-base text-[#666666]">{truncateWords(description, 5)}</p>
    </div>
    </div>

  );
}

// CertificateCard.propTypes = {
//   src: PropTypes.string.isRequired,
//   index: PropTypes.number.isRequired,
// };
CertificateCard.propTypes = {
  item: PropTypes.shape({
    images: PropTypes.arrayOf(PropTypes.string),
    img_icon: PropTypes.string,
    title: PropTypes.string,
    description: PropTypes.string,
  }).isRequired,
  index: PropTypes.number.isRequired,
};
