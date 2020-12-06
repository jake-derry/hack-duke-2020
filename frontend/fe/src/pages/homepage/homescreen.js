import React from "react"
import image1 from "./duke.png"
import '../../App.css'

function Homescreen() {
    return (
        <div className="homecolor">

            <div style={{textAlign: 'center'}} className="introtext">
                <br></br>
                <h1>Welcome to our project</h1>
                <br></br>
                <h3>We help connect students with guidance counselors to help councelors reach a student's goals</h3>
                <br></br>
            </div>

            <br></br>

            <div class="padding">
                <div class="container">
                    <div class="row">
                        <div class="col-sm-6">
                            <h2 style={{color: "white"}}>About our site</h2>
                            <hr></hr>
                            <p class="lead">Students can enter in their goals</p>
                            <p class="lead">Counselors can look and make adjustments</p>
                            <p class="lead">Goals assessed in real time</p>
                        </div>
                        <div class="col-sm-6">
                            <img src={image1} alt="logo"/>
                        </div>
                    </div>
                </div>
            </div>

            <br></br>

            <div class="jumbotron jumbotron-fluid">
                <h4>Column 1</h4>
                <hr></hr>
                Hello
            </div>

            <div class="jumbotron jumbotron-fluid">
                <h4>Column 2</h4>
                <hr></hr>
                Hello 2
            </div>


        </div>
    );
}

export default Homescreen