
export default function SkillsSection() {
  const skillCategories = [{
    title: 'Frontend Development',
    skills: [{
      name: 'React',
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg'
    }, {
      name: 'JavaScript',
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg'
    }, {
      name: 'TypeScript',
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg'
    }, {
      name: 'HTML5',
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg'
    }, {
      name: 'CSS3',
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg'
    }, {
      name: 'Tailwind',
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg'
    }]
  }, {
    title: 'Backend Development',
    skills: [{
      name: 'Node.js',
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg'
    },{
      name:'java',
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg'
    },{
      name:'PHP',
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg'
    }, {
      name: 'Express',
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg'
    }, {
      name: 'MongoDB',
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg'
    }, {
      name: 'MySQL',
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg'
    },{
      name:'Spring Boot',
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg'
    }]
  }, {
    title: 'Other Tools',
    skills: [{
      name: 'Git',
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg'
    }, {
      name: 'Docker',
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg'
    }, {
      name: 'AWS',
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-plain-wordmark.svg'
    },{
      name:'Figma',
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg'
    },{
      name:'Jira',
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jira/jira-original.svg'
    }]
  }];

  return (
    <section id="skills" className="min-h-screen px-4 py-10 duration-300 tra18nsition-colors dark:bg-gray-900">
      <div className="container max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="mb-16 text-center">
          <h2 className="mb-3 text-5xl font-bold text-gray-800 dark:text-gray-200">
            Technical Skills
          </h2>
          <div className="w-24 h-1 mx-auto mb-4 bg-gray-600 rounded-full dark:bg-gray-400"></div>
          <p className="max-w-lg mx-auto text-gray-600 dark:text-gray-400">
            Here are the technologies and tools I work with to build modern applications
          </p>
        </div>

        {/* Skills Layout - Equal Size Grid */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {skillCategories.map((category, index) => (
            <div key={index} className="transition-all duration-300 bg-white border border-gray-200 shadow-lg p-7 dark:bg-gray-800 rounded-xl dark:border-gray-700 hover:shadow-xl hover:-translate-y-1">
              {/* Category Title */}
              <div className="text-center mb-7">
                <h3 className="mb-2 text-xl font-semibold text-gray-800 dark:text-gray-200">
                  {category.title}
                </h3>
                <div className="w-12 h-0.5 bg-gray-400 dark:bg-gray-500 mx-auto"></div>
              </div>

              {/* Skills Grid */}
              <div className={`grid gap-5 ${
                category.skills.length <= 4 ? 'grid-cols-2' : 'grid-cols-2 sm:grid-cols-3'
              }`}>
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="group">
                    <div className="flex flex-col items-center justify-center p-4 text-center h-28">
                      <div className="flex items-center justify-center w-10 h-10 mb-2 transition-transform duration-300 group-hover:scale-110">
                        <img 
                          src={skill.icon} 
                          alt={skill.name} 
                          className="object-contain w-full h-full"
                          onError={(e) => {
                            // Fallback for broken icons
                            (e.target as HTMLImageElement).style.display = 'none';
                            if ((e.target as HTMLImageElement).nextSibling instanceof HTMLElement) {
                              ((e.target as HTMLImageElement).nextSibling as HTMLElement).style.display = 'flex';
                            }
                          }}
                        />
                        <div 
                          className="items-center justify-center hidden w-full h-full text-2xl font-bold text-gray-600 dark:text-gray-300"
                          style={{display: 'none'}}
                        >
                          {skill.name.charAt(0)}
                        </div>
                      </div>
                      <h4 className="text-sm font-medium leading-tight text-center text-gray-700 break-words dark:text-gray-300">
                        {skill.name}
                      </h4>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Skills Summary */}
        <div className="mt-10 text-center">
          <div className="max-w-2xl p-6 mx-auto bg-white border border-gray-200 shadow-lg dark:bg-gray-800 rounded-xl dark:border-gray-700">
            <p className="text-sm leading-relaxed text-gray-600 dark:text-gray-400">
              <span className="font-semibold text-gray-800 dark:text-gray-200">13 Technologies</span> across 
              <span className="font-semibold text-gray-800 dark:text-gray-200"> 3 Categories</span> - 
              Continuously learning and adapting to new tools and frameworks
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}