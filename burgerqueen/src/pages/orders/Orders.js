import React,{useState,useEffect} from "react";

import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import "./Orders.css";

import Header from "../../components/header/Header";
import Navbar from "../../components/navBar/Navbar";
import Item from "./Item";

const useStyles = makeStyles((theme) => ({
  size: {
    width: "394px",
  },
  offset: theme.mixins.toolbar,
}));

const Orders = () => {
  const classes = useStyles();

    let [products, setProducts] = useState();
    let handleGetData = async () => {
      let url = "http://localhost:3000/products";
      let getFectchData = await fetch(url).then((resul) => resul.json());
      setProducts(getFectchData);
    };

    useEffect(() => {
      handleGetData();
    }, []);

  return (
    <div>
      <Header />
      <Navbar />
      <div className="name">
        <TextField className={classes.size} label="Cliente" />
      </div>
      <div className="number">
        <TextField label="Número de mesa" type="number" variant="outlined" />
      </div>
      <div id="menuContent">
        <div className="btnsMenu">
          <Button id="btnAll" size="large" variant="outlined" color="primary">
            TODO
          </Button>
          <Button
            id="btnBreakfast"
            size="large"
            variant="outlined"
            color="primary"
          >
            DESAYUNO
          </Button>
          <Button
            id="btnDinnner"
            size="large"
            variant="outlined"
            color="primary"
          >
            COMIDAS
          </Button>
        </div>
        <div className="tableMenu">
          {/* iterar sobre el arreglo se modificara al consumir json de api*/}
        {products&&products.map((unsoloproducto, index)=><Item
        info={unsoloproducto}
        key={index}
        />)}
        </div>
      </div>
      <div id="ordercontent">
        <h2>ORDENES BURGER QUEEN</h2>
        <div id="nameClient">
          <h4>María Conchita</h4>
        </div>
        <div id="order">
          {/* aqui va cada pedido */}
        </div>
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
