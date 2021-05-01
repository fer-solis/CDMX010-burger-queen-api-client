import React from "react";
import "./Loginmodal.css";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";

const Loginmodal = () => {
  return (
    <div className="modalLogin">
      <h1 className="title">INICIO DE SESIÓN</h1>
      <div className="container">
        <input
          type="email"
          className="datos"
          name="email"
          placeholder="CORREO"
        ></input>
        <input
          type="password"
          className="datos"
          name="password"
          placeholder="CONTRASEÑA"
        ></input>
        <Button variant="contained" color="secondary" id="entrar">
          <Link to="/orders" className="boton">
            ENTRAR
          </Link>
        </Button>
      </div>
    </div>
  );
};
export default Loginmodal;
