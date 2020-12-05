import React from "react";

export default class Login extends React.Component {
    constructor() {
        super()
        this.state = {
            email: "",
            password: "",
        }
        this.handleChange = this.handleChange.bind(this)
    }

    handleChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    render() {
        return(
            <form>
                <h3>Email</h3>
                <input type="text" name="email" placeholder="Email" onChange={this.handleChange} />
                <br></br>
                <h3>Password</h3>
                <input type="text" name="password" placeholder="Password" onChange={this.handleChange} />
                <h3> {this.state.email} {this.state.password} </h3>
            </form>
        )
    }
}