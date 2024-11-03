import React from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import Navbar from "./components/Navbar";
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import ProjectDetail1 from './components/ProjectDetail1'; // Page de détail pour le premier projet PHP
import ProjectDetail2 from './components/ProjectDetail2'; // Page de détail pour le second projet PHP
import Contact from './components/Contact';
import Footer from './components/Footer';
import Technologies from "./components/Technologies";
import AndroidGames from "./components/AndroidGames";

const App = () => {
    const location = useLocation(); // Get the current location

    // Determine whether to show the Navbar based on the current pathname
    const showNavbar = !['/projects/website-restaurant', '/projects/pet-boarding'].includes(location.pathname);

    return (
        <div className="text-gray-800 bg-gray-50">
            {showNavbar && <Navbar />} {/* Conditionally render the Navbar */}
            <Routes>
                <Route path="/" element={
                    <>
                        <Hero/>
                        <About/>
                        <Technologies/>
                        <Projects/>
                        <AndroidGames/>
                        <Contact/>
                    </>
                } />
                <Route path="/projects/website-restaurant" element={<ProjectDetail1 />} />
                <Route path="/projects/pet-boarding" element={<ProjectDetail2 />} />
            </Routes>
            <Footer/>
        </div>
    );
}

const AppWrapper = () => {
    return (
        <Router>
            <App />
        </Router>
    );
};

export default AppWrapper;
