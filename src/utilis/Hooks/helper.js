export const restroFilterByText = (searchText, allRestaurants) => {
	const filterData = allRestaurants.filter((res) =>
		res.data.name.toLowerCase().includes(searchText.toLowerCase())
	);
	return filterData;
};

export const filterTopRatedRestro = (allRestaurants) => {
	const data = allRestaurants.filter((res) => res.data.avgRating > 4);
	return data;
};
