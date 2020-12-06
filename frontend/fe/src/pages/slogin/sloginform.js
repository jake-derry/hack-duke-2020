import React from "react";
import {Link} from 'react-router-dom'
import '../../App.css'

export default class StudentLogin extends React.Component {
    constructor() {
        super()
        this.state = {
            email: "",
            password: "",
            code: "",
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
            <div className="loginbox">
                <form className="formcss" onSubmit={this.handleSubmit}>
                    
                    <h1>Student Login</h1>
            
                    <div className="form-group">
                        
                        <input className="logintext" type="text" name="username" id="username" placeholder="Username" onChange={this.handleChange} />
                        <i class="fa fa-user" aria-hidden="true"></i>
                    </div>

                    <div className="form-group">
                        <i class="fa fa-lock" aria-hidden="true"></i>
                        <input className="logintext" type="password" name="password" id="password" placeholder="Password" onChange={this.handleChange} />
                    </div>

                    <div className="form-group">
                        <i class="fa fa-terminal on fa-square" aria-hidden="true"></i>
                        <input className="logintext" type="text" name="code" id="code" placeholder="Counselor Code" onChange={this.handleChange} />
                    </div>
                    
                    <div className="submit-group">
                        <Link to='/spage'>
                            <input className="button" type="submit" value="LOGIN" />
                        </Link>
                    </div>

                    <h3> {this.state.username} {this.state.password} {this.state.code} </h3>
                </form>
            </div>
        )
    }
}