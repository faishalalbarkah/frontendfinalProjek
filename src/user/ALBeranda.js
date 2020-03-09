import React, { Component } from "react";
import {
  Row,
  Col,
  Container,
  ButtonToolbar,
  DropdownButton,
  Dropdown
} from "react-bootstrap";
import Modallogin from "./Modallogin";
import "./ALBeranda.css";
import Register from "./Register";
import KonfirmasiTiket from "./KonfirmasiTiket";
import { Link } from "react-router-dom";
import "./Beranda.css";
import Header from "./Header";

class Beranda extends Component {
  render() {
    return (
      <div>
        {/* header */}
        <Header />
        {/* <div className="ALheaders">
          <p>Land Tick</p>
          <div class="dropdown">
            <img
              className="ALBerandalogin"
              src={require("./Image/orang.PNG")}
            />

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
        </div> */}
        {/* slider */}
        <div className="slider1">
          <div className="fortext1">
            <h2>Selamat Pagi, Ticket Seekers !</h2>
            <span>ingin Pulkam dengan Good Deal ?</span>
            <p>Masuk dan Daftar Sekarang!!!</p>
          </div>
          <div>
            <img className="image2" src={require("./Image/image2.jpg")} />
            <img className="image1" src={require("./Image/image1.jpg")} />
          </div>
        </div>

        <div className="tiketapi">
          <div className="tiketapigrounddlm">
            <div className="pembungkusiconkereta">
              <img className="kereta" src={require("./Image/iconkereta.png")} />
              <p style={{ marginLeft: "100px", marginTop: "-30px" }}>
                Tiket Kereta Api
              </p>
            </div>
          </div>
          {/* tiket api  */}
          <div className="tiketapitengah">
            <p>Tiket Kereta Api</p>
            <div id="isitiketapi">
              <h3>Asal</h3>
              <input className="asal" type="text" />

              <input className="chekbox" type="checkbox" />
              <p
                style={{
                  fontSize: "15px",
                  marginLeft: "270px",
                  marginTop: "-20px"
                }}
              >
                Pulang Pergi
              </p>
              <h4>Tanggal Berangkat</h4>
              <input
                style={{
                  width: "160px",
                  height: "30px",
                  background: "#b1b1b1",
                  marginLeft: "20px",
                  borderRadius: "5px"
                }}
                type="date"
              />
            </div>
          </div>

          <div className="tiketapikanan">
            <h3>Tujuan</h3>
            <input className="tujuan" type="text" />

            <div>
              <h4 className="Dewasa1">Dewasa</h4>
              <input className="Dewasa" type="number" name="qty" />
            </div>
            <div>
              <h4 className="bayi1">Bayi</h4>
              <input className="Bayi" type="number" name="qty" />
              <button className="CariTiket" type="input">
                Cari Tiket
              </button>
            </div>
          </div>
        </div>
        {/* body */}
        <div className="Body">
          <table style={{ marginLeft: "20px" }}>
            <tr>
              <th style={{ paddingTop: "30px", paddingLeft: "80px" }}>
                Nama Kereta
              </th>
              <th style={{ paddingTop: "30px", paddingLeft: "80px" }}>
                Berangkat
              </th>
              <th style={{ paddingTop: "30px", paddingLeft: "80px" }}>Tiba</th>
              <th style={{ paddingTop: "30px", paddingLeft: "80px" }}>
                Durasi
              </th>
              <th style={{ paddingTop: "30px", paddingLeft: "200px" }}>
                Harga Per Orang
              </th>
            </tr>
          </table>
          <ButtonToolbar>
            <KonfirmasiTiket />
          </ButtonToolbar>
          {/* <div className="pesanan1">
            <table style={{ marginLeft: "20px" }}>
              <tr>
                <th style={{ paddingTop: "30px", paddingLeft: "80px" }}>
                  Argo Wills
                </th>
                <th style={{ paddingTop: "30px", paddingLeft: "120px" }}>
                  05.00
                </th>
                <th style={{ paddingTop: "30px", paddingLeft: "100px" }}>
                  10.05
                </th>
                <th style={{ paddingTop: "30px", paddingLeft: "70px" }}>
                  5j 05m
                </th>
                <th style={{ paddingTop: "30px", paddingLeft: "210px" }}>
                  Rp. 250.000
                </th>
              </tr>
            </table>
          </div> */}
          {/* <div className="pesanan2">
            <table style={{ marginLeft: "20px" }}>
              <tr>
                <th style={{ paddingTop: "30px", paddingLeft: "80px" }}>
                  Argo Wills
                </th>
                <th style={{ paddingTop: "30px", paddingLeft: "120px" }}>
                  05.00
                </th>
                <th style={{ paddingTop: "30px", paddingLeft: "100px" }}>
                  10.05
                </th>
                <th style={{ paddingTop: "30px", paddingLeft: "70px" }}>
                  5j 05m
                </th>
                <th style={{ paddingTop: "30px", paddingLeft: "210px" }}>
                  Rp. 250.000
                </th>
              </tr>
            </table>
          </div>
          <div className="pesanan3"> 
            <table style={{ marginLeft: "20px" }}>
              <tr>
                <th style={{ paddingTop: "30px", paddingLeft: "80px" }}>
                  Argo Wills
                </th>
                <th style={{ paddingTop: "30px", paddingLeft: "120px" }}>
                  05.00
                </th>
                <th style={{ paddingTop: "30px", paddingLeft: "100px" }}>
                  10.05
                </th>
                <th style={{ paddingTop: "30px", paddingLeft: "70px" }}>
                  5j 05m
                </th>
                <th style={{ paddingTop: "30px", paddingLeft: "210px" }}>
                  Rp. 250.000
                </th>
              </tr>
            </table>
          </div> */}
        </div>
        {/* footer */}
        <div className="footer"></div>
      </div>
    );
  }
}

export default Beranda;
