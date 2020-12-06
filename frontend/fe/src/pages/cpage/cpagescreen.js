import React from "react" 
import {Link} from "react-router-dom"
import '../../App.css'

function CPageScreen() {

    return (
        <div className="cpagecss">

            <div class="row" >
                <div class="col-lg-3 bg-light">
                    <div class="btn btn-danger">
                        <p style={{fontWeight: "bold"}}>- Remove Group</p>
                    </div>
                    <p>Class of 2020</p>
                    <p>Class of 2021</p>
                    <p>Class of 2022</p>
                    <p>Class of 2023</p>
                    <div class="btn btn-success">
                        <p style={{fontWeight: "bold"}}>+ New Group</p>
                    </div>
                </div>
                <div class="col-lg-9 bg-primary">
                    <h1>Counselor Page</h1>
                    <p>Table of students will be rendered here</p>
                    <Link to='/students'>
                        <li>Students</li>
                    </Link>
                    <Link to='/clogin'>
                        <li class="btn btn-danger" style={{float: "right", marginRight: "10px"}}>Log Out</li>
                    </Link>
                    
                </div>
            </div>

            <footer>Counselor Page</footer>
            
        </div>               
    );  
}

export default CPageScreen