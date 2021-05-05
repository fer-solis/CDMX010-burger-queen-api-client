import React from 'react';
import './ItemCommand.css';

import DeleteForeverIcon from '@material-ui/icons/DeleteForever';

function ItemCommand(props) {
    return (
        <div>
            <h3 id="food">Titulo</h3>
            <div id="foodDishes">
                <p>p/u $10.00</p>
                <input id="count" type="number"></input>
                <p>$20.00</p>
                <button className="delete">
                    <DeleteForeverIcon
                    color="secondary"
                    style={{ fontSize: 30 }}/>
                </button>
            </div>
        </div>
    );
}

export default ItemCommand;