import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import dinner1 from '../../images/dinner1.png';
import dinner2 from '../../images/dinner2.png';
import dinner3 from '../../images/dinner3.png';
import dinner4 from '../../images/dinner4.png';
import dinner5 from '../../images/dinner5.png';
import dinner6 from '../../images/dinner6.png';

const Foods = () => {
    const [openTab, setOpenTab] = useState(1);

    return (
        <section class="text-gray-600 body-font">
            <div class="container px-16 py-12 mx-auto">
                <div className="flex flex-wrap">
                    <div className="w-full">
                        <ul className="content-center mx-auto w-full lg:w-1/3 flex mb-0 list-none flex-wrap pt-3 pb-4 flex-row" role="tablist">
                            <li className="-mb-px mr-0 flex-auto text-center">
                                <Link className={
                                    "text-xs font-bold uppercase px-5 py-3 inline-block leading-normal " +
                                    (openTab === 1
                                        ? "text-red-600 border-b-2 border-red-500"
                                        : "text-black border-0")
                                }
                                    onClick={e => {
                                        e.preventDefault();
                                        setOpenTab(1);
                                    }}
                                    data-toggle="tab"
                                    to="#link1"
                                    role="tablist">
                                    Profile
                            </Link>
                            </li>
                            <li className="-mb-px mr-0 flex-auto text-center">
                                <Link className={
                                    "text-xs font-bold uppercase px-5 py-3 inline-block leading-normal " +
                                    (openTab === 2
                                        ? "text-red-600 border-b-2 border-red-500"
                                        : "text-black border-0")
                                }
                                    onClick={e => {
                                        e.preventDefault();
                                        setOpenTab(2);
                                    }}
                                    data-toggle="tab"
                                    to="#link2"
                                    role="tablist">
                                    Profile
                            </Link>
                            </li>
                            <li className="-mb-px mr-0 flex-auto text-center">
                                <Link className={
                                    "text-xs font-bold uppercase px-5 py-3 inline-block leading-normal " +
                                    (openTab === 3
                                        ? "text-red-600 border-b-2 border-red-500"
                                        : "text-black border-0")
                                }
                                    onClick={e => {
                                        e.preventDefault();
                                        setOpenTab(3);
                                    }}
                                    data-toggle="tab"
                                    to="#link3"
                                    role="tablist">
                                    Profile
                            </Link>
                            </li>
                        </ul>
                        <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6">
                            <div className="px-4 py-5 flex-auto">
                                <div className="tab-content tab-space">
                                    <div className={openTab === 1 ? "block" : "hidden"} id="link1">
                                        <div class="flex flex-wrap">
                                            <div class="lg:w-1/3 md:w-1/3 sm:w-1/2 px-1 py-2 w-full items-center hover:shadow-lg">
                                                <div className="block relative h-48 rounded overflow-hidden">
                                                    <img alt="ecommerce" class="object-contain object-center w-full h-full block" src={dinner1} />
                                                </div>

                                                <div class="mt-4 text-center">
                                                    <h3 class="text-gray-900 title-font text-lg font-medium">CATEGORY</h3>
                                                    <h2 class="text-gray-500 text-xs tracking-widest title-font mb-1">The Catalyzer</h2>
                                                    <p class="mt-1">$16.00</p>
                                                </div>
                                            </div>
                                            <div class="lg:w-1/3 md:w-1/3 sm:w-1/2 cursor-pointer px-1 py-2 w-full items-center hover:shadow-lg">
                                                <div className="block relative h-48 rounded overflow-hidden">
                                                    <img alt="ecommerce" class="object-contain object-center w-full h-full block" src={dinner2} />
                                                </div>

                                                <div class="mt-4 text-center">
                                                    <h3 class="text-gray-900 title-font text-lg font-medium">CATEGORY</h3>
                                                    <h2 class="text-gray-500 text-xs tracking-widest title-font mb-1">The Catalyzer</h2>
                                                    <p class="mt-1">$16.00</p>
                                                </div>
                                            </div>
                                            <div class="lg:w-1/3 md:w-1/3 sm:w-1/2 px-1 py-2 w-full items-center hover:shadow-lg">
                                                <div className="block relative h-48 rounded overflow-hidden">
                                                    <img alt="ecommerce" class="object-contain object-center w-full h-full block" src={dinner3} />
                                                </div>

                                                <div class="mt-4 text-center">
                                                    <h3 class="text-gray-900 title-font text-lg font-medium">CATEGORY</h3>
                                                    <h2 class="text-gray-500 text-xs tracking-widest title-font mb-1">The Catalyzer</h2>
                                                    <p class="mt-1">$16.00</p>
                                                </div>
                                            </div>
                                            <div class="lg:w-1/3 md:w-1/3 sm:w-1/2 px-1 py-2 w-full items-center hover:shadow-lg">
                                                <div className="block relative h-48 rounded overflow-hidden">
                                                    <img alt="ecommerce" class="object-contain object-center w-full h-full block" src={dinner4} />
                                                </div>

                                                <div class="mt-4 text-center">
                                                    <h3 class="text-gray-900 title-font text-lg font-medium">CATEGORY</h3>
                                                    <h2 class="text-gray-500 text-xs tracking-widest title-font mb-1">The Catalyzer</h2>
                                                    <p class="mt-1">$16.00</p>
                                                </div>
                                            </div>
                                            <div class="lg:w-1/3 md:w-1/3 sm:w-1/2 px-1 py-2 w-full items-center hover:shadow-lg">
                                                <div className="block relative h-48 rounded overflow-hidden">
                                                    <img alt="ecommerce" class="object-contain object-center w-full h-full block" src={dinner5} />
                                                </div>

                                                <div class="mt-4 text-center">
                                                    <h3 class="text-gray-900 title-font text-lg font-medium">CATEGORY</h3>
                                                    <h2 class="text-gray-500 text-xs tracking-widest title-font mb-1">The Catalyzer</h2>
                                                    <p class="mt-1">$16.00</p>
                                                </div>
                                            </div>
                                            <div class="lg:w-1/3 md:w-1/3 sm:w-1/2 px-1 py-2 w-full items-center hover:shadow-lg">
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
                                    <div className={openTab === 2 ? "block" : "hidden"} id="link2">
                                        <div class="flex flex-wrap">
                                            <div class="md:w-1/3 px-1 py-2 w-full items-center hover:shadow-lg">
                                                <div className="block relative h-48 rounded overflow-hidden">
                                                    <img alt="ecommerce" class="object-contain object-center w-full h-full block" src={dinner1} />
                                                </div>

                                                <div class="mt-4 text-center">
                                                    <h3 class="text-gray-900 title-font text-lg font-medium">CATEGORY</h3>
                                                    <h2 class="text-gray-500 text-xs tracking-widest title-font mb-1">The Catalyzer</h2>
                                                    <p class="mt-1">$16.00</p>
                                                </div>
                                            </div>
                                            <div class="md:w-1/3 p-4 w-full items-center hover:shadow-lg">
                                                <div className="block relative h-48 rounded overflow-hidden">
                                                    <img alt="ecommerce" class="object-contain object-center w-full h-full block" src={dinner2} />
                                                </div>

                                                <div class="mt-4 text-center">
                                                    <h3 class="text-gray-900 title-font text-lg font-medium">CATEGORY</h3>
                                                    <h2 class="text-gray-500 text-xs tracking-widest title-font mb-1">The Catalyzer</h2>
                                                    <p class="mt-1">$16.00</p>
                                                </div>
                                            </div>
                                            <div class="md:w-1/3 p-4 w-full items-center hover:shadow-lg">
                                                <div className="block relative h-48 rounded overflow-hidden">
                                                    <img alt="ecommerce" class="object-contain object-center w-full h-full block" src={dinner3} />
                                                </div>

                                                <div class="mt-4 text-center">
                                                    <h3 class="text-gray-900 title-font text-lg font-medium">CATEGORY</h3>
                                                    <h2 class="text-gray-500 text-xs tracking-widest title-font mb-1">The Catalyzer</h2>
                                                    <p class="mt-1">$16.00</p>
                                                </div>
                                            </div>
                                            <div class="md:w-1/3 p-4 w-full items-center hover:shadow-lg">
                                                <div className="block relative h-48 rounded overflow-hidden">
                                                    <img alt="ecommerce" class="object-contain object-center w-full h-full block" src={dinner4} />
                                                </div>

                                                <div class="mt-4 text-center">
                                                    <h3 class="text-gray-900 title-font text-lg font-medium">CATEGORY</h3>
                                                    <h2 class="text-gray-500 text-xs tracking-widest title-font mb-1">The Catalyzer</h2>
                                                    <p class="mt-1">$16.00</p>
                                                </div>
                                            </div>
                                            <div class="md:w-1/3 p-4 w-full items-center hover:shadow-lg">
                                                <div className="block relative h-48 rounded overflow-hidden">
                                                    <img alt="ecommerce" class="object-contain object-center w-full h-full block" src={dinner5} />
                                                </div>

                                                <div class="mt-4 text-center">
                                                    <h3 class="text-gray-900 title-font text-lg font-medium">CATEGORY</h3>
                                                    <h2 class="text-gray-500 text-xs tracking-widest title-font mb-1">The Catalyzer</h2>
                                                    <p class="mt-1">$16.00</p>
                                                </div>
                                            </div>
                                            <div class="md:w-1/3 p-4 w-full items-center hover:shadow-lg">
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
                                    <div className={openTab === 3 ? "block" : "hidden"} id="link3">
                                        <div class="flex flex-wrap">
                                            <div class="md:w-1/3 px-1 py-2 w-full items-center hover:shadow-lg">
                                                <div className="block relative h-48 rounded overflow-hidden">
                                                    <img alt="ecommerce" class="object-contain object-center w-full h-full block" src={dinner1} />
                                                </div>

                                                <div class="mt-4 text-center">
                                                    <h3 class="text-gray-900 title-font text-lg font-medium">CATEGORY</h3>
                                                    <h2 class="text-gray-500 text-xs tracking-widest title-font mb-1">The Catalyzer</h2>
                                                    <p class="mt-1">$16.00</p>
                                                </div>
                                            </div>
                                            <div class="md:w-1/3 p-4 w-full items-center hover:shadow-lg">
                                                <div className="block relative h-48 rounded overflow-hidden">
                                                    <img alt="ecommerce" class="object-contain object-center w-full h-full block" src={dinner2} />
                                                </div>

                                                <div class="mt-4 text-center">
                                                    <h3 class="text-gray-900 title-font text-lg font-medium">CATEGORY</h3>
                                                    <h2 class="text-gray-500 text-xs tracking-widest title-font mb-1">The Catalyzer</h2>
                                                    <p class="mt-1">$16.00</p>
                                                </div>
                                            </div>
                                            <div class="md:w-1/3 p-4 w-full items-center hover:shadow-lg">
                                                <div className="block relative h-48 rounded overflow-hidden">
                                                    <img alt="ecommerce" class="object-contain object-center w-full h-full block" src={dinner3} />
                                                </div>

                                                <div class="mt-4 text-center">
                                                    <h3 class="text-gray-900 title-font text-lg font-medium">CATEGORY</h3>
                                                    <h2 class="text-gray-500 text-xs tracking-widest title-font mb-1">The Catalyzer</h2>
                                                    <p class="mt-1">$16.00</p>
                                                </div>
                                            </div>
                                            <div class="md:w-1/3 p-4 w-full items-center hover:shadow-lg">
                                                <div className="block relative h-48 rounded overflow-hidden">
                                                    <img alt="ecommerce" class="object-contain object-center w-full h-full block" src={dinner4} />
                                                </div>

                                                <div class="mt-4 text-center">
                                                    <h3 class="text-gray-900 title-font text-lg font-medium">CATEGORY</h3>
                                                    <h2 class="text-gray-500 text-xs tracking-widest title-font mb-1">The Catalyzer</h2>
                                                    <p class="mt-1">$16.00</p>
                                                </div>
                                            </div>
                                            <div class="md:w-1/3 p-4 w-full items-center hover:shadow-lg">
                                                <div className="block relative h-48 rounded overflow-hidden">
                                                    <img alt="ecommerce" class="object-contain object-center w-full h-full block" src={dinner5} />
                                                </div>

                                                <div class="mt-4 text-center">
                                                    <h3 class="text-gray-900 title-font text-lg font-medium">CATEGORY</h3>
                                                    <h2 class="text-gray-500 text-xs tracking-widest title-font mb-1">The Catalyzer</h2>
                                                    <p class="mt-1">$16.00</p>
                                                </div>
                                            </div>
                                            <div class="md:w-1/3 p-4 w-full items-center hover:shadow-lg">
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
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="flex justify-center mt-8">
                    <button className="px-10 py-1 content-center bg-gray-300 text-white hover:bg-gray-700 rounded-sm">Checkout Your Food</button>
                </div>
            </div>
        </section>
    );
};

export default Foods;