import React from 'react';
import Contact from './Contact';
class ProfileClass extends React.Component{
        constructor(props){
            super(props);
            this.state= {
               userInfo:{
                login:'dummydata',
                avatar_url:"cdf"
               }
            }
           
        }
    render(){
       
        return (<>
        <h1>This is profile class Component name: {this.state?.userInfo?.login}</h1>
            <img src={this.state?.userInfo?.avatar_url} />
        </>
        )
    }

    async componentDidMount(){
        console.log("componentDidMount "+this.props.name);
        const data = await fetch("https://api.github.com/users/vijayagowri");
        const json = await data.json();
        console.log(json)
        this.setState({
                userInfo:{
                    login:json.login,
                    avatar_url:json.avatar_url
                }
        })

    }
    componentWillUnmount(){
        console.log("componentWillUnmount "+this.props.name)
    }
    componentDidUpdate(){
        console.log("componentDidUpdate "+this.props.name)
    }
}

export default ProfileClass;