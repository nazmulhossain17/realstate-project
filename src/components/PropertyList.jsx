import React, { useState } from "react";
import PropertyCard from "./PropertyCard";

export default function PropertyList() {
  // Sample property data - in a real app, this would come from an API
  const [properties] = useState([
    {
      id: 1,
      title: "Home in Merrick Way",
      location: "Merrick Way, Miami, FL 33134, USA",
      type: "Single Family",
      status: "For Sale",
      price: "$540,000",
      bedrooms: 3,
      bathrooms: 3,
      area: "4300 Sq Ft",
      image:
        "https://images.unsplash.com/photo-1512915922686-57c11dde9b6b?q=80&w=2073&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: 2,
      title: "Villa in Coral Gables",
      location: "13621 Deering Bay Drive, Coral Gables, FL",
      type: "Villa",
      status: "For Sale",
      price: "$825,000",
      bedrooms: 3,
      bathrooms: 3.5,
      area: "3500 Sq Ft",
      image:
        "https://images.unsplash.com/photo-1622015663319-e97e697503ee?q=80&w=1977&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: 3,
      title: "Villa on Hollywood Boulevard",
      location: "Hatteras Lane, Hollywood, FL 33019, USA",
      type: "Villa",
      status: "For Sale",
      price: "$740,000",
      bedrooms: 3,
      bathrooms: 4,
      area: "4530 Sq Ft",
      image:
        "https://images.unsplash.com/photo-1540198837344-2d1edd9e4eb8?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
  ]);

  const [rentProperties] = useState([
    {
      id: 4,
      title: "Villa on Grand Avenue",
      location: "3015 Grand Avenue, Miami, FL",
      type: "Villa",
      status: "For Rent",
      price: "$4,750 Monthly",
      bedrooms: 4,
      bathrooms: 4,
      area: "9350 Sq Ft",
      image:
        "https://images.unsplash.com/photo-1531971589569-0d9370cbe1e5?q=80&w=2081&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: 5,
      title: "Spacious Apartment",
      location: "Miami Downtown",
      type: "Apartment",
      status: "For Rent",
      price: "$2,650 Monthly",
      bedrooms: 2,
      bathrooms: 2,
      area: "1850 Sq Ft",
      image:
        "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=2053&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: 6,
      title: "Luxury Apartment",
      location: "Miami Beach",
      type: "Apartment",
      status: "For Rent",
      price: "$2,500 Monthly",
      bedrooms: 2,
      bathrooms: 2,
      area: "1650 Sq Ft",
      image:
        "https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?q=80&w=1984&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
  ]);

  return (
    <div className="px-4 py-12 mx-auto max-w-7xl sm:px-6 lg:px-8">
      {/* For Sale Section */}
      <div className="mb-12 text-center">
        <div className="flex flex-col items-center justify-between mb-6">
          <div>
            <h2 className="justify-center text-3xl text-gray-900">
              Properties
            </h2>
            <p className="p-3 text-gray-600">
              Check out the latest properties for sale.
            </p>
          </div>
          <div className="flex justify-center space-x-2">
            <button className="flex items-center justify-center w-8 h-8 text-white bg-teal-500 rounded-full">
              1
            </button>
            <button className="flex items-center justify-center w-8 h-8 bg-gray-200 rounded-full">
              2
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3 justify-items-center">
          {properties.map((property) => (
            <PropertyCard key={property.id} property={property} />
          ))}
        </div>
      </div>

      {/* For Rent Section */}
      <div className="text-center">
        <div className="flex flex-col items-center justify-between mb-6">
          <div>
            <h2 className="text-3xl text-gray-900">For Rent</h2>
            <p className="p-3 text-gray-600">
              Check out the latest properties for rent.
            </p>
          </div>
          <div className="flex justify-center space-x-2">
            <button className="flex items-center justify-center w-8 h-8 text-white bg-teal-500 rounded-full">
              1
            </button>
            <button className="flex items-center justify-center w-8 h-8 bg-gray-200 rounded-full">
              2
            </button>
            <button className="flex items-center justify-center w-8 h-8 bg-gray-200 rounded-full">
              3
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 justify-items-center">
          {rentProperties.map((property) => (
            <PropertyCard key={property.id} property={property} />
          ))}
        </div>
      </div>
    </div>
  );
}
