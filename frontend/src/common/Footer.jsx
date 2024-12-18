import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-400 py-10">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 px-6">
        {/* About Section */}
        <div>
          <h3 className="text-white text-lg font-semibold mb-4">About</h3>
          <p className="text-sm mb-4">
            Far far away, behind the word mountains, far from the countries
            Vokalia and Consonantia, there live the blind texts.
          </p>
          <div className="flex space-x-4">
            <a
              href="#"
              className="w-10 h-10 flex items-center justify-center bg-gray-800 rounded-full hover:bg-gray-700"
            >
              <i className="fa-brands fa-twitter text-white"></i>
            </a>
            <a
              href="#"
              className="w-10 h-10 flex items-center justify-center bg-gray-800 rounded-full hover:bg-gray-700"
            >
              <i className="fa-brands fa-facebook-f text-white"></i>
            </a>
            <a
              href="#"
              className="w-10 h-10 flex items-center justify-center bg-gray-800 rounded-full hover:bg-gray-700"
            >
              <i className="fa-brands fa-instagram text-white"></i>
            </a>
          </div>
        </div>

        {/* Employers Section */}
        <div>
          <h3 className="text-white text-lg font-semibold mb-4">Employers</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <a href="#" className="hover:text-white">
                How it works
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white">
                Register
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white">
                Post a Job
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white">
                Advance Skill Search
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white">
                Recruiting Service
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white">
                Blog
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white">
                Faq
              </a>
            </li>
          </ul>
        </div>

        {/* Workers Section */}
        <div>
          <h3 className="text-white text-lg font-semibold mb-4">Workers</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <a href="#" className="hover:text-white">
                How it works
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white">
                Register
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white">
                Post Your Skills
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white">
                Job Search
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white">
                Employer Search
              </a>
            </li>
          </ul>
        </div>

        {/* Contact Section */}
        <div>
          <h3 className="text-white text-lg font-semibold mb-4">
            Have a Questions?
          </h3>
          <ul className="space-y-3 text-sm">
            <li className="flex items-center">
              <span className="mr-3">
                <i className="fa-solid fa-location-dot text-white"></i>
              </span>
              <span>203 Fake St. Mountain View, San Francisco, California, USA</span>
            </li>
            <li className="flex items-center">
              <span className="mr-3">
                <i className="fa-solid fa-phone text-white"></i>
              </span>
              <span>+2 392 3929 210</span>
            </li>
            <li className="flex items-center">
              <span className="mr-3">
                <i className="fa-solid fa-envelope text-white"></i>
              </span>
              <span>info@yourdomain.com</span>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
