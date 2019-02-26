import React from 'react';

export const Follower = (props) => {
  let image = props.userData.profile_image_url;
  return (
     <div style={{backgroundImage: "url(" + image + ")" , backgroundColor: "#181818", borderRadius: "5px", width: "295px", height: "165px", overlayColor: "white"}}>
      <div><img src={props.userData.logo} style={styles.image}/></div>
      <div style={styles.username}>{props.userData.display_name}</div>
      </div>
  );
}


const styles = {};

styles.username = {
  fontSize: "12px",
  fontFamily: "Helvetica Neue",
  color: "#F8F8F8",
  fontWeight: "400",
  paddingLeft: "center",
  paddingTop: "8px",
  textAlign: "center"
}

styles.image = {
  borderRadius: "7px",
  width: "20%",
  display: "block",
  marginLeft: "auto",
  marginRight: "auto",
  paddingTop: "35px"
}

styles.background = {
  backgroundColor: "#181818",
  borderRadius: "5px",
  width: "295px",
  height: "165px",
}


export default Follower;