import {
  Phone,
  Mail,
  ArrowUp,
  Home,
  Building2,
  LandPlot,
  Hotel,
  Facebook,
  Twitter,
  Linkedin,
  Instagram,
  Youtube,
  Rss,
} from "lucide-react";

const socialIcons = {
  facebook: Facebook,
  twitter: Twitter,
  linkedin: Linkedin,
  instagram: Instagram,
  youtube: Youtube,
  rss: Rss,
};

const PartnerIcon = ({ icon: Icon, name }) => (
  <div className="flex flex-col items-center p-4 transition-all group">
    <div className="relative">
      {/* Background circle with gradient */}
      <div className="absolute inset-0 transition-transform duration-300 transform rounded-full bg-gradient-to-br from-gray-100 to-gray-200 group-hover:scale-110" />

      {/* Icon container */}
      <div className="relative p-6 text-gray-500 transition-colors group-hover:text-teal-600">
        <Icon size={32} strokeWidth={1.5} />
      </div>
    </div>
    <span className="mt-3 text-sm font-medium text-gray-600 transition-colors group-hover:text-teal-600">
      {name}
    </span>
  </div>
);

const Partners = () => {
  const partners = [
    { name: "Lixpe Homes", Icon: Home },
    { name: "AA Builders", Icon: Building2 },
    { name: "The Capital", Icon: LandPlot },
    { name: "Rosewood Homes", Icon: Hotel },
    { name: "Ironwood Apartments", Icon: Hotel },
  ];

  return (
    <div className="py-16 bg-white">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="mb-12 text-center">
          <h2 className="mt-2 text-3xl font-bold text-gray-900">Partners</h2>
          <p className="mt-4 text-gray-600">
            We are honored to have these amazing partners.
          </p>
        </div>
        <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-5 justify-items-center">
          {partners.map((partner, index) => (
            <PartnerIcon key={index} icon={partner.Icon} name={partner.name} />
          ))}
        </div>
      </div>
    </div>
  );
};

const Footer = () => {
  return (
    <>
      <Partners />
      <footer className="pt-16 pb-8 text-gray-300 bg-gray-900">
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-12 mb-16 md:grid-cols-4">
            {/* Logo and Description */}
            <div className="col-span-1">
              <div className="flex items-center gap-2 text-white">
                <Home size={24} />
                <span className="text-xl font-semibold">Real Homes</span>
              </div>
              <p className="mt-4 text-sm text-gray-400">Real Estate</p>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="mb-4 font-semibold text-white">Quick Links</h3>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="transition-colors hover:text-teal-500">
                    Home
                  </a>
                </li>
                <li>
                  <a href="#" className="transition-colors hover:text-teal-500">
                    Blog
                  </a>
                </li>
                <li>
                  <a href="#" className="transition-colors hover:text-teal-500">
                    List Layout
                  </a>
                </li>
                <li>
                  <a href="#" className="transition-colors hover:text-teal-500">
                    Contact
                  </a>
                </li>
              </ul>
            </div>

            {/* Contact Us */}
            <div>
              <h3 className="mb-4 font-semibold text-white">Contact Us</h3>
              <address className="space-y-4 not-italic">
                <p>3015 Grand Ave, Coconut Grove,</p>
                <p>Merrick Way, FL 12345</p>
                <p className="flex items-center gap-2">
                  <Phone size={16} />
                  <a
                    href="tel:+123-456-789"
                    className="transition-colors hover:text-teal-500"
                  >
                    +123-456-789
                  </a>
                </p>
                <p className="flex items-center gap-2">
                  <Mail size={16} />
                  <a
                    href="mailto:sales@example.com"
                    className="transition-colors hover:text-teal-500"
                  >
                    sales@example.com
                  </a>
                </p>
              </address>
            </div>

            {/* Newsletter */}
            <div>
              <h3 className="mb-4 font-semibold text-white">Remain Updated</h3>
              <form className="space-y-4">
                <input
                  type="email"
                  placeholder="Your email address"
                  className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded focus:outline-none focus:border-teal-500"
                />
                <button
                  type="submit"
                  className="px-6 py-2 text-white transition-colors bg-teal-500 rounded hover:bg-teal-600"
                >
                  Sign up
                </button>
              </form>
            </div>
          </div>

          {/* Social Media Links */}
          <div className="flex gap-4">
            {Object.keys(socialIcons).map((social) => {
              const Icon = socialIcons[social];
              return (
                <a
                  key={social}
                  href={`#${social}`}
                  className="text-gray-400 transition-colors hover:text-teal-500"
                  aria-label={social}
                >
                  <Icon className="w-5 h-5" />
                </a>
              );
            })}
          </div>

          {/* Credit */}
          <div className="mt-8 text-sm text-center text-gray-400">
            <p>Designed by Nazmul Hossain</p>
          </div>
        </div>

        {/* Scroll to top button */}
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="fixed p-2 text-white transition-colors bg-teal-500 rounded-full shadow-lg bottom-8 right-8 hover:bg-teal-600"
          aria-label="Scroll to top"
        >
          <ArrowUp size={20} />
        </button>
      </footer>
    </>
  );
};

export default Footer;
