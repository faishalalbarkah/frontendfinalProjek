import React, { Component } from "react";
import { Modal, Button } from "react-bootstrap";
import Axios from "axios";
import { connect } from "react-redux";
import { DashDelet } from "../_actions/DashA";
import "./ModalDelete.css";

class ModalDelete extends Component {
  constructor() {
    super();
    this.state = {
      show: false,
    };
  }

  handleClose = () => {
    this.setState({ show: false });
  };
  handleShow = () => {
    this.setState({ show: true });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const id = this.props.id;
    const token = localStorage.getItem("token");
    Axios({
      method: "DELETE",
      url: "http://localhost:4300/api/v2/order/" + this.props.data.id,
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }).then((res) => {
      window.location.href = "http://localhost:3000/IndexAdmin";
    });
  };

  render() {
    return (
      <>
        <img
          id="delete"
          onClick={this.handleShow}
          src={require("./Img/delete.PNG")}
        />
        <Modal show={this.state.show} onHide={this.handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>E-Ticket</Modal.Title>
          </Modal.Header>
          <Modal.Body>Delete Transaksi??</Modal.Body>
          <Modal.Footer>
            <Button variant="outline-danger" onClick={this.handleClose}>
              No
            </Button>
            <Button variant="outline-success" onClick={this.handleSubmit}>
              Yes
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    );
  }
}

const mapStateToProp = (state) => {
  return {
    DashR: state.DashR,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    DashDelet: (datadash) => dispatch(DashDelet(datadash)),
  };
};
export default connect(mapStateToProp, mapDispatchToProps)(ModalDelete);
