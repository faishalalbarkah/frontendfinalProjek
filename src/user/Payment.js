import React, { Component } from "react";
import { Row, Col, ButtonToolbar } from "react-bootstrap";
import ModalKonfrimasi from "./ModalKonfirmasi";
import "./Payment.css";
import Header from "./Header";
import { getPaymnentA } from "../_actions/PaymentA";
import { USERTIKETA } from "../_actions/UserTiketGet";
import { getPaymentR } from "../_reducers/PaymentR";
import { connect } from "react-redux";

class Payment extends Component {
  constructor(props) {
    super(props);

    this.state = {
      id: ""
    };
  }

  componentDidMount() {
    const getId = window.location.href;
    const id = getId.substr(33, 10);

    this.props.getPaymnentA(id);
  }
  // componentDidMount() {
  //   this.props.getPaymnentA();
  // }
  // componentDidMount() {
  //   // const { fromNotifications } = this.props.location.state;
  //   // console.log(fromNotifications);
  //   // fetch(`https://api.twitter.com/user/${handle}`)
  //   //   .then((user) => {
  //   //     this.setState(() => ({ user }))
  //   //   })
  // }

  getPayId = e => {
    this.props.getPaymnentA(this.props.id);
    // this.setState({ value: e.target.id });
  };
  render() {
    const { dataPayment } = this.props.getPaymentR;
    console.log(dataPayment);

    // const AllData = this.props.id;
    // console.log("data =>", DataAll);
    // console.log(this.props.locatio);

    return (
      <div>
        <Header />

        <div className="Paymentbodyleft">
          <div className="invoicepayment">
            <p>Invoice</p>
          </div>
          <div className="AlertPayment">
            <img src={require("./Image/tandaalert.PNG")} />
            <p>
              Silahkan melakukan pembayaran melalui M-Banking, E-Banking dan ATM
              ke No.rek Yang Tertera.
            </p>
            <span>No.Rek : 0987896082</span>
          </div>
          <div className="Paymentlendtic">
            <div className="isipaymentkiri">
              <img src={require("./Image/landtickbackground.PNG")} />
            </div>
            <div id="paymenttandapengenal">
              <p>No. Tanda Pengenal</p>
            </div>
            <div id="paymentnamapemesan">
              <p>Nama Pemesan</p>
            </div>
            <div id="paymentnohp">
              <p>No. Handphone</p>
            </div>
            <div id="paymentemail">
              <p>Email</p>
            </div>
            <hr></hr>

            <div id="isipaymenttandapengenal">
              <p>090808909</p>
            </div>
            <div id="isipaymentnamapemesan">
              <p>{dataPayment.nama}</p>
            </div>
            <div id="isipaymentnohp">
              <p></p>
            </div>
            <div id="isipaymentemail">
              <p></p>
            </div>
          </div>
          <div className="rincianharga">
            <h3>Rincian Harga</h3>
          </div>
          <div className="tabelpayment">
            {/* <h5>{dataPayment.tiket.nama_train}</h5> */}
            {/* <p>{DataAll.tiket.price}</p> */}
            <div className="Paymenttotal">
              <p>Total :</p>
              {/* <h3>{DataAll.total_price}</h3> */}
            </div>
            <ButtonToolbar>
              <ModalKonfrimasi />
            </ButtonToolbar>
            {/* <div className="btn-Payment">
              <button type="submit">Bayar Sekarang</button>
            </div> */}
            <div className="buktiPayment">
              <img src={require("./Image/buktitrf.jpg")} />
            </div>
          </div>
        </div>

        <div className="Paymentbodyright">
          <div id="barcodekeretapii">
            <h3>Kereta Api</h3>
            <h4>Saturday, 21 Febuari 2020</h4>
            <img src={require("./Image/barcodeabu.PNG")} />
          </div>
          <div id="barcodekeretapiibawah">
            {/* <h3>{DataAll.tiket.nama_train}</h3> */}
            {/* <p>{DataAll.type_train.name_type_train}</p> */}
            <img src={require("./Image/atasbawahabu.PNG")} />
          </div>
          <div id="jamberangkat">
            {/* <h3>{DataAll.tiket.start_time}</h3> */}
            <p style={{ color: "#959595" }}>21 Febuari 2020</p>
          </div>
          <div id="jamsampai">
            {/* <h3>{DataAll.tiket.arrival_time}</h3> */}
            <p style={{ color: "#959595" }}>21 Febuari 2020</p>
          </div>
          <div id="stasiunstart">
            <h3>Jakarta (GMR)</h3>
            {/* <p style={{ color: "#959595" }}>{DataAll.tiket.start_station}</p> */}
          </div>
          <div id="stasiunend">
            <h3>Surabaya (SBY)</h3>
            <p style={{ color: "#959595" }}>
              {/* {DataAll.tiket.destination_station} */}
            </p>
          </div>
        </div>
        {/* {console.log("getorderr", this.props.getPaymentR)} */}
      </div>
    );
  }
}

const mapStateToProp = state => {
  return {
    USERTIKETR: state.USERTIKETR,
    getPaymentR: state.getPaymentR
  };
};

const mapDispatchToProps = dispatch => {
  return {
    USERTIKETA: () => dispatch(USERTIKETA()),
    getPaymnentA: id => dispatch(getPaymnentA(id))
  };
};
export default connect(mapStateToProp, mapDispatchToProps)(Payment);
