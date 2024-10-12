import { useState, useEffect } from "react";

export default function Hero() {
  const images = [
    "https://www.agentadvice.com/wp-content/uploads/2020/12/shutterstock_1247473441-scaled.jpg",
    "https://blog.milesbrand.com/hubfs/LuxuryRealEstateBranding.jpg",
    "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=2075&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  ];

  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prevImage) => (prevImage + 1) % images.length);
    }, 5000); // Change image every 5 seconds
    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, [images.length]);

  return (
    <div className="relative h-[800px]">
      {/* Image Slider */}
      <img
        src={images[currentImage]}
        alt="Luxury home"
        className="absolute inset-0 object-cover w-full h-full transition-opacity duration-1000"
      />

      {/* Content over the image */}
      <div className="relative flex flex-col justify-center h-full px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="text-center lg:text-left lg:max-w-xl">
          <h1 className="mb-6 text-3xl font-bold text-white sm:text-4xl md:text-5xl lg:text-6xl">
            Find Your Dream Home
          </h1>

          <p className="mb-8 text-lg text-white sm:text-xl lg:text-2xl">
            From luxury villas to comfortable apartments, we have the perfect
            property for you.
          </p>
          <div className="flex flex-wrap justify-center gap-4 lg:justify-start">
            <button className="px-8 py-3 text-white transition duration-300 bg-purple-500 hover:bg-teal-600">
              Browse Properties
            </button>
            <button className="px-8 py-3 text-gray-800 transition duration-300 bg-white hover:bg-gray-100">
              Contact Agent
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
