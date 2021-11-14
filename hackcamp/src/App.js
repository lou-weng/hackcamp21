import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Landing from './screens/landing/Landing';
import Restrictions from './screens/news/News';

function AppRoutes(props) {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Landing />}/>
				<Route path="/graph" element={<Landing />}/>
				<Route path="/stats" element={<Landing />}/>
				<Route path="/news" element={<Restrictions />}/>
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
