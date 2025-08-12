import { Github } from 'lucide-react';
 const FashionImg = ('/4.png')
 const StayImg = ('/1.png');
 const MernImg = ('/3.png');
 const SpringImg = ('/2.png');
 
export default function ProjectsSection() {
  const projects = [{
    title: 'FashionHub - Online Apparel Store',
    description: ' Developed a full-stack eCommerce web app using the MERN stack. Features include productsearch/filtering, order tracking, JWT-based auth, admin panel, PayPal payment integration with image management via Cloudinary and used Docker for containerization.',  
    image: SpringImg,
    tags: ['React', 'Redux', 'Node.js','Express.js', 'MongoDB', "JWT", "Cloudinary API", "PayPal API", "Docker"],
    liveLink: '#',
    githubLink: 'https://github.com/wgnadun/Apparel'
  },{
    title: 'StayFinder - Accommodation Rental Platform',
    description: 'A web app for browsing accommodation listings with direct owner contact. Advertisers can post listings through flexible subscription plans. All posts require admin approval, ensuring quality and trust throughout the platform for both seekers and property owners.',
    image: StayImg,
    tags: ['HTML', 'CSS', 'JavaScript', 'PHP', 'MySQL'],
    liveLink: '#',
    githubLink: 'https://github.com/wgnadun/Stayfinder-main'
  }, {
    title: 'ReadMore - Online Books Store',
    description: 'A role-based web app with separate user and admin portals. Built with React and Tailwind CSS for a responsive UI, featuring JWT authentication for secure access. Uses Redux Toolkit and RTK Query for efficient state and API management.',
    image: MernImg,
    tags: ['React', 'Redux', 'Node.js','Express.js', 'MongoDB'],
    liveLink: '#',
    githubLink: 'https://github.com/wgnadun/Book-Store'
  }, {
    title: 'FuelQ - Fuel Quota Management System',
    description: 'A fuel distribution system with portals for vehicle owners, stations, and admins. Backend uses Spring Boot secured with JWT. Includes QR scanning, Twilio/Mailgun for SMS/email alerts, and a React Native mobile app for easy access.',
    image: SpringImg,
    tags: ['Spring Boot', 'React', 'React Native'],
    liveLink: '#',
    githubLink: 'https://github.com/software-architecture-project-kln/fuel-project'
  },];

  return (
    <section id="projects" className="min-h-screen py-10 px-4 bg-gray-50 dark:bg-[#0c1323]">
      <div className="container mx-auto max-w-7xl">
        <div className="mb-16 text-center">
          <h2 className="mb-3 text-5xl font-bold text-gray-900 dark:text-gray-100">
            Projects
          </h2>
          <div className="w-24 h-1 mx-auto mb-4 bg-gray-600 rounded-full dark:bg-gray-400"></div>
          <p className="max-w-2xl mx-auto text-gray-700 dark:text-gray-300">
            Check out some of my recent work and projects I've built using modern technologies
          </p>
        </div>

        <div className="grid max-w-6xl gap-8 mx-auto sm:grid-cols-1 md:grid-cols-2 xl:grid-cols-3">
          {projects.map((project, index) => (
            <div key={index} className="bg-white dark:bg-[#131c33] rounded-xl overflow-hidden border border-gray-200 dark:border-gray-800 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl group">
              {/* Project Image */}
              <div className="overflow-hidden h-52">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="object-cover object-center w-full h-full transition-transform duration-700 group-hover:scale-110" 
                />
              </div>
              
              {/* Project Content */}
              <div className="p-7">
                <h3 className="mb-3 text-xl font-semibold text-gray-900 dark:text-gray-100 line-clamp-2">
                  {project.title}
                </h3>
                <p className="mb-5 leading-relaxed text-gray-700 dark:text-gray-300 ">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag, tagIndex) => (
                    <span key={tagIndex} className="px-3 py-1 text-sm font-medium text-blue-700 bg-blue-100 rounded-full dark:bg-blue-900/30 dark:text-blue-200">
                      {tag}
                    </span>
                  ))}
                </div>
                
                <div className="flex gap-4">
                  <a href={project.githubLink} target='_blank' className="flex items-center gap-2 text-sm font-medium text-gray-700 transition-colors dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400">
                    <Github size={16} />
                    <span>View Source</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}