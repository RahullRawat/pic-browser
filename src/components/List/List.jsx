import React from "react";
import { useData } from "../../context/dataContext";
import { filterBySlider, filterBySort } from "../../services/filterFunctions";
import { Link } from "react-router-dom";

const List = () => {
	const {
		dataStore: { data, sliderRange, sortBy },
	} = useData();

	const filterBySliderData = filterBySlider(data, sliderRange);
	const filterBySortData = filterBySort(filterBySliderData, sortBy);

	return (
		<div className="list-container">
			<h1>Showing {filterBySortData.length} posts</h1>
			<div className="list-wrapper">
				{filterBySortData.map(({ data }) => {
					return (
						<div className="card" key={data.id}>
							<Link to={`/singleUser/${data.id}`}>
								<img src={data.thumbnail} alt={data.title} />
							</Link>
							<h4 title={data.title} className="title">
								{data.title}
							</h4>
							<div>
								<h4>{data.num_comments} comments</h4>
								<h4>{data.ups} ups</h4>
							</div>
						</div>
					);
				})}
			</div>
		</div>
	);
};

export default List;
