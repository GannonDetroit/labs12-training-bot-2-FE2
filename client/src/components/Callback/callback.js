import React, { useEffect } from "react";

//Loading SVG that gets displayed
import Progress from "components/Gen/Progress/ProgressCircle";

//Auth
import { setAccessToken, setIdToken, getUserProfile } from "Auth/Auth";

function Callback(props) {
  useEffect(() => {
    setAccessToken();
    setIdToken();
    getUserProfile(() => {
      this.props.history.push("/home");
    });
  }, []);

  //Customized styling
  const style = {
    position: "absolute",
    display: "flex",
    justifyContent: "center",
    height: "100vh",
    width: "100vw",
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: "white"
  };

  return (
    <div style={style}>
      <Progress />
    </div>
  );
}

export default Callback;
