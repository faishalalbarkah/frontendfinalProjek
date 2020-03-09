import React, { Component } from "react";
import ALBeranda from "./ALBeranda";
import "./ALBeranda.css";
import Ticket from "./Ticket";
import Payment from "./Payment";
import ApproveTiket from "./ApproveTiket";
import { Link } from "react-router-dom";

class Header extends Component {
  render() {
    return (
      <div className="ALheaders">
        <p>Land Tick</p>
        <div class="dropdown">
          <img className="ALBerandalogin" src={require("./Image/orang.PNG")} />

          <div class="dropdown-child">
            <div>
              <Link to="/Ticket">
                <img
                  className="dropdownkereta"
                  src={require("./Image/keretadropdown.PNG")}
                />
                <p
                  style={{
                    marginLeft: "60px",
                    marginTop: "-30px",
                    color: " #878787 ;",
                    fontWeight: "bold",
                    cursor: "pointer"
                  }}
                >
                  Kereta Saya
                </p>
              </Link>
            </div>
            <div>
              <Link to="/Payment">
                <img
                  className="dropdownpayment"
                  src={require("./Image/dropdownpayment.PNG")}
                />
                <p
                  style={{
                    marginLeft: "60px",
                    marginTop: "-30px",
                    color: " #878787 ;",
                    fontWeight: "bold",
                    cursor: "pointer"
                  }}
                >
                  Payment
                </p>
              </Link>
            </div>
            <hr
              style={{
                width: "180px",
                border: "bold",
                background: "#EC7A7A "
              }}
            ></hr>
            <div>
              <Link to="/Beranda">
                <img
                  className="dropdownlogout"
                  src={require("./Image/logoutdropdown.PNG")}
                />
                <p
                  style={{
                    marginLeft: "61px",
                    marginTop: "-32px",
                    color: " #878787 ;",
                    fontWeight: "bold",
                    cursor: "pointer"
                  }}
                >
                  Logout
                </p>
              </Link>
            </div>
          </div>
        </div>

        <h3>Jae</h3>
      </div>
    );
  }
}

export default Header;
