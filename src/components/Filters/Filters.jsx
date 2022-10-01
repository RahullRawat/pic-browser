import React from "react";
import { useData } from "../../context/dataContext";

const Filters = () => {
	const {
		dataStore: { sliderRange, sortBy },
		dataDispatch,
	} = useData();

	const clearFilterHandler = () => {
		dataDispatch({ type: "RESET" });
	};

	return (
		<div className="filter-container">
			<h1>Filters</h1>
			<div>
				<h4>Sort by Comments</h4>
				<input
					type="range"
					name="comments"
					min="0"
					max="10000"
					step="50"
					className="range"
					value={sliderRange}
					onChange={(e) =>
						dataDispatch({ type: "SLIDER_RANGE", payload: e.target.value })
					}
				/>
				<h4>more than {sliderRange} comments</h4>
			</div>
			<div>
				<h4>Sort by up votes</h4>
				<label htmlFor="sort-by-low-comments">
					<input
						type="radio"
						name="comments"
						id="sort-by-low-comments"
						checked={sortBy === "LOW_TO_HIGH"}
						onChange={() =>
							dataDispatch({ type: "SORT", payload: "LOW_TO_HIGH" })
						}
					/>
					Low to High
				</label>
				<label htmlFor="sort-by-high-comments">
					<input
						type="radio"
						name="comments"
						id="sort-by-high-comments"
						checked={sortBy === "HIGH_TO_LOW"}
						onChange={() =>
							dataDispatch({ type: "SORT", payload: "HIGH_TO_LOW" })
						}
					/>
					High to Low
				</label>
			</div>
			<button onClick={clearFilterHandler}>Clear filters</button>
		</div>
	);
};

export default Filters;
