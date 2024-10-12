export default function HeroCard() {
  return (
    <div
      className="relative bg-center bg-cover h-96" // Keeping the height as h-96
      style={{
        backgroundImage:
          'url("https://images.unsplash.com/photo-1501855901885-8b29fa615daf?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")',
        backgroundAttachment: "fixed", // Added this line for the fixed background effect
      }}
    >
      <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50">
        <div className="text-center text-white">
          <h1 className="text-3xl font-bold">
            Looking to Buy a new property or Sell an existing one?
          </h1>
          <p className="mt-4 text-lg">
            RealHomes provides an awesome solution!
          </p>
          <div className="mt-6">
            <button className="px-6 py-2 font-semibold text-white bg-purple-800 rounded hover:bg-orange-600">
              Submit Property
            </button>
            <button className="px-6 py-2 ml-4 font-semibold border border-purple-800 rounded hover:bg-orange-500 hover:text-white">
              Browse Properties
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
