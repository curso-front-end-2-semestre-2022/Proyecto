import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './index.css';
// import pages
import Home from './pages/Home';
import About from './pages/About';
import MainCocktail from './pages/MainCocktail';
import Error from './pages/Error';
import Navbar from './components/Navbar';

function App() {
	return (
		<div>
		  <Router>
			<Navbar />	
			<Routes>
			  <Route path="/" element={<Home />} />
			  <Route path="/about" element={<About />} />
			  <Route path="/cocktail/:id" element={<MainCocktail />} />
			  <Route path="*" element={<Error />} />
			</Routes>
		  </Router>
		</div>
  );
}

export default App;
