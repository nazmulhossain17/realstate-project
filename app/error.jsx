"use client";

export default function Error({ error, reset }) {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-6 bg-gray-100">
      <div className="w-full max-w-md text-center">
        <h1 className="mb-4 text-4xl font-bold text-red-500">Oops!</h1>
        <p className="mb-6 text-lg text-gray-700">Something went wrong:</p>
        <p className="mb-4 text-sm italic text-gray-600">{error.message}</p>
        <button
          onClick={reset}
          className="px-6 py-2 text-white transition-colors bg-blue-500 rounded-md hover:bg-blue-600"
        >
          Try Again
        </button>
      </div>
    </div>
  );
}
