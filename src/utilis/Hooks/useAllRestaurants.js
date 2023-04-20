import { useState, useEffect } from "react";

const useAllRestaurants = () => {
	const [allRestaurants, setAllRestaurants] = useState([]);

	useEffect(() => {
		getAllRestroData();
	}, []);

	async function getAllRestroData() {
		const data = await fetch(
			"https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&page_type=DESKTOP_WEB_LISTING"
		);
		const json = await data?.json();
		restoData = json?.data?.cards[2]?.data?.data?.cards;
		setAllRestaurants(restoData);
	}
	return allRestaurants;
};

export default useAllRestaurants;
