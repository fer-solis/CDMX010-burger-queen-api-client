import React, { useState, useEffect, Fragment } from 'react';
import Item from '../Item'
import "./Products.css"

function Breakfast(props) {

    let [breakfasts, setBreakfasts] = useState();
    
    let handleBreakfast = async () => {
        let url = "http://localhost:3000/products";
        let getFectchData = await fetch(url).then((result) => result.json());
        let filterBreakfast= getFectchData.filter((element) => element.type === 'Breakfast');
        setBreakfasts(filterBreakfast);
    };
      
    useEffect(() => {
        handleBreakfast();
      }, []);// eslint-disable-line react-hooks/exhaustive-deps
      

    return (
        // <div className="tableMenu" id="tableMenuC">
        <Fragment>
            {breakfasts && //&& para saber si existe
            breakfasts.map(product => (
              <Item product={product} key={product.id} />
            ))}
        </Fragment>
            
        // </div>
    );
}

export default Breakfast;