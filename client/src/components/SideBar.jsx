import React from 'react';

const SideBar = (props) => {
  const userInfo = props.userInfo.users;
  const firstThree = userInfo.slice(0, 3);
  const three = firstThree.map((user, index) => {
    return (
      <div key={index} style={styles.div2} onClick={(e) => props.onSelect(e, index)}>
      <img src={user.logo} style={styles.logo}/>
      <div style={styles.username}>{user.display_name}</div>
      <div style={styles.category}>{user.category}</div>
      </div>
    )
  })

  const followedUserInfo = props.userInfo.followedUser ? (<div style={styles.div}> <img style={styles.logo} src={props.userInfo.followedLogo}/>
  <div style={styles.username}>{props.userInfo.followedUser}</div>
  <div style={styles.category}>{props.userInfo.followedCategory}</div> </div>) : null;

  return (
    <div style={styles.background}>
    <h3 style={styles.h3}>Followed Channels</h3>
      {followedUserInfo}
    <h3 style={styles.h3}>Recommended Channels</h3>
    <div style={styles.div}></div>
      {three}
    </div>
  )
}

const styles = {};


styles.div = {
  borderTop: '1px solid hsla(0,0%,100%,.05)',
  paddingTop: "10px",
}

styles.div2 = {
  paddingTop: "10px",
}

styles.logo = {
  width: "30px",
  height: '30px',
  borderRadius: "30%",
  float: "left",
  paddingRight: "8px",
  paddingLeft: "6px"
}

styles.h3 = {
  fontSize: "15px",
  fontFamily: "Helvetica Neue",
  color: "#b8b5c0",
  paddingLeft: "15px",
  paddingTop: "5px",
  fontWeight: "400",
}

styles.username = {
  fontSize: "12px",
  fontFamily: "Helvetica Neue",
  color: "#b8b5c0",
  fontWeight: "400",
  paddingLeft: "15px",
}

styles.category = {
  fontSize: "12px",
  fontFamily: "Helvetica Neue",
  color: "#898395",
  fontWeight: "400",
  paddingLeft: "15px",
  paddingTop: '2px'
}

styles.background = {
  position: "absolute",
  /* top: 0px, */
  /* left: 5px, */
  background: "#181818",
  borderBottom: '8px solid #181818',
  width: "230px",
  height: "99vh",
  float: "right",
  color: '#b8b5c0'
}


export default SideBar;