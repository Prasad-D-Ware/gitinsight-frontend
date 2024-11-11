import axios from "axios";
import { useEffect, useState } from "react";
import ContributerCard from "./ContributerCard";

const Contributers = () => {
    const [ contributers, setContributers] = useState([]);
    const [ repo, setRepo] = useState("");
    const [ loading , setLoading ] = useState(true);

    useEffect(() => {
        const url = localStorage.getItem("url");
        fetchData(url);
    }, []);

    const fetchData = async (url) => {
        try {
            const response = await axios.post("http://localhost:3000/insight", {
                url: url,
            });

            const data = response.data;
            setContributers(data.contributers);
            setRepo(data.repo);
            setLoading(false);
        } catch (error) {
            console.error(
                "Error fetching data:",
                error.response?.data || error.message
            );
            setLoading(false);
        }
    };
    contributers.reverse();
    return (
        <div className="bg-black">
            <div className="text-center font-bold text-white text-4xl pt-14">
                The
                <span className="text-[#2A903B]"> Contributers </span>
                to the Project
            </div>
            <div className="font-semibold text-3xl text-center md:text-left md:ml-32 text-white py-6">
                Project : <a className="text-[#2A903B]"> {loading ? "Loading..." : repo} </a>
            </div>
            <div className="flex flex-col items-center gap-10 mx-3 md:mx-auto min-h-[900px]">
                {loading ? (
                    [...Array(3)].map((_, index) => (
                        <div key={index} className="animate-pulse w-full max-w-2xl">
                            <div className="h-48 bg-gray-700 rounded-lg"></div>
                        </div>
                    ))
                ) : (
                    contributers.map((contributer) => (
                        <ContributerCard key={contributer.name} contributer={contributer} />
                    ))
                )}
            </div>
        </div>
    );
};

export default Contributers;
