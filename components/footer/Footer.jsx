import React from "react";
import { Globe, DollarSign, Facebook, Twitter, Instagram } from "lucide-react";

const Footer = () => {
  const footerSections = [
    {
      title: "Support",
      links: [
        "Help Center",
        "AirCover",
        "Anti-discrimination",
        "Disability support",
        "Cancellation options",
        "Report neighborhood concern",
      ],
    },
    {
      title: "Hosting",
      links: [
        "Airbnb your home",
        "AirCover for Hosts",
        "Hosting resources",
        "Community forum",
        "Hosting responsibly",
        "Airbnb-friendly apartments",
        "Join a free Hosting class",
      ],
    },
    {
      title: "Airbnb",
      links: [
        "Newsroom",
        "New features",
        "Careers",
        "Investors",
        "Gift cards",
        "Airbnb.org emergency stays",
      ],
    },
  ];

  return (
    <footer className="px-4 py-8 bg-gray-100 md:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col justify-between md:flex-row">
          {footerSections.map((section) => (
            <div key={section.title} className="mb-8 md:mb-0">
              <h3 className="mb-4 text-lg font-semibold">{section.title}</h3>
              <ul className="space-y-2">
                {section.links.map((link) => (
                  <li key={link}>
                    <a href="#" className="text-gray-600 hover:underline">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="flex flex-col items-center justify-between pt-8 mt-8 border-t border-gray-300 md:flex-row">
          <div className="flex flex-col items-center space-y-4 md:flex-row md:space-y-0 md:space-x-4">
            <p className="text-sm text-gray-600">© 2024 Airbnb, Inc.</p>
            <div className="flex space-x-4">
              <a href="#" className="text-sm text-gray-600 hover:underline">
                Terms
              </a>
              <a href="#" className="text-sm text-gray-600 hover:underline">
                Sitemap
              </a>
              <a href="#" className="text-sm text-gray-600 hover:underline">
                Privacy
              </a>
              <a href="#" className="text-sm text-gray-600 hover:underline">
                Your Privacy Choices
              </a>
            </div>
          </div>
          <div className="flex items-center mt-4 space-x-4 md:mt-0">
            <button className="flex items-center text-gray-600 hover:text-gray-800">
              <Globe className="w-5 h-5 mr-2" />
              English (US)
            </button>
            <button className="flex items-center text-gray-600 hover:text-gray-800">
              <DollarSign className="w-5 h-5 mr-2" />
              USD
            </button>
            <a href="#" className="text-gray-600 hover:text-gray-800">
              <Facebook className="w-5 h-5" />
            </a>
            <a href="#" className="text-gray-600 hover:text-gray-800">
              <Twitter className="w-5 h-5" />
            </a>
            <a href="#" className="text-gray-600 hover:text-gray-800">
              <Instagram className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
