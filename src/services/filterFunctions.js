export const filterBySort = (userList, sortBy) => {
	if (sortBy === "LOW_TO_HIGH") {
		return userList.sort(
			(userOne, userTwo) => userOne.data.ups - userTwo.data.ups
		);
	}
	if (sortBy === "HIGH_TO_LOW") {
		userList.sort((userOne, userTwo) => userTwo.data.ups - userOne.data.ups);
	}
	return userList;
};

export const filterBySlider = (userList, sliderRange) => {
	if (sliderRange) {
		return userList.filter(
			(user) => user.data.num_comments >= Number(sliderRange)
		);
	}
	return userList;
};
