import { ArrowLeft, Calendar, MapPin, Tag } from "lucide-react"
import { useParams, Link } from "react-router-dom"
import { portfolioProjects } from "../data/portfolio_data"

export default function PortfolioDetail() {
  const { id } = useParams()
  const project = portfolioProjects.find((p) => p.id === Number.parseInt(id))

  if (!project) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-3xl font-bold mb-4">Project not found</h1>
          <Link to="/" className="text-cyan-500 hover:text-cyan-600">
            Back to portfolio
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-white">
      <div className="border-b border-gray-200">
        <div className="max-w-5xl mx-auto px-4 py-6 md:py-8">
          <Link to="/" className="flex items-center gap-2 text-gray-600 hover:text-gray-900 mb-6">
            <ArrowLeft size={20} />
            <span>Back to portfolio</span>
          </Link>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-4 py-8 md:py-12">
        {/* Hero section with main image */}
        <div className="mb-8 md:mb-12">
          <img
            src={project.image || "/placeholder.svg"}
            alt={project.title}
            className="w-full h-64 md:h-96 object-cover rounded-lg"
          />
        </div>

        {/* Project title and description */}
        <div className="mb-8 md:mb-12">
          <h1 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">{project.title}</h1>
          <p className="text-gray-600 text-base md:text-lg leading-relaxed">{project.description}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8 md:mb-12">
          <div className="flex items-start gap-3">
            <Calendar size={20} className="text-cyan-500 mt-1 flex-shrink-0" />
            <div>
              <p className="text-sm text-gray-500">Date</p>
              <p className="font-semibold text-gray-900">{project.date}</p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <MapPin size={20} className="text-cyan-500 mt-1 flex-shrink-0" />
            <div>
              <p className="text-sm text-gray-500">Location</p>
              <p className="font-semibold text-gray-900">{project.location}</p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <Tag size={20} className="text-cyan-500 mt-1 flex-shrink-0" />
            <div>
              <p className="text-sm text-gray-500">Category</p>
              <p className="font-semibold text-gray-900">{project.category}</p>
            </div>
          </div>
        </div>

        <div className="mb-8 md:mb-12">
          <h2 className="text-2xl font-bold mb-6 text-gray-900">Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {project.teamMembers.map((member) => (
              <div key={member.id} className="text-center">
                <img
                  src={member.image || "/placeholder.svg"}
                  alt={member.name}
                  className="w-full h-48 md:h-56 object-cover rounded-lg mb-4"
                />
                <h3 className="font-semibold text-gray-900 text-lg">{member.name}</h3>
                <p className="text-gray-600 text-sm">{member.role}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="mb-8 md:mb-12">
          <h2 className="text-2xl font-bold mb-6 text-gray-900">Project requirement</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {project.requirements.map((req, idx) => (
              <div key={idx} className="flex gap-3">
                <div className="w-2 h-2 bg-cyan-500 rounded-full mt-2 flex-shrink-0"></div>
                <p className="text-gray-700">{req}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="mb-8 md:mb-12">
          <h2 className="text-2xl font-bold mb-6 text-gray-900">Results</h2>
          <p className="text-gray-700 leading-relaxed text-base md:text-lg">{project.results}</p>
        </div>
      </div>
    </div>
  )
}
