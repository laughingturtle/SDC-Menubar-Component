import React from 'react';
import { Follower } from './Follower.jsx'


class Following extends React.Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    var parent = document.getElementById('middle');
    var following = document.getElementById('following');
    parent.appendChild(following);
  }

  render() {

  return (
    <div id="following" style={styles.position}>
        {this.props.userArray.map((user, index) => {
          return <div style={styles.follower} key={index}> <Follower userData={user}/></div>;
        })}
    </div>
  )
  }
}

const styles = {};

styles.position = {
  width: '100%',
  height: '100%',
  display: 'flex',
  flexWrap: 'wrap',
  justifyContent: 'center'
}

styles.follower = {
  float: "left",
  margin: "10px"
}


export default Following;