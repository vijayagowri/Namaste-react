import { useContext } from "react";
import UsersContext from "../utilis/Hooks/UsersContext";

const Footer = () => {
	const { user } = useContext(UsersContext);
	return (
		<>
			<div>THis is Footer</div>
			<h1>{user.email}</h1>
			<h1>{user.name}</h1>
		</>
	);
};

export default Footer;
