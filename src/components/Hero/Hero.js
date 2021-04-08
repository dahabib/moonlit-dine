import React from 'react';

const Hero = () => {
    return (
        <section className="bg-hero-pattern bg-cover w-full text-gray-600 body-font">
            <div className="container mx-auto flex flex-col px-5 py-24 justify-center items-center">
                <div className="w-full md:w-2/3 flex flex-col mb-16 items-center text-center">
                    <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">Knausgaard typewriter readymade marfa</h1>
                    <div className="flex w-full justify-center items-end">
                        <div className="inline-flex relative mr-4 lg:w-full xl:w-1/2 w-2/4 md:w-full text-left">
                            <input type="text" id="hero-field" name="hero-field" placeholder="Search Food..." className="w-full bg-white-100 bg-opacity-50 rounded-3xl focus:ring-2 focus:ring-red-500 focus:bg-transparent border border-white-500 focus:border-red-500 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                            <button className="absolute right-0 text-white bg-red-500 border-0 py-2 px-6 focus:outline-none hover:bg-red-600 rounded-3xl text-lg">Button</button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;