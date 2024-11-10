import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar.jsx";
import Home from "./components/Home.jsx";
import AboutUs from "./components/AboutUs.jsx";
import Contributers from "./components/Contributers.jsx";

function App() {
    return (
        <Router>
            <div className="">
                <Navbar />
                <main>
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/about" element={<AboutUs />} />
                        <Route
                            path="/contributers"
                            element={<Contributers />}
                        />
                    </Routes>
                </main>
            </div>
        </Router>
    );
}

export default App;
