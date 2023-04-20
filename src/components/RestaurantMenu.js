import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { RESTAURANT_IMAGES_URL } from "../utilis/constants";
import useRestaurantInfo from "../utilis/Hooks/useRestaurantInfo";

const RestaurantMenu = () => {
	const { id } = useParams();
	restaurantMenuInfo = useRestaurantInfo(id);
	const items = [];
	if (restaurantMenuInfo) {
		const des1 =
			restaurantMenuInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]
				?.card?.card?.itemCards;
		des1?.map((res) => {
			items.push(res?.card?.info);
		});
	}

	return !restaurantMenuInfo && !restaurantMenuInfo ? (
		<ShimmerCards />
	) : (
		<div className="p-3">
			<div className="p-3">
				<h1 className="font-bold text-3xl pb-2 text-center">
					{restaurantMenuInfo?.cards[0]?.card?.card?.info.name}
				</h1>
				<img
					className="ml-auto mr-auto w-48"
					src={
						RESTAURANT_IMAGES_URL +
						restaurantMenuInfo?.cards[0]?.card?.card?.info?.cloudinaryImageId
					}
				/>
				<h3 className="font-bold text-2xl text-center">
					{restaurantMenuInfo?.cards[0]?.card?.card?.info?.areaName}
				</h3>
				<div className="text-center">
					<h3>
						{restaurantMenuInfo?.cards[0]?.card?.card?.info?.avgRating} stars
					</h3>
					<h3>
						{restaurantMenuInfo?.cards[0]?.card?.card?.info?.costForTwoMessage}
					</h3>
					<h3>{restaurantMenuInfo?.cards[0]?.card?.card?.info?.id}</h3>
				</div>
			</div>
			<div>
				<ul className="flex flex-wrap">
					{items.map((menu) => (
						<li key={menu.id} className="p-5 bg-slate-200 m-1">
							{menu.name}{" "}
						</li>
					))}
				</ul>
			</div>
		</div>
	);
};
export default RestaurantMenu;
