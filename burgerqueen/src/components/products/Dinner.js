import React, { useState, useEffect, Fragment } from 'react';
import Item from '../Item'
import "./Products.css"

function Dinner(props) {

    let [dinners, setDinner] = useState();

    let handleDinner = async () => {
        let url = "http://localhost:3000/products";
        let getFectchData = await fetch(url).then((result) => result.json());
        let filterDinner= getFectchData.filter((element) => element.type === 'Dinner');
        setDinner(filterDinner);
    };

    useEffect(() => {
        handleDinner();
      }, []);// eslint-disable-line react-hooks/exhaustive-deps
      

    return (
        // <div className="tableMenu" id="tableMenuC">
        <Fragment>
            {dinners && //&& para saber si existe
            dinners.map(product => (
              <Item product={product} key={product.id} />
            ))}
        </Fragment>
            
        // </div> 
    );
}

export default Dinner;
