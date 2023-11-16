export const restroFilterByText = (searchText, allRestaurants) => {
	const filterData = allRestaurants.filter((res) =>
		res.info.name.toLowerCase().includes(searchText.toLowerCase())
	);
	return filterData;
};

export const filterTopRatedRestro = (allRestaurants) => {
	const data = allRestaurants.filter((res) => res.info.avgRating > 4);
	return data;
};
