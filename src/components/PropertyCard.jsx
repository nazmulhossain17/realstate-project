import { Heart, Share2 } from "lucide-react";

export default function PropertyCard({ property }) {
  return (
    <div className="w-full overflow-hidden bg-white shadow-md ">
      <div className="relative">
        <img
          src={property.image}
          alt={property.title}
          className="object-cover w-full h-48"
        />
        <div className="absolute px-2 py-1 text-sm bg-white rounded top-4 left-4">
          {property.type}
        </div>
        {property.status && (
          <div className="absolute px-2 py-1 text-sm text-white bg-orange-500 rounded top-4 right-4">
            {property.status}
          </div>
        )}
      </div>

      <div className="p-4">
        <h3 className="text-lg font-semibold">{property.title}</h3>
        <p className="mt-1 text-sm text-gray-500">{property.location}</p>

        <div className="flex items-center justify-between mt-4">
          <div className="flex space-x-4">
            <div className="flex items-center">
              <span className="text-gray-600">{property.bedrooms}</span>
              <span className="ml-1">Beds</span>
            </div>
            <div className="flex items-center">
              <span className="text-gray-600">{property.bathrooms}</span>
              <span className="ml-1">Baths</span>
            </div>
            <div className="flex items-center">
              <span className="text-gray-600">{property.area}</span>
              <span className="ml-1">Sq Ft</span>
            </div>
          </div>
        </div>

        <div className="flex items-center justify-between pt-4 mt-4 border-t">
          <div className="font-semibold text-teal-500">{property.price}</div>
          <div className="flex space-x-2">
            <button className="p-2 rounded hover:bg-gray-100">
              <Heart className="w-5 h-5 text-gray-500" />
            </button>
            <button className="p-2 rounded hover:bg-gray-100">
              <Share2 className="w-5 h-5 text-gray-500" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
