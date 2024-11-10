import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Home() {
    const [ url, setUrl ] = useState("");
    const navigate = useNavigate();
    
    const handleSubmit = () => {
        localStorage.setItem("url", url);
        navigate("/contributers");
    };

    return (
        <div className="bg-black h-screen">
            <section
                id="home"
                className="container mx-auto px-6 md:px-12 text-center pt-60"
            >
                <div className="absolute inset-0 [mask-image:linear-gradient(to_bottom,transparent,black_10%,black_70%,transparent)]">
                    <div
                        className="absolute inset-0 -z-30 opacity-5"
                        style={{
                            backgroundImage: `url(grain.jpg)`,
                        }}
                    ></div>
                    <div className="size-[620px] hero-ring hidden md:block"></div>
                    <div className="size-[820px] hero-ring hidden md:block"></div>
                    <div className="size-[1020px] hero-ring hidden md:block"></div>
                    <div className="size-[1220px] hero-ring hidden md:block"></div>
                </div>
                <h2 className="text-3xl md:text-6xl font-extrabold text-white mb-4">
                    <span className="text-[#2A903B]">Git</span>Insight
                </h2>
                <p className="text-lg text-gray-400 mb-8">
                    Get contributions of your team on one click
                </p>

                {/* Interactive Search Box */}
                <div className="flex justify-center relative gap-10">
                    <input
                        type="text"
                        placeholder="Give your github repository..."
                        className="p-3 w-full max-w-md text-white rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400 transition duration-200 relative bg-transparent"
                        onChange={(e) => setUrl(e.target.value)}
                    />
                </div>
                <button
                    className="mt-6 bg-[#2A903B] text-white rounded-lg hover:bg-green-400  transition duration-300 transform hover:scale-105 px-6 py-3"
                    onClick={handleSubmit}
                >
                    Get Insights
                </button>
            </section>
        </div>
    );
}

export default Home;
