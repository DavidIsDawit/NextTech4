// src/components/certificate/CertificateHero.jsx
import { useState } from "react";
import PropTypes from 'prop-types';
import {  useNavigate } from "react-router-dom";
import certificateItems from "../../data/certificate";

export default function CertificateContent({ title, description }) {
   
    return (
    <div className=" lg:w-full flex flex-col justify-between ">
            {/* Title */}
            <div className="w-full">
                  <h1 className="text-3xl md:text-6xl   font-extrabold text-gray-900 mb-6">
              {title}
            </h1>
            {/* Description */}
            <p className="text-lg md:text-2xl w-full text-gray-600  leading-relaxed mb-10 whitespace-pre-line">
              {description
  .split(/(?<=\.)\s+/)
  .map((text, i) => (
    <p key={i} className="mb-6">
      {text}
    </p>
  ))}

            </p>
              </div>         
         
          </div>
  );
}
CertificateContent.propTypes = {  
    title: PropTypes.string,
    description: PropTypes.string,
  index: PropTypes.number.isRequired,
};