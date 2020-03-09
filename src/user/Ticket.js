import React, { Component } from "react";
import "./Ticket.css";
import Payment from "./Payment";
import "./ALBeranda.css";
import Header from "./Header";
import { Link } from "react-router-dom";

class Ticket extends Component {
  render() {
    return (
      <div>
        {/* header */}
        <Header />
        {/* <div className="header">
          <p>Land Tick</p>
          <h3>Joni</h3>

          <div class="dropdown"> 
          <img className="gambar_header" src={require("./Image/orang.PNG")} />
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
        </div> */}
        {/* body */}

        <div className="tiketsaya">
          <p>Tiket Saya</p>
        </div>
        {/* kiri */}
        <div className="Tiket">
          <div className="headerTiket">
            <p>Land Ticket</p>
          </div>
          <div>
            <h2>Kereta Api</h2>
            <p className="tanggalotw">Saturday, 21 Febuari 2020</p>
          </div>
          <div className="bodytiket">
            <h3>Argo Wills</h3>
            <p>Eksekutif (H)</p>
            <div className="pending">
              <p>Pending</p>
            </div>
            <div className="tandapengenal">
              <p>No. Tanda Pengenal</p>
            </div>
            <hr
              style={{
                marginTop: "120px",
                width: "570px"
              }}
            ></hr>
            <div className="paling_bawah">
              <p>3018978263488291</p>
            </div>
          </div>
          {/* End-kiri */}
          {/* tengah */}
          <div>
            <div>
              <img
                className="img_tengah"
                src={require("./Image/atasbawah.PNG")}
              />
            </div>
            <div className="start">
              <h3>05.00</h3>
              <p style={{ color: "#959595" }}>24 Febuari 2020</p>
            </div>
            <div className="end">
              <h3>10.05</h3>
              <p style={{ color: "#959595" }}>24 Febuari 2020</p>
            </div>
            <div className="namapemesan">
              <p>Nama Pemesan</p>
            </div>
            <div className="anto_bawah">
              <p>Anto</p>
            </div>
          </div>
          {/* end tengah */}
          {/* kanan */}
          <div>
            <div className="kotaberangkat">
              <h3>Jakarta(GMR)</h3>
              <p style={{ color: "#959595" }}>Stasiun Gambir</p>
            </div>
            <div className="kotasampai">
              <h3>Surabaya(Sby)</h3>
              <p style={{ color: "#959595" }}>Stasiun Surabaya</p>
            </div>
            <div className="nohp">
              <p>No. Handphone</p>
            </div>
            <div className="no_hp">
              <p>085921311291</p>
            </div>
            <div className="email">
              <p>Email</p>
              <p style={{ color: "#959595" }}>Jojon@gmail.com</p>
            </div>
            <Link to="Payment">
              <div className="btn-bawah">
                <button>Bayar Sekarang</button>
              </div>
            </Link>
          </div>
          {/* end kanan */}
        </div>
      </div>
    );
  }
}
export default Ticket;
