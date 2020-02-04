import React from 'react';
import Item2 from "../item2/item2";

const Item1 = ({changeName, count}) => {
    return (
        <Item2 changeName={changeName}/>
    );
}

export default Item1;