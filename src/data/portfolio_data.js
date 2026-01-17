// // data/portfolio_data.js
// const portfolioData = [
//   {
//     id: "1",
//     title: "Audio visual system with interior design construction work",
//     categories: ["Interior Design", "Architecture"],
//     thumbnail: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=870&q=80",
//     heroImage: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1920&q=80",
//     description: "The project involved the installation of advanced audio visual systems integrated with comprehensive interior design and construction for a modern office space. The design emphasized open collaboration areas, high-quality finishes, natural light, and seamless technology integration.",
//     client: "Blue Arc Office",
//     date: "September 27, 2023",
//     tags: ["Architecture", "Interior Design", "Audio Visual"],
//     teamImages: [
//       "https://images.unsplash.com/photo-1518780664697-55e3ad937233?auto=format&fit=crop&w=800&q=80", // Architectural model
//       "https://images.unsplash.com/photo-1593537193826-375a637fad18?auto=format&fit=crop&w=800&q=80", // Handshake
//       "https://images.unsplash.com/photo-1573497019940-1c8ea7e5d4d5?auto=format&fit=crop&w=800&q=80", // Professional portrait
//     ],
//     requirements: [
//       "State-of-the-art audio visual integration",
//       "Modern open-plan interior layout",
//       "Custom furniture and fittings",
//       "Advanced lighting design",
//       "Glass partitioning systems",
//       "Acoustic optimization",
//     ],
//     results: "The completed project delivered a transformative workspace that significantly improved collaboration, productivity, and employee satisfaction. The seamless blend of technology and aesthetics has positioned the office as a benchmark for contemporary corporate environments in the region.",
//   },
//   {
//     id: "2",
//     title: "Contemporary Collaborative Workspace",
//     categories: ["Interior Design"],
//     thumbnail: "https://images.unsplash.com/photo-1497366811366-6872e9fa3a9f?auto=format&fit=crop&w=870&q=80",
//   },
//   {
//     id: "3",
//     title: "Minimalist Executive Office Suite",
//     categories: ["AI Development"],
//     thumbnail: "https://images.unsplash.com/photo-1517502884422-41eaead1669b?auto=format&fit=crop&w=870&q=80",
//   },
//   {
//     id: "4",
//     title: "Modern Conference Center",
//     categories: ["Web Development"],
//     thumbnail: "https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&w=870&q=80",
//   },
//   {
//     id: "5",
//     title: "Open-Plan Creative Studio",
//     categories: ["Marketing"],
//     thumbnail: "https://images.unsplash.com/photo-1598488035139-bd65a556e5e7?auto=format&fit=crop&w=870&q=80",
//   },
//   {
//     id: "6",
//     title: "Luxury Corporate Headquarters Interior",
//     categories: ["Marketing"],
//     thumbnail: "https://images.unsplash.com/photo-1585829365295-93e1d0692347?auto=format&fit=crop&w=870&q=80",
//   },
// ];

// export default portfolioData;

export const categories = [
  { id: 'all', label: 'All' },
  { id: 'ai-development', label: 'AI Development' },
  { id: 'web-development', label: 'Web Development' },
  { id: 'marketing', label: 'Marketing' },
  { id: 'design', label: 'Design' }
];
// Portfolio projects data
export const portfolioProjects = [
 {
  id: 1,
  title: "Audio Visual System with Interior design & construction work",
  category: "Design",
  client: "Broadcast",
  avSystem: "Broadcast",
  date: "October 15, 2023",
  description:
    "Design, Supply and Installation of Audio Visual System and Installation Structure in the Board Room and Auditorium for the Main Headquarter of Addis Ababa. The project involved the creation of Audio Visual System and Installation Structure in the Board Room and Auditorium for the Main Headquarter of Addis Ababa. Design, Supply and Installation of Audio Visual System and Installation Structure in the Board Room and Auditorium for the Main Headquarter of Addis Ababa. The project involved the creation of Audio Visual System and Installation Structure in the Board Room and Auditorium for the Main Headquarter of Addis Ababa.",
  image: "/images/img.png",
  teamMembers: [
    {
      id: 1,
      image: "/images/service.png",
    },
    {
      id: 2,
      image: "/images/feature1.png",
    },
    {
      id: 3,
      image: "/images/feature.png",
    },
    {
      id: 4,
      image: "/images/feature.png",
    },
  ],
  requirements: [
    "Comprehensive visual audit of existing spaces",
    "Development of design guidelines and standards",
    "Integration with construction workflow",
    "Budget optimization and cost analysis",
    "Timeline planning and milestone tracking",
    "Team coordination and stakeholder management",
    "Supply and installation of Audio Visual System",
    "Installation Structure",
  ],
  results:
    "The project successfully delivered a cohesive visual system that improved space efficiency by 35% and reduced construction costs by 22%. The integrated approach to design and construction allowed for seamless implementation with minimal disruption to ongoing operations. Client satisfaction ratings increased to 4.8/5, and the project became a template for future interior design initiatives across multiple locations.",
}
 
]
