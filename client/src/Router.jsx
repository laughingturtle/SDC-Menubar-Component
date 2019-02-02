import React from 'react';
import { HashRouter as Router, Route, Link } from 'react-router-dom';
import Videos from './components/Videos.jsx';
import Clips from './components/Clips.jsx';
import Events from './components/Events.jsx';
import Following from './components/Following.jsx';
import Followers from './components/Followers.jsx';

const AppRouter = (props) => {
  const userInfo = props.userInfo;
  const followingNumbers = <span style={styles.numbers}>{userInfo.users[userInfo.selectedUser].following.toLocaleString()}</span>;
  const followersNumbers = <span style={styles.numbers}>{userInfo.users[userInfo.selectedUser].followers.toLocaleString()}</span>;
  return (
    <Router>
      <div style={styles.header}>
        <nav>
          <ul style={styles.nav}>
          <li style={styles.navItem}>
              <img style={styles.logo} src={userInfo.users[userInfo.selectedUser].logo} />
            </li>
            <li style={styles.navItem}>
              <Link to="/" style={styles.link}>{userInfo.users[userInfo.selectedUser].display_name}</Link>
            </li>
            <li style={styles.navItem}>
              <Link to="/Videos" style={styles.link}>Videos  {userInfo.users[userInfo.selectedUser].Videos}</Link>
            </li>
            <li style={styles.navItem}>
              <Link to="/Clips" style={styles.link}>Clips</Link>
            </li>
            <li style={styles.navItem}>
              <Link to="/Events" style={styles.link}>Events</Link>
            </li>
            <li style={styles.navItem}>
              <Link to="/Followers" style={styles.link}>Followers {followersNumbers} </Link>
            </li>
            <li style={styles.navItem}>
              <Link to="/Following" style={styles.link} userInfo={props.userInfo.users}>Following  {followingNumbers} </Link>
            </li>
          </ul>
          <button style={styles.navRight} >Subscribe</button>
          <button style={styles.navRight} onClick={(e) => props.onClick(e)}>Follow</button>
        </nav>

        {/* <Route path="/Videos" component={Videos} /> */}
        <Route path="/clips" component={Videos} />
        <Route path="/events" component={Events} />
        <Route path="/followers" render={(routeProps) => <Followers {...routeProps} userArray={props.userInfo.users}/>} />
        <Route path="/following" render={(routeProps) => <Following {...routeProps} userArray={props.userInfo.users}/>} />

      </div>
    </Router>
  );
}

const styles = {};

styles.numbers = {
  color: "gray"
}

styles.linkUsername = {
  textDecoration: "none",
  color: "#6441A5"
}


styles.link = {
  textDecoration: "none",
  color: "#6441A5"
}

styles.header = {
  position: "fixed",
  width: "76%",
  // backgroundColor: "rgb(100, 65, 165)",
  color: "#fff",
  height: "50px",
  padding: 0,
  margin: 0,
  display: "inline-flex",
  justifyContent: "flex-end",
  "align-items": "center",
}

styles.nav = {
  padding: 0,
  margin: 0,
  position: "absolute",
  left: "251px",
  top: 0,
  height: "51px",
  display: "flex",
  fontSize: "14px",
  fontFamily: "Helvetica",
  fontColor: "#6441a4",
  alignContent: "center"
}

styles.navItem = {
  listStyleType: "none",
  padding: "10px",
}

styles.navRight = {
 float: "right",
 cursor: "pointer",
 backgroundColor: "#6441A5",
 borderColor: "#6441A5",
 borderRadius: "4px",
 padding: ".4rem .8rem",
 color: "white",
 marginRight: "10px"
}

styles.logo = {
  width: "25%",
  borderRadius: "4px"
}


export default AppRouter;
