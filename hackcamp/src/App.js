import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Landing from './screens/landing/Landing';
import VaxTestMap from './screens/Map/VaxTestMap'; 

function AppRoutes(props) {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Landing />}/>
				<Route path="/graph" element={<Landing />}/>
				<Route path="/stats" element={<VaxTestMap />}/>
				<Route path="/restrictions" element={<Landing />}/>
			</Routes>
		</BrowserRouter>
	)
}

function App() {
	return (
		<>
			<AppRoutes />
		</>
	);
}

export default App;
