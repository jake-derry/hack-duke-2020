import React from "react"
import '../../App.css'
import rocket from '../clogin/rocket.png'

function Homescreen() {
    return (
        <div className="homecolor">

            <div style={{textAlign: 'center'}} className="introtext" class="jumbotron">
                <br></br>
                <h1>Welcome to Propel Education</h1>
                <hr></hr>
                <h3>We help connect students with guidance counselors to help councelors reach a student's goals</h3>
                <br></br>
            </div>

            <br></br>

            <div class="padding">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-6">
                            <h2 style={{color: "white"}}>About our site</h2>
                            <hr></hr>
                            <p class="lead"> Students can enter in their goals</p>
                            <p class="lead"> Counselors can look and make adjustments</p>
                            <p class="lead"> Goals assessed in real time</p>
                        </div>
                        <div class="col-lg-6">
                            <img src={rocket} style={{height: '85%' , width: '50%'}}className="homeimg" alt="logo"/>
                        </div>
                    </div>
                </div>
            </div>

            <br></br>
            <hr></hr>
            <br></br>
            <br></br>

            <div class="jumbotron jumbotron-fluid">
                <div class="row">
                    <div class="col-sm">
                        <h4>Students</h4>
                        <hr></hr>
                        <p>Enter in goals</p>
                        <p>Get feedback</p>
                        <p>Edit goals</p>
                    </div>
                    <div class="col-sm">
                        <h4>Counselors</h4>
                        <hr></hr>
                        <p>Look at student goals in real time</p>
                        <p>Give feedback</p>
                    </div>
                    <div class="col-sm">
                        <h4>Tracks</h4>
                        <hr></hr>
                        <p>Counselors can assign different tracks based on student performance and goals</p>
                        <p>Customize tracks</p>
                    </div>
                </div>
            </div>

            <p>Copyright stuff</p>

        </div>
    );
}

export default Homescreen