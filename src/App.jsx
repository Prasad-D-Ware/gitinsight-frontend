import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar.jsx';
import Home from './components/Home.jsx';
import AboutUs from './components/AboutUs.jsx';
import StudentProfile from './components/StudentProfile.jsx';

const student = {
  name: "Alice Johnson",
  gitCommits: 32,
  pullRequests: 5,
  profileImage: "https://via.placeholder.com/80?text=A",
}

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gradient-to-r from-blue-50 to-blue-100">
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<AboutUs />} />
            <Route path="/project" element={<StudentProfile student={student}/>} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
