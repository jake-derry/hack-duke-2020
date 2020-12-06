import React from "react";

export default class StudentLogin extends React.Component {
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
                <input type="text" name="username" placeholder="Username" onChange={this.handleChange} />
                <br></br>
                <h3>Password</h3>
                <input type="text" name="password" placeholder="Password" onChange={this.handleChange} />
                <br></br>
                <input type="text" name="code" placeholder="Code" onChange={this.handleChange} />
                <h3> {this.state.username} {this.state.password} {this.state.code} </h3>
            </form>
        )
    }
}