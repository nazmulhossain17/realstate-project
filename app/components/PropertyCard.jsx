import Link from "next/link";
import { Heart } from "lucide-react";

const PropertyCard = ({ property }) => (
  <Link href={`/property/${property._id}`}>
    <div className="flex flex-col space-y-2 cursor-pointer">
      <div className="relative aspect-[1/1] w-full overflow-hidden rounded-xl">
        <img
          src={property.images[0]}
          alt={property.location}
          className="object-cover w-full h-full transition hover:scale-105"
        />
        <button
          className="absolute top-3 right-3 p-1.5 hover:opacity-80"
          aria-label="Add to favorites"
        >
          <Heart className="w-6 h-6 text-white stroke-[2] fill-transparent hover:fill-red-500 transition-all" />
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

export default PropertyCard;
