import { Phone } from "lucide-react";

export default function Navbar() {
  return (
    <nav className="absolute inset-x-0 top-0 z-30">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <img
              src="/src/assets/navlogo.png"
              alt="Real Homes"
              className="w-auto h-10"
            />
          </div>

          <div className="items-center hidden space-x-8 md:flex">
            {/* Home button with background color */}
            <a
              href="#"
              className="px-3 py-2 text-white bg-red-600 font-tahoma hover:bg-rose-600"
            >
              Home
            </a>
            <a href="#" className="text-white font-tahoma hover:text-red-500">
              Real Estate
            </a>
            <a href="#" className="text-white font-tahoma hover:text-red-500">
              Property
            </a>
            <a href="#" className="text-white font-tahoma hover:text-red-500">
              Blog
            </a>
            <a href="#" className="text-white font-tahoma hover:text-red-500">
              Contact
            </a>
          </div>

          <div className="flex items-center space-x-4">
            <div className="items-center hidden md:flex">
              <Phone className="w-5 h-5 text-orange-500" />
              <span className="ml-2 font-medium text-white">
                1-800-555-1234
              </span>
            </div>
            <button className="px-4 py-2 font-medium text-white bg-purple-800 hover:bg-purple-600">
              Submit
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
