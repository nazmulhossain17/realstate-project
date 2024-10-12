export default function SearchBar() {
  return (
    <div className="px-4 mx-auto -mt-8 max-w-7xl sm:px-6 lg:px-8">
      <div className="p-8 bg-white shadow-lg">
        <div className="grid grid-cols-1 gap-4 md:grid-cols-3 lg:grid-cols-4">
          <div>
            <label className="block mb-2 text-sm font-medium text-gray-700">
              Location
            </label>
            <select className="w-full border-gray-300 rounded focus:ring-2 focus:ring-teal-500 focus:border-transparent">
              <option>All Locations</option>
            </select>
          </div>
          <div>
            <label className="block mb-1 text-sm font-medium text-gray-700">
              Property Status
            </label>
            <select className="w-full border-gray-300 rounded focus:ring-2 focus:ring-teal-500 focus:border-transparent">
              <option>Any</option>
            </select>
          </div>
          <div>
            <label className="block mb-1 text-sm font-medium text-gray-700">
              Property Type
            </label>
            <select className="w-full border-gray-300 rounded focus:ring-2 focus:ring-teal-500 focus:border-transparent">
              <option>All Types</option>
            </select>
          </div>
          <div className="flex items-end">
            <button className="flex items-center justify-center w-full text-white transition duration-300 bg-purple-500 h-11 hover:bg-teal-600">
              <svg
                className="w-5 h-5 mr-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
              Search
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
