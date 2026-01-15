import { useParams } from "react-router-dom";
import { IoIosArrowRoundForward } from "react-icons/io";
import Faq from "./Faq";

import services from "../data/services";

export default function ServiceDetail() {
  const { id } = useParams();
  const service = services.find((s) => s.id === parseInt(id));

  if (!service) {
    return (
      <div className="py-20 text-center text-gray-600">
        Service not found
      </div>
    );
  }

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="  px-5 sm:px-10 md:px-14 lg:px-8 xl:px-24"> 
        <div className="grid grid-cols-1  lg:grid-cols-3 gap-6  lg:gap-8 xl:gap-0 ml-0 xl:ml-5">

          {/* ================= LEFT CONTENT ================= */}
          <div className="lg:col-span-2 space-y-8 lg:space-y-10 xl:space-y-12">

            {/* Hero Image */}
<div className="
  w-full
  h-64 sm:h-80 lg:h-[30rem] xl:h-[32rem]
  rounded-2xl
  overflow-hidden
  shadow-xl
  
">
  <img
    src={service.heroImage}
    alt={service.title}
    className="
      w-full h-full
      object-cover
      object-center
    "
  />
</div>


             {/* Text Content */}
          <div className="space-y-4 text-gray-600 leading-relaxed text-sm md:text-base">
            {service.content.paragraphs.map((text, index) => (
              <p key={index}>{text}</p>
            ))}
          </div>

            {/* Gallery Images */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-6 xl:gap-8">
              {service.content.gallery.map((img, index) => (
                <img
                  key={index}
                  src={img}
                  alt="Service detail"
                  className="w-full h-72 md:h-80 xl:h-72 md:rounded-lg object-cover shadow-lg"
                />
              ))}
            </div>

            {/* Second Text Block */}
          <div className="space-y-4 text-gray-600 leading-relaxed text-sm md:text-base">
            {service.content.paragraphs.map((text, index) => (
              <p key={`bottom-${index}`}>{text}</p>
            ))}
          </div>
          </div>

          {/* ================= RIGHT SIDEBAR ================= */}
<aside className="space-y-8 mb-28 md:mb-0 ml-0  xl:ml-14">

  {/* Services List */}
  <div className="bg-white rounded-2xl shadow-lg p-6 flex flex-col border border-gray-600 border-opacity-20">
    <h3 className="text-3xl font-bold text-gray-900 mb-6">
      Services List
    </h3>

    <div className="flex-1 flex flex-col space-y-3">
      {service.sidebar.servicesList.map((item, index) => (
        <div
          key={index}
          className="
            
            hover:bg-[#101010]
            rounded-xl
            px-6 py-4
            flex items-center justify-between
            border border-gray-600 border-opacity-20
            transition-all duration-300
            cursor-pointer
            group
          "
        >
          <span className="
            text-base font-medium text-gray-800
            group-hover:text-white
            transition-colors
          ">
            {item}
          </span>

          {/* <span className="
            text-2xl text-gray-500
            group-hover:text-[#00A3E0]
            transition-colors
          ">
            →
          </span> */}
          <IoIosArrowRoundForward className="text-2xl group-hover:text-white transition-transform duration-300 group-hover:translate-x-1" />

        </div>
      ))}
    </div>
  </div>

  {/* Need Help Form */}
  <div className="bg-white rounded-2xl shadow-lg p-6  xl:p-5 border border-gray-600 border-opacity-20">
    <h3 className="text-3xl  font-bold text-gray-900 mb-8">
      Need help?
    </h3>

    <form className="space-y-5">
      <input
        type="text"
        placeholder="Enter Name"
        className="
          w-full px-5 py-4
         
          border border-gray-600 border-opacity-20
          rounded-xl
          text-base text-gray-700
          placeholder-gray-400
          focus:outline-none
          focus:ring-2 focus:ring-[#00A3E0]
          focus:border-[#00A3E0]
          transition
        "
      />

      <input
        type="email"
        placeholder="Enter Email"
        className="
          w-full px-5 py-4
         
          border border-gray-600 border-opacity-20
          rounded-xl
          text-base text-gray-700
          placeholder-gray-400
          focus:outline-none
          focus:ring-2 focus:ring-[#00A3E0]
          focus:border-[#00A3E0]
          transition
        "
      />

      <textarea
        rows="5"
        placeholder="Enter Message ..."
        className="
          w-full px-5 py-4
          
          border border-gray-600 border-opacity-20
          rounded-xl
          text-base text-gray-700
          placeholder-gray-400
          focus:outline-none
          focus:ring-2 focus:ring-[#00A3E0]
          focus:border-[#00A3E0]
          transition
          resize-none
        "
      />

      <button
        type="submit"
        className="
          w-full
          bg-[#00A3E0]
          hover:bg-[#008bc7]
          text-white
          py-4
          rounded-2xl
          text-base font-semibold
          transition
          shadow-lg
          flex items-center justify-center gap-2
        "
      >
        SEND MESSAGE
        <span className="text-2xl">→</span>
      </button>
    </form>
  </div>

</aside>
        </div>
       
      </div>
       <Faq />
    </section>
  );
}