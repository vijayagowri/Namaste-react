import RestoComponent from "./Restaurant";
import { useEffect, useState, useContext } from "react";
import ShimmerCards from "../utilis/ShimmerCards";
import { Link } from "react-router-dom";
import useIsOnline from "../utilis/Hooks/useIsOnline";
import {
	restroFilterByText,
	filterTopRatedRestro,
} from "../utilis/Hooks/helper";
import UsersContext from "../utilis/Hooks/UsersContext";

const Body = () => {
	const { user, setUser } = useContext(UsersContext);
	console.log(user);
	const displatFlex = { display: "flex", flexWrap: "wrap" };
	let [allRestaurants, setAllRestaurants] = useState([]);
	let [filteredRestaurants, setFilteredRestaurants] = useState([]);
	const [searchText, setSearchText] = useState("");
	const isOnline = useIsOnline();
	useEffect(() => {
		getAllRestaurants();
	}, []);

	async function getAllRestaurants() {
		const data = await fetch(
			"https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&page_type=DESKTOP_WEB_LISTING"
		);
		const json = await data?.json();
		restoData = json?.data?.cards[2]?.data?.data?.cards;
		setAllRestaurants(restoData);
		setFilteredRestaurants(restoData);
	}

	if (!isOnline) {
		return <h1>you are offline try after sometime</h1>;
	}

	return allRestaurants?.length === 0 ? (
		<ShimmerCards />
	) : (
		<>
			<input
				type="text"
				value={user.name}
				onChange={(e) => setUser({ ...user, name: e.target.value })}
			/>
			<input
				type="text"
				value={user.email}
				onChange={(e) => setUser({ ...user, email: e.target.value })}
			/>
			<div className="button" style={{ margin: "10px" }}>
				<button
					className="btn-style"
					onClick={() => {
						let filteredList = filterTopRatedRestro(allRestaurants);
						setFilteredRestaurants(filteredList);
					}}
				>
					Top Rated Restaurants
				</button>
				<input
					type="search"
					className="search-style"
					placeholder="Search"
					value={searchText}
					onChange={(ev) => {
						let key = ev.target.value;
						setSearchText(key);
						if (key) {
							let searchedList = restroFilterByText(key, allRestaurants);
							setFilteredRestaurants(searchedList);
						} else {
							setFilteredRestaurants(allRestaurants);
						}
					}}
				/>
				<span>
					You searched <b>{searchText}</b>
				</span>
			</div>

			{/* resto card */}
			{filteredRestaurants?.length > 0 ? (
				<div style={displatFlex} className="restro-container">
					{filteredRestaurants.map((restaurant) => (
						// resto card
						<Link
							to={"restaurant/" + restaurant.data.id}
							key={restaurant.data.id}
							className="resto-card"
						>
							<RestoComponent key={restaurant.data.id} resObj={restaurant} />
						</Link>
					))}
				</div>
			) : (
				<h1>no results found</h1>
			)}
		</>
	);
};

export default Body;
