import React, { useState } from "react";
import { Transition } from "@headlessui/react";
import '../../components/Navbar/styles/style.css'

function Index() {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <div className="flex items-center justify-center">
            <nav className="navbar w-11/12 mt-5">
                <div className="px-4 sm:px-6 lg:px-8 w-full max-w-7xl mx-auto rounded-xl">
                    <div className="flex items-center justify-between w-full h-16 ">
                        <div className="flex items-center justify-between w-full">
                            <div className="flex-shrink-0">
                                <a href="/">
                                    <p className="logo text-[40px] font-bold">VIBRANCE'23</p>
                                </a>
                            </div>
                            <div className="hidden md:block">
                                <div className="navs ml-10 flex items-baseline space-x-4 justify-between ">
                                    <a
                                        href="/"
                                        className=" hover:bg-gray-700 text-white px-3 py-2 rounded-md text-base font-bold"
                                    >
                                        events
                                    </a>

                                    <a
                                        href="/"
                                        className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-base font-medium"
                                    >
                                        pro shows
                                    </a>

                                    <a
                                        href="/"
                                        className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-base font-medium"
                                    >
                                        merchandise
                                    </a>

                                    <a
                                        href="/"
                                        className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-base font-medium"
                                    >
                                        sponsors
                                    </a>

                                    <a
                                        href="/"
                                        className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-base font-medium"
                                    >
                                        team
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="-mr-2 flex md:hidden">
                            <button
                                onClick={() => setIsOpen(!isOpen)}
                                type="button"
                                className="bg-gray-900 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
                                aria-controls="mobile-menu"
                                aria-expanded="false"
                            >
                                <span className="sr-only">Open main menu</span>
                                {!isOpen ? (
                                    <svg
                                        className="block h-6 w-6"
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        aria-hidden="true"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M4 6h16M4 12h16M4 18h16"
                                        />
                                    </svg>
                                ) : (
                                    <svg
                                        className="block h-6 w-6"
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        aria-hidden="true"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M6 18L18 6M6 6l12 12"
                                        />
                                    </svg>
                                )}
                            </button>
                        </div>
                    </div>
                </div>

                <Transition
                    show={isOpen}
                    enter="transition ease-out duration-100 transform"
                    enterFrom="opacity-0 scale-95"
                    enterTo="opacity-100 scale-100"
                    leave="transition ease-in duration-75 transform"
                    leaveFrom="opacity-100 scale-100"
                    leaveTo="opacity-0 scale-95"
                >
                    {(ref) => (
                        <div className="md:hidden" id="mobile-menu">
                            <div ref={ref} className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                                <a
                                    href="/"
                                    className="hover:bg-gray-700 text-white block px-3 py-2 rounded-md text-base font-bold"
                                >
                                    events
                                </a>

                                <a
                                    href="/"
                                    className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                                >
                                    pro shows
                                </a>

                                <a
                                    href="/"
                                    className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                                >
                                    merchandise
                                </a>

                                <a
                                    href="/"
                                    className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                                >
                                    sponsors
                                </a>

                                <a
                                    href="/"
                                    className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                                >
                                    team
                                </a>
                            </div>
                        </div>
                    )}
                </Transition>
            </nav>

            


        </div>
    );
}

export default Index;

