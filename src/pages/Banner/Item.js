import React from 'react';

const Item = ({ item }) => {
    return (
        <div>
            <img src={item.picture} width='150px' alt="" />
            <h1 className='font-semibold'>{item.name}</h1>
            <div className='flex justify-between'>
                <div>{item.price}</div>
                <div className='text-red-500'>{item.discount}%</div>
            </div>
        </div>
    );
};

export default Item;