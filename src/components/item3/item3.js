import React from 'react';

const Item3 = ({changeName, count}) => {
    return (
        <div>
            <button onClick={() => console.log(changeName)}>CLICK </button>
        </div>
    );
};

export default Item3;
