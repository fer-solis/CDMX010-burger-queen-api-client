import React, { useEffect, useState, Fragment } from "react";
import Header from "../../components/header/Header";
import Navbar from "../../components/navBar/Navbar";
import "./Orders.css";
//import { Redirect } from 'react-router-dom'
//import { auth } from '../../Firebase'

import AllMenu from "../../components/products/AllMenu";
// import Breakfast from "../../components/products/Breakfast"
// import Dinner from "../../components/products/Dinner"

import ItemCommand from "../../components/itemCommand/ItemCommand";

import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
// // import SendIcon from '@material-ui/icons/Send';

// import { CustomDialog } from 'react-st-modal';
// import ModalForm from '../../components/modal/Modal';

const useStyles = makeStyles((theme) => ({
  size: {
    width: "394px",
  },
  offset: theme.mixins.toolbar,
}));

const Orders = ({ user }) => {
  //console.log(props);//trae dos arrglos {user:im}
  //console.log(user);//directo al arrglo de info

  const classes = useStyles();

  // //////////////////////////////////

  // const [clients, setClients] = useState({
  //   nameClient: '',
  // })

  // const handleInputChange = (event) => {
  //   // console.log(event.target.name)
  //   setClients({
  //     ...clients,
  //     [event.target.name] : event.target.value
  //   })
  // }

  // const [tables, setTables] = useState({
  //   table: '',
  // })

  // const handleNumberChange = (event) => {
  //   // console.log(event.target.name)
  //   setTables({
  //     ...tables,
  //     [event.target.id] : event.target.value
  //   })
  // }

  // console.log(tables);//objeto {table:'2}

  const [order, setOrder] = useState({
    nameClient: "",
    table: "",
    status: "pendiente",
    items: [],
    total: 0,
  });

  const handleOrder = (event) => {
    setOrder({
      ...order,
      [event.target.id]: event.target.value,
    });
  };

  const handleAddProducts=(item)=>{
    setOrder({...order, items:[...order.items, item]})
  }

  const handleDeleteProducts = (arrItems) => {
		setOrder({...order, items: arrItems})
	}

 console.log(order.items);
  //arreglo con useState, toma valores de name y table
///////////////////



  //////////////////
  let [products, setProducts] = useState();
  let [view, setView] = useState();

  let handleGetData = async (filter) => {
    let url = "http://localhost:3000/products";
    let getFectchData = await fetch(url).then((result) => result.json());

    // console.log('filtrado'+ filter)
    // if(filter === 'all'){

    if (filter === "breakfast") {
      setProducts(
        getFectchData.filter((element) => element.type === "Breakfast")
      );
      setView("breakfast");
    } else if (filter === "dinner") {
      setProducts(getFectchData.filter((element) => element.type === "Dinner"));
      setView("dinner");
    } else {
      setProducts(getFectchData);
    }
  };

  useEffect(() => {
    handleGetData("all");
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  // if(view === 'all'){
  //   return <AllMenu products={products}/>
  // }

  ////////////////////

  

  return (
    <Fragment>
      <Header user={user} />
      <Navbar />
      <div className="nameOfClient">
        <TextField
          className={classes.size}
          label="Cliente"
          // onChange={handleInputChange}
          onChange={handleOrder}
          id="nameClient"
        />
      </div>
      <div className="numberOfTable">
        <TextField
          label="Número de mesa"
          type="number"
          variant="outlined"
          // onChange={handleNumberChange}
          onChange={handleOrder}
          id="table"
        />
      </div>

      <div className="btnsMenu">
        <Button
          onClick={() => handleGetData("all")}
          id="btnAll"
          size="large"
          variant="outlined"
          color="primary"
        >
          TODO
        </Button>
        <Button
          onClick={() => handleGetData("breakfast")}
          id="btnBreakfast"
          size="large"
          variant="outlined"
          color="primary"
        >
          DESAYUNO
        </Button>
        <Button
          onClick={() => handleGetData("dinner")}
          id="btnDinnner"
          size="large"
          variant="outlined"
          color="primary"
        >
          COMIDAS
        </Button>
      </div>
      <div className="tableMenu" id="tableMenu">
        {/* {all && <AllMenu/>}
          {breakfast && <Breakfast />}
          {dinner && <Dinner />} */}
        {view === "all"} {<AllMenu products={products} handleAddProducts={handleAddProducts}/>}
        {view === "breakfast"} {<AllMenu products={products} handleAddProducts={handleAddProducts}/>}
        {view === "dinner"} {<AllMenu products={products} handleAddProducts={handleAddProducts} />}
      </div>
      <div id="ordercontent">
        <h2 id="title">ORDENES BURGER QUEEN</h2>
        <div id="infoClient">
          {/* <h4>María Conchita</h4> */}
          <h4>Cliente: {order.nameClient}</h4>
          <h5>Número de mesa: {order.table}</h5>
        </div>
        <div id="order">
          <ItemCommand 
          order={order}
          handleAddProducts={handleAddProducts}
          handleDeleteProducts={handleDeleteProducts}
          />
        </div>
        <h3 id="total">TOTAL: {order.total}</h3>
        <Button
          variant="contained"
          color="secondary"
          id="btnSend"
          // onClick={async () => {
          //   const result = await CustomDialog(<ModalForm />, {
          //     title: "ORDEN ENVIADA A COCINA",
          //     showCloseIcon: true,
          //   });
          //   console.log("result", result);
          // }}
        >
          ENVIAR A COCINA
        </Button>
      </div>
    </Fragment>

    //       <div className={classes.offset}></div>
  );
};

export default Orders;
