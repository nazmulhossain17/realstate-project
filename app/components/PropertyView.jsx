import { useState } from "react";
import { Heart, Share, Flag, Laptop, Key, Car } from "lucide-react";

export default function PropertyView({ params }) {
  const [showAllPhotos, setShowAllPhotos] = useState(false);

  return (
    <div className="px-6 pt-24 pb-8 mx-auto max-w-7xl">
      {/* Header Section */}
      <div className="space-y-4">
        <h1 className="text-2xl font-semibold">
          Jannat view Mashobra, 3BHK AC Rooms Duplex Home
        </h1>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="flex items-center">
              <span className="font-semibold">★ 4.85</span>
              <span className="mx-1">·</span>
              <a href="#reviews" className="underline">
                150 reviews
              </a>
            </div>
            <span className="mx-1">·</span>
            <span>Mashobra, India</span>
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
          <img
            src="/images/main.jpg"
            alt="Property"
            className="object-cover w-full h-full rounded-l-xl"
          />
        </div>
        <div className="grid grid-cols-2 col-span-2 gap-2">
          {[1, 2, 3, 4].map((i) => (
            <div key={i}>
              <img
                src={`/images/gallery-${i}.jpg`}
                alt={`Gallery ${i}`}
                className={`w-full h-full object-cover ${
                  i === 2 ? "rounded-tr-xl" : i === 4 ? "rounded-br-xl" : ""
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
                Entire home hosted by Palak
              </h2>
              <div className="text-gray-600">
                8 guests · 3 bedrooms · 3 beds · 3 baths
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
                  A common area with wifi that's well-suited for working.
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
            <p>The Jannat View, Mashobra central heated Duplex Villa 3bhk.</p>
            <p className="mt-4">
              Not a stand alone property, it's in a building top two Floors.
              House would independently be yours
            </p>
            <button className="mt-4 font-semibold underline">Show more</button>
          </div>
        </div>

        {/* Booking Widget */}
        <div className="relative">
          <div className="sticky p-6 space-y-4 border shadow-xl top-24 rounded-xl">
            <div className="flex items-start justify-between">
              <div>
                <span className="text-2xl font-semibold">$147</span>
                <span className="text-gray-500"> night</span>
              </div>
              <div className="flex items-center gap-1">
                <span>★ 4.85</span>
                <span className="text-gray-500">· 150 reviews</span>
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
              You won't be charged yet
            </div>

            <div className="space-y-4">
              <div className="flex justify-between">
                <span className="underline">$147 × 27 nights</span>
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
