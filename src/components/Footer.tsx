import React from 'react';
import { Scale, Mail, Phone, Globe } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-8 px-4 sm:px-6 lg:px-8 mt-12">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center mb-4">
              <Scale className="h-6 w-6 mr-2 text-amber-300" />
              <h2 className="text-xl font-bold text-white">LegalAdvisor.in</h2>
            </div>
            <p className="text-sm leading-relaxed">
              Providing expert guidance on Indian constitutional law through advanced AI technology.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors duration-200 flex items-center"
                >
                  <span className="w-1.5 h-1.5 bg-amber-300 rounded-full mr-2"></span>
                  About Us
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors duration-200 flex items-center"
                >
                  <span className="w-1.5 h-1.5 bg-amber-300 rounded-full mr-2"></span>
                  Privacy Policy
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors duration-200 flex items-center"
                >
                  <span className="w-1.5 h-1.5 bg-amber-300 rounded-full mr-2"></span>
                  Terms of Service
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors duration-200 flex items-center"
                >
                  <span className="w-1.5 h-1.5 bg-amber-300 rounded-full mr-2"></span>
                  FAQ
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">Contact Us</h3>
            <div className="space-y-3">
              <div className="flex items-center group">
                <Mail className="h-5 w-5 mr-2 text-gray-400 group-hover:text-amber-300 transition-colors duration-200" />
                <a href="mailto:contact@legaladvisor.in" className="hover:text-amber-300 transition-colors duration-200">
                  contact@legaladvisor.in
                </a>
              </div>
              <div className="flex items-center group">
                <Phone className="h-5 w-5 mr-2 text-gray-400 group-hover:text-amber-300 transition-colors duration-200" />
                <a href="tel:+911234567890" className="hover:text-amber-300 transition-colors duration-200">
                  +91 1234567890
                </a>
              </div>
              <div className="flex items-center group">
                <Globe className="h-5 w-5 mr-2 text-gray-400 group-hover:text-amber-300 transition-colors duration-200" />
                <a href="https://www.legaladvisor.in" className="hover:text-amber-300 transition-colors duration-200">
                  www.legaladvisor.in
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-800 text-center text-sm">
          <p>© {new Date().getFullYear()} LegalAdvisor.in. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;