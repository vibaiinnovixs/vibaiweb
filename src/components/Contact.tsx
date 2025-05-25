import React from 'react';
import { MapPin, Mail, Phone, Instagram, Linkedin, Youtube } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <div className="bg-gradient-to-br from-gray-50 to-blue-50 rounded-2xl shadow-sm overflow-hidden">
            <div className="p-8 md:p-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-8">
                Get in Touch
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-6">Contact Information</h3>
                  
                  <div className="space-y-6">
                    <div className="flex items-start">
                      <MapPin className="h-6 w-6 text-blue-600 mr-4 mt-1" />
                      <div>
                        <p className="font-medium text-gray-900">Location</p>
                        <p className="text-gray-700">Chittoor, Andhra Pradesh</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <Mail className="h-6 w-6 text-blue-600 mr-4 mt-1" />
                      <div>
                        <p className="font-medium text-gray-900">Email</p>
                        <a href="mailto:contact@vibaiinnovixs.com" className="text-blue-600 hover:text-blue-800 transition-colors">
                          contact@vibaiinnovixs.com
                        </a>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <Phone className="h-6 w-6 text-blue-600 mr-4 mt-1" />
                      <div>
                        <p className="font-medium text-gray-900">Phone</p>
                        <p className="text-gray-700">+91-XXXXXXXXXX</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="mt-8">
                    <h4 className="font-medium text-gray-900 mb-4">Follow Us</h4>
                    <div className="flex space-x-4">
                      <a href="#" className="text-gray-500 hover:text-pink-600 transition-colors">
                        <Instagram className="h-6 w-6" />
                      </a>
                      <a href="#" className="text-gray-500 hover:text-blue-600 transition-colors">
                        <Linkedin className="h-6 w-6" />
                      </a>
                      <a href="#" className="text-gray-500 hover:text-red-600 transition-colors">
                        <Youtube className="h-6 w-6" />
                      </a>
                    </div>
                  </div>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-6">Send Us a Message</h3>
                  
                  <form className="space-y-4">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                        Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                        placeholder="Your name"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                        Email
                      </label>
                      <input
                        type="email"
                        id="email"
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                        placeholder="Your email"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                        Subject
                      </label>
                      <input
                        type="text"
                        id="subject"
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                        placeholder="Subject"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                        Message
                      </label>
                      <textarea
                        id="message"
                        rows={4}
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                        placeholder="Your message"
                      ></textarea>
                    </div>
                    
                    <div>
                      <button
                        type="submit"
                        className="w-full px-6 py-3 text-base font-medium text-white bg-blue-600 border border-transparent rounded-md shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-all duration-300"
                      >
                        Send Message
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;