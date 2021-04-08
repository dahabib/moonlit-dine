import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../images/logo2.png';

const Header = () => {
    return (
        <header className="text-gray-600 body-font">
            <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
                <Link to="/" className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
                    <img src={Logo} className="h-8 w-auto" alt="Moonlit Dine"/>
                </Link>
                <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
                    <Link to="/cart" className="mr-5 hover:text-gray-900">Cart</Link>
                    <Link to="/login" className="mr-5 hover:text-gray-900">Login</Link>
                </nav>
                <button className="inline-flex items-center text-white bg-red-600 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded-2xl text-base mt-4 md:mt-0">Sign Up</button>
            </div>
        </header>
    );
};

export default Header;