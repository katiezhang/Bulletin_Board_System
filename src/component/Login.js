import React from 'react';

class Login extends React.Component {
    constructor() {
        super();
        this.state = {
            username: '',
            password: ''
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

    handleSubmit=()=>{
        
    }

    render() {
        return (
            <form method="post" action="/" onSubmit={this.handleSubmit} >
                Name:<input type="text" name="username" placeholder="Name" value={this.state.username} onChange={this.handleChange} />

                Password:<input type="password" name="password" placeholder="Password" value={this.state.password} onChange={this.handleChange} />

                <button type="submit">Login</button>
                <button type="reset">reset</button>
            </form>
        )
    }
}

export default Login;