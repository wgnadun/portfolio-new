
export default function EducationSection() {
  const education = [{
    degree: 'BSc in Software Engineering',
    institution: 'University of Technology',
    duration: '2021 - Present',
    status: 'In Progress',
    description: 'Comprehensive coursework covering Data Structures & Algorithms, Object-Oriented Programming, Software Architecture Design, Database Systems, and Advanced Web Technologies. Maintaining strong academic performance while developing practical software solutions.',
    gpa: '3.40/4.0',
  }, {
    degree: 'General Certificate Of Education Advanced Level',
    institution: 'CodeCamp Academy',
    duration: '2018 - 2021',
    status: 'Completed',
    description: 'GCE A/L (Physical Science Stream): Achieved Physics (A), Mathematics (B), and Chemistry (B). Gained a strong foundation in analytical and problem-solving skills through rigorous scientific study.',
    grade: '1.5930',  }];

  const certifications = [{
    
    name: 'AWS Educate Introduction to Cloud 101',
    issuer: ' Amazon Web Services (AWS)!',
    date: '2025',
    color: 'bg-gray-600 dark:bg-gray-400',
    icon: '☁️',
  
  }, {
    name: 'AWS Educate Getting Started with Storage',
    issuer: ' Amazon Web Services (AWS)!',
    date: '2025',
    color: 'bg-gray-600 dark:bg-gray-400',
    icon: '☁️',

  }];

  return (
    <section id="education" className="min-h-screen px-4 py-16 transition-colors duration-300 bg-white dark:bg-gray-900">
      <div className="container max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="mb-12 text-center">
          <h2 className="mb-3 text-5xl font-bold text-gray- dark:text-white">
            Education & Qualifications
          </h2>
          <div className="w-24 h-1 mx-auto mb-4 bg-gray-600 rounded-full dark:bg-gray-400"></div>
          <p className="max-w-xl mx-auto text-gray-600 text- dark:text-gray-300">
            My academic journey and professional certifications
          </p>
        </div>

        {/* Education Section */}
        <div className="mb-12">
          <h3 className="mb-8 text-2xl font-semibold text-center text-gray-900 dark:text-white">
            Academic Background
          </h3>
          <div className="grid gap-8 md:grid-cols-2">
            {education.map((item, index) => (
              <div key={index} className="p-6 transition-all duration-300 border-2 border-gray-200 group dark:bg-gray-900 rounded-xl dark:border-gray-700 hover:border-gray-400 dark:hover:border-gray-500 hover:shadow-lg hover:-translate-y-1">
                {/* Header */}
                <div className="flex items-start justify-between mb-4">
                  <div className="flex-1">
                    <h4 className="mb-1 text-lg font-bold text-gray-900 transition-colors duration-300 dark:text-white group-hover:text-gray-700 dark:group-hover:text-gray-300">
                      {item.degree}
                    </h4>
                    <p className="mb-1 text-base font-medium text-gray-700 dark:text-gray-300">
                      {item.institution}
                    </p>
                  </div>
                  <div className="flex flex-col items-end gap-2">
         
                    <span className="px-2 py-1 text-xs font-medium text-gray-600 bg-gray-200 rounded-full dark:text-gray-400 dark:bg-gray-700">
                      {item.duration}
                    </span>
                  </div>
                </div>

                {/* Performance Indicator */}
                <div className="flex gap-4 mb-4">
                  {item.gpa && (
                    <div className="flex items-center gap-2 p-2 border border-gray-200 rounded-lg dark:bg-gray-800 dark:border-gray-600">
                      <span className="text-xs text-gray-600 dark:text-gray-400">GPA :</span>
                      <span className="text-sm font-bold text-gray-800 dark:text-gray-200">{item.gpa}</span>
                    </div>
                  )}
                  {item.grade && (
                    <div className="flex items-center gap-2 p-2 bg-white border border-gray-200 rounded-lg dark:bg-gray-800 dark:border-gray-600">
                      <span className="text-xs text-gray-600 dark:text-gray-400">Z Score :</span>
                      <span className="text-sm font-bold text-gray-800 dark:text-gray-200">{item.grade}</span>
                    </div>
                  )}
                </div>

                {/* Description */}
                <p className="mb-4 text-sm leading-relaxed text-gray-700 dark:text-gray-300">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Certifications Section */}
        <div>
          <h3 className="mb-8 text-2xl font-semibold text-center text-gray-900 dark:text-white">
            Professional Certifications
          </h3>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {certifications.map((cert, index) => (
              <div key={index} className="p-4 transition-all duration-300 border border-gray-200 rounded-lg group bg-gray-50 dark:bg-gray-900 dark:border-gray-700 hover:border-gray-400 dark:hover:border-gray-500 hover:shadow-lg hover:-translate-y-1">
                {/* Icon and Level */}
                <div className="flex items-center justify-between mb-3">
                  <div className="text-2xl">{cert.icon}</div>
                  <span className={`${cert.color} text-white text-xs font-medium px-2 py-1 rounded`}>
                   
                  </span>
                </div>

                {/* Certificate Name */}
                <h4 className="mb-3 text-sm font-medium leading-tight text-gray-900 dark:text-white">
                  {cert.name}
                </h4>

                {/* Issuer and Date */}
                <div className="text-xs text-gray-600 dark:text-gray-400">
                  <p className="mb-2 font-medium">{cert.issuer}</p>
                 
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}