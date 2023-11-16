import { RESTAURANT_IMAGES_URL } from "../utilis/constants";
import UsersContext from "../utilis/Hooks/UsersContext";
import { useContext } from "react";

const RestoComponent = (props) => {
	const { user } = useContext(UsersContext);
	const { resObj } = props;
	const { cloudinaryImageId, name, cuisines, avgRating, deliveryTime } =
		resObj.info;
	return (
		<div>
			<img alt="" src={RESTAURANT_IMAGES_URL + cloudinaryImageId} />
			<h3>{name}</h3>
			<h4>{cuisines.join(", ")}</h4>
			<h4>{avgRating}</h4>
			<h4>{deliveryTime}</h4>
			<h4>{user.name}</h4>
			<h4>{user.email}</h4>
		</div>
	);
};

export default RestoComponent;
