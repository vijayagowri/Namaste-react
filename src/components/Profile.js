import useProfile from "../utilis/Hooks/useProfile";

Profile = () => {
	const profile = useProfile();
	console.log(profile, "profile");
	return (
		<>
			<h1>This is profile class Component name: {profile?.login}</h1>
			<img src={profile?.avatar_url} />
		</>
	);
};
export default Profile;
