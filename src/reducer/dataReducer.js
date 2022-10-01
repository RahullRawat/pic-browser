export const dataReducer = (state, action) => {
	switch (action.type) {
		case "INITIAL_DATA":
			return {
				...state,
				data: action.payload,
			};

		case "SLIDER_RANGE":
			return {
				...state,
				sliderRange: action.payload,
			};

		case "SORT":
			return {
				...state,
				sortBy: action.payload,
			};

		case "RESET":
			return {
				...state,
				sliderRange: 0,
				sortBy: null,
			};

		default:
			return {
				...state,
			};
	}
};
