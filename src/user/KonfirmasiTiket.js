import React, { Component, useState } from "react";
import ALBeranda from "./ALBeranda";
import { Modal } from "react-bootstrap";
import { Link } from "react-router-dom";

function KonfirmasiTiket() {
  const [show, setShow] = useState(false);

  return (
    <>
      {/* <Button variant="primary" onClick={() => setShow(true)}>
        Custom Width Modal
      </Button> */}
      <div className="pesanan1" onClick={() => setShow(true)}>
        <table style={{ marginLeft: "20px" }}>
          <tr>
            <th style={{ paddingTop: "30px", paddingLeft: "80px" }}>
              Argo Wills
            </th>
            <th style={{ paddingTop: "30px", paddingLeft: "120px" }}>05.00</th>
            <th style={{ paddingTop: "30px", paddingLeft: "100px" }}>10.05</th>
            <th style={{ paddingTop: "30px", paddingLeft: "70px" }}>5j 05m</th>
            <th style={{ paddingTop: "30px", paddingLeft: "210px" }}>
              Rp. 250.000
            </th>
          </tr>
        </table>
      </div>
      <Modal
        show={show}
        onHide={() => setShow(false)}
        dialogClassName="modal-90w"
        aria-labelledby="example-custom-modal-styling-title"
      >
        <p style={{ textAlign: "center" }}>
          Tiket anda berhasil di tambahkan silahkan segera melakukan pembayaran
          Klik{" "}
          <Link to="/Ticket">
            <strong>disini</strong>
          </Link>
        </p>
      </Modal>
    </>
  );
}

export default KonfirmasiTiket;
