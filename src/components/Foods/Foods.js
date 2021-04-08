import React from 'react';
import dinner1 from '../../images/dinner1.png';
import dinner2 from '../../images/dinner2.png';
import dinner3 from '../../images/dinner3.png';
import dinner4 from '../../images/dinner4.png';
import dinner5 from '../../images/dinner5.png';
import dinner6 from '../../images/dinner6.png';

const Foods = () => {
    return (
        <section class="text-gray-600 body-font">
            
            <div class="container px-16 py-24 mx-auto">
                <div class="flex flex-wrap m-4">
                    <div class="lg:w-1/3 md:w-1/2 p-4 w-full items-center px-4 hover:ring-4 hover:ring-gray-200 hover:ring-opacity-30 hover:scale-105  transition-colors duration-200 ease-in-out">
                        <div className="block relative h-48 rounded overflow-hidden">
                            <img alt="ecommerce" class="object-contain object-center w-full h-full block" src={dinner1} />
                        </div>

                        <div class="mt-4 text-center">
                            <h3 class="text-gray-900 title-font text-lg font-medium">CATEGORY</h3>
                            <h2 class="text-gray-500 text-xs tracking-widest title-font mb-1">The Catalyzer</h2>
                            <p class="mt-1">$16.00</p>
                        </div>
                    </div>
                    <div class="lg:w-1/3 md:w-1/2 p-4 w-full items-center px-4">
                        <div className="block relative h-48 rounded overflow-hidden">
                        <img alt="ecommerce" class="object-contain object-center w-full h-full block" src={dinner2} />
                        </div>

                        <div class="mt-4 text-center">
                            <h3 class="text-gray-900 title-font text-lg font-medium">CATEGORY</h3>
                            <h2 class="text-gray-500 text-xs tracking-widest title-font mb-1">The Catalyzer</h2>
                            <p class="mt-1">$16.00</p>
                        </div>
                    </div>
                    <div class="lg:w-1/3 md:w-1/2 p-4 w-full items-center px-4">
                        <div className="block relative h-48 rounded overflow-hidden">
                        <img alt="ecommerce" class="object-contain object-center w-full h-full block" src={dinner3} />
                        </div>

                        <div class="mt-4 text-center">
                            <h3 class="text-gray-900 title-font text-lg font-medium">CATEGORY</h3>
                            <h2 class="text-gray-500 text-xs tracking-widest title-font mb-1">The Catalyzer</h2>
                            <p class="mt-1">$16.00</p>
                        </div>
                    </div>
                    <div class="lg:w-1/3 md:w-1/2 p-4 w-full items-center px-4">
                        <div className="block relative h-48 rounded overflow-hidden">
                        <img alt="ecommerce" class="object-contain object-center w-full h-full block" src={dinner4} />
                        </div>

                        <div class="mt-4 text-center">
                            <h3 class="text-gray-900 title-font text-lg font-medium">CATEGORY</h3>
                            <h2 class="text-gray-500 text-xs tracking-widest title-font mb-1">The Catalyzer</h2>
                            <p class="mt-1">$16.00</p>
                        </div>
                    </div>
                    <div class="lg:w-1/3 md:w-1/2 p-4 w-full items-center px-4">
                        <div className="block relative h-48 rounded overflow-hidden">
                        <img alt="ecommerce" class="object-contain object-center w-full h-full block" src={dinner5} />
                        </div>

                        <div class="mt-4 text-center">
                            <h3 class="text-gray-900 title-font text-lg font-medium">CATEGORY</h3>
                            <h2 class="text-gray-500 text-xs tracking-widest title-font mb-1">The Catalyzer</h2>
                            <p class="mt-1">$16.00</p>
                        </div>
                    </div>
                    <div class="lg:w-1/3 md:w-1/2 p-4 w-full items-center px-4">
                        <div className="block relative h-48 rounded overflow-hidden">
                        <img alt="ecommerce" class="object-contain object-center w-full h-full block" src={dinner6} />
                        </div>

                        <div class="mt-4 text-center">
                            <h3 class="text-gray-900 title-font text-lg font-medium">CATEGORY</h3>
                            <h2 class="text-gray-500 text-xs tracking-widest title-font mb-1">The Catalyzer</h2>
                            <p class="mt-1">$16.00</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Foods;