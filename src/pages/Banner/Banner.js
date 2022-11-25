import React, { useEffect, useState } from 'react';
import Item from './Item';

const Banner = () => {
    const [items, setItem] = useState([]);

    useEffect(() => {
        fetch('items.json')
            .then(res => res.json())
            .then(data => setItem(data));
    }, [])

    return (
        <div className='w-10/12 px-6 mx-auto lg:flex block justify-between justify-items-center items-center mt-12'>
            <div>
                <h1 className='text-7xl lg:mb-0 mb-12'>We picked some <span className='font-bold text-orange-500'>cool things</span> for you!</h1>
            </div>
            <div>
                <h1 className='font-semibold text-xl'>hot deals for Your</h1>
                <div className='divider my-0'></div>
                <div className='grid sm:grid-cols-1 lg:grid-cols-3  md:grid-cols-2 gap-20'>
                    {
                        items.map(item => <Item
                            key={item.id}
                            item={item}></Item>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Banner;