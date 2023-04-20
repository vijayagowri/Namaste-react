import ProfileClass from "./ProfileClass";
import Profile from "./Profile";
import { Component } from "react";
import UsersContext from "../utilis/Hooks/UsersContext";

class About extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div>
				<UsersContext.Consumer>
					{({ user }) => (
						<h1>
							{user.name} {user.email}
						</h1>
					)}
				</UsersContext.Consumer>
				<h1>This is about Class component</h1>
			</div>
		);
	}
	componentDidMount() {
		console.log("component did mount --parent");
	}

	componentDidUpdate() {
		console.log("component did update --parent");
	}

	componentWillUnmount() {
		clearInterval(this.timer);
		console.log("component unmount --parent");
	}
}

export default About;
