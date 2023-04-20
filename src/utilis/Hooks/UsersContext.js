import { createContext } from "react";

const UsersContext = createContext({
	user: {
		name: "dummy name",
		email: "dummy@email.com",
	},
});

export default UsersContext;
