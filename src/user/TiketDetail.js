import React, { Component } from "react";
import "./TiketDetail.css";

class TiketDetail extends Component {
  render() {
    return (
      <div className="headerss">
        <div className="hkiri">
          <h1>E-Ticket</h1>
          <p style={{ color: "$767676" }}>Kode Invoice : INV0101</p>
        </div>
        <div className="hkanan">
          <div>{/* <p>Land Tick</p> */}</div>
        </div>
        <div className="api">
          <h3>Kereta Api</h3>
        </div>
      </div>
    );
  }
}
export default TiketDetail;
