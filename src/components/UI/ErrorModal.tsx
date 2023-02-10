import React from "react";
import ReactDOM from "react-dom";
import classes from "./ErrorModal.module.css";

const BackDrop: React.FC<{
  closeDialogue: () => void;
  children: React.ReactNode;
}> = (props) => {
  return (
    <div className={classes.background} onClick={props.closeDialogue}>
      {props.children}
    </div>
  );
};

const ModalOverlay: React.FC<{
  title: string;
  message: string;
  closeDialogue: () => void;
}> = (props) => {
  return (
    <div className={classes.card}>
      <header>
        <h2>{props.title}</h2>
      </header>
      <div>
        <p>{props.message}</p>
      </div>
      <footer>
        <button onClick={props.closeDialogue}>Close</button>
      </footer>
    </div>
  );
};

export const ErrorModal: React.FC<{
  title: string;
  message: string;
  closeDialogue: () => void;
}> = (props) => {
  return (
    <React.Fragment>
      {ReactDOM.createPortal(
        <BackDrop closeDialogue={props.closeDialogue}>
          <ModalOverlay
            title={props.title}
            message={props.message}
            closeDialogue={props.closeDialogue}
          />
        </BackDrop>,
        document.getElementById("backdrop-root") as HTMLElement
      )}
    </React.Fragment>
  );
};
