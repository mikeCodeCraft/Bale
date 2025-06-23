import React from 'react';
import logo from '../../assets/logo.svg';

const Footer = () => (
  <footer className="bg-black border-t border-gray-800 py-12">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
        <div>
          <div className="flex items-center gap-2 text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent mb-4">
            <img src={logo} alt="Bale Logo" className="h-15 w-20" />
          </div>
          <p className="text-gray-400 leading-relaxed">
            Creating Hollywood-level videos without a crew, camera, or studio.
          </p>
        </div>
        <div>
          <h4 className="font-semibold mb-4">Services</h4>
          <ul className="space-y-2 text-gray-400">
            <li>
              <a href="#" className="hover:text-white transition-colors">
                AI Video Generation
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white transition-colors">
                Script to Video
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white transition-colors">
                Motion Design
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white transition-colors">
                Social Content
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold mb-4">Resources</h4>
          <ul className="space-y-2 text-gray-400">
            <li>
              <a href="#" className="hover:text-white transition-colors">
                Documentation
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white transition-colors">
                Case Studies
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white transition-colors">
                Blog
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white transition-colors">
                Support
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold mb-4">Company</h4>
          <ul className="space-y-2 text-gray-400">
            <li>
              <a href="#" className="hover:text-white transition-colors">
                About
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white transition-colors">
                Careers
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white transition-colors">
                Privacy
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white transition-colors">
                Terms
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
        <p>© 2025 <a href="https://mikecodecraft.vercel.app/">mikeCodeCraft</a>. All rights reserved. Revolutionizing video creation with AI.</p>
      </div>
    </div>
  </footer>
);

export default Footer;
