import React, { useState } from "react";
import "./Home.css";
import logo from "../../assets/img/logo.png";
//import Loginmodal from '../../components/loginModal/Loginmodal';
import Button from "@material-ui/core/Button";
import { auth } from '../../Firebase'
import { Redirect } from "react-router-dom"

//valor inicial de mi estado, inputs por defecto
const initialInputs= {
    email:'',
    password:''
}

const Home = (props) => {

    const [inputs, setInputs] = useState(initialInputs)

    function handleOnchange(e) {
        const { id, value } = e.target
        const newObject = { ...inputs, [id]: value }
        //propagar los valores que ya existian
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
    <div className="card">
      <div className="elements">
        <img className="logo" src={logo} alt=""></img>
        {/* <Loginmodal /> */}
        <div className="modalLogin">
          <h1 className="title">INICIO DE SESIÓN</h1>
          <form className="container" onSubmit={handleSubmit}>
            <input
              id="email"
              type="email"
              className="datos"
              value={inputs.email}   
              //el enlace entre nuestro formulario y el stado de react
              onChange={handleOnchange}
              placeholder="CORREO"
            ></input>
            <input
              id="password"
              type="password"
              className="datos"
              value={inputs.password}
              onChange={handleOnchange}
              placeholder="CONTRASEÑA"
            ></input>
            <Button
              type="submit"
              variant="contained"
              color="secondary"
              id="entrar"
            >
              ENTRAR
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
};
export default Home;
