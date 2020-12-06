import React, { Component } from "react" 
import StudentEntry from "./student_entry";
import axios from 'axios'
import { Table } from "react-bootstrap";

class ListStudents extends Component {
  state = {
      students : []
  };

  componentDidMount() {

      let data;
      var apiUrl = "http://127.0.0.1:8000/api/counselors/me/students/"

      axios.get(apiUrl, { headers: { 
          'credentials': 'true',
          'Authorization': 'Token 676bf96e8045d6f80199025c430db56ab6bb5906',
          'Access-Control-Allow-Headers': '*'}})
      .then(res => {
          data = res.data;
          this.setState({
              students : data
          });
      })
      .catch(err => {})
  }
  

  render() {
      return (
        <div>
          <h1>Students</h1>
          <Table striped bordered hover>
            <tbody>
              {this.state.students.map(student => (
                  <StudentEntry counselor={student.counselor}/>
                ))}
            </tbody>
          </Table>
        </div>
      );
  }
}

export default ListStudents