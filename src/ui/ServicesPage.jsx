// import services from "../data/services";
// import { IoIosArrowRoundForward } from "react-icons/io";
// import Pagination from "./Pagination";


// export default function Services() {
//   return (
//     <section className="py-20 bg-gray-50">
//       <div className=" px-4 md:px-6 lg:px-16 xl:px-32">
//         {/* Header */}
//         <div className="text-center mb-14 md:mb-20">
//           <p className="text-sm text-blue-600 font-semibold uppercase">
//             What We Do
//           </p>
//           <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mt-2">
//             Services That Help <samp> You Grow</samp> 
//           </h2>
//         </div>

//         {/* Grid */}
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
//   {services.map((service) => (
//     <div
//       key={service.id}
//       className="bg-white rounded-xl shadow-sm overflow-hidden group"
//     >
//       {/* Image Wrapper */}
//       <div className="relative w-full aspect-[16/9] overflow-hidden">
//         <img
//           src={service.heroImage}
//           alt={service.title}
//           // className="absolute inset-0 w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
//           className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"

//         />
//       </div>

//       {/* Content */}
//       <div className="p-4 sm:p-5 lg:p-6">
//         <h3 className="text-xl sm:text-lg md:text-xl lg:text-2xl font-semibold text-gray-900 transition-colors duration-300 group-hover:text-primary">
//           {service.title}
//         </h3>

//        <p className="text-base sm:text-sm md:text-lg lg:text-xl text-gray-600 mt-2 sm:mt-3 break-words max-w-[32ch]">
//         {service.subtitle}
//         </p>


        
// <a
//   href={`/projects/${service.id}`}
//   className="inline-flex items-center mt-3 sm:mt-4 text-sm sm:text-base md:text-lg font-medium text-primary hover:text-primary transition-colors duration-300"
// >
//   Read More <IoIosArrowRoundForward className="ml-1 text-lg" />
// </a>
//       </div>
//     </div>
//   ))}
// </div>

//       </div>

//       <Pagination currentPage={1} totalPages={3} onPageChange={(page) => console.log("Go to page:", page)} />
//     </section>
//   );
// }


// import services from "../data/services";
// import { IoIosArrowRoundForward } from "react-icons/io";
// import Pagination from "./Pagination";
// import { useState } from "react";

// export default function Services() {
//   const [currentPage, setCurrentPage] = useState(1);
//   const itemsPerPage = 6; // Adjust based on desired items per page
//   const totalPages = Math.ceil(services.length / itemsPerPage);

//   const handlePageChange = (page) => {
//     if (page >= 1 && page <= totalPages) {
//       setCurrentPage(page);
//     }
//   };

//   const currentServices = services.slice(
//     (currentPage - 1) * itemsPerPage,
//     currentPage * itemsPerPage
//   );

//   return (
//     <section className="py-20 bg-gray-50">
//       <div className="px-4 md:px-6 lg:px-16 xl:px-32">
//         {/* Header */}
// <div className="text-center mb-14 md:mb-20">
//   <h1 className="text-base font-semibold uppercase tracking-wide text-[#00A3E0] mb-3">
//     What We Do
//   </h1>

//   <h2 className="font-extrabold text-gray-900 leading-tight
//                  text-3xl sm:text-4xl md:text-5xl">

//     {/* Mobile layout */}
//     <span className="block sm:hidden">
//       Services That Help
//       <br />
//       You Grow
//     </span>

//     {/* Tablet & Desktop layout */}
//     <span className="hidden sm:block">
//       Services That Help You
//       <br />
//       <span className="block mt-4">Grow</span>
//     </span>

//   </h2>
// </div>



//         {/* Grid */}
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-6">
//           {currentServices.map((service) => (
//             <div
//               key={service.id}
//               className="bg-white rounded-xl shadow-sm overflow-hidden group"
//             >
//               {/* Image Wrapper */}
//               <div className="relative w-full aspect-[16/9] overflow-hidden">
//                 <img
//                   src={service.heroImage}
//                   alt={service.title}
//                   className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-125"
//                 />
//               </div>

//               {/* Content */}
//               <div className="p-4 sm:p-5 lg:p-6">
//                 <h3 className="text-xl sm:text-lg md:text-xl lg:text-2xl font-bold text-gray-900 transition-colors duration-300 group-hover:text-primary">
//                   {service.title}
//                 </h3>

//                 <p className="text-base sm:text-sm md:text-lg lg:text-xl text-gray-600 mt-2 sm:mt-3 break-words max-w-[32ch]">
//                   {service.subtitle}
//                 </p>

//                 <a
//                   href={`/projects/${service.id}`}
//                   className="inline-flex items-center mt-3 sm:mt-4 text-sm sm:text-base md:text-lg font-medium text-primary hover:text-primary transition-colors duration-300"
//                 >
//                   Read More <IoIosArrowRoundForward className="ml-1 text-lg" />
//                 </a>
//               </div>
//             </div>
//           ))}
//         </div>

//         <Pagination 
//           currentPage={currentPage} 
//           totalPages={totalPages} 
//           onPageChange={handlePageChange} 
//         />
//       </div>
//     </section>
//   );
// }

import { useState, useMemo } from "react";
import { IoIosArrowRoundForward } from "react-icons/io";
import PropTypes from 'prop-types';
import services from "../data/services";
import Pagination from "./Pagination";


const ITEMS_PER_PAGE = 6;

export default function Services() {
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(services.length / ITEMS_PER_PAGE);

  // Memoized slice – prevents unnecessary recalculations
  const currentServices = useMemo(() => {
    const start = (currentPage - 1) * ITEMS_PER_PAGE;
    const end = start + ITEMS_PER_PAGE;
    return services.slice(start, end);
  }, [currentPage]);

  const handlePageChange = (page) => {
    if (page < 1 || page > totalPages) return;
    setCurrentPage(page);
  };

  return (
    <section className="py-16 md:py-20 bg-gray-50">
      <div className="px-5 sm:px-6 md:px-10 lg:px-16  xl:pl-32 xl:pr-24 mx-auto">
        {/* Header */}
        <div className="text-center mb-14 md:mb-16 lg:mb-20">
          <p className="text-[#00A3E0] font-semibold uppercase tracking-wider text-sm md:text-base mb-3">
            What We Do
          </p>

          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl font-extrabold text-gray-900 leading-tight">
            <span className="sm:hidden">
              Services That Help
              <br />
              You Grow
            </span>

            <span className="hidden sm:inline">
              Services That Help You Grow
            </span>
          </h2>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-7 lg:gap-y-12 lg:gap-6 ">
          {currentServices.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>

        {totalPages > 1 && (
          <div className="mt-12 md:mt-16">
            <Pagination
              currentPage={currentPage}
              totalPages={totalPages}
              onPageChange={handlePageChange}
            />
          </div>
        )}
      </div>
    </section>
  );
}

// Extracted card component (cleaner, reusable, easier to maintain/test)
function ServiceCard({ service }) {
  return (
    <div className="group bg-white md:rounded-t-xl rounded-xl shadow-sm overflow-hidden transition-all duration-300">
      <div className="relative aspect-[16/10] overflow-hidden">
        <img
          src={service.heroImage}
          alt={service.title}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-125"
          loading="lazy" // good default for service listing
        />
      </div>

      <div className="p-5 md:p-6 lg:p-7">
        <h3 className="text-xl md:text-2xl font-bold text-gray-900 group-hover:text-[#00A3E0] transition-colors">
          {service.title}
        </h3>

        <p className="text-base sm:text-sm md:text-lg lg:text-xl text-gray-600 mt-2 sm:mt-3 break-words max-w-[32ch]">
          {service.subtitle}
        </p>

        <a
          href={`/projects/${service.id}`}
          className="mt-5 text-base sm:text-sm md:text-lg lg:text-xl inline-flex items-center font-semibold gap-1.5 text-[#00A3E0]"
        >
          Read More
          <IoIosArrowRoundForward size={20} />
        </a>
      </div>
    </div>
  );
}

ServiceCard.propTypes = {
  service: PropTypes.shape({
    id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
    title: PropTypes.string.isRequired,
    subtitle: PropTypes.string.isRequired,
    heroImage: PropTypes.string.isRequired,
  }).isRequired
};