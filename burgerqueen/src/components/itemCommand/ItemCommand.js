import React, {useState} from 'react';
import './ItemCommand.css';

import DeleteForeverIcon from '@material-ui/icons/DeleteForever';

function ItemCommand({order, handleAddProducts, handleDeleteProducts}) {
    //console.log('info de itemcomand' + order.nameClient)
    //console.log('info de itemcomand' + order.table)

    const [total, setTotal] = useState();

    return (
        <>
        {order.items.map((product) => {
            
            // let suma = 0;

            // const addTotal = (event)=>{
            //     suma = event.target.value*product.price
            //     console.log(suma)
            // }

        const addTotal = (event) => {
            setTotal(event.target.value*product.price)   
            }   
        
                return(
                    <form  key={product.id}>
                        <h3  id="food">{product.name}</h3>
                        <div id="foodDishes">
                            <p>${product.price}</p>
                            <input id="count" type="number" 
                            onChange={addTotal}></input>
                            {/* <p>${suma}</p> */}
                            <p>${total}</p>
                            <button className="delete"
                            onClick={()=>deleteProductOrder(order, product,handleDeleteProducts)}>
                                <DeleteForeverIcon
                                color="secondary"
                                style={{ fontSize: 30 }}/>
                            </button>
                        </div>
                        
                    </form>
                )
        })}
        </>
    );
}

export default ItemCommand;

const deleteProductOrder = (order, product,handleDeleteProducts) => {
	const deleteProduct=order.items.filter((item) => item.id !== product.id);
	handleDeleteProducts(deleteProduct)
}