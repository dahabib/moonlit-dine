import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../images/logo2.png';

const Header = () => {
    return (
        <header className="text-gray-600 body-font">
            <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
                <Link to="/" className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
                    <img src={Logo} className="h-8 w-auto" alt="Moonlit Dine" />
                </Link>
                <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
                    <Link to="/cart" className="mr-5 hover:text-gray-900">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                        </svg>
                    </Link>
                    <Link to="/login" className="mr-5 hover:text-gray-900">Login</Link>
                </nav>
                <button className="inline-flex items-center text-white bg-red-600 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded-2xl text-base mt-4 md:mt-0">Sign Up</button>
            </div>
        </header>
    );
};

export default Header;