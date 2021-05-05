import { useDialog } from "react-st-modal";
import React from "react";
import "./Modal.css";
import chef from '../../assets/img/imageChef.png'

function ModalForm(props) {
    const dialog = useDialog();


  return (
    <div className="modal">

      <img className="img" src={chef} alt="Img Logo" />
      
      <button className="buttonAcept"
        onClick={() => {
          // Сlose the dialog and return the value
          dialog.close();
        }}
      >
        Aceptar
      </button>
    </div>
  );
}

export default ModalForm;