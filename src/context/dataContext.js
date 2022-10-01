import { useContext, createContext, useEffect, useReducer } from "react";
import { dataReducer } from "../reducer/dataReducer";

const DataStoreContext = createContext(null);

const DataStoreProvider = ({ children }) => {
	const [dataStore, dataDispatch] = useReducer(dataReducer, {
		data: [],
		sliderRange: 0,
		sortBy: null,
	});

	const fetchUsers = async () => {
		await fetch("https://www.reddit.com/r/pics/.json?jsonp=")
			.then((res) => res.json())
			.then((data) =>
				dataDispatch({ type: "INITIAL_DATA", payload: data.data.children })
			);
	};

	useEffect(() => {
		fetchUsers();
	}, []);

	return (
		<DataStoreContext.Provider value={{ dataStore, dataDispatch }}>
			{children}
		</DataStoreContext.Provider>
	);
};

const useData = () => useContext(DataStoreContext);
export { useData, DataStoreProvider };
