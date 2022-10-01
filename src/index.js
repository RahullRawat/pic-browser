import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { DataStoreProvider } from "./context/dataContext";
import { BrowserRouter } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
	<React.StrictMode>
		<BrowserRouter>
			<DataStoreProvider>
				<App />
			</DataStoreProvider>
		</BrowserRouter>
	</React.StrictMode>
);
