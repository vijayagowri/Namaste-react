import { useState } from "react";
import { productsList } from "../utilis/mockData";
const Products = () => {
	const data = productsList;
	[visibleSection, setvisibleSection] = useState("mobiles");
	return (
		<>
			<h1>This Products list</h1>
			{data.map((product) => (
				<Section
					title={product.title}
					key={product.id}
					description={product.description}
					isVisible={visibleSection === product.id}
					setIsVisible={(cbFromSection) => {
						cbFromSection
							? setvisibleSection(product.id)
							: setvisibleSection("");
					}}
				/>
			))}
		</>
	);
};
export default Products;

const Section = ({ title, description, isVisible, setIsVisible }) => {
	return (
		<>
			<div className="border-black border-2 m-6 p-2">
				<div className="flex bg-slate-300 p-2 justify-between">
					<div className="text-2xl font-bold mr-4 ml-4">{title}</div>
					<button
						className="border-1 p-1 bg-gray-500 text-white rounded"
						onClick={() => {
							isVisible ? setIsVisible(false) : setIsVisible(true);
						}}
					>
						{isVisible ? "Hide" : "Show"}
					</button>
				</div>
				<p className="border-t-1">{isVisible && description}</p>
			</div>
		</>
	);
};
