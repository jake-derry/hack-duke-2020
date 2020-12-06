import React from "react" 
import {Link} from "react-router-dom"
import '../../App.css'

function CPageScreen() {

    return (
        <div className="cpagecss">

            <div class="row" >
                <div class="col-lg-3 bg-warning">
                    <p>Class of 2020</p>
                    <p>Class of 2021</p>
                    <p>Class of 2022</p>
                    <p>Class of 2023</p>
                    <button type="button">Add</button>
                    <button type="button">Remove</button>
                </div>
                <div class="col-lg-9 bg-success">
                    <h1>Counselor Page</h1>
                    <p>Table of students will be rendered here</p>
                    <Link to='/students'>
                        <li>Students</li>
                    </Link>
                    <Link to='/clogin'>
                        <li>Log Out</li>
                    </Link>
                </div>
            </div>

            <h3>Counselor Page</h3>
            
        </div>               
    );  
}

export default CPageScreen