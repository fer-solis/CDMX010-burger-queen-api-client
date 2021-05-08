import React, { Fragment } from 'react';
import Item from '../Item'
import "./Products.css"

function AllMenu({products}) {
    return (
        <Fragment>
             {products && //&& para saber si existe
            products.map(product => (
              <Item product={product} key={product.id} />
            ))}
        </Fragment>
    );
}

export default AllMenu;
