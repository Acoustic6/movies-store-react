import React from "react";

const Like = ({ liked, onClick }) => {
  let classes = "fa fa-heart";
  classes = !liked ? classes + "-o" : classes;
  return (
    <i
      onClick={onClick}
      style={{ cursor: "pointer" }}
      className={classes}
      aria-hidden="true"
    ></i>
  );
};

export default Like;
