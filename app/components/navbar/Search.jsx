"use client";
import { useState, useEffect, useRef } from "react";
import { Search } from "lucide-react";

const SearchFilter = ({ onSearch }) => {
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const dropdownRef = useRef(null);
  const [selectedLocation, setSelectedLocation] = useState("");

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setActiveDropdown(null);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

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

  const locations = [
    "Toronto, Canada",
    "Bangkok, Thailand",
    "London, United Kingdom",
    "New York City, NY",
    "Vancouver, Canada",
  ];

  const filteredLocations = locations.filter((location) =>
    location.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleSearch = () => {
    // Call the onSearch prop with the selected location
    if (selectedLocation) {
      onSearch(selectedLocation);
    }
  };

  return (
    <div className="flex-1 md:flex-none md:w-auto" ref={dropdownRef}>
      <div className="relative flex items-center justify-between mx-auto transition duration-300 bg-white border rounded-full shadow-sm hover:shadow-md max-w-[850px]">
        {/* Anywhere Section */}
        <div className="relative hidden md:block">
          <button
            onClick={() =>
              setActiveDropdown(
                activeDropdown === "location" ? null : "location"
              )
            }
            className={`flex items-center h-[40px] px-4 text-left hover:bg-gray-100 transition duration-200
              ${activeDropdown === "location" ? "bg-gray-100" : ""}`}
          >
            <span className="text-sm font-medium">
              {selectedLocation || "Anywhere"}
            </span>
          </button>

          {/* Locations Dropdown */}
          {activeDropdown === "location" && (
            <div className="absolute right-0 w-80 bg-white rounded-2xl shadow-xl border p-4 z-50 top-[calc(100%+24px)]">
              <input
                type="text"
                placeholder="Search destinations"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full p-2 mb-4 border rounded-lg focus:outline-none"
              />
              <div className="space-y-4">
                {filteredLocations.length > 0 ? (
                  filteredLocations.map((location) => (
                    <div
                      key={location}
                      className="flex items-center p-2 rounded-lg cursor-pointer hover:bg-gray-100"
                      onClick={() => {
                        setSelectedLocation(location);
                        setActiveDropdown(null);
                      }}
                    >
                      <span className="text-sm font-medium">{location}</span>
                    </div>
                  ))
                ) : (
                  <div className="p-2 text-gray-500">No results found</div>
                )}
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
        <button
          onClick={handleSearch} // Trigger search on click
          className="flex items-center gap-2 h-[40px] px-4 text-white transition duration-300 rounded-full bg-rose-500 hover:bg-rose-600"
        >
          <Search size={16} />
          <span className="hidden font-medium md:block">Search</span>
        </button>
      </div>
    </div>
  );
};

export default SearchFilter;
