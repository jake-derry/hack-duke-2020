import React, { Component } from "react" 
import axios from 'axios'

class CounselorCode extends Component {
  state = {
      code : ""
  };

  componentDidMount(props) {

      let data;
      var apiUrl = "http://127.0.0.1:8000/api/counselors/me/"

      axios.get(apiUrl, { headers: { 
          'credentials': 'true',
          'Authorization': 'Token ' + localStorage.getItem('token'), // get rid of this once we have a token
          'Access-Control-Allow-Headers': '*'}})
      .then(res => {
          data = res.data;
          this.setState({
              code : data.code
          });
      })
      .catch(err => {})
  }
  

  render() {
    return (
      <div>
        <code>{this.state.code}</code>
      </div>
    );
}
}

export default CounselorCode