import React from 'react';
import { Link } from "react-router-dom";
import { IoIosArrowForward } from 'react-icons/io';


const Footer = () => {
    return (
        <div className='flex justify-between w-10/12 px-6 mx-auto'>
            <div>
                <Link to='/' class="flex items-center">
                    <span class="self-center text-xl font-bold whitespace-nowrap dark:text-white">shop</span><span class="text-xl">cart</span>
                </Link>
            </div>
            <div>
                <ul class="flex lg:flex-row justify-end flex-wrap mt-0 mr-6 space-x-7 font-medium">
                    <li>
                        <Link to='/' class="text-gray-900  dark:text-white hover:underline" aria-current="page">Home</Link>
                    </li>
                    <li>
                        <Link to='/' class="text-gray-900  dark:text-white hover:underline" aria-current="page">Fresh</Link>
                    </li>
                    <li>
                        <Link to='/' class="text-gray-900  dark:text-white hover:underline" aria-current="page">Today's Deal</Link>
                    </li>
                </ul>
            </div>
            <div className='flex items-center '>English <IoIosArrowForward /></div>
        </div>
    );
};

export default Footer;