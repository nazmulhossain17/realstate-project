"use client";
import { useState, useEffect } from "react";
import PropertyCard from "./components/PropertyCard";
import { useSearchParams } from "next/navigation";
import Loading from "./loading";

export default function Home() {
  const [properties, setProperties] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const searchParams = useSearchParams();
  const category = searchParams?.get("category") || ""; // Get category from URL
  const [selectedLocation, setSelectedLocation] = useState("");

  useEffect(() => {
    const fetchProperties = async () => {
      setLoading(true); // Reset loading state on fetch
      try {
        const queryParams = new URLSearchParams();

        // Add category to the query params if it's selected
        if (category) {
          queryParams.append("category", category);
        }

        // Add selected location to the query params if it's provided
        if (selectedLocation) {
          queryParams.append("location", selectedLocation); // Assuming the API accepts 'location'
        }

        const response = await fetch(
          `https://airbnb-node-api-nazmulhossain17-nazmulhossain17s-projects.vercel.app/api/properties?${queryParams.toString()}`
        );

        if (!response.ok) {
          throw new Error("Failed to fetch properties");
        }

        const data = await response.json();
        console.log("Fetched properties:", data);
        setProperties(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchProperties();
  }, [category, selectedLocation]); // Fetch whenever category or selected location changes

  if (loading) {
    return (
      <div className="p-6">
        <Loading />
      </div>
    );
  }

  if (error) {
    return <div className="p-6 text-red-500">Error: {error}</div>;
  }

  return (
    <div className="m-12 mt-20 p-9">
      {/* Include the SearchFilter */}
      <div className="grid grid-cols-1 gap-6 mt-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6">
        {properties.map((property) => (
          <PropertyCard key={property._id} property={property} />
        ))}
      </div>
    </div>
  );
}
