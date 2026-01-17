// // ui/PortfolioDetail.jsx
// import { useParams } from "react-router-dom";
// import portfolioData from "../data/portfolio_data";

// export default function PortfolioDetail() {
//   const { id } = useParams();
//   const item = portfolioData.find((p) => p.id === id);

//   if (!item) {
//     return (
//       <div className="py-32 text-center text-gray-600">
//         Project not found
//       </div>
//     );
//   }

//   const hasFullDetails = !!item.description;

//   return (
//     <section className="py-16 md:py-24 bg-white">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         {/* Hero Image */}
//         <img
//           src={item.heroImage || item.thumbnail}
//           alt={item.title}
//           className="w-full h-[70vh] md:h-[80vh] object-cover rounded-3xl shadow-2xl"
//         />

//         {hasFullDetails && (
//           <>
//             {/* Title & Description */}
//             <h1 className="mt-12 text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900">
//               {item.title}
//             </h1>
            // <p className="mt-8 max-w-4xl text-lg leading-relaxed text-gray-600">
            //   {item.description}
            // </p>

//             {/* Metadata */}
//             <div className="mt-12 flex flex-wrap gap-12 text-gray-700">
//               <div>
//                 <p className="text-sm uppercase tracking-wider text-gray-500">Client</p>
//                 <p className="mt-2 text-lg font-semibold">{item.client}</p>
//               </div>
//               <div>
//                 <p className="text-sm uppercase tracking-wider text-gray-500">Date</p>
//                 <p className="mt-2 text-lg font-semibold">{item.date}</p>
//               </div>
//               <div>
//                 <p className="text-sm uppercase tracking-wider text-gray-500">Categories</p>
//                 <div className="mt-3 flex flex-wrap gap-3">
//                   {item.tags.map((tag) => (
//                     <span
//                       key={tag}
//                       className="rounded-full bg-gray-100 px-5 py-2 text-sm font-medium"
//                     >
//                       {tag}
//                     </span>
//                   ))}
//                 </div>
//               </div>
//             </div>

//             {/* Team/Project Images */}
//             <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8">
//               {item.teamImages.map((img, index) => (
//                 <img
//                   key={index}
//                   src={img}
//                   alt="Project detail"
//                   className="h-72 w-full object-cover rounded-2xl shadow-xl"
//                 />
//               ))}
//             </div>

//             {/* Carousel Indicator Dot */}
//             <div className="mt-8 flex justify-center">
//               <div className="h-2 w-2 rounded-full bg-gray-400"></div>
//             </div>

//             {/* Project Requirements */}
//             <h2 className="mt-20 text-3xl font-bold text-gray-900">
//               Project requirement
//             </h2>
//             <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-12">
//               <ul className="space-y-5 text-lg text-gray-700 list-disc list-inside">
//                 {item.requirements
//                   .slice(0, Math.ceil(item.requirements.length / 2))
//                   .map((req, i) => (
//                     <li key={i}>{req}</li>
//                   ))}
//               </ul>
//               <ul className="space-y-5 text-lg text-gray-700 list-disc list-inside">
//                 {item.requirements
//                   .slice(Math.ceil(item.requirements.length / 2))
//                   .map((req, i) => (
//                     <li key={i}>{req}</li>
//                   ))}
//               </ul>
//             </div>

//             {/* Results */}
//             <h2 className="mt-20 text-3xl font-bold text-gray-900">Results</h2>
//             <p className="mt-8 max-w-4xl text-lg leading-relaxed text-gray-600">
//               {item.results}
//             </p>
//           </>
//         )}

//         {!hasFullDetails && (
//           <div className="mt-20 text-center">
//             <h1 className="text-4xl font-bold text-gray-900">{item.title}</h1>
//             <p className="mt-8 text-gray-600">Detailed information coming soon.</p>
//           </div>
//         )}
//       </div>
//     </section>
//   );
// }

// import { ArrowLeft } from "lucide-react"
// import { useParams, Link } from "react-router-dom"
// import { portfolioProjects } from "../data/portfolio_data"
// import { useState, useEffect } from "react"
// import { VscStarFull } from "react-icons/vsc";

// export default function PortfolioDetail() {
//   const { id } = useParams()
//   const project = portfolioProjects.find(p => p.id === Number(id))

//   const [currentIndex, setCurrentIndex] = useState(0)
//   const [itemsPerView, setItemsPerView] = useState(1)

//   // Responsive items per view
//   useEffect(() => {
//     const updateView = () => {
//       setItemsPerView(window.innerWidth >= 768 ? 3 : 1)
//     }

//     updateView()
//     window.addEventListener("resize", updateView)
//     return () => window.removeEventListener("resize", updateView)
//   }, [])

//   // Reset index when itemsPerView changes (prevents invalid state)
//   useEffect(() => {
//     const maxIndex = Math.ceil(project?.teamMembers.length / itemsPerView) - 1
//     if (currentIndex > maxIndex) {
//       setCurrentIndex(Math.max(0, maxIndex))
//     }
//   }, [itemsPerView, project?.teamMembers.length, currentIndex])

//   if (!project) {
//     return (
//       <div className="min-h-screen bg-white flex items-center justify-center">
//         <div className="text-center">
//           <h1 className="text-3xl font-bold mb-4">Project not found</h1>
//           <Link to="/" className="text-cyan-500 hover:text-cyan-600">
//             Back to portfolio
//           </Link>
//         </div>
//       </div>
//     )
//   }

//   const totalMembers = project.teamMembers.length
//   const totalSlides = Math.ceil(totalMembers / itemsPerView)
//   const showDots = totalMembers > itemsPerView

//   return (
//     <div className="min-h-screen bg-white">
//       <div className="border-b border-gray-200">
//         <div className="max-w-5xl mx-auto px-4 py-6 md:py-8">
//           <Link
//             to="/"
//             className="flex items-center gap-2 text-gray-600 hover:text-gray-900 mb-6 transition-colors"
//           >
//             <ArrowLeft size={20} />
//             <span>Back to portfolio</span>
//           </Link>
//         </div>
//       </div>

//       <div className="px-4 py-8 md:py-12 lg:px-28">
//         {/* Hero */}
//         <div className="mb-8 md:mb-12">
//           <img
//             src={project.image}
//             alt={project.title}
//             className="w-full md:h-96 lg:h-[34rem] object-cover rounded-xl shadow-lg"
//           />
//         </div>

//         {/* Title & Description */}
//         <div className="mb-8 md:mb-12">
//           <h1 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
//             {project.title}
//           </h1>
//           <p className="text-gray-600 text-base md:text-lg leading-relaxed">
//             {project.description}
//           </p>
//         </div>

//         {/* Project Info */}
//         <div className="flex flex-col md:flex-row md:justify-between gap-6 md:gap-8 mb-10 md:mb-12">
//           {[
//             { label: "Client:", value: project.client },
//             { label: "Date:", value: project.date },
//             { label: "AV System:", value: project.avSystem },
//             { label: "Category:", value: project.category },
//           ].map((item, i) => (
//             <div key={i} className="flex items-center gap-2">
//               <span className="font-semibold text-base text-gray-900">{item.label}</span>
//               <span className="text-gray-600">{item.value}</span>
//             </div>
//           ))}
//         </div>

//         {/* Team Members - Clean responsive slider */}
//         <div className="mb-12">
//           <div className="relative overflow-hidden rounded-xl">
//             <div
//               className="flex transition-transform duration-700 ease-out"
//               style={{ transform: `translateX(-${currentIndex * (100 / itemsPerView)}%)` }}
//             >
//               {project.teamMembers.map(member => (
//                 <div
//                   key={member.id}
//                   className="flex-shrink-0  w-full sm:w-1/2 md:w-1/3 sm:px-1 md:px-2"
//                 >
//                   <div className="bg-white rounded-lg overflow-hidden shadow-md transition-transform hover:scale-[1.02]">
//                     <img
//                       src={member.image || "/placeholder.svg"}
//                       alt="Team member"
//                       className="w-full h-48 md:h-56 lg:h-72 object-cover"
//                     />
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>

//           {/* Cyan Dots Navigation */}
//           {showDots && (
//             <div className="flex justify-center gap-3.5 mt-16">
//               {Array.from({ length: totalSlides }).map((_, idx) => (
//                 <button
//                   key={idx}
//                   onClick={() => setCurrentIndex(idx)}
//                   className={`
//                     w-3 h-3 rounded-full transition-all duration-300
//                     ${currentIndex === idx 
//                       ? "bg-gray-500 scale-125 shadow-md" 
//                       : "bg-gray-300 hover:bg-gray-400"
//                     }
//                   `}
//                   aria-label={`Go to slide ${idx + 1}`}
//                 />
//               ))}
//             </div>
//           )}
//         </div>

//         {/* Requirements */}
//         <div className="mb-12">
//           <h2 className="text-3xl font-bold mb-6 text-gray-900">Project Requirement</h2>
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//             {project.requirements.map((req, idx) => (
//               <div key={idx} className="flex gap-3 items-start">
//                 <VscStarFull className="w-4 h-4 text-cyan-500" />
//                 <p className="text-gray-700 leading-relaxed">{req}</p>
//               </div>
//             ))}
//           </div>
//         </div>

//         {/* Results */}
//         <div>
//           <h2 className="text-3xl font-bold mb-6 text-gray-900">Results</h2>
//           <p className="text-gray-700 leading-relaxed text-base md:text-lg">
//             {project.results}
//           </p>
//         </div>
//       </div>
//     </div>
//   )
// }


import { useParams } from "react-router-dom"
import { portfolioProjects } from "../data/portfolio_data"
import { useState, useEffect } from "react"
import { VscStarFull } from "react-icons/vsc"

export default function PortfolioDetail() {
  const { id } = useParams()
  const project = portfolioProjects.find(p => p.id === Number(id))

  const [currentIndex, setCurrentIndex] = useState(0)
  const [itemsPerView, setItemsPerView] = useState(1)

  // Responsive items per view
  useEffect(() => {
    const updateView = () => {
      setItemsPerView(window.innerWidth >= 768 ? 3 : 1)
    }

    updateView()
    window.addEventListener("resize", updateView)
    return () => window.removeEventListener("resize", updateView)
  }, [])

  // Reset index when itemsPerView changes (prevents invalid state)
  useEffect(() => {
    const maxIndex = Math.ceil(project?.teamMembers.length / itemsPerView) - 1
    if (currentIndex > maxIndex) {
      setCurrentIndex(Math.max(0, maxIndex))
    }
  }, [itemsPerView, project?.teamMembers.length, currentIndex])

  if (!project) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-3xl font-bold mb-4">Project not found</h1>
        </div>
      </div>
    )
  }

  const totalMembers = project.teamMembers.length
  const totalSlides = Math.ceil(totalMembers / itemsPerView)
  const showDots = totalMembers > itemsPerView

  return (
    <div className="min-h-screen bg-white">
      {/* No top border + back link section anymore */}

      <div className="px-4 py-8 md:py-12 lg:px-24 lg:ml-4">
        {/* Hero */}
        <div className="mb-8 md:mb-12">
          <img
            src={project.image}
            alt={project.title}
            className="w-full md:h-96 lg:h-[34rem] object-cover rounded-xl shadow-lg"
          />
        </div>

        {/* Title & Description */}
        <div className="mb-8 md:mb-12">
          <h1 className="text-2xl md:text-3xl  font-bold mb-4 text-gray-900">
            {project.title}
          </h1>
          {/* <p className="text-gray-600 text-base md:text-lg leading-relaxed">
            {project.description}
          </p> */}
          <div className="max-w-4xl space-y-6">
  {project.description.map((para, index) => (
    <p
      key={index}
      className="text-gray-500 text-base md:text-lg leading-8"
    >
      {para}
    </p>
  ))}
</div>

        </div>

        {/* Project Info */}
        <div className="w-full h-px bg-gray-500/20 my-8"></div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-y-6 mb-10 md:mb-12">
  {[
    { label: "Client:", value: project.client },
    { label: "Date:", value: project.date },
    { label: "AV-System:", value: project.avSystem },
    { label: "Category:", value: project.category },
  ].map((item, i) => (
    <div key={i} className="flex gap-2 md:text-lg items-center">
      <span className=" font-semibold text-gray-900">
        {item.label}
      </span>
      <span className="text-gray-600">
        {item.value}
      </span>
    </div>
  ))}
</div>


        {/* Team Members - Clean responsive slider */}
        <div className="mb-12">
          <div className="relative overflow-hidden rounded-xl">
            <div
              className="flex transition-transform duration-700 ease-out"
              style={{ transform: `translateX(-${currentIndex * (100 / itemsPerView)}%)` }}
            >
              {project.teamMembers.map(member => (
                <div
                  key={member.id}
                  className="flex-shrink-0 w-full sm:w-1/2 md:w-1/3 sm:px-1 md:px-2"
                >
                  <div className="bg-white rounded-lg overflow-hidden shadow-md transition-transform hover:scale-[1.02]">
                    <img
                      src={member.image || "/placeholder.svg"}
                      alt="Team member"
                      className="w-full h-48 md:h-56 lg:h-72 object-cover"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Cyan Dots Navigation */}
          {showDots && (
            <div className="flex justify-center gap-3.5 mt-16">
              {Array.from({ length: totalSlides }).map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentIndex(idx)}
                  className={`
                    w-3 h-3 rounded-full transition-all duration-300
                    ${currentIndex === idx 
                      ? "bg-gray-500 scale-125 shadow-md" 
                      : "bg-gray-300 hover:bg-gray-400"
                    }
                  `}
                  aria-label={`Go to slide ${idx + 1}`}
                />
              ))}
            </div>
          )}
        </div>

        {/* Requirements */}
        <div className="mb-12">
          <h2 className="text-2xl md:text-3xl md:ml-3 font-semibold mb-6 text-gray-900">Project Requirement</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {project.requirements.map((req, idx) => (
              <div key={idx} className="flex gap-3 items-start">
                <VscStarFull className="w-4 h-4 text-cyan-500" />
                <p className="text-gray-500 leading-relaxed">{req}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Results */}
        <div className="mb-12">
          <h2 className="text-2xl md:text-3xl font-bold mb-6 text-gray-900">Results</h2>
          
          <div className="space-y-4 md:space-y-6 text-gray-700 leading-relaxed text-base md:text-lg">
            {project.results.map((paragraph, index) => (
              <p key={index}>
                {paragraph}
              </p>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}