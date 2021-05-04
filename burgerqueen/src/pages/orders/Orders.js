import React, { useState, useEffect } from "react";

import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
// import SendIcon from '@material-ui/icons/Send';
import "./Orders.css";

import Header from "../../components/header/Header";
import Navbar from "../../components/navBar/Navbar";
import Item from "../../components/Item";

import ReactDOM from 'react-dom';

const useStyles = makeStyles((theme) => ({
  size: {
    width: "394px",
  },
  offset: theme.mixins.toolbar,
}));

const Orders = () => {
  const classes = useStyles();


////////////////////////////////

  let [products, setProducts] = useState();

  let handleGetData = async () => {
    let url = "http://localhost:3000/products";
    let getFectchData = await fetch(url).then((result) => result.json());
    setProducts(getFectchData);

    ReactDOM.render(
      <React.StrictMode>    
          {products && //&& para saber si existe
              products.map(product => (
                <Item product={product} key={product.id} />
              ))}
      </React.StrictMode>,
      document.getElementById('tableMenu')
    );
  };

  useEffect(() => {
    handleGetData();
  }, []);// eslint-disable-line react-hooks/exhaustive-deps

//////////////////////////////////

let [breakfasts, setBreakfasts] = useState();

let handleBreakfast = async () => {
  let url = "http://localhost:3000/products";
  let getFectchData = await fetch(url).then((result) => result.json());
  let filterBreakfast= getFectchData.filter((element) => element.type === 'Breakfast');
  setBreakfasts(filterBreakfast);

  ReactDOM.render(
    <React.StrictMode>    
        {breakfasts && //&& para saber si existe
            breakfasts.map(product => (
              <Item product={product} key={product.id} />
            ))}
    </React.StrictMode>,
    document.getElementById('tableMenu')
  );
};

useEffect(() => {
  handleBreakfast();
}, []);// eslint-disable-line react-hooks/exhaustive-deps


//////////////////////////////////


let [dinners, setDinner] = useState();

let handleDinner = async () => {
  let url = "http://localhost:3000/products";
  let getFectchData = await fetch(url).then((result) => result.json());
  let filterDinner= getFectchData.filter((element) => element.type === 'Dinner');
  setDinner(filterDinner);

  ReactDOM.render(
    <React.StrictMode>    
        {dinners && //&& para saber si existe
            dinners.map(product => (
              <Item product={product} key={product.id} />
            ))}
    </React.StrictMode>,
    document.getElementById('tableMenu')
  );
};

useEffect(() => {
  handleDinner();
}, []);// eslint-disable-line react-hooks/exhaustive-deps


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
          <Button onClick={handleGetData} id="btnAll" size="large" variant="outlined" color="primary">
            TODO
          </Button>
          <Button
            onClick={handleBreakfast}
            id="btnBreakfast"
            size="large"
            variant="outlined"
            color="primary"
          >
            DESAYUNO
          </Button>
          <Button
          onClick={handleDinner}
            id="btnDinnner"
            size="large"
            variant="outlined"
            color="primary"
          >
            COMIDAS
          </Button>
        </div>
        <div className="tableMenu" id="tableMenu">
        {/* {products && //&& para saber si existe
            products.map(product => (
              <Item product={product} key={product.id} />
            ))} */}
        </div>
      </div>
      <div id="ordercontent">
        <h2>ORDENES BURGER QUEEN</h2>
        <div id="infoClient">
          {/* <h4>María Conchita</h4> */}
          <h4>Cliente: {clients.nameClient}</h4>
          <h5>Número de mesa: {tables.table}</h5>
        </div>
        <div id="order">{/* aqui va cada pedido */}</div>
        <h3>TOTAL: 150</h3>
        <Button variant="contained" color="secondary" id="btnSend">
          ENVIAR A COCINA
        </Button>
      </div>

      <div className={classes.offset}></div>
    </div>
  );
};

export default Orders;
