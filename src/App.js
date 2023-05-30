import React from "react";
import { HashRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./components/Homepage";
import AboutPage from "./components/Aboutpage";
import Navbar from "./components/Navbar";
import ServicesPage from "./components/Servicespage";
import ResultsPage from "./components/Resultspage";

function App() {
	return (
		<Router>
			<Navbar />
			<Routes>
				<Route path="/" element={<HomePage />} />
				<Route path="/about" element={<AboutPage />} />
				<Route path="/services" element={<ServicesPage />} />
				<Route path="/results" element={<ResultsPage />} />
			</Routes>
		</Router>
	);
}

export default App;
