import { useState, useEffect } from 'react';
import { ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';


const CIAblog = ('/blog3.png');
const RestApI = ('/blog2.png');
const SQL = ('/blog1.png');


export function BlogSection() {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const blogPosts = [{
    title: "Unlocking MySQL’s Stored Procedure Power.",
    excerpt: 'MySQL stored procedures enhance performance, security, and reusability by encapsulating SQL logic. While powerful, they have drawbacks like vendor lock-in and limited debugging. Proper use optimizes database operations effectively.',
    image: SQL,
    date: 'February 23, 2024',
    
    url:'https://medium.com/@wgnadundananjaya/unlocking-mysqls-stored-procedure-power-0f47e465374d'
  }, {
    title: 'Understanding the CIA Triad’s Objective: Unveiling the Foundation of Cybersecurity.',
    excerpt: 'The CIA Triad confidentiality, integrity, and availability guides cybersecurity by protecting data access, accuracy, and uptime. It helps design, evaluate, and prioritize security strategies across organizations to counter digital threats.',
    image: CIAblog,
    date: 'October 22, 2023',
    url:'https://medium.com/@wgnadundananjaya/understanding-the-cia-triads-objective-unveiling-the-foundation-of-cybersecurity-e5bd551b35bd'
  }, {
    title: 'Building RESTful APIs with Node.js',
    excerpt: 'Building RESTful APIs with Node.js and MongoDB is a powerful and flexible way to deliver data-driven applications. By following clean architecture, modular design, and best practices, you can ensure your API is secure, maintainable, and scalable.Start small, test frequently, and document everything.',
    image: RestApI,
    date: 'August 15, 2023',
    url:''
  }];

  // Auto-play functionality
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % blogPosts.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [blogPosts.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % blogPosts.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + blogPosts.length) % blogPosts.length);
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  return (
    <section id="blog" className="py-20 px-4 bg-gray-50 dark:bg-[#0c1323] min-h-screen">
      <div className="container mx-auto">
        <h2 className="mb-2 text-5xl font-bold text-center text-gray-900 dark:text-white">
          Latest Blog Posts
        </h2>
        <div className="w-24 h-1 mx-auto mb-4 bg-gray-600 dark:bg-gray-500"></div>
        <p className="mb-12 text-center text-gray-600 dark:text-gray-400">
          Thoughts and tutorials on web development
        </p>
        <div className="relative max-w-6xl mx-auto">
          {/* Navigation Arrows */}
          <button 
            onClick={prevSlide}
            className="absolute left-0 z-10 p-3 transition-all duration-300 -translate-y-1/2 bg-white rounded-full shadow-lg top-1/2 dark:bg-gray-800 hover:shadow-xl"
          >
            <ChevronLeft size={24} className="text-gray-700 dark:text-gray-300" />
          </button>
          
          <button 
            onClick={nextSlide}
            className="absolute right-0 z-10 p-3 transition-all duration-300 -translate-y-1/2 bg-white rounded-full shadow-lg top-1/2 dark:bg-gray-800 hover:shadow-xl"
          >
            <ChevronRight size={24} className="text-gray-700 dark:text-gray-300" />
          </button>

          {/* Blog Cards Container */}
          <div className="overflow-hidden rounded-lg">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {blogPosts.map((post, index: number) => (
                <div key={index} className="flex-shrink-0 w-full px-4">
                  <div className="bg-white dark:bg-[#131c33] rounded-lg overflow-hidden border border-gray-200 dark:border-gray-800 hover:border-gray-300 dark:hover:border-gray-700 transition-all duration-300 hover:shadow-lg group mx-auto max-w-md">
                    <div className="flex items-center justify-center bg-gray-900 h-148 w-100% oerflow-hidden p-">
                      <img src={post.image} alt={post.title} className="object-contain max-w-full max-h-full transition-transform duration-300 group-hover:scale-105" />
                    </div>
                    <div className="p-6">
                      <div className="flex items-center justify-between mb-3 text-xs text-gray-400">
                        <span>{post.date}</span>
                      </div>
                      <h3 className="mb-3 text-lg font-semibold transition-colors group-hover:text-gray-600 dark:group-hover:text-gray-300">
                        {post.title}
                      </h3>
                      <p className="mb-4 text-sm text-gray-400">{post.excerpt}</p>
                      <a target='_blank' href={post.url} className="inline-flex items-center text-sm text-gray-600 transition-colors dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-200">
                        <span>Read More</span>
                        <ArrowRight size={16} className="ml-1 transition-transform group-hover:translate-x-1" />
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center mt-8 space-x-2">
            {blogPosts.map((_, index: number) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 rounded-full transition-colors duration-300 ${
                  currentSlide === index 
                    ? 'bg-gray-700 dark:bg-gray-300' 
                    : 'bg-gray-300 dark:bg-gray-600 hover:bg-gray-500 dark:hover:bg-gray-400'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}