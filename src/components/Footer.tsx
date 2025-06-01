import { Github, Linkedin, Instagram } from 'lucide-react';

export function Footer() {
  const currentYear = new Date().getFullYear();
  const socialLinks = [{
    icon: <Github size={18} />,
    href: 'https://github.com/wgnadun',
    label: 'GitHub',
    hoverColor: 'hover:bg-gray-800 dark:hover:bg-gray-700'
  }, {
    icon: <Linkedin size={18} />,
    href: 'https://www.linkedin.com/in/nadun-dananjaya-8bb552296/',
    label: 'LinkedIn',
    hoverColor: 'hover:bg-blue-600 dark:hover:bg-blue-500'
  }, {
    icon: <Instagram size={18} />,
    href: '',
    label: 'Instagram',
    hoverColor: 'hover:bg-pink-500 dark:hover:bg-pink-400'
  }];
  return <footer className="bg-gray-100 dark:bg-[#0a1120] py-8 px-4">
      <div className="container mx-auto">
        <div className="flex flex-col items-center justify-between md:flex-row">
          <p className="text-sm text-gray-600 dark:text-gray-400">
            © {currentYear} Nadun Dananjaya. All rights reserved.
          </p>
          <div className="flex items-center mt-4 space-x-4 md:mt-0">
            {socialLinks.map((link, index) => <a target='_blank' key={index} href={link.href} aria-label={link.label} className={`w-8 h-8 bg-gray-200 dark:bg-gray-800 rounded-full flex items-center justify-center text-gray-600 dark:text-white ${link.hoverColor} hover:text-white hover:scale-110 transition-all duration-300`}>
                {link.icon}
              </a>)}
          </div>
        </div>
      </div>
    </footer>;
}