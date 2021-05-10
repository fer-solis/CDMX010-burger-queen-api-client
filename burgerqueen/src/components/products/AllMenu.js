import React, { Fragment } from 'react';
import Item from '../Item'
import "./Products.css"

function AllMenu({products, handleAddProducts}) {
    // console.log(products)//item de acuerdo al boton
    //console.log('info del all menu' + addProduct.id)

    return (
        <Fragment>
             {products && //&& para saber si existe
            products.map(product => (
              <Item 
              product={product} 
              key={product.id} 
              handleAddProducts={handleAddProducts}/>
            ))}
        </Fragment>
    );
}

export default AllMenu;
