import React from "react";
import {Link} from 'react-router-dom'
import '../../App.css'

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

    handleSubmit(event) {
        console.log("submitted");
    }

    render() {
        return(
            <div className="loginbox">
                <form className="formcss" onSubmit={this.handleSubmit}>
                    
                    <h1>Counselor Login</h1>
            
                    <div className="form-group">
                        <i class="fa fa-user" aria-hidden="true"></i>
                        <input className="logintext" type="text" name="username" id="username" placeholder="Username" onChange={this.handleChange} />
                    </div>

                    <div className="form-group">
                        <i class="fa fa-lock" aria-hidden="true"></i>
                        <input className="logintext" type="password" name="password" id="password" placeholder="Password" onChange={this.handleChange} />
                    </div>
                    
                    <div className="submit-group">
                        <Link to='/cpage'>
                            <input className="button" type="submit" value="LOGIN" />
                        </Link>
                    </div>

                    <h3> {this.state.username} {this.state.password} </h3>
                </form>
            </div>
        )
    }
}