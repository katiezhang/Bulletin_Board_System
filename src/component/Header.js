import React from 'react';
import { Link } from 'react-router-dom';
import './Header.scss'

class Header extends React.Component{
    constructor(props){
        super(props);
        this.state={
            userId: sessionStorage.getItem('userId'),
            username: sessionStorage.getItem('username')
        }
    }

    handleLogOut = () => {
        sessionStorage.removeItem('userId');
        sessionStorage.removeItem('username');
        this.setState({
            userId: '',
            username: ''
        })
    }
    render(){
        const { userId, username} = this.state;
        // const userId = sessionStorage.getItem("userId");
        // const username = sessionStorage.getItem("username");
        console.log('userId', userId)
        return(
            <div className="header">
                <Link to={'/'} className="home">Home</Link>
                {userId 
                ? 
                    <div className="user"><lable>{`User: ${username}`}</lable><button onClick={this.handleLogOut}>Log out</button></div> 
                : 
                <Link to={'/login'} className="login">Login</Link>}
                
            </div>
        )
    }
}

export default Header;