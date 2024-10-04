"use client";
import { useState, useEffect } from "react";
import PropertyCard from "../components/PropertyCard";
import { useSearchParams } from "next/navigation";
import Loading from "./loading";

export default function Home() {
  const [properties, setProperties] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [isClient, setIsClient] = useState(false); // New state to check if it's client-side
  const searchParams = useSearchParams();
  const category = isClient ? searchParams?.get("category") || "" : ""; // Only use on client-side
  const [selectedLocation, setSelectedLocation] = useState("");

  // Check if the component is mounted on the client-side
  useEffect(() => {
    setIsClient(true);
  }, []);

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
          `http://localhost:5000/api/properties?${queryParams.toString()}`
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

    if (isClient) {
      fetchProperties(); // Only fetch properties after client-side rendering
    }
  }, [category, selectedLocation, isClient]); // Include isClient as a dependency

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
