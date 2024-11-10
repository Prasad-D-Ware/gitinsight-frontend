

function AboutUs() {
  return (
    <section id="about" className="container mx-auto my-16 px-6 md:px-12 text-center">
      <h2 className="text-4xl font-bold text-blue-800 mb-4">About Us</h2>
      <p className="text-gray-700 text-lg leading-relaxed max-w-2xl mx-auto mb-4">
       About Us
        Welcome to GitInsight – an AI-driven platform dedicated to promoting fair, accurate, 
        and insightful assessment of collaboration in student group projects. Our website is designed 
        to empower educators and students alike by delivering transparency in team-based work evaluation.</p>

        <h2 className="text-4xl font-bold text-blue-800 mb-4 p-1">What We Do</h2>
        <p className="text-gray-700 text-lg leading-relaxed max-w-2xl mx-auto">Our site uses advanced AI and Machine Learning tools to evaluate the contributions of each team member 
        in group programming projects. By analyzing factors like code commits, participation frequency, 
        and collaboration habits, we provide a clear picture of each student’s engagement and effort.</p>

      <button className="bg-blue-600 text-white py-2 px-4 rounded-full mt-6 hover:bg-blue-500 transition duration-300 transform hover:scale-105 shadow-lg">
        Learn More
      </button>
      
    </section>
  );
}

export default AboutUs;
