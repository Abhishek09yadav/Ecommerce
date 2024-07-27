import React from 'react';
import Button from '@mui/material/Button';

import './item.css'


const Item = (props) => {
    return (
        <div className={'item'}>
            <img src={props.image} alt={props.alt}/>
            <p>{props.name}</p>
            <div className="item-prices">
                <span className="item-price-old">
                    $ {props.old_price}
                </span>
                <span className="item-price-new">
                    $ {props.new_price}
                </span>
            </div>
        </div>
    );
};

export default Item;
