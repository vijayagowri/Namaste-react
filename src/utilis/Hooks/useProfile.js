import { useEffect, useState } from "react";

const useProfile = () => {
	const [profile, setProfile] = useState([]);

	useEffect(() => {
		getProfile();
	}, []);

	async function getProfile() {
		const data = await fetch("https://api.github.com/users/vijayagowri");
		const json = await data?.json();
		setProfile(json);
	}
	return profile;
};

export default useProfile;
