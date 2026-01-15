// ui/PortfolioDetail.jsx
import { useParams } from "react-router-dom";
import portfolioData from "../data/portfolio_data";

export default function PortfolioDetail() {
  const { id } = useParams();
  const item = portfolioData.find((p) => p.id === id);

  if (!item) {
    return (
      <div className="py-32 text-center text-gray-600">
        Project not found
      </div>
    );
  }

  const hasFullDetails = !!item.description;

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Image */}
        <img
          src={item.heroImage || item.thumbnail}
          alt={item.title}
          className="w-full h-[70vh] md:h-[80vh] object-cover rounded-3xl shadow-2xl"
        />

        {hasFullDetails && (
          <>
            {/* Title & Description */}
            <h1 className="mt-12 text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900">
              {item.title}
            </h1>
            <p className="mt-8 max-w-4xl text-lg leading-relaxed text-gray-600">
              {item.description}
            </p>

            {/* Metadata */}
            <div className="mt-12 flex flex-wrap gap-12 text-gray-700">
              <div>
                <p className="text-sm uppercase tracking-wider text-gray-500">Client</p>
                <p className="mt-2 text-lg font-semibold">{item.client}</p>
              </div>
              <div>
                <p className="text-sm uppercase tracking-wider text-gray-500">Date</p>
                <p className="mt-2 text-lg font-semibold">{item.date}</p>
              </div>
              <div>
                <p className="text-sm uppercase tracking-wider text-gray-500">Categories</p>
                <div className="mt-3 flex flex-wrap gap-3">
                  {item.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full bg-gray-100 px-5 py-2 text-sm font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Team/Project Images */}
            <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8">
              {item.teamImages.map((img, index) => (
                <img
                  key={index}
                  src={img}
                  alt="Project detail"
                  className="h-72 w-full object-cover rounded-2xl shadow-xl"
                />
              ))}
            </div>

            {/* Carousel Indicator Dot */}
            <div className="mt-8 flex justify-center">
              <div className="h-2 w-2 rounded-full bg-gray-400"></div>
            </div>

            {/* Project Requirements */}
            <h2 className="mt-20 text-3xl font-bold text-gray-900">
              Project requirement
            </h2>
            <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-12">
              <ul className="space-y-5 text-lg text-gray-700 list-disc list-inside">
                {item.requirements
                  .slice(0, Math.ceil(item.requirements.length / 2))
                  .map((req, i) => (
                    <li key={i}>{req}</li>
                  ))}
              </ul>
              <ul className="space-y-5 text-lg text-gray-700 list-disc list-inside">
                {item.requirements
                  .slice(Math.ceil(item.requirements.length / 2))
                  .map((req, i) => (
                    <li key={i}>{req}</li>
                  ))}
              </ul>
            </div>

            {/* Results */}
            <h2 className="mt-20 text-3xl font-bold text-gray-900">Results</h2>
            <p className="mt-8 max-w-4xl text-lg leading-relaxed text-gray-600">
              {item.results}
            </p>
          </>
        )}

        {!hasFullDetails && (
          <div className="mt-20 text-center">
            <h1 className="text-4xl font-bold text-gray-900">{item.title}</h1>
            <p className="mt-8 text-gray-600">Detailed information coming soon.</p>
          </div>
        )}
      </div>
    </section>
  );
}