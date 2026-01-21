import PropTypes from 'prop-types';
export default function CertificateInfo({ client, project, category, issuedate }) {
  return (
     <div className="bg-[#F4F5FB] w-full md:w-1/2 p-8   shadow-sm">
              <h2 className="text-2xl md:text-4xl font-extrabold  text-gray-900 mb-10">
                Certificate Info
              </h2>
              <div className="space-y-6">
                <div className="flex justify-between border-b border-gray-200 pb-4">
                  <span className="text-gray-900 text-lg md:text-2xl font-extrabold">Client:</span>
                  <span className="text-gray-600 text-base md:text-xl ">
                    {client }
                  </span>
                </div>

                <div className="flex justify-between border-b border-gray-200 pb-4">
                  <span className=" text-gray-900 text-lg md:text-2xl font-extrabold">Project:</span>
                  <span className="text-gray-600 text-base md:text-xl">
                    {project }
                  </span>
                </div>

                <div className="flex justify-between border-b border-gray-200 pb-4">
                  <span className=" text-gray-900  text-lg md:text-2xl font-extrabold">Category:</span>
                  <span className="text-gray-600 text-base md:text-xl">
                    {category }
                  </span>
                </div>

                <div className="flex justify-between">
                  <span className=" text-gray-900 text-lg md:text-2xl font-extrabold">Issue Date:</span>
                  <span className=" text-gray-600 text-base md:text-xl">
                    {issuedate }
                  </span>
                </div>
                
              </div>
            </div>
  );
}
CertificateInfo.propTypes = {  
    
   client: PropTypes.string,
   project: PropTypes.string,
   category: PropTypes.string,
   issuedate: PropTypes.string,
};