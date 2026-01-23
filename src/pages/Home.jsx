import { Link } from "react-router-dom";
import Button from "../ui/Button";
import { HiArrowRight, HiUser, HiChevronRight } from "react-icons/hi";

function Home() {
  return (
    <div className="min-h-screen bg-gray-50 py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-extrabold text-[#1A215E] mb-12 text-center">
          Universal Button System
        </h1>

        {/* Sizes Row */}
        <div className="bg-white rounded-3xl p-10 shadow-sm mb-8 border border-gray-100">
          <h2 className="text-xl font-bold text-gray-800 mb-8 border-b pb-4">Button Sizes</h2>
          <div className="flex flex-wrap items-center gap-6">
            <div className="flex flex-col items-center gap-2">
              <span className="text-xs text-gray-400 font-mono">xs</span>
              <Button size="xs">Extra Small</Button>
            </div>
            <div className="flex flex-col items-center gap-2">
              <span className="text-xs text-gray-400 font-mono">sm</span>
              <Button size="sm">Small</Button>
            </div>
            <div className="flex flex-col items-center gap-2">
              <span className="text-xs text-gray-400 font-mono">md</span>
              <Button size="md">Medium</Button>
            </div>
            <div className="flex flex-col items-center gap-2">
              <span className="text-xs text-gray-400 font-mono">lg</span>
              <Button size="lg" iconAfter={HiChevronRight}>GET STARTED</Button>
            </div>

          </div>
        </div>

        {/* Variants & Icons Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white rounded-3xl p-10 shadow-sm border border-gray-100">
            <h2 className="text-xl font-bold text-gray-800 mb-8 border-b pb-4">Common States</h2>
            <div className="flex flex-wrap gap-4">
              <Button isLoading>Loading State</Button>
              <Button disabled>Disabled State</Button>
            </div>
          </div>

          <div className="bg-white rounded-3xl p-10 shadow-sm border border-gray-100">
            <h2 className="text-xl font-bold text-gray-800 mb-8 border-b pb-4">Variants & Icons</h2>
            <div className="flex flex-wrap items-center gap-6">
              <Button icon={HiUser}>User Profile</Button>
              <Button iconAfter={HiArrowRight}>Explore</Button>
              <Button variant="text">Read More Variant</Button>
            </div>
          </div>
        </div>

        {/* Functional Example */}
        <div className="mt-12 text-center">
          <p className="text-gray-500 mb-4">Want to see more updates?</p>
          <Button as={Link} to="/blogs" variant="text">
            READ MORE
          </Button>
        </div>
      </div>
    </div>
  );
}

export default Home;
