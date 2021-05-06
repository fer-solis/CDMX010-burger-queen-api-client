import React, { useState, useEffect, Fragment } from 'react';
import Item from '../Item'
import "./Products.css"

function AllMenu(props) {

    let [products, setProducts] = useState();

    let handleGetData = async () => {
        let url = "http://localhost:3000/products";
        let getFectchData = await fetch(url).then((result) => result.json());
        setProducts(getFectchData);
    };

    useEffect(() => {
        handleGetData();
      }, []);// eslint-disable-line react-hooks/exhaustive-deps      

    return (
        // <div className="tableMenu" id="tableMenuC">
        <Fragment>
             {products && //&& para saber si existe
            products.map(product => (
              <Item product={product} key={product.id} />
            ))}
        </Fragment>
           
        // </div>
    );
}

export default AllMenu;
