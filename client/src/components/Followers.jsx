import React from 'react';
import { Follower } from './Follower.jsx';

class Followers extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    var parent = document.getElementById('middle');
    var followers = document.getElementById('followers');
    parent.appendChild(followers);
  }

  render() {
    const copy = this.props.userArray.slice();
    const reversedUserArray = copy.reverse();
    return (
      <div id="followers" style={styles.position}>
          {reversedUserArray.map((user, index) => {
            return (
              <div style={styles.follower} key={index}>
                {' '}
                <Follower userData={user} />
              </div>
            );
          })}
      </div>
    );
  }
}

const styles = {};

styles.position = {
  width: '100%',
  height: '100%',
  display: 'flex',
  flexWrap: 'wrap',
  justifyContent: 'center'
};

styles.follower = {
  float: 'left',
  margin: '10px'
};

export default Followers;
