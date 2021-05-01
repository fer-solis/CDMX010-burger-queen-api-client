import React from "react";
import "./Orders.css";
import Header from "../../components/header/Header";
import Navbar from "../../components/navBar/Navbar";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import InputLabel from "@material-ui/core/InputLabel";
import Button from "@material-ui/core/Button";
import imag from "../../assets/img/hamburguesa-doble.jpg";

const useStyles = makeStyles((theme) => ({
  size: {
    width: "394px",
  },
  offset: theme.mixins.toolbar,
}));

const Orders = () => {
  const classes = useStyles();

  //   let [products, setProducts] = useState();
  //   let getData = async () => {
  //     let url = "http://localhost:3004/db";
  //     let getFectchData = await fetch(url).then((resul) => resul.json());
  //     //console.log(getFectchData);
  //     setProducts(getFectchData);
  //   };

  //   useEffect(() => {
  //     getData();
  //   }, []);

  //   function sayHello() { //probar click boton
  //     // alert('Hello!');
  //     console.log('clicked')
  //   }
  // onClick={sayHello}

  return (
    <div>
      {/* <div> */}
      <Header />
      <Navbar />
      {/* </div> */}
      <div className="name">
        <TextField className={classes.size} label="Cliente" />
      </div>
      <div className="number">
        <TextField label="Número de mesa" type="number" variant="outlined" />
        <InputLabel shrink>Ingresa solo números</InputLabel>
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
            BREAKFAST
          </Button>
          <Button
            id="btnDinnner"
            size="large"
            variant="outlined"
            color="primary"
          >
            DINNER
          </Button>
        </div>
        <div className="tableMenu">
          {/* iterar sobre el arreglo se modificara al consumir json de api*/}
          <button type="submit" id="btnItem">
            <img src={imag} alt="" id="itemMenu" />
          </button>
          <button type="submit" id="btnItem">
            <img src={imag} alt="" id="itemMenu" />
          </button>
          <button type="submit" id="btnItem">
            <img src={imag} alt="" id="itemMenu" />
          </button>
          <button type="submit" id="btnItem">
            <img src={imag} alt="" id="itemMenu" />
          </button>
          <button type="submit" id="btnItem">
            <img src={imag} alt="" id="itemMenu" />
          </button>
          <button type="submit" id="btnItem">
            <img src={imag} alt="" id="itemMenu" />
          </button>
        </div>
      </div>

      <div id="ordercontent">
        <h2>BURGER QUEEN ORDER</h2>
        <div id="nameClient">
          <h4>María Conchita</h4>
        </div>
        <div id="order">
          {/* aqui va cada pedido */}
        </div>
        <h3>TOTAL: 150</h3>
        <Button variant="contained" color="secondary" id="btnEnviar">
            ENVIAR A COCINA
        </Button>
      </div>

      <div className={classes.offset}></div>
    </div>
  );
};

export default Orders;
