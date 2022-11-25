import React from 'react';
import { Link } from "react-router-dom";
import { FaUserCircle } from 'react-icons/fa';
import { GoLocation } from 'react-icons/go';

const Nav = () => {
    return (
        <div className=''>
            <nav class="bg-white border-gray-200 dark:bg-gray-900">
                <div class="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl px-4 md:px-6 py-2.5">
                    <Link to='/' class="flex items-center">
                        <span class="self-center text-xl font-bold whitespace-nowrap dark:text-white">shop</span><span class="text-xl">cart</span>
                    </Link>
                    <div class="flex items-center">
                        <span className='mr-2 text-xl'><FaUserCircle /></span>
                        <Link href="#" class="text-sm font-medium text-gray-800 dark:text-blue-500 hover:underline">Sign in</Link>
                    </div>
                </div>
                <div className="divider lg:w-10/12 w-full  mx-auto px-6 my-1"></div>
            </nav>
            <nav className='flex justify-items-center items-center justify-between mx-auto lg:w-10/12 lg:px-6 px-6'>
                <div>
                    <button type="button" class="flex items-center focus:outline-none text-gray-700 bg-orange-400 hover:bg-orange-400 focus:ring-4 focus:ring-orange-400 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:focus:ring-yellow-900"><span className='mr-1'><GoLocation /></span> Location</button>

                </div>
                <form>
                    <div class="flex">
                        <div class="relative">
                            <input type="search" class="block w-96 p-2.5 z-20 text-sm text-gray-900 bg-gray-50 rounded-xl border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-l-gray-700  dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:border-blue-500" placeholder="Search " required />
                            <button type="submit" class="absolute top-0 right-0 p-2.5 text-sm font-medium text-gray-700">
                                <svg aria-hidden="true" class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
                                <span class="sr-only">Search</span>
                            </button>
                        </div>
                    </div>
                </form>

            </nav>
            <nav class="">
                <div class="max-w-screen-xl px-4 py-3 mx-auto md:px-6">
                    <div class="flex items-center">
                        <ul class="flex lg:flex-row justify-end flex-wrap mt-0 mr-6 space-x-7 font-medium">
                            <li>
                                <Link to='/' class="text-gray-900 text-xs dark:text-white hover:underline" aria-current="page">Home</Link>
                            </li>
                            <li>
                                <Link to='/' class="text-gray-900 text-xs dark:text-white hover:underline" aria-current="page">Fresh</Link>
                            </li>
                            <li>
                                <Link to='/' class="text-gray-900 text-xs dark:text-white hover:underline" aria-current="page">Today's Deal</Link>
                            </li>
                            <li>
                                <Link to='/' class="text-gray-900 text-xs dark:text-white hover:underline" aria-current="page">Mobiles</Link>
                            </li>
                            <li>
                                <Link to='/' class="text-gray-900 text-xs dark:text-white hover:underline" aria-current="page">Gift Cards</Link>
                            </li>
                            <li>
                                <Link to='/' class="text-gray-900 text-xs dark:text-white hover:underline" aria-current="page">Women Clothing</Link>
                            </li>
                            <li>
                                <Link to='/' class="text-gray-900 text-xs dark:text-white hover:underline" aria-current="page">Men Clothing</Link>
                            </li>
                            <li>
                                <Link to='/' class="text-gray-900 text-xs dark:text-white hover:underline" aria-current="page">Kids Clothing</Link>
                            </li>
                            <li>
                                <Link to='/' class="text-gray-900 text-xs dark:text-white hover:underline" aria-current="page">Health</Link>
                            </li>
                            <li>
                                <Link to='/' class="text-gray-900 text-xs dark:text-white hover:underline" aria-current="page">Pet Corner</Link>
                            </li>
                            <li>
                                <Link to='/' class="text-gray-900 text-xs dark:text-white hover:underline" aria-current="page">Books</Link>
                            </li>
                            <li>
                                <Link to='/' class="text-gray-900 text-xs dark:text-white hover:underline" aria-current="page">Beauty</Link>
                            </li>
                            <li>
                                <Link to='/' class="text-gray-900 text-xs dark:text-white hover:underline" aria-current="page">KItchen</Link>
                            </li>
                            <li>
                                <Link to='/' class="text-gray-900 text-xs dark:text-white hover:underline" aria-current="page">Bed Room</Link>
                            </li>
                            <li>
                                <Link to='/' class="text-gray-900 text-xs dark:text-white hover:underline" aria-current="page">Sport</Link>
                            </li>
                            <li>
                                <Link to='/' class="text-gray-900 text-xs dark:text-white hover:underline" aria-current="page">Bags</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Nav;