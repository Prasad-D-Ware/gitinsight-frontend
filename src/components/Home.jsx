

function Home() {
  return (
    <section id="home" className="container mx-auto my-16 px-6 md:px-12 text-center">
      <h2 className="text-4xl font-extrabold text-blue-800 mb-4">
        Welcome to GitInsight
      </h2>
      <p className="text-lg text-gray-700 mb-8">
        Start your journey by searching below
      </p>

      {/* Interactive Search Box */}
      <div className="flex justify-center">
        <input
          type="text"
          placeholder="Type to search..."
          className="p-3 w-full max-w-md rounded-l-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400 transition duration-200"
        />
        <button className="bg-blue-600 text-white px-6 rounded-r-lg hover:bg-blue-500 transition duration-300 transform hover:scale-105">
          Search
        </button>
      </div>
    </section>
  );
}

export default Home;
