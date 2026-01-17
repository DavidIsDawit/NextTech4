
// // ui/Portfolio.jsx
// import { useState, useRef, useEffect } from "react";
// import portfolioData from "../data/portfolio_data";
// import { Link } from "react-router-dom";

// const tabs = ["All", "AI Development", "Web Development", "Marketing", "Development", ];

// export default function Portfolio() {
//   const [activeTab, setActiveTab] = useState("All");
//   const mobileTabs = tabs.slice(0, 3); // Mobile shows first 4 tabs
//   const tabsRef = useRef(null);

//   const filteredData =
//     activeTab === "All"
//       ? portfolioData
//       : portfolioData.filter((item) => item.categories.includes(activeTab));

//   // Scroll to active tab on mobile
//   useEffect(() => {
//     const activeButton = tabsRef.current?.querySelector(".active-tab");
//     if (activeButton) {
//       activeButton.scrollIntoView({ behavior: "smooth", inline: "center" });
//     }
//   }, [activeTab]);

//   return (
//     <section className="py-16 sm:py-20 bg-white">
//       <div className="px-4 sm:px-6 lg:px-20 xl:px-24">
//         {/* Header */}
//         <div className="text-center max-w-3xl mx-auto">
//           <p className="text-xs sm:text-sm font-semibold text-[#00A3E0] uppercase tracking-widest">
//             Work with us
//           </p>
//           <h2 className="mt-3 text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900">
//             Our Portfolio
//           </h2>

//           {/* Active dot logic */}
//           <div className="flex justify-center gap-2 mt-4">
//             {tabs.map((tab) => (
//               <span
//                 key={tab}
//                 className={`w-2 h-2 rounded-full transition-all duration-300 ${
//                   activeTab === tab ? "bg-[#00A3E0]" : "bg-gray-300"
//                 }`}
//               ></span>
//             ))}
//           </div>
//         </div>

//         {/* Tabs */}
//         <div className="mt-8 max-w-3xl mx-3 md:mx-auto">
//           <div className="flex justify-start md:justify-center">
//             <div
//               ref={tabsRef}
//               className="flex gap-2 sm:gap-4 md:gap-6 lg:gap-8 overflow-x-auto px-1 touch-pan-x scrollbar-hide"
//               style={{ scrollSnapType: "x mandatory", WebkitOverflowScrolling: "touch" }}
//             >
//               {/* Mobile Tabs */}
//               {mobileTabs.map((tab) => (
//                 <button
//                   key={tab}
//                   onClick={() => setActiveTab(tab)}
//                   className={`sm:hidden whitespace-nowrap text-xs sm:text-sm font-semibold transition-all px-3 py-2 rounded-xl flex-shrink-0
//                     ${activeTab === tab ? "text-white bg-[#00A3E0] active-tab" : "text-gray-600 bg-gray-100 hover:text-gray-900"}`}
//                   style={{ scrollSnapAlign: "center" }}
//                 >
//                   {tab}
//                 </button>
//               ))}

//               {/* Desktop Tabs */}
//               {tabs.map((tab) => (
//                 <button
//                   key={tab}
//                   onClick={() => setActiveTab(tab)}
//                   className={`hidden sm:inline-block whitespace-nowrap text-sm sm:text-base font-semibold transition-all px-4 py-2
//                     ${activeTab === tab ? "text-[#00A3E0] border-b-2 border-[#00A3E0]" : "text-gray-600 hover:text-gray-900"}`}
//                 >
//                   {tab}
//                 </button>
//               ))}
//             </div>
//           </div>
//         </div>

//        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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
// import { useState, useEffect, useRef } from "react";
// import portfolioData from "../data/portfolio_data";
// import { Link } from "react-router-dom";

// const tabs = [
//   "All",
//   "AI Development",
//   "Web Development",
//   "Marketing",
//   "Development",
//   "UI/UX",
//   "Branding",
// ];

// export default function Portfolio() {
//   const [activeIndex, setActiveIndex] = useState(0);
//   const [maxVisible, setMaxVisible] = useState(5);
//   const [visibleWidth, setVisibleWidth] = useState(null);
//   const tabRefs = useRef([]);

//   /* ---------------------------------
//      Responsive maxVisible & dynamic container width
//   ---------------------------------- */
//   useEffect(() => {
//     const handleResize = () => {
//       const w = window.innerWidth;

//       // Update maxVisible based on breakpoints
//       let newMaxVisible = 5;
//       if (w < 640) newMaxVisible = 3;
//       else if (w < 768) newMaxVisible = 4;
//       setMaxVisible(newMaxVisible);

//       // Dynamic width calculation (average tab width)
//       if (tabRefs.current.length === tabs.length && tabRefs.current[0]) {
//         const widths = tabRefs.current.map((el) => el.getBoundingClientRect().width);
//         if (widths.some((width) => width === 0)) return; // Not yet rendered

//         const avgWidth = widths.reduce((sum, width) => sum + width, 0) / tabs.length;
//         const gap = w < 640 ? 8 : 16; // Matches gap-2 (8px) and sm:gap-4 (16px)
//         const totalWidth = avgWidth * newMaxVisible + gap * (newMaxVisible - 1);

//         // Slight reduction to show a peek of the next tab (hints that it's scrollable)
//         const adjustedWidth = Math.ceil(totalWidth - 60);

//         setVisibleWidth(Math.max(adjustedWidth, 300)); // Minimum to avoid collapse
//       }
//     };

//     handleResize(); // Initial calculation
//     window.addEventListener("resize", handleResize);
//     return () => window.removeEventListener("resize", handleResize);
//   }, []);

//   /* ---------------------------------
//      Auto-scroll active tab into view (centered)
//   ---------------------------------- */
//   useEffect(() => {
//     const activeTab = tabRefs.current[activeIndex];
//     if (activeTab) {
//       activeTab.scrollIntoView({
//         behavior: "smooth",
//         inline: "center",
//       });
//     }
//   }, [activeIndex]);

//   /* ---------------------------------
//      Portfolio filtering
//   ---------------------------------- */
//   const activeTab = tabs[activeIndex];
//   const filteredData =
//     activeTab === "All"
//       ? portfolioData
//       : portfolioData.filter((item) =>
//           item.categories.includes(activeTab)
//         );

//   return (
//     <section className="py-16 bg-white">
//       <div className="px-4 sm:px-6 lg:px-20">
//         {/* Header */}
//         <div className="text-center max-w-3xl mx-auto">
//           <p className="text-xs font-semibold text-[#00A3E0] uppercase tracking-widest">
//             Work with us
//           </p>
//           <h2 className="mt-3 text-3xl md:text-4xl font-bold text-gray-900">
//             Our Portfolio
//           </h2>
//           {/* Dots (synced with active tab) */}
//           <div className="flex justify-center gap-2 mt-4">
//             {tabs.map((_, i) => (
//               <span
//                 key={i}
//                 className={`w-2 h-2 rounded-full transition ${
//                   i === activeIndex ? "bg-[#00A3E0]" : "bg-gray-300"
//                 }`}
//               />
//             ))}
//           </div>
//         </div>

//         {/* Horizontal Scrollable Tabs */}
//         <div className="mt-8 flex justify-center">
//           <div
//             className="overflow-x-auto w-full scroll-smooth scrollbar-width-none -ms-overflow-style-none [&::-webkit-scrollbar]:hidden"
//             style={{ maxWidth: visibleWidth ? `${visibleWidth}px` : "100%" }}
//           >
//             <div className="flex gap-2 sm:gap-4">
//               {tabs.map((tab, index) => (
//                 <button
//                   key={tab}
//                   onClick={() => setActiveIndex(index)}
//                   ref={(el) => (tabRefs.current[index] = el)}
//                   className={`flex-shrink-0 whitespace-nowrap px-4 py-2 rounded-xl text-sm sm:text-base font-semibold transition-all ${
//                     index === activeIndex
//                       ? "bg-[#00A3E0] text-white"
//                       : "bg-gray-100 text-gray-600 hover:text-gray-900"
//                   }`}
//                 >
//                   {tab}
//                 </button>
//               ))}
//             </div>
//           </div>
//         </div>

//         {/* Grid */}
//         <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//           {filteredData.map((item) => (
//             <Link
//               key={item.id}
//               to={`/portfolio/${item.id}`}
//               className="group relative block overflow-hidden rounded-xl shadow-2xl"
//             >
//               <img
//                 src={item.thumbnail}
//                 alt={item.title}
//                 className="h-[25rem] w-full object-cover transition-transform duration-700 group-hover:scale-105"
//               />
//               <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
//               <div className="absolute inset-0 flex items-end justify-center pb-16 opacity-0 group-hover:opacity-100 transition-opacity">
//                 <div className="text-center">
//                   <div className="bg-[#00A3E0] rounded-full w-14 h-14 flex items-center justify-center mb-4">
//                     <span className="text-white text-2xl">↑</span>
//                   </div>
//                   <div className="bg-[#00A3E0] rounded-2xl px-6 py-4">
//                     <h3 className="text-lg font-bold text-white">
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
  const [currentPage, setCurrentPage] = useState(1);
  const tabsRef = useRef(null);

  const filteredData =
    activeTab === "All"
      ? portfolioData
      : portfolioData.filter((item) => item.categories.includes(activeTab));

  const itemsPerPage = 6; // Matches the screenshot's visible items in grid (2 rows on lg)
  const totalPages = Math.ceil(filteredData.length / itemsPerPage);
  const indexOfLast = currentPage * itemsPerPage;
  const indexOfFirst = indexOfLast - itemsPerPage;
  const currentItems = filteredData.slice(indexOfFirst, indexOfLast);

  // Scroll to active tab
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
              className="flex gap-2 sm:gap-4 md:gap-6 lg:gap-8 overflow-x-auto px-1 touch-pan-x scrollbar-hide"
              style={{ scrollSnapType: "x mandatory", WebkitOverflowScrolling: "touch" }}
            >
              {/* Mobile Tabs */}
              {tabs.map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`sm:hidden basis-1/3 whitespace-nowrap text-xs sm:text-sm font-semibold transition-all px-3 py-2 rounded-xl flex-shrink-0
                    ${activeTab === tab ? "text-white bg-[#00A3E0] active-tab" : "text-gray-600 bg-gray-100 hover:text-gray-900"}`}
                  style={{ scrollSnapAlign: "center" }}
                >
                  {tab}
                </button>
              ))}
              {/* Desktop Tabs */}
              {tabs.map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`hidden sm:inline-block flex-shrink-0 sm:w-1/3 md:w-1/4 lg:w-1/5 whitespace-nowrap text-sm sm:text-base font-semibold transition-all px-4 py-2
                    ${activeTab === tab ? "text-[#00A3E0] border-b-2 border-[#00A3E0]" : "text-gray-600 hover:text-gray-900"}`}
                >
                  {tab}
                </button>
              ))}
            </div>
          </div>
        </div>
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {currentItems.map((item) => (
            <Link
              to={`/portfolio/${item.id}`}
              key={item.id}
              className="group relative block overflow-hidden rounded-xl shadow-2xl"
            >
              {/* Image */}
              <img
                src={item.thumbnail}
                alt={item.title}
                className="h-[25rem] w-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              {/* Dark gradient overlay on hover */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
              {/* Hover content - exactly matching the screenshot */}
              <div className="absolute inset-0 flex items-end justify-center pb-16 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                <div className="flex flex-col items-center">
                  {/* Teal arrow circle */}
                  <div className="bg-[#00A3E0] rounded-full w-16 h-16 flex items-center justify-center shadow-2xl mb-6">
                    <span className="text-white text-3xl">↑</span>
                  </div>
                  {/* Teal title box */}
                  <div className="bg-[#00A3E0] rounded-3xl px-10 py-8 shadow-2xl text-center">
                    <h3 className="text-2xl font-bold text-white leading-tight">
                      {item.title}
                    </h3>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
        {/* Pagination */}
        {totalPages > 1 && (
          <div className="flex justify-center items-center gap-4 mt-8">
            <button
              onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
              className="text-[#00A3E0] font-bold text-lg"
              disabled={currentPage === 1}
            >
              ←
            </button>
            {Array.from({ length: totalPages }, (_, i) => (
              <button
                key={i}
                onClick={() => setCurrentPage(i + 1)}
                className={`px-3 py-1 rounded ${
                  currentPage === i + 1 ? "bg-[#00A3E0] text-white" : "text-gray-600 hover:text-gray-900"
                }`}
              >
                {i + 1}
              </button>
            ))}
            <button
              onClick={() => setCurrentPage((p) => Math.min(totalPages, p + 1))}
              className="text-[#00A3E0] font-bold text-lg"
              disabled={currentPage === totalPages}
            >
              →
            </button>
          </div>
        )}
      </div>
    </section>
  );
}