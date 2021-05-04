import React from 'react';

function item({product}) {
    // console.log(product)
    let {img,name}=product
    return (
        <div>
            <button type="submit" id="btnItem">
                <img src={img} alt="" id={name} />
          </button>
        </div>
    );
}

export default item;