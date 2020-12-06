import React, { Component } from "react" 
import axios from 'axios'
import { Button, ListGroup, Table } from "react-bootstrap";

class TrackListGroup extends Component {
  state = {
      tracks : []
  };

  componentDidMount(props) {

      let data;
      var apiUrl = "http://127.0.0.1:8000/api/counselors/me/tracks/"

      axios.get(apiUrl, { headers: { 
          'credentials': 'true',
          'Authorization': 'Token ' + localStorage.getItem('token'), // get rid of this once we have a token
          'Access-Control-Allow-Headers': '*'}})
      .then(res => {
          data = res.data;
          console.log(data)
          this.setState({
              tracks : data
          });
      })
      .catch(err => {})
  }
  

  render() {
    return (
      <div>
        <Table striped bordered hover>
          <tbody>
            {this.state.tracks.map(track => (
              <tr>
                <td>{track.title}</td>
                <td>{track.description}</td>
                <td><Button>See goals</Button></td>
              </tr>
              ))}
          </tbody>
        </Table>
      </div>
    );
}
}

export default TrackListGroup