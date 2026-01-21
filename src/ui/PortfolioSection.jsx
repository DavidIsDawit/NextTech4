// import { useState } from "react"
// import PortfolioCard from "./PortfolioCard"
// import { portfolioProjects } from "../data/portfolio_data"

// const categories = ["All", "AI Development", "Web Development", "Marketing", "Interior Design", "Cloud Computing"]

// export default function PortfolioSection() {
//   const [selectedCategory, setSelectedCategory] = useState("All")

//   const filteredItems =
//     selectedCategory === "All"
//       ? portfolioProjects
//       : portfolioProjects.filter((item) => item.category === selectedCategory)

//   return (
//     <div className="w-full max-w-7xl mx-auto px-4 py-16">
//       {/* Header */}
//       <div className="text-center mb-12">
//         <p className="text-cyan-500 font-medium text-sm mb-2">Work with us</p>
//         <h2 className="text-4xl font-bold text-gray-900 mb-8">Our portfolio</h2>
//       </div>

//       {/* Category Tabs - Scrollable */}
//       <div className="mb-12 flex justify-center">
//         <div className="flex overflow-x-auto gap-6 pb-2 scrollbar-hide">
//           {categories.map((category) => (
//             <button
//               key={category}
//               onClick={() => setSelectedCategory(category)}
//               className={`px-6 py-2 font-medium text-sm whitespace-nowrap transition-colors ${
//                 selectedCategory === category
//                   ? "text-cyan-500 border-b-2 border-cyan-500"
//                   : "text-gray-700 hover:text-gray-900"
//               }`}
//             >
//               {category}
//             </button>
//           ))}
//         </div>
//       </div>

//       {/* Portfolio Grid */}
//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
//         {filteredItems.map((item) => (
//           <PortfolioCard key={item.id} item={item} />
//         ))}
//       </div>

//       {/* Pagination */}
//       <div className="flex justify-center items-center gap-2">
//         <button className="text-gray-400 hover:text-gray-600">«</button>
//         <button className="text-gray-400 hover:text-gray-600">‹</button>
//         {[1, 2, 3, 4, 5].map((page) => (
//           <button
//             key={page}
//             className={`w-2 h-2 rounded-full transition-colors ${page === 3 ? "bg-cyan-500" : "bg-gray-300"}`}
//             aria-label={`Page ${page}`}
//           />
//         ))}
//         <button className="text-gray-400 hover:text-gray-600">›</button>
//         <button className="text-gray-400 hover:text-gray-600">»</button>
//       </div>
//     </div>
//   )
// }

// import { useState } from "react"
// import PortfolioCard from "./PortfolioCard"
// import Pagination from "./Pagination" // Capitalized
// import { portfolioProjects } from "../data/portfolio_data"

// const categories = ["All", "AI Development", "Web Development", "Marketing", "Interior Design", "Cloud Computing"]

// export default function PortfolioSection() {
//   const [selectedCategory, setSelectedCategory] = useState("All")

//   const filteredItems =
//     selectedCategory === "All"
//       ? portfolioProjects
//       : portfolioProjects.filter((item) => item.category === selectedCategory)

//   return (
//     <div className="  px-4 py-16 md:px-24">
//       {/* Header */}
//       <div className="text-center mb-12">
//         <p className="text-cyan-500 font-medium text-lg mb-2">Work with us</p>
//         <h2 className="text-4xl font-bold text-gray-900 mb-8">Our portfolio</h2>

//         {/* Active dot logic */}
//           <div className="flex justify-center gap-2 mt-4">
//             {categories.map((category) => (
//               <span
//                 key={category}
//                 className={`w-2 h-2 rounded-full transition-all duration-300 ${
//                   selectedCategory === category ? "bg-gray-500" : "bg-gray-300"
//                 }`}
//               ></span>
//             ))}
//           </div>
//       </div>

//       {/* Category Tabs - Scrollable */}
//       <div className="mb-12 flex justify-center">
//         <div className="w-full flex overflow-x-auto md:mx-36 gap-4 pb-2 scrollbar-hide min-w-0">
//           {categories.map((category) => (
//             <button
//               key={category}
//               onClick={() => setSelectedCategory(category)}
//               className={`flex-none basis-[calc((100%-2*0.1rem)/3)] md:basis-[calc((100%-3*1rem)/4)] lg:basis-[calc((100%-4*1rem)/5)] w-10 px-6 py-2 font-medium text-sm whitespace-nowrap overflow-hidden text-ellipsis rounded-full transition-colors ${
//                 selectedCategory === category
//                    ? "text-cyan-500 bg-transparent"
//                 : "bg-gray-200 text-gray-700 rounded-full hover:bg-gray-300"
//               }`}
//             >
//               {category}
//             </button>
//           ))}
//         </div>
//       </div>

//       {/* Portfolio Grid */}
//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
//         {filteredItems.map((item) => (
//           <PortfolioCard key={item.id} item={item} />
//         ))}
//       </div>

//       {/* Pagination */}
//       <div className="flex justify-center items-center gap-2">
//         <Pagination /> {/* Capitalized */}
//       </div>
//     </div>
//   )
// }



// import { useState } from "react"
// import PortfolioCard from "./PortfolioCard"
// import Pagination from "./Pagination" 
// import { portfolioProjects } from "../data/portfolio_data"

// const categories = ["All", "AI Development", "Web Development", "Marketing", "Interior Design", "Cloud Computing"]

// export default function PortfolioSection() {
//   const [selectedCategory, setSelectedCategory] = useState("All")

//   const filteredItems =
//     selectedCategory === "All"
//       ? portfolioProjects
//       : portfolioProjects.filter((item) => item.category === selectedCategory)

//   // Logic to calculate which "dot" group the selected category belongs to
//   const categoryIndex = categories.indexOf(selectedCategory);
//   const activeDotIndex = Math.floor(categoryIndex / 3);
  
//   // Calculate total dots needed (Length of categories / 3)
//   const totalDots = Math.ceil(categories.length / 3);

//   return (
//     <div className=" px-4 py-16 md:px-24">
//       {/* Header */}
//       <div className="text-center mb-8">
//         <p className="text-cyan-500 font-medium text-lg mb-5">Work with us</p>
//         <h2 className="text-4xl font-bold text-gray-900 mb-24">Our portfolio</h2>

//         {/* Active dot logic - Divided by 3 */}
//         <div className="flex justify-center gap-2 ">
//           {Array.from({ length: totalDots }).map((_, index) => (
//             <span
//               key={index}
//               className={`w-3 h-3 rounded-full transition-all duration-300 ${
//                 activeDotIndex === index ? "bg-gray-500" : "bg-gray-300"
//               }`}
//             ></span>
//           ))}
//         </div>
//       </div>
      

//       {/* Category Tabs - Scrollable */}
//       <div className="mb-12 flex justify-center">
//         <div className="w-full flex overflow-x-auto md:mx-36 gap-4 pb-2 scrollbar-hide min-w-0">
//           {categories.map((category) => (
//             <button
//               key={category}
//               onClick={() => setSelectedCategory(category)}
//               className={`flex-none basis-[calc((100%-2*0.1rem)/3)] md:basis-[calc((100%-3*1rem)/4)] lg:basis-[calc((100%-4*1rem)/5)] w-10 px-6 py-2  text-base font-bold whitespace-nowrap overflow-hidden text-ellipsis rounded-full transition-colors ${
//                 selectedCategory === category
//                    ? "text-cyan-500 bg-transparent"
//                 : "bg-gray-200 text-gray-700 rounded-full hover:bg-gray-300"
//               }`}
//             >
//               {category}
//             </button>
//           ))}
//         </div>
//       </div>

//       {/* Portfolio Grid */}
//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
//         {filteredItems.map((item) => (
//           <PortfolioCard key={item.id} item={item} />
//         ))}
//       </div>

//       {/* Pagination */}
//       <div className="flex justify-center items-center gap-2">
//         <Pagination />
//       </div>
//     </div>
//   )
// }

// 11111111111111111111111111111111111111111111111111111111111111111
import { useState } from "react"
import PortfolioCard from "./PortfolioCard"
import Pagination from "./Pagination" 
import { portfolioProjects } from "../data/portfolio_data"

const categories = [
  "All",
  "AI Development",
  "Web Development",
  "Marketing",
  "Interior Design",
  "Cloud Computing"
]

export default function PortfolioSection() {
  const [selectedCategory, setSelectedCategory] = useState("All")
  const [currentPage, setCurrentPage] = useState(1)

  const itemsPerPage = 6

  // -------------------------------
  // FILTER FIRST (MUST COME FIRST)
  // -------------------------------
  const filteredItems =
    selectedCategory === "All"
      ? portfolioProjects
      : portfolioProjects.filter(
          (item) => item.category === selectedCategory
        )

  // -------------------------------
  // PAGINATION CALCULATIONS
  // -------------------------------
  const totalPages = Math.ceil(filteredItems.length / itemsPerPage)

  const paginatedItems = filteredItems.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  )

  const handlePageChange = (page) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page)
    }
  }

  // -------------------------------
  // CATEGORY SORTING (UNCHANGED)
  // -------------------------------
  const sortedCategories = [
    selectedCategory,
    ...categories.filter(cat => cat !== selectedCategory)
  ]

  // -------------------------------
  // DOT LOGIC (UNCHANGED)
  // -------------------------------
  const categoryIndex = categories.indexOf(selectedCategory)
  const activeDotIndex = Math.floor(categoryIndex / 3)
  const totalDots = Math.ceil(categories.length / 3)

  return (
    <div className="px-4 py-16 md:px-24">
      {/* Header */}
      <div className="text-center mb-8">
        <p className="text-cyan-500 font-medium text-lg mb-5">
          Work with us
        </p>
        <h2 className="text-4xl font-bold text-gray-900 mb-24">
          Our portfolio
        </h2>

        {/* Active dot logic */}
        <div className="flex justify-center gap-2">
          {Array.from({ length: totalDots }).map((_, index) => (
            <span
              key={index}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                activeDotIndex === index
                  ? "bg-gray-500"
                  : "bg-gray-300"
              }`}
            />
          ))}
        </div>
      </div>

      {/* Category Tabs */}
      <div className="mb-6 md:mb-24 flex justify-center">
        <div className="w-full flex overflow-x-auto md:mx-36 gap-4 pb-2 scrollbar-hide min-w-0">
          {sortedCategories.map((category) => (
            <button
              key={category}
              onClick={() => {
                setSelectedCategory(category)
                setCurrentPage(1) // reset page on category change
              }}
              className={`flex-none basis-[calc((100%-2*0.1rem)/3)]
                md:basis-[calc((100%-3*1rem)/4)]
                lg:basis-[calc((100%-4*1rem)/5)]
                w-10 px-6 py-2 text-base font-bold whitespace-nowrap
                overflow-hidden text-ellipsis rounded-full
                transition-all duration-500 ${
                  selectedCategory === category
                    ? "text-cyan-500 bg-transparent"
                    : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                }`}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      {/* Portfolio Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-14 md:mb-24">
        {paginatedItems.map((item) => (
          <PortfolioCard key={item.id} item={item} />
        ))}
      </div>

      {/* Pagination */}
      <div className="flex justify-center items-center gap-2">
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={handlePageChange}
        />
      </div>
    </div>
  )
}
