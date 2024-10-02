"use client";
import { useState, useEffect, useRef } from "react";
import { Search, Calendar, Users } from "lucide-react";

const SearchFilter = () => {
  const [activeDropdown, setActiveDropdown] = useState(null);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setActiveDropdown(null);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const suggestedDestinations = [
    {
      name: "Toronto, Canada",
      description: "For sights like CN Tower",
      icon: "🏛️",
    },
    {
      name: "Bangkok, Thailand",
      description: "For its bustling nightlife",
      icon: "🏯",
    },
    {
      name: "London, United Kingdom",
      description: "For its stunning architecture",
      icon: "🌉",
    },
    {
      name: "New York City, NY",
      description: "For its top-notch dining",
      icon: "🗽",
    },
    {
      name: "Vancouver, Canada",
      description: "For sights like Stanley Park",
      icon: "🌲",
    },
  ];

  const [guestCounts, setGuestCounts] = useState({
    Adults: 0,
    Children: 0,
    Infants: 0,
    Pets: 0,
  });

  const updateGuestCount = (type, increment) => {
    setGuestCounts((prev) => ({
      ...prev,
      [type]: Math.max(0, prev[type] + (increment ? 1 : -1)),
    }));
  };

  return (
    <div className="flex-1 md:flex-none md:w-auto" ref={dropdownRef}>
      <div className="relative flex items-center justify-center mx-auto transition duration-300 bg-white border rounded-full shadow-sm hover:shadow-md max-w-[850px]">
        {/* Where Section */}
        <div className="relative">
          <button
            onClick={() =>
              setActiveDropdown(
                activeDropdown === "destination" ? null : "destination"
              )
            }
            className={`flex items-center h-[40px] px-4 text-left rounded-l-full hover:bg-gray-100 transition duration-200
              ${activeDropdown === "destination" ? "bg-gray-100" : ""}`}
          >
            <span className="hidden text-sm font-medium md:block">
              Anywhere
            </span>
            <span className="block text-sm font-medium md:hidden">Search</span>
          </button>

          {/* Destination Dropdown */}
          {activeDropdown === "destination" && (
            <div className="absolute left-0 w-80 bg-white rounded-2xl shadow-xl border p-4 z-50 top-[calc(100%+24px)]">
              <h3 className="mb-4 font-semibold">Suggested destinations</h3>
              <div className="space-y-2">
                {suggestedDestinations.map((dest) => (
                  <div
                    key={dest.name}
                    className="flex items-center gap-3 p-3 transition duration-200 rounded-lg cursor-pointer hover:bg-gray-50"
                  >
                    <span className="text-2xl">{dest.icon}</span>
                    <div>
                      <div className="font-semibold">{dest.name}</div>
                      <div className="text-sm text-gray-500">
                        {dest.description}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Divider */}
        <div className="h-[24px] w-[1px] bg-gray-200 hidden md:block" />

        {/* Check in Section */}
        <div className="relative hidden md:block">
          <button
            onClick={() =>
              setActiveDropdown(
                activeDropdown === "calendar" ? null : "calendar"
              )
            }
            className={`flex items-center h-[40px] px-4 text-left hover:bg-gray-100 transition duration-200
              ${activeDropdown === "calendar" ? "bg-gray-100" : ""}`}
          >
            <span className="text-sm font-medium">Any week</span>
          </button>

          {/* Calendar Dropdown */}
          {activeDropdown === "calendar" && (
            <div className="absolute left-1/2 -translate-x-1/2 w-[500px] bg-white rounded-2xl shadow-xl border p-4 z-50 top-[calc(100%+24px)]">
              <div className="flex gap-4 mb-4">
                <button className="px-4 py-2 text-sm font-semibold bg-gray-100 rounded-full">
                  Dates
                </button>
                <button className="px-4 py-2 text-sm transition duration-200 rounded-full hover:bg-gray-100">
                  Months
                </button>
                <button className="px-4 py-2 text-sm transition duration-200 rounded-full hover:bg-gray-100">
                  Flexible
                </button>
              </div>
              <div className="flex justify-center gap-4">
                <div className="w-[220px] h-[240px] bg-gray-50 rounded-lg flex items-center justify-center text-gray-400">
                  Calendar
                </div>
                <div className="w-[220px] h-[240px] bg-gray-50 rounded-lg flex items-center justify-center text-gray-400">
                  Calendar
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Divider */}
        <div className="h-[24px] w-[1px] bg-gray-200 hidden md:block" />

        {/* Guests Section */}
        <div className="relative hidden md:block">
          <button
            onClick={() =>
              setActiveDropdown(activeDropdown === "guests" ? null : "guests")
            }
            className={`flex items-center h-[40px] px-4 text-left hover:bg-gray-100 transition duration-200
              ${activeDropdown === "guests" ? "bg-gray-100" : ""}`}
          >
            <span className="text-sm font-medium">
              {Object.values(guestCounts).reduce((a, b) => a + b, 0) > 0
                ? `${Object.values(guestCounts).reduce(
                    (a, b) => a + b,
                    0
                  )} guests`
                : "Add guests"}
            </span>
          </button>

          {/* Guests Dropdown */}
          {activeDropdown === "guests" && (
            <div className="absolute right-0 w-80 bg-white rounded-2xl shadow-xl border p-4 z-50 top-[calc(100%+24px)]">
              <div className="space-y-4">
                {Object.keys(guestCounts).map((type, index) => (
                  <div key={type} className="flex items-center justify-between">
                    <div>
                      <div className="font-semibold">{type}</div>
                      <div className="text-sm text-gray-500">
                        {index === 0 && "Ages 13 or above"}
                        {index === 1 && "Ages 2-12"}
                        {index === 2 && "Under 2"}
                        {index === 3 && "Bringing a service animal?"}
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <button
                        onClick={() => updateGuestCount(type, false)}
                        className={`flex items-center justify-center w-8 h-8 rounded-full border transition duration-200
                          ${
                            guestCounts[type] === 0
                              ? "border-gray-200 text-gray-300 cursor-not-allowed"
                              : "border-gray-400 text-gray-600 hover:border-gray-600"
                          }`}
                        disabled={guestCounts[type] === 0}
                      >
                        -
                      </button>
                      <span className="w-4 text-center">
                        {guestCounts[type]}
                      </span>
                      <button
                        onClick={() => updateGuestCount(type, true)}
                        className="flex items-center justify-center w-8 h-8 text-gray-600 transition duration-200 border border-gray-400 rounded-full hover:border-gray-600"
                      >
                        +
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Search Button */}
        <button className="flex items-center gap-2 h-[40px] px-4 text-white transition duration-300 rounded-full bg-rose-500 hover:bg-rose-600">
          <Search size={16} />
          <span className="hidden font-medium md:block">Search</span>
        </button>
      </div>
    </div>
  );
};

export default SearchFilter;
