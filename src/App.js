import "./App.css";
import SingleDataView from "./components/SIngleDataView/SingleDataView";
import Filters from "./components/Filters/Filters";
import List from "./components/List/List";
import { Routes, Route } from "react-router-dom";

function App() {
	return (
		<div className="container">
			<Filters />
			<List />
			<Routes>
				<Route path="/singleUser/:id" element={<SingleDataView />} />
			</Routes>
		</div>
	);
}

export default App;
