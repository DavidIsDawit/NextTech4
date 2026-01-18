// import { ArrowUpRight } from "lucide-react"
// import { Link } from "react-router-dom"
// import PropTypes from "prop-types"

// export default function PortfolioCard({ item }) {
//   return (
//     <Link to={`/portfolio/${item.id}`} className="group relative h-80 rounded-2xl overflow-hidden bg-gray-200 block">
//       {/* Image */}
      // <img
      //   src={item.image || "/placeholder.svg"}
      //   alt={item.title}
      //   className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
      // />

//       {/* Overlay on Hover - Slides up from bottom */}
//       <div className="absolute inset-0 bg-gradient-to-t from-transparent to-transparent group-hover:from-cyan-500 group-hover:to-transparent transition-all duration-500">
//         {/* Content appears on bottom half */}
//         <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-cyan-500 to-cyan-500/80 transform translate-y-full group-hover:translate-y-0 transition-transform duration-500 flex flex-col items-center justify-center p-6">
//           {/* Arrow Icon */}
//           <div className="mb-4 p-3 bg-white/20 rounded-full">
//             <ArrowUpRight size={24} className="text-white" />
//           </div>

//           {/* Category Label */}
//           <p className="text-white/80 text-sm font-medium mb-2">{item.category}</p>

//           {/* Title */}
//           <h3 className="text-white font-bold text-lg text-center leading-tight">{item.title}</h3>
//         </div>
//       </div>
//     </Link>
//   )
// }

// PortfolioCard.propTypes = {
//   item: PropTypes.shape({
//     image: PropTypes.string.isRequired,
//     id: PropTypes.number.isRequired,
//     category: PropTypes.string.isRequired,
//     title: PropTypes.string.isRequired,
//   }).isRequired,
// }
import { ArrowUpRight } from "lucide-react"
import { Link } from "react-router-dom"
import PropTypes from "prop-types"

export default function PortfolioCard({ item }) {
  return (
    <Link
      to={`/portfolio/${item.id}`}
      className="group relative block overflow-hidden rounded-xl shadow-2xl"
    >
      {/* Background Image */}
      <img
        src={item.image || "/placeholder.svg"}
        alt={item.title}
        className="h-[25rem] w-full object-cover transition-transform duration-700 group-hover:scale-105"
      />

      {/* Floating Action Button (Center) - appears on hover */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#00acc1] text-white shadow-lg
                        transform scale-0 transition-transform duration-300 group-hover:scale-110 pointer-events-auto">
          <ArrowUpRight size={24} strokeWidth={2.5} />
        </div>
      </div>

      {/* Bottom Info Panel - slides up on hover */}
      <div className="absolute bottom-0 left-0 right-0 rounded-xl bg-[#00acc1] p-8 text-white
                      transform translate-y-full transition-transform duration-500 group-hover:translate-y-0">
        <p className="mb-1 text-lg font-medium opacity-90 uppercase tracking-wider">
          {item.category}
        </p>
        <h3 className="text-2xl font-bold leading-tight">
          {item.title}
        </h3>
      </div>

      {/* Subtle Overlay on Hover */}
      <div className="absolute inset-0 bg-black/10 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
    </Link>
  )
}

PortfolioCard.propTypes = {
  item: PropTypes.shape({
    image: PropTypes.string.isRequired,
    id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
    category: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
  }).isRequired,
}
