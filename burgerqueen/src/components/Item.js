import React from "react";

function Item(props) {
  //console.log('proops', props)

    // const add = (e) => {
    //     product.callback({name: e.target.name, id:e.target.id, price:e.target.price})
    //     console.log('The link was clicked.');
       
    // }

    // const [info, setInfo] = useState({
    //   info: [],
    // })

    // const handleGetInfo = (event) => {
    //   // console.log(event.target.name)
    //   setInfo({
    //     ...info,
    //     [event.target.id] : event.target.value,
    //     [event.target.name] : event.target.value,
    //     [event.target.price] : event.target.value
    //   })
    //   // console.log(setInfo)
    // }
    // console.log(handleGetInfo)


    // price: event.target.value,
    //     name : event.target.value,
    //     id : event.target.value

    // const enviarDatos = (event) => {
//   event.preventDefault()
//   console.log('enviando datos...' + clients.nameClient )
// }

// console.log(product.name)

  let { img, name, id, price } = props.product;
  return (
    <div>
      <button type="submit" className="btnItem" id={id} name={name} data-price={price}>
        <img src={img} alt="" id={name} />
      </button>
    </div>
  );
}

export default Item;
