import React from 'react';

class Events extends React.Component {
  componentDidMount() {
    var parent = document.getElementById('middle');
    var events = document.getElementById('events');
    parent.appendChild(events);
  }

  render() {
    return (
      <div id="events" style={styles.position}>

      <h4 style={styles.h4}>Nothing here yet</h4>

     </div>
    )
  }
}

const styles = {}

styles.position = {
  width: '100vh',
  height: '94vh',
  textAlign: 'center'
}

styles.h4 = {
  color: '#6e6779',
  fontStyle: 'italic'
}




export default Events;