import React, { useState } from "react";
import Header from "../../components/header/Header";
import Navbar from "../../components/navBar/Navbar";
import "./Orders.css";

import AllMenu from "../../components/products/AllMenu"
import Breakfast from "../../components/products/Breakfast"
import Dinner from "../../components/products/Dinner"

import ItemCommand from "../../components/itemCommand/ItemCommand";

import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
// import SendIcon from '@material-ui/icons/Send';


import { CustomDialog } from 'react-st-modal';
import ModalForm from '../../components/modal/Modal';


const useStyles = makeStyles((theme) => ({
  size: {
    width: "394px",
  },
  offset: theme.mixins.toolbar,
}));

const Orders = () => {
  const classes = useStyles();


//////////////////////////////////

const [clients, setClients] = useState({
  nameClient: '',
})

const handleInputChange = (event) => {
  // console.log(event.target.name)
  setClients({
    ...clients,
    [event.target.name] : event.target.value
  })
}

// const enviarDatos = (event) => {
//   event.preventDefault()
//   console.log('enviando datos...' + clients.nameClient )
// }

////////////////////////

const [tables, setTables] = useState({
  table: '',
})

const handleNumberChange = (event) => {
  // console.log(event.target.name)
  setTables({
    ...tables,
    [event.target.id] : event.target.value
  })
}

////////////////////////

 let [all, setAll] = useState(true)
 let [breakfast, setBreakfast] = useState(false)
 let [dinner, setDinner] = useState(false)

 let handleSetAll = () => {
   setAll(true)
   setBreakfast(false)
   setDinner(false)}
 let handleSetBreakfast=()=> {
   setBreakfast(true)
   setAll(false)
   setDinner(false)}
 let handleSetDinner=()=> {
   setDinner(true)
   setAll(false)
   setBreakfast(false)}


  return (
    <div>
      <Header />
      <Navbar />
      <div className="nameOfClient">
        <TextField className={classes.size} label="Cliente" onChange={handleInputChange} name="nameClient" />
        {/* <button onClick={enviarDatos} type="submit" id="btnAgregar"><SendIcon color="primary" style={{ fontSize: 30 }} /></button>  */}
      </div>
      <div className="numberOfTable">
        <TextField label="Número de mesa" type="number" variant="outlined" onChange={handleNumberChange} id="table"/>
      </div>
      <div id="menuContent">
        <div className="btnsMenu">
          <Button onClick={handleSetAll} id="btnAll" size="large" variant="outlined" color="primary">
            TODO
          </Button>
          <Button
            onClick={handleSetBreakfast}
            id="btnBreakfast"
            size="large"
            variant="outlined"
            color="primary"
          >
            DESAYUNO
          </Button>
          <Button
          onClick={handleSetDinner}
            id="btnDinnner"
            size="large"
            variant="outlined"
            color="primary"
          >
            COMIDAS
          </Button>
        </div>
        <div className="tableMenu" id="tableMenu">
          {/* { all ? <AllMenu/> : <Dinner/>} */}
          {all && <AllMenu/>}
          {breakfast && <Breakfast />}
          {dinner && <Dinner />}
        </div>
      </div>
      <div id="ordercontent">
        <h2 id="title">ORDENES BURGER QUEEN</h2>
        <div id="infoClient">
          {/* <h4>María Conchita</h4> */}
          <h4>Cliente: {clients.nameClient}</h4>
          <h5>Número de mesa: {tables.table}</h5>
        </div>
        <div id="order">
          <ItemCommand/>
        </div>
        <h3 id="total">TOTAL: 150</h3>
        <Button variant="contained" color="secondary" id="btnSend" onClick={async () => {
      const result = await CustomDialog(
        <ModalForm/>,
        {
          title: 'ORDEN ENVIADA A COCINA',
          showCloseIcon: true,
        }
      );
      console.log("result",result);
    }}>
          ENVIAR A COCINA
        </Button>
      </div>

      <div className={classes.offset}></div>
    </div>
  );
};

export default Orders;
