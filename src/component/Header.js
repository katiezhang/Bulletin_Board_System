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
        const { location } = this.props;
        const loginLocation = { pathname: '/login', state: { from: location } };
        return(
            <div className="header">
                <Link to={'/'} className="home">Home</Link>
                {userId 
                ? 
                    <div className="user"><label>{`User: ${username}`}</label><button onClick={this.handleLogOut}>Log out</button></div> 
                : 
                    <Link to={loginLocation} className="login">Login</Link>}
            </div>
        )
    }
}

export default Header;