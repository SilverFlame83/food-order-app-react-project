import { Fragment } from "react";
import ReactDOM from "react-dom";

import styles from "./Modal.module.css";

const BackDrop = (props) => {
    return <div className={styles.backdrop} onClick={props.onCancel}></div>;
  };
  const ModalOverlay = (props) => {
    return (
      <div className={styles.modal}>
        <div className={styles.content}>{props.children}</div>
      </div>
    );
  };

const Modal = (props) => { 
  const Overlay = document.getElementById("overlay");
  return (
    <Fragment>
      {ReactDOM.createPortal(<BackDrop onCancel={props.onCancel} />, Overlay)}
      {ReactDOM.createPortal(
        <ModalOverlay>{props.children}</ModalOverlay>,
        Overlay
      )}
    </Fragment>
  );
};

export default Modal;
