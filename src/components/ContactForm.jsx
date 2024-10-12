export default function ContactForm() {
  return (
    <div className="bg-white shadow-xl p-9 w-[400px] mx-8">
      <h2 className="mb-2 text-2xl font-semibold">Let Us Call You!</h2>
      <p className="mb-6 text-sm text-gray-600">
        To help you choose your property
      </p>

      <form className="space-y-4">
        <div>
          <input
            type="text"
            placeholder="Your Name"
            className="w-full px-4 py-2 border border-gray-300 rounded focus:ring-2 focus:ring-teal-500 focus:border-transparent"
          />
        </div>

        <div>
          <input
            type="email"
            placeholder="Your Email"
            className="w-full px-4 py-2 border border-gray-300 rounded focus:ring-2 focus:ring-teal-500 focus:border-transparent"
          />
        </div>

        <div>
          <textarea
            placeholder="Tell us about desired property"
            rows={3}
            className="w-full px-4 py-2 border border-gray-300 rounded focus:ring-2 focus:ring-teal-500 focus:border-transparent"
          />
        </div>

        <div className="flex items-start">
          <input
            type="checkbox"
            id="gdpr"
            className="mt-1 text-teal-500 border-gray-300 rounded focus:ring-teal-500"
          />
          <label htmlFor="gdpr" className="ml-2 text-sm text-gray-600">
            I consent to having this website store my submitted information
          </label>
        </div>

        <button
          type="submit"
          className="w-full px-4 py-2 text-white transition duration-300 bg-purple-500 rounded hover:bg-teal-600"
        >
          Submit
        </button>
      </form>
    </div>
  );
}
