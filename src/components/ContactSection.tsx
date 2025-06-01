import { Mail, Phone, MapPin, Send } from 'lucide-react';

export default function ContactSection() {
  return (
    <section id="contact" className="py-16 px-4 bg-gray-50 dark:bg-[#0c1323] min-h-screen flex items-center">
      <div className="container max-w-6xl mx-auto">
        <div className="mb-12 text-center">
          <h2 className="mb-3 text-5xl font-bold text-gray-900 dark:text-white">
            Get In Touch
          </h2>
        <div className="w-24 h-1 mx-auto mb-4 bg-gray-600 dark:bg-gray-500"></div>
          <p className="max-w-2xl mx-auto text-lg text-gray-600 dark:text-gray-400">
            Feel free to contact me for any project or collaboration. I'd love to hear from you!
          </p>
        </div>
        
        <div className="grid gap-12 lg:grid-cols-3">
          {/* Contact Info - Takes 1 column */}
          <div className="lg:col-span-1">
            <div className="bg-white dark:bg-[#131c33] p-8 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-800 h-fit">
              <h3 className="mb-6 text-xl font-semibold text-gray-900 dark:text-white">
                Contact Information
              </h3>
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="flex items-center justify-center w-12 h-12 text-blue-500 rounded-lg bg-blue-500/10 dark:text-blue-400">
                    <Mail size={20} />
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900 dark:text-gray-300">Email</h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400">wgnadundananjaya@gmail.com</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <div className="flex items-center justify-center w-12 h-12 text-blue-500 rounded-lg bg-blue-500/10 dark:text-blue-400">
                    <Phone size={20} />
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900 dark:text-gray-300">Phone</h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400">+94 (74) 005 6634</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <div className="flex items-center justify-center w-12 h-12 text-blue-500 rounded-lg bg-blue-500/10 dark:text-blue-400">
                    <MapPin size={20} />
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900 dark:text-gray-300">Location</h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      Colombo, Sri Lanka
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Contact Form - Takes 2 columns */}
          <div className="lg:col-span-2">
            <div className="bg-white dark:bg-[#131c33] p-8 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-800">
              <h3 className="mb-6 text-xl font-semibold text-gray-900 dark:text-white">
                Send me a message
              </h3>
            <form action="https://formsubmit.co/wgnadundananjaya@gmail.com" method="POST">
              <div className="space-y-6">
                <div className="grid gap-6 md:grid-cols-2">
                  <div>
                    <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-700 dark:text-gray-300">
                      Your Name
                    </label>
                    <input 
                      type="text" 
                      name="name" 
                      placeholder="Enter your name" 
                      className="w-full px-4 py-3 bg-gray-50 dark:bg-[#0c1323] border border-gray-200 dark:border-gray-600 focus:border-gray-900 dark:focus:border-white rounded-lg focus:outline-none transition-all duration-300 ease-in-out text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400" 
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-700 dark:text-gray-300">
                      Your Email
                    </label>
                    <input 
                      type="email" 
                      name="email" 
                      placeholder="Enter your email" 
                      className="w-full px-4 py-3 bg-gray-50 dark:bg-[#0c1323] border border-gray-200 dark:border-gray-600 focus:border-gray-900 dark:focus:border-white rounded-lg focus:outline-none transition-all duration-300 ease-in-out text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400" 
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="subject" className="block mb-2 text-sm font-medium text-gray-700 dark:text-gray-300">
                    Subject
                  </label>
                  <input 
                    type="text" 
                    name="subject" 
                    placeholder="What's this about?" 
                    className="w-full px-4 py-3 bg-gray-50 dark:bg-[#0c1323] border border-gray-200 dark:border-gray-600 focus:border-gray-900 dark:focus:border-white rounded-lg focus:outline-none transition-all duration-300 ease-in-out text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400" 
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block mb-2 text-sm font-medium text-gray-700 dark:text-gray-300">
                    Message
                  </label>
                  <textarea 
                    name="message" 
                    placeholder="Tell me about your project or idea..." 
                    rows={6} 
                    className="w-full px-4 py-3 bg-gray-50 dark:bg-[#0c1323] border border-gray-200 dark:border-gray-600 focus:border-gray-900 dark:focus:border-white rounded-lg focus:outline-none transition-all duration-300 ease-in-out resize-none text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400"
                  ></textarea>
                </div>
                
                <button 
                  type="submit" 
                  className="w-full md:w-auto px-8 py-4 bg-gradient-to-r from-blue-500 to-blue-600 text-white font-medium rounded-lg flex items-center justify-center gap-3 hover:from-blue-600 hover:to-blue-700 transform hover:scale-[1.02] transition-all duration-300 shadow-lg hover:shadow-xl"
                >
                  <span>Send Message</span>
                  <Send size={18} />
                </button>
              </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}