import { useDispatch, useSelector } from "react-redux";
import { RESTAURANT_IMAGES_URL } from "../utilis/constants";
import { removeItem } from "../utilis/Hooks/cartSlice";
import { Link } from "react-router-dom";
const Cart = () => {
	const dispatch = useDispatch();
	const cardItems = useSelector((state) => state.cart.items);

	function handleRemoveItem(item) {
		dispatch(removeItem(item));
	}
	function handleClearCart() {
		dispatch(clearCart());
	}
	return cardItems.length === 0 ? (
		<>
			<h1 className="text-center text-3xl font-bold">Your cart is empty.</h1>
			<Link to="/">Home</Link>
		</>
	) : (
		<>
			<button
				onClick={() => handleClearCart()}
				className="bg-blue-500 p-2 float-right m-2"
			>
				clear Cart
			</button>
			<div className="p-3 flex flex-wrap">
				{cardItems.map((res) => (
					<div className="p-3 " key={res.id}>
						<h1 className="font-bold text-3xl pb-2 text-center">{res.name}</h1>
						<h3 className="font-bold text-2xl text-center">{res.areaName}</h3>
						<div className="text-center">
							<h3>{res.avgRating} stars</h3>
							<h3>{res.costForTwoMessage}</h3>
							<h3>{res.id}</h3>
							<button
								className="bg-red-600 p-2 m-2"
								onClick={() => {
									handleRemoveItem(res);
								}}
							>
								remove Item
							</button>
						</div>
					</div>
				))}
			</div>
		</>
	);
};

export default Cart;
