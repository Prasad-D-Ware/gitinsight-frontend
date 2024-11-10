/* eslint-disable react/prop-types */

const studentsData = [
  {
    name: "Alice Johnson",
    gitCommits: 32,
    pullRequests: 5,
    profileImage: "https://via.placeholder.com/80?text=A",
  },
  {
    name: "Bob Smith",
    gitCommits: 45,
    pullRequests: 10,
    profileImage: "https://via.placeholder.com/80?text=B",
  },
  {
    name: "Charlie Brown",
    gitCommits: 25,
    pullRequests: 4,
    profileImage: "https://via.placeholder.com/80?text=C",
  },
  {
    name: "Daisy Adams",
    gitCommits: 38,
    pullRequests: 7,
    profileImage: "https://via.placeholder.com/80?text=D",
  },
  {
    name: "Eve Green",
    gitCommits: 29,
    pullRequests: 6,
    profileImage: "https://via.placeholder.com/80?text=E",
  },
];

// StudentProfile component
const StudentProfile = ({ student }) => {
  return (
    <div className="bg-white p-5 rounded-lg shadow-lg flex items-center gap-4 max-w-xs">
      <div className="bg-white p-1 rounded-full">
        <img
          // eslint-disable-next-line react/prop-types
          src={student.profileImage}
          alt="Profile"
          className="w-20 h-20 rounded-full"
        />
      </div>
      <div className="flex flex-col">
        <h2 className="text-xl font-bold text-black">{student.name}</h2>
        <p className="text-gray-700">Git Commits: {student.gitCommits}</p>
        <p className="text-gray-700">Pull Requests: {student.pullRequests}</p>
      </div>
    </div>
  );
};

// Main App component
// function App() {
//   return (
//     <div className="bg-blue-900 text-white w-full h-full flex flex-col items-center justify-center">
//       <h1 className="text-3xl font-bold text-yellow-400 mb-8">Student Profiles</h1>
//       <div className="flex flex-wrap gap-4 justify-center max-w-4xl w-full">
//         {studentsData.map((student, index) => (
//           <StudentProfile key={index} student={student} />
//         ))}
//       </div>
//     </div>
//   );
// }

//export default App;
export default StudentProfile;
