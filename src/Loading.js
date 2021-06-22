import React from "react";
import ScaleLoader from "react-spinners/ScaleLoader";

const spinner = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  height: "80vh",
};

function Loading() {
  return (
    <div style={spinner}>
      <ScaleLoader width="10" color="#2ecc71" />
    </div>
  );
}

export default Loading;
