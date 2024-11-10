import { IoMdAdd } from "react-icons/io";
import { MdDelete } from "react-icons/md";

// StudentProfile component
const ContributerCard = ({ contributer }) => {
    return (
        <div className="bg-white p-5 w-full md:w-[480px] rounded-lg shadow-2xl border border-white shadow-slate-500 flex items-center gap-4  hover:scale-110 transition ease-in-out ">
            <div className="bg-white p-1 rounded-full border border-black  ">
                <img
                    src={contributer.profilePic}
                    alt="Profile"
                    className="w-16 h-16 md:w-24 md:h-24 rounded-full"
                />
            </div>
            <div className="flex flex-col w-2/3">
                <h2 className="text-xl md:text-3xl font-extrabold text-black">
                    {contributer.name}
                </h2>
                <p className="text-gray-700 text-base md:text-2xl">
                    Commits:
                    <span className="font-bold"> {contributer.commits}</span>
                </p>
                <div className="flex gap-10 text-2xl font-bold">
                    <p className="text-green-700 flex items-center">
                        <IoMdAdd size={22} />
                        {contributer.additions}
                    </p>
                    <p className="text-red-700 flex items-center">
                        <MdDelete size={22} />
                        {contributer.deletions}
                    </p>
                </div>
            </div>
        </div>
    );
};

export default ContributerCard;
