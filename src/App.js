import React, { lazy, Suspense, useState } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Error from "./components/Error";
import Contact from "./components/Contact";
import Login from "./components/Login";
import RestaurantMenu from "./components/RestaurantMenu";
import ShimmerCards from "./utilis/ShimmerCards";
import Products from "./components/Products";
import UsersContext from "./utilis/Hooks/UsersContext";

const AppLayout = () => {
	const [user, setUser] = useState({
		name: "gowri",
		email: "gowri@gmail.com",
	});
	return (
		<div className="app-container">
			<UsersContext.Provider value={{ user: user, setUser: setUser }}>
				<Header />
				<div className="min-h-screen">
					<Outlet />
				</div>
				<Footer />
			</UsersContext.Provider>
		</div>
	);
};

const About = lazy(() => import("./components/About"));
const Profile = lazy(() => import("./components/Profile"));

const routes = createBrowserRouter([
	{
		path: "/",
		element: <AppLayout />,
		errorElement: <Error />,
		children: [
			{
				path: "/",
				element: <Body />,
			},
			{
				path: "/restaurant/:id",
				element: <RestaurantMenu />,
			},
			{
				path: "/about",
				element: (
					<Suspense fallback={<ShimmerCards />}>
						<About />
					</Suspense>
				),
			},
			{
				path: "/contact",
				element: <Contact />,
			},
			{
				path: "/login",
				element: <Login />,
			},
			{
				path: "/products",
				element: <Products />,
			},
			{
				path: "/profile",
				element: (
					<Suspense fallback={<ShimmerCards />}>
						<Profile />
					</Suspense>
				),
			},
		],
	},
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={routes} />);
