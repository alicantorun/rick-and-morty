import React from "react";
import notFoundImg from "../../assets/notFound.png";

function NotFound() {
  return (
    <div
      style={{
        display: "flex",
        alignContent: "center",
        justifyContent: "center",
      }}
    >
      <div>
        <img style={{ width: "500px" }} src={notFoundImg} alt="not found"></img>
        <h1 style={{ textAlign: "center" }}>404 NOT FOUND</h1>
      </div>
    </div>
  );
}

export default NotFound;
