import React,{ useState }  from "react";
import { Redirect } from "react-router-dom";

import { auth } from '../../Firebase';

import Button from "@material-ui/core/Button";
import "./Loginmodal.css";


const initialInputs = {
  email: '',
  password: ''
}

const Loginmodal = (props) => {
  const [inputs, setInputs] = useState(initialInputs)

  function handleOnChange(e) {
    const { id, value } = e.target 
    const newObject = { ...inputs, [id]: value }
    setInputs(newObject)
  }

  function handleSubmit(e) {
    e.preventDefault()
    auth.signInWithEmailAndPassword(inputs.email, inputs.password)
  }

  if (props.user) {
    return <Redirect to="/orders" />
  }


  return (
    <div className="modalLogin">
      <h1 className="title">INICIO DE SESIÓN</h1>
      <form className="container" onSubmit={handleSubmit}>
        <input
          id="email"
          type="email"
          className="datos"
          value={inputs.email}
          onChange={handleOnChange}
          placeholder="CORREO"
        ></input>
        <input
          id="password"
          type="password"
          className="datos"
          value={inputs.password}
          onChange={handleOnChange}
          placeholder="CONTRASEÑA"
        ></input>
        <Button type="submit" variant="contained" color="secondary" id="entrar"> ENTRAR </Button>
      </form>
    </div>
  );
};
export default Loginmodal;


