import Link from "next/link";
import { Heart } from "lucide-react";
import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react"; // Import icons
import Image from "next/image";

const PropertyCard = ({ property }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Auto-slide functionality
  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === property.images.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000); // Change the image every 5 seconds

    return () => clearInterval(intervalId); // Clean up the interval on unmount
  }, [property.images.length]);

  const handleNext = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === property.images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const handlePrev = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? property.images.length - 1 : prevIndex - 1
    );
  };

  return (
    <Link href={`/property/${property._id}`}>
      <div className="flex flex-col space-y-2 cursor-pointer">
        <div className="relative aspect-[1/1] w-full overflow-hidden rounded-xl">
          <Image
            src={property.images[currentImageIndex]}
            alt={property.location}
            className="object-cover w-full h-full transition hover:scale-105"
          />
          <button
            className="absolute top-3 right-3 p-1.5 hover:opacity-80"
            aria-label="Add to favorites"
          >
            <Heart className="w-6 h-6 text-white stroke-[2] fill-transparent hover:fill-red-500 transition-all" />
          </button>

          {/* Image Navigation Buttons */}
          <button
            className="absolute p-2 text-white transition transform -translate-y-1/2 bg-black bg-opacity-50 rounded-full top-1/2 left-2 hover:bg-opacity-75"
            onClick={handlePrev}
          >
            <ChevronLeft className="w-4 h-4" />
          </button>
          <button
            className="absolute p-2 text-white transition transform -translate-y-1/2 bg-black bg-opacity-50 rounded-full top-1/2 right-2 hover:bg-opacity-75"
            onClick={handleNext}
          >
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>

        <div className="flex items-start justify-between pt-2">
          <div className="flex-grow">
            <h3 className="font-medium truncate">{property.locationValue}</h3>
            <p className="text-sm text-gray-500">{property.views}</p>
          </div>
          {property.rating && (
            <div className="flex items-center gap-1 min-w-fit">
              <span>★</span>
              <span>{property.rating}</span>
            </div>
          )}
        </div>

        <div className="flex items-baseline gap-1">
          <span className="font-semibold">${property.pricePerNight}</span>
          <span>night</span>
          <span className="text-gray-500">· ${property.price} total</span>
        </div>
      </div>
    </Link>
  );
};

export default PropertyCard;
