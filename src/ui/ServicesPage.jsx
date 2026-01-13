import services from "../data/services";
import { IoIosArrowRoundForward } from "react-icons/io";


export default function Services() {
  return (
    <section className="py-20 bg-gray-50">
      <div className=" px-4 md:px-6 lg:px-16 xl:px-32">
        {/* Header */}
        <div className="text-center mb-14 md:mb-20">
          <p className="text-sm text-blue-600 font-semibold uppercase">
            What We Do
          </p>
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mt-2">
            Services That Help <samp> You Grow</samp> 
          </h2>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
  {services.map((service) => (
    <div
      key={service.id}
      className="bg-white rounded-xl shadow-sm overflow-hidden group"
    >
      {/* Image Wrapper */}
      <div className="relative w-full aspect-[16/9] overflow-hidden">
        <img
          src={service.heroImage}
          alt={service.title}
          className="absolute inset-0 w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
      </div>

      {/* Content */}
      <div className="p-4 sm:p-5 lg:p-6">
        <h3 className="text-xl sm:text-lg md:text-xl lg:text-2xl font-semibold text-gray-900 transition-colors duration-300 group-hover:text-primary">
          {service.title}
        </h3>

       <p className="text-base sm:text-sm md:text-lg lg:text-xl text-gray-600 mt-2 sm:mt-3 break-words max-w-[32ch]">
        {service.subtitle}
        </p>


        
<a
  href={`/projects/${service.id}`}
  className="inline-flex items-center mt-3 sm:mt-4 text-sm sm:text-base md:text-lg font-medium text-primary hover:text-primary transition-colors duration-300"
>
  Read More <IoIosArrowRoundForward className="ml-1 text-lg" />
</a>
      </div>
    </div>
  ))}
</div>

      </div>
    </section>
  );
}
