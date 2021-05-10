import React from "react";

function Item({product, handleAddProducts}) {
  // console.log('item', props)
  //  console.log(product);


    // const enviarDatos = (event) => {
//   event.preventDefault()
//   console.log('enviando datos...' + clients.nameClient )
// }

// console.log(product.name)

  // const getComponent = (event)=>{
  // // console.log(event.currentTarget.id)
  // const target = event.currentTarget.id;
  // console.log(target)
  // // if(target.id === 'btnAll'){
  // //    return <AllMenu allProducts={allProducts}/>;
  //  }

  // let { img, name, id, price } = props.product;

//////////////////////////
  //  const [addProduct, setAddProduct] = useState({
  //    id:product.id,
  //    name: product.name,
  //    price: product.price,
  //    quantity:'' //es la cantidad de items
  //  });

  //  const addProducts = (event) =>{
  //   setAddProduct({
  //     ...addProduct,
  //     // [event.target.name] : event.target.value
  //   })
  //  }

   //console.log(addProducts)

   const enviarDatos = (event) =>{
		event.preventDefault();
		handleAddProducts(product);
	}
  //console.log(enviarDatos)

  return (
    <div>
      <button 
      // onClick={getComponent} 
      onClick={enviarDatos}
      type="submit" className="btnItem" id={product.id} name={product.name} data-price={product.price}>
        <img src={product.img} alt="" id={product.name} />
        </button>
    </div>
  );
}
//modal form es su boton y le pasan como data=props === data=product
export default Item;