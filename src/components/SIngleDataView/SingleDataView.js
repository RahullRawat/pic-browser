import React from "react";
import { useParams, Link } from "react-router-dom";
import { useData } from "../../context/dataContext";

const SingleDataView = () => {
	const {
		dataStore: { data },
	} = useData();
	const { id } = useParams();
	const findItem = data.find((item) => item.data.id === id);
	return (
		<div className="single-container">
			{findItem ? (
				<div className="single-wrapper">
					<img src={findItem.data.url} alt={findItem.data.title} />
					<h1>Title : {findItem.data.title}</h1>
					<h2>Author : {findItem.data.author}</h2>
					<h2>Score : {findItem.data.score}</h2>
					<h2>Comments : {findItem.data.num_comments}</h2>
					<h2>Up Votes : {findItem.data.ups}</h2>
				</div>
			) : null}
			<Link to="/">
				<button>X</button>
			</Link>
		</div>
	);
};

export default SingleDataView;
