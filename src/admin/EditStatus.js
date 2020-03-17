import React, { Component } from "react";
import { Modal, Form } from "react-bootstrap";
import IndexAdmin from "./IndexAdmin";
import "./EditStatus.css";
import { connect } from "react-redux";
import { Dashup } from "../_actions/DashA";
import { DashById } from "../_actions/DashA";

class EditStatus extends Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false,
      status: "",
      error: false,
      infoModal: false
    };
  }

  handleChange = e => {
    this.setState({
      status: e.target.value
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    if (this.state.status !== "") {
      const id = this.props.id;
      const data = { status: this.state.status };
      this.props.Dashup(id, { status: this.state.status });
    } else {
      this.setState({
        error: true
      });
    }
  };

  handleClose = () => {
    this.setState({ show: false });
  };
  handleShow = () => {
    this.setState({ show: true });
  };

  getEdit = () => {
    let data = {
      status: "Cancels"
    };
    this.props.Dashup(this.props.id, data);
    this.handleShow();
  };
  render() {
    const AllData = this.props.id;
    return (
      <>
        {/* <Button variant="primary" >
        Custom Width Modal
      </Button> */}
        <img
          id="pensil"
          onClick={this.getEdit}
          src={require("./Img/pensil.PNG")}
        />
        <div>
          <Modal
            show={this.state.show}
            onHide={this.handleClose}
            dialogClassName="modal-90w"
            aria-labelledby="example-custom-modal-styling-title"
          >
            <div className="pembungkuseditstatus">
              <div className="editstatusheader">
                <img src={require("./Img/landtickbackground.PNG")} />
              </div>
              <div className="silangeditstatus">
                <p onClick={this.handleClose}>&#10060;</p>
              </div>
              <div className="bodyeditstatus">
                <Form className="form-modal" onSubmit={this.handleSubmit}>
                  <Form.Group controlId="formBasicBreeder">
                    <Form.Label>
                      <h5>Jumlah Tiket</h5>
                    </Form.Label>
                    <Form.Control
                      disabled
                      type="text"
                      placeholder={AllData.qty}
                    />
                  </Form.Group>
                  <Form.Group controlId="formBasicEmail">
                    <Form.Label>
                      <h5>Name</h5>
                    </Form.Label>
                    <Form.Control
                      disabled
                      type="text"
                      placeholder={AllData.user.nama}
                    />
                  </Form.Group>
                  <Form.Group controlId="formBasicPassword">
                    <Form.Label>
                      <h5>Tujuan</h5>
                    </Form.Label>
                    <Form.Control
                      disabled
                      type="text"
                      placeholder={AllData.tiket.start_station}
                    />
                  </Form.Group>
                  <Form.Group controlId="formBasicPhone">
                    <Form.Label>
                      <h5>Bukti Trf</h5>
                    </Form.Label>
                    <Form.Control
                      disabled
                      type="text"
                      placeholder={AllData.attachment}
                    />
                  </Form.Group>
                  <Form.Group controlId="formBasicPhone">
                    {/* <Form.Label>
                      <h5>Status</h5>
                    </Form.Label>
                    <Form.Control type="text" handleSubmit={AllData.status} /> */}
                    <select
                      className="form-control input"
                      name="status"
                      // id="gender"
                      onChange={this.handleChange}
                    >
                      <option value=""> {AllData.status}</option>
                      <option value="Approve">Approved</option>
                      <option value="Pending">Pending</option>
                      <option value="Cancel">Cancel</option>
                    </select>
                    <Form.Text className="text-danger"></Form.Text>
                  </Form.Group>
                  <button onClick={this.getEdit} className="btn-edutstatus">
                    Save
                  </button>
                </Form>
              </div>
            </div>
          </Modal>
        </div>
      </>
    );
  }
}

const mapStateToProp = state => {
  return {
    DashR: state.DashR
  };
};
const mapDispatchToProps = dispatch => {
  return {
    Dashup: id => dispatch(Dashup(id)),
    DashById: (id, data) => dispatch(DashById(id, data))
  };
};
export default connect(mapStateToProp, mapDispatchToProps)(EditStatus);
