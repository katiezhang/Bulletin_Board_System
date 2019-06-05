import React from 'react';
import { Redirect } from 'react-router-dom';
import { post } from '../utils/request';
import urls from '../utils/urls';
const login = urls.login;

class Login extends React.Component {
    constructor() {
        super();
        this.state = {
            username: '',
            password: '',
            redirectToReferer: false
        }
    }

    handleChange = (e) => {
        switch (e.target.name){
            case 'username':
                this.setState({
                    username: e.target.value
                });
                break;
            case 'password': 
                this.setState({
                    password: e.target.value
                });
                break;
            default:
                break;
        }
    }

    handleSubmit=(e)=>{
        e.preventDefault();
        const { username, password} = this.state;
        if(!username || !password){
            alert('User name or Password can not be empty!');
            return;
        }
        const data = {
            username: username,
            password: password
        }
        post(login, data).then(response => {
            if(response.error){
                alert(response.error.message || 'Login failed.')
            }else{
                sessionStorage.setItem('unsername', username);
                sessionStorage.setItem('userId ', response.userId);
                this.setState({
                    redirectToReferer: true
                })
            }
        });
        
    }

    render() {
        const { redirectToReferer } = this.state;
        const from = '/';
        if (redirectToReferer){
            return <Redirect to={from} />
        }
        return (
            <form method="post" action="/" onSubmit={this.handleSubmit} >
                Name:<input type="text" name="username" placeholder="Name" value={this.state.username} onChange={this.handleChange} />

                Password:<input type="password" name="password" placeholder="Password" value={this.state.password} onChange={this.handleChange} />

                <button type="submit">Login</button>
            </form>
        )
    }
}

export default Login;