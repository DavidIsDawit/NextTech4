// // ServiceDetailPage.jsx
// import React from 'react';

// const ServiceDetailPage = () => {
//   return (
//     <div className="bg-white min-h-screen">
//       <main className="container mx-auto px-4 py-8 flex flex-col md:flex-row gap-8">
//         {/* Main Content */}
//         <div className="flex-1">
//           <img
//             src="https://via.placeholder.com/800x400?text=Service+Hero+Image"
//             alt="Service Hero"
//             className="w-full h-64 object-cover rounded-lg mb-6"
//           />
//           <h1 className="text-2xl font-bold mb-4">Lorem Ipsum</h1>
//           <p className="text-gray-700 mb-4">
//             Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
//           </p>
//           <img
//             src="https://via.placeholder.com/800x300?text=Building+Image"
//             alt="Building"
//             className="w-full h-48 object-cover rounded-lg mb-4"
//           />
//           <p className="text-gray-700">
//             Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
//           </p>
//         </div>

//         {/* Sidebar */}
//         <aside className="w-full md:w-80 bg-white rounded-lg shadow-md p-6">
//           <h2 className="text-xl font-semibold mb-4">Services List</h2>
//           <ul className="space-y-2">
//             <li>
//               <a href="#" className="text-blue-500 hover:underline flex justify-between">
//                 IT & Security <span>→</span>
//               </a>
//             </li>
//             <li>
//               <a href="#" className="text-blue-500 hover:underline flex justify-between">
//                 Software Development <span>→</span>
//               </a>
//             </li>
//             <li>
//               <a href="#" className="text-blue-500 hover:underline flex justify-between">
//                 Software Products <span>→</span>
//               </a>
//             </li>
//             <li>
//               <a href="#" className="text-blue-500 hover:underline flex justify-between">
//                 Electromechanical Work <span>→</span>
//               </a>
//             </li>
//             <li>
//               <a href="#" className="text-blue-500 hover:underline flex justify-between">
//                 IT Infrastructure <span>→</span>
//               </a>
//             </li>
//           </ul>
//           <div className="mt-8">
//             <h3 className="text-lg font-semibold mb-2">Need Help?</h3>
//             <button className="bg-blue-500 text-white px-4 py-2 rounded-full w-full mb-2">
//               Chat Now
//             </button>
//             <button className="bg-blue-500 text-white px-4 py-2 rounded-full w-full">
//               Email Us
//             </button>
//           </div>
//         </aside>
//       </main>
//     </div>
//   );
// };

// export default ServiceDetailPage;



import { useParams } from "react-router-dom";
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
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-3 gap-12">

        {/* LEFT CONTENT */}
        <div className="lg:col-span-2 space-y-8">

          {/* Hero Image */}
          <img
            src={service.heroImage}
            alt={service.title}
            className="w-full rounded-xl object-cover"
          />

          {/* Text Content */}
          <div className="space-y-4 text-gray-600 leading-relaxed">
            {service.content.paragraphs.map((text, index) => (
              <p key={index}>{text}</p>
            ))}
          </div>

          {/* Bottom Images */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {service.content.gallery.map((img, index) => (
              <img
                key={index}
                src={img}
                alt="service detail"
                className="w-full rounded-lg object-cover"
              />
            ))}
          </div>

          {/* Text Content */}
          <div className="space-y-4 text-gray-600 leading-relaxed">
            {service.content.paragraphs.map((text, index) => (
              <p key={index}>{text}</p>
            ))}
          </div>


        </div>

        {/* RIGHT SIDEBAR */}
        <aside className="space-y-8">

          {/* Services List */}
          <div className="border rounded-xl p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">
              Services List
            </h3>

            <ul className="space-y-3">
              {service.sidebar.servicesList.map((item, index) => (
                <li
                  key={index}
                  className="flex items-center justify-between border-b pb-2 text-gray-700 hover:text-blue-600 transition cursor-pointer"
                >
                  <span>{item}</span>
                  <span className="text-blue-600">→</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Need Help Form */}
          <div className="border rounded-xl p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">
              {service.sidebar.contactForm.title}
            </h3>

            <form className="space-y-4">
              {service.sidebar.contactForm.fields.map((field, index) =>
                field.type === "textarea" ? (
                  <textarea
                    key={index}
                    rows="4"
                    placeholder={field.placeholder}
                    className="w-full border rounded-md px-4 py-2 focus:ring-2 focus:ring-blue-500 outline-none"
                  />
                ) : (
                  <input
                    key={index}
                    type={field.type}
                    placeholder={field.placeholder}
                    className="w-full border rounded-md px-4 py-2 focus:ring-2 focus:ring-blue-500 outline-none"
                  />
                )
              )}

              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-2 rounded-md font-medium hover:bg-blue-700 transition"
              >
                {service.sidebar.contactForm.buttonText}
              </button>
            </form>
          </div>

        </aside>
      </div>
    </section>
  );
}
