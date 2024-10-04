"use client";
import { useEffect, useState } from "react";
import { Heart, Share, Flag, Laptop, Key, Car } from "lucide-react";
import Loading from "@/app/loading";
import Image from "next/image";

export default function PropertyView({ params }) {
  const [property, setProperty] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [showAllPhotos, setShowAllPhotos] = useState(false);
  const { id } = params; // Dynamic route param

  useEffect(() => {
    if (id) {
      const fetchProperty = async () => {
        try {
          const response = await fetch(
            `http://localhost:5000/api/properties/${id}`
          );

          if (!response.ok) {
            throw new Error("Failed to fetch property details");
          }

          const data = await response.json();
          setProperty(data);
        } catch (error) {
          setError(error.message);
        } finally {
          setLoading(false);
        }
      };

      fetchProperty();
    }
  }, [id]);

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

  if (!property) {
    return <div className="p-6">No property found</div>;
  }

  return (
    <div className="px-6 pt-24 pb-8 mx-auto max-w-7xl">
      {/* Header Section */}
      <div className="space-y-4">
        <h1 className="text-2xl font-semibold">{property.title}</h1>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="flex items-center">
              <span className="font-semibold">
                ★ {property.rating || "N/A"}
              </span>
              <span className="mx-1">·</span>
              <a href="#reviews" className="underline">
                {property.reviewsCount || "No"} reviews
              </a>
            </div>
            <span className="mx-1">·</span>
            <span>{property.location || "Location not specified"}</span>
          </div>
          <div className="flex items-center gap-4">
            <button className="flex items-center gap-2 px-4 py-2 rounded-md hover:bg-gray-100">
              <Share className="w-4 h-4" />
              <span className="font-semibold underline">Share</span>
            </button>
            <button className="flex items-center gap-2 px-4 py-2 rounded-md hover:bg-gray-100">
              <Heart className="w-4 h-4" />
              <span className="font-semibold underline">Save</span>
            </button>
          </div>
        </div>
      </div>

      {/* Image Gallery */}
      <div className="relative grid grid-cols-4 gap-2 mt-6">
        <div className="col-span-2 row-span-2">
          <Image
            src={property.images[0]}
            alt={property.location}
            className="object-cover w-full h-full rounded-l-xl"
          />
        </div>
        <div className="grid grid-cols-2 col-span-2 gap-2">
          {property.images.slice(1, 5).map((image, i) => (
            <div key={i}>
              <Image
                src={image}
                alt={`Gallery ${i + 1}`}
                layout="responsive" // Optional: Set layout and dimensions
                width={500}
                height={500}
                className={`w-full h-full object-cover ${
                  i === 1 ? "rounded-tr-xl" : i === 3 ? "rounded-br-xl" : ""
                }`}
              />
            </div>
          ))}
        </div>
        <button
          onClick={() => setShowAllPhotos(true)}
          className="absolute px-4 py-2 font-semibold bg-white rounded-lg shadow-md bottom-4 right-4"
        >
          Show all photos
        </button>
      </div>

      {/* Main Content */}
      <div className="grid grid-cols-3 gap-12 mt-8">
        <div className="col-span-2">
          {/* Property Details */}
          <div className="flex justify-between pb-6 border-b">
            <div>
              <h2 className="text-xl font-semibold">
                Entire home hosted by {property.hostName}
              </h2>
              <div className="text-gray-600">
                {property.guestCount} guests · {property.roomCount} bedrooms ·{" "}
                {property.bedCount} beds · {property.bathroomCount} baths
              </div>
            </div>
            <div className="w-12 h-12 bg-gray-200 rounded-full" />{" "}
            {/* Host avatar */}
          </div>

          {/* Features */}
          <div className="py-6 space-y-6 border-b">
            <div className="flex gap-4">
              <Laptop className="w-8 h-8" />
              <div>
                <h3 className="font-semibold">Dedicated workspace</h3>
                <p className="text-gray-500">
                  A common area with wifi that&apos;s well-suited for working.
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <Key className="w-8 h-8" />
              <div>
                <h3 className="font-semibold">Self check-in</h3>
                <p className="text-gray-500">
                  You can check in with the building staff.
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <Car className="w-8 h-8" />
              <div>
                <h3 className="font-semibold">Park for free</h3>
                <p className="text-gray-500">
                  This is one of the few places in the area with free parking.
                </p>
              </div>
            </div>
          </div>

          {/* Description */}
          <div className="py-6 border-b">
            <p>{property.description}</p>
            <button className="mt-4 font-semibold underline">Show more</button>
          </div>
        </div>

        {/* Booking Widget */}
        <div className="relative">
          <div className="sticky p-6 space-y-4 border shadow-xl top-24 rounded-xl">
            <div className="flex items-start justify-between">
              <div>
                <span className="text-2xl font-semibold">
                  ${property.price}
                </span>
                <span className="text-gray-500"> night</span>
              </div>
              <div className="flex items-center gap-1">
                <span>★ {property.rating}</span>
                <span className="text-gray-500">
                  · {property.reviewsCount} reviews
                </span>
              </div>
            </div>

            <div className="border rounded-xl">
              <div className="grid grid-cols-2 border-b">
                <div className="p-3 border-r">
                  <div className="text-xs font-semibold">CHECK-IN</div>
                  <div>10/11/2024</div>
                </div>
                <div className="p-3">
                  <div className="text-xs font-semibold">CHECKOUT</div>
                  <div>11/7/2024</div>
                </div>
              </div>
              <div className="p-3">
                <div className="text-xs font-semibold">GUESTS</div>
                <div>1 guest</div>
              </div>
            </div>

            <button className="w-full bg-[#FF385C] text-white py-3 rounded-lg font-semibold">
              Reserve
            </button>

            <div className="text-center text-gray-500">
              You won&apos;t be charged yet
            </div>

            <div className="space-y-4">
              <div className="flex justify-between">
                <span className="underline">
                  ${property.pricePerNight} × 27 nights
                </span>
                <span>$3,970</span>
              </div>
              <div className="flex justify-between">
                <span className="underline">Cleaning fee</span>
                <span>$4</span>
              </div>
              <div className="flex justify-between">
                <span className="underline">Airbnb service fee</span>
                <span>$652</span>
              </div>
              <div className="flex justify-between pt-4 font-semibold border-t">
                <span>Total before taxes</span>
                <span>$4,626</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Report Link */}
      <div className="pt-6 mt-8 border-t">
        <button className="flex items-center gap-2 text-gray-600 underline">
          <Flag className="w-4 h-4" />
          Report this listing
        </button>
      </div>
    </div>
  );
}
