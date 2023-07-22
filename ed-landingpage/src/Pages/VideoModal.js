import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";
import playicons from "../assets/playicons.svg";
import "../Styles/VideoFrame.css";



function VideoModal(props) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
    
      {/* <Button variant="primary" >
        Launch demo modal
      </Button> */}
      <div className="playicons" onClick={handleShow}>
          <img  src={playicons} alt="icons" />
                  <h4>Intro Video</h4>
        </div>

      <Modal {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered show={show} onHide={handleClose} animation={false}>
      <Modal.Header className="modal-head" closeButton>
         
        </Modal.Header>
        <Modal.Body className="modals-body">
          <iframe
            className="modal__video-style"
            loading="lazy"
            width="782"
            height="430"
            src="https://www.youtube.com/embed/vdMPP47nLhc"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
            autoplay="1&amp"
            controls="0&amp"
            showinfo="0"
          ></iframe>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default VideoModal;
