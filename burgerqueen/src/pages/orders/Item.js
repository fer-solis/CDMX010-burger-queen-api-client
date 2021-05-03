import React from 'react';

function item({info}) {
    let {img,name}=info
    return (
        <div>
            <button type="submit" id="btnItem">
                <img src={img} alt="" id={name} />
          </button>
        </div>
    );
}

export default item;