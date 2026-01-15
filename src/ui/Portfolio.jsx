// // ui/Portfolio.jsx
// import { useState } from "react";
// import portfolioData from "../data/portfolio_data";
// import { Link } from "react-router-dom";

// const tabs = ["All", "AI Development", "Web Development", "Marketing", "Development"];

// export default function Portfolio() {
//   const [activeTab, setActiveTab] = useState("All");

//   const filteredData = activeTab === "All"
//     ? portfolioData
//     : portfolioData.filter((item) => item.categories.includes(activeTab));

//   //   export default function Portfolio() {
//   // const [activeTab, setActiveTab] = useState("All");

//   // const filteredData =
//     // activeTab === "All"
//     //   ? portfolioData
//     //   : portfolioData.filter((item) =>
//     //       item.categories.includes(activeTab)
//     //     );

//   // Tabs for mobile (first 4) and desktop (all)
//   const mobileTabs = tabs.slice(0, 4);

//   return (
//     <section className="py-20 bg-white">
//       <div className="px-4 sm:px-6 lg:px-20 xl:px-24">
//         {/* Header */}
//         <div className="text-center">
//           <p className="text-xs font-semibold text-[#00A3E0] uppercase tracking-widest">
//             Work with us
//           </p>
//           <h2 className="mt-3 text-2xl sm:text-4xl font-bold text-gray-900">
//             Our portfolio
//           </h2>

//           {/* dots under title */}
//           <div className="flex justify-center gap-2 mt-4">
//             <span className="w-1.5 h-1.5 rounded-full bg-gray-300"></span>
//             <span className="w-1.5 h-1.5 rounded-full bg-[#00A3E0]"></span>
//             <span className="w-1.5 h-1.5 rounded-full bg-gray-300"></span>
//           </div>
//         </div>

//         {/* Tabs */}
//         <div className="mt-6 xs:mt-8 sm:mt-10 md:mt-12">
//           <div className="flex justify-start md:justify-center">
//             <div className="flex gap-2 xs:gap-2 sm:gap-4 md:gap-6 lg:gap-8 overflow-x-auto scrollbar-hide px-1">
//               {/* Mobile Tabs */}
//               {mobileTabs.map((tab) => (
//                 <button
//                   key={tab}
//                   onClick={() => setActiveTab(tab)}
//                   className={`sm:hidden whitespace-nowrap text-xs xs:text-xs sm:text-sm font-semibold transition-all
//                     ${activeTab === tab
//                       ? "text-white bg-[#00A3E0]"
//                       : "text-gray-600 bg-gray-100 hover:text-gray-900"}
//                     px-3 xs:px-3 sm:px-4 py-1.5 xs:py-2 rounded-xl`}
//                 >
//                   {tab}
//                 </button>
//               ))}

//               {/* Desktop Tabs */}
//               {tabs.map((tab) => (
//                 <button
//                   key={tab}
//                   onClick={() => setActiveTab(tab)}
//                   className={`hidden sm:inline-block whitespace-nowrap text-sm xs:text-sm sm:text-base md:text-base font-semibold transition-all
//                     ${activeTab === tab
//                       ? "text-[#00A3E0] border-b-2 border-[#00A3E0]"
//                       : "text-gray-600 hover:text-gray-900"}
//                     px-4 xs:px-4 sm:px-6 py-1 sm:py-2`}
//                 >
//                   {tab}
//                 </button>
//               ))}
//             </div>
//           </div>
//         </div>

//         {/* Grid */}
//         <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 ">
//           {filteredData.map((item) => (
//             <Link
//               to={`/portfolio/${item.id}`}
//               key={item.id}
//               className="group relative block overflow-hidden rounded-xl shadow-2xl"
//             >
//               {/* Image */}
//               <img
//                 src={item.thumbnail}
//                 alt={item.title}
//                 className="h-[25rem] w-full object-cover transition-transform duration-700 group-hover:scale-105"
//               />

//               {/* Dark gradient overlay on hover */}
//               <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

//               {/* Hover content - exactly matching the screenshot */}
//               <div className="absolute inset-0 flex items-end justify-center pb-16 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
//                 <div className="flex flex-col items-center">
//                   {/* Teal arrow circle */}
//                   <div className="bg-[#00A3E0] rounded-full w-16 h-16 flex items-center justify-center shadow-2xl mb-6">
//                     <span className="text-white text-3xl">↑</span>
//                   </div>

//                   {/* Teal title box */}
//                   <div className="bg-[#00A3E0] rounded-3xl px-10 py-8 shadow-2xl text-center">
//                     <h3 className="text-2xl font-bold text-white leading-tight">
//                       {item.title}
//                     </h3>
//                   </div>
//                 </div>
//               </div>
//             </Link>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }

// // ui/Portfolio.jsx
// import { useState } from "react";
// import portfolioData from "../data/portfolio_data";
// import { Link } from "react-router-dom";

// const tabs = ["All", "AI Development", "Web Development", "Marketing", "Development", ];

// export default function Portfolio() {
//   const [activeTab, setActiveTab] = useState("All");

//   const filteredData =
//     activeTab === "All"
//       ? portfolioData
//       : portfolioData.filter((item) => item.categories.includes(activeTab));

//   // Mobile shows first 4 tabs for better scroll experience
//   const mobileTabs = tabs.slice(0, 4);

//   return (
//     <section className="py-16 sm:py-20 bg-white">
//       <div className="px-0 sm:px-6 lg:px-20 xl:px-24">
//         {/* Header */}
//         <div className="text-center max-w-3xl mx-auto">
//           <p className="text-xs sm:text-sm font-semibold text-[#00A3E0] uppercase tracking-widest">
//             Work with us
//           </p>
//           <h2 className="mt-3 text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900">
//             Our Portfolio
//           </h2>

//           {/* Dots under title */}
//           <div className="flex justify-center gap-2 mt-4">
//             <span className="w-1.5 h-1.5 rounded-full bg-gray-300"></span>
//             <span className="w-1.5 h-1.5 rounded-full bg-[#00A3E0]"></span>
//             <span className="w-1.5 h-1.5 rounded-full bg-gray-300"></span>
//           </div>
//         </div>

//         {/* Tabs */}
//         <div className="mt-8 max-w-3xl mx-3 md:mx-auto">
//           <div className="flex justify-start md:justify-center">
//             <div className="flex gap-2 sm:gap-4 md:gap-6 lg:gap-8 overflow-x-auto scrollbar-hide px-1">
//               {/* Mobile Tabs */}
//               {mobileTabs.map((tab) => (
//                 <button
//                   key={tab}
//                   onClick={() => setActiveTab(tab)}
//                   className={`sm:hidden whitespace-nowrap text-xs sm:text-sm font-semibold transition-all
//                     ${activeTab === tab
//                       ? "text-white bg-[#00A3E0]"
//                       : "text-gray-600 bg-gray-100 hover:text-gray-900"}
//                     px-3 py-2 rounded-xl`}
//                 >
//                   {tab}
//                 </button>
//               ))}

//               {/* Desktop Tabs */}
//               {tabs.map((tab) => (
//                 <button
//                   key={tab}
//                   onClick={() => setActiveTab(tab)}
//                   className={`hidden sm:inline-block whitespace-nowrap text-sm sm:text-base font-semibold transition-all
//                     ${activeTab === tab
//                       ? "text-[#00A3E0] border-b-2 border-[#00A3E0]"
//                       : "text-gray-600 hover:text-gray-900"}
//                     px-4 py-2`}
//                 >
//                   {tab}
//                 </button>
//               ))}
//             </div>
//           </div>
//         </div>

//         {/* Grid */}
//         <div className="mt-12 px-4 md:mx-0 sm:mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
//           {filteredData.map((item) => (
//             <Link
//               to={`/portfolio/${item.id}`}
//               key={item.id}
//               className="group relative block overflow-hidden rounded-2xl shadow-xl sm:shadow-2xl"
//             >
//               {/* Image */}
//               <img
//                 src={item.thumbnail}
//                 alt={item.title}
//                 className="w-full h-64 sm:h-72 md:h-80 lg:h-96 xl:h-[28rem] object-cover transition-transform duration-700 group-hover:scale-105"
//               />

//               {/* Dark gradient overlay on hover */}
//               <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

//               {/* Hover content */}
//               <div className="absolute inset-0 flex items-end justify-center pb-12 sm:pb-16 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
//                 <div className="flex flex-col items-center">
//                   {/* Teal arrow circle */}
//                   <div className="bg-[#00A3E0] rounded-full w-14 h-14 sm:w-16 sm:h-16 flex items-center justify-center shadow-xl sm:shadow-2xl mb-4 sm:mb-6">
//                     <span className="text-white text-2xl sm:text-3xl">↑</span>
//                   </div>

//                   {/* Teal title box */}
//                   <div className="bg-[#00A3E0] rounded-2xl sm:rounded-3xl px-6 sm:px-10 py-4 sm:py-8 shadow-xl sm:shadow-2xl text-center">
//                     <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-white leading-tight">
//                       {item.title}
//                     </h3>
//                   </div>
//                 </div>
//               </div>
//             </Link>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }


// ui/Portfolio.jsx
import { useState, useRef, useEffect } from "react";
import portfolioData from "../data/portfolio_data";
import { Link } from "react-router-dom";

const tabs = ["All", "AI Development", "Web Development", "Marketing", "Development"];

export default function Portfolio() {
  const [activeTab, setActiveTab] = useState("All");
  const mobileTabs = tabs.slice(0, 4); // Mobile shows first 4 tabs
  const tabsRef = useRef(null);

  const filteredData =
    activeTab === "All"
      ? portfolioData
      : portfolioData.filter((item) => item.categories.includes(activeTab));

  // Scroll to active tab on mobile
  useEffect(() => {
    const activeButton = tabsRef.current?.querySelector(".active-tab");
    if (activeButton) {
      activeButton.scrollIntoView({ behavior: "smooth", inline: "center" });
    }
  }, [activeTab]);

  return (
    <section className="py-16 sm:py-20 bg-white">
      <div className="px-4 sm:px-6 lg:px-20 xl:px-24">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto">
          <p className="text-xs sm:text-sm font-semibold text-[#00A3E0] uppercase tracking-widest">
            Work with us
          </p>
          <h2 className="mt-3 text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900">
            Our Portfolio
          </h2>

          {/* Active dot logic */}
          <div className="flex justify-center gap-2 mt-4">
            {tabs.map((tab) => (
              <span
                key={tab}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  activeTab === tab ? "bg-[#00A3E0]" : "bg-gray-300"
                }`}
              ></span>
            ))}
          </div>
        </div>

        {/* Tabs */}
        <div className="mt-8 max-w-3xl mx-3 md:mx-auto">
          <div className="flex justify-start md:justify-center">
            <div
              ref={tabsRef}
              className="flex gap-2 sm:gap-4 md:gap-6 lg:gap-8 overflow-x-auto scrollbar-hide px-1 snap-x snap-mandatory"
            >
              {/* Mobile Tabs */}
              {mobileTabs.map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`sm:hidden whitespace-nowrap text-xs sm:text-sm font-semibold transition-all px-3 py-2 rounded-xl flex-shrink-0 snap-start
                    ${activeTab === tab ? "text-white bg-[#00A3E0] active-tab" : "text-gray-600 bg-gray-100 hover:text-gray-900"}`}
                >
                  {tab}
                </button>
              ))}

              {/* Desktop Tabs */}
              {tabs.map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`hidden sm:inline-block whitespace-nowrap text-sm sm:text-base font-semibold transition-all px-4 py-2
                    ${activeTab === tab ? "text-[#00A3E0] border-b-2 border-[#00A3E0]" : "text-gray-600 hover:text-gray-900"}`}
                >
                  {tab}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Grid */}
        <div className="mt-12 px-2 sm:px-4 md:mx-0 sm:mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredData.map((item) => (
            <Link
              to={`/portfolio/${item.id}`}
              key={item.id}
              className="group relative block overflow-hidden rounded-2xl shadow-xl sm:shadow-2xl"
            >
              {/* Image */}
              <img
                src={item.thumbnail}
                alt={item.title}
                className="w-full h-64 sm:h-72 md:h-80 lg:h-96 xl:h-[28rem] object-cover transition-transform duration-700 group-hover:scale-105"
              />

              {/* Dark gradient overlay on hover */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

              {/* Hover content */}
              <div className="absolute inset-0 flex items-end justify-center pb-12 sm:pb-16 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                <div className="flex flex-col items-center">
                  {/* Teal arrow circle */}
                  <div className="bg-[#00A3E0] rounded-full w-14 h-14 sm:w-16 sm:h-16 flex items-center justify-center shadow-xl sm:shadow-2xl mb-4 sm:mb-6">
                    <span className="text-white text-2xl sm:text-3xl">↑</span>
                  </div>

                  {/* Teal title box */}
                  <div className="bg-[#00A3E0] rounded-2xl sm:rounded-3xl px-6 sm:px-10 py-4 sm:py-8 shadow-xl sm:shadow-2xl text-center">
                    <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-white leading-tight">
                      {item.title}
                    </h3>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
