import React from "react";

function Props2({ data }) {
  let arr = data.map((e) => {
    return (
      <li>
        M1 : {e.m1} , M2 : {e.m2} , M3 : {e.m3}
      </li>
    );
  });
  return (
    <>
      <div style={{ textAlign: "center" }}>
        <h3 className="text-primary">Props Example of Single Object</h3>
        <p>M1 : {data.m1}</p>
        <p>M2 : {data.m2}</p>
        <p>M3 : {data.m3}</p>
      </div>

      <hr></hr>

      <div style={{ textAlign: "center" }}>
        <h3 className="text-primary">Props Example of Multiple Objects</h3>
        <ol>{arr}</ol>
      </div>
    </>
  );
}

export default Props2;
