import React from 'react';
import { Link } from 'react-router-dom';
import logo from "../../images and icons/sqo log.png"

const Navbar = ({ children }) => {
    return (
        <>
            <div class="drawer shadow-lg shadow-black">
                <input id="my-drawer-3" type="checkbox" class="drawer-toggle" />
                <div class="drawer-content flex flex-col">
                    {/* <!-- Navbar --> */}

                    <div class="w-full shadow-lg navbar mb-10 py-14">
                        <div class="flex-1 px-2 mx-2 lg:block sm:block">
                            <div className="flex items-center justify-start">
                                <img src={logo} className="w-[125px]" alt="" />
                                <span className=" md:block hidden lg:block ">SmarQo</span>
                                <div class="dropdown bg-none hidden lg:block md:block">
                                    <label tabindex="0" class="ml-5">
                                        Explore <i class="fa-solid fa-arrow-down"></i>
                                    </label>
                                    <ul tabindex="0" class="dropdown-content flex flex-col menu p-2 shadow bg-base-100 rounded-box w-52">
                                        <li><Link to="/" className="text-[#B4B8CC]">LOGIN</Link></li>
                                        <li><Link to="/" className="text-[#B4B8CC]">SIGN UP</Link></li>
                                    </ul>
                                </div> 
                            </div>

                        </div>
                        <div>
                            <div class="flex-none block">
                                <ul class="menu menu-horizontal flex flex-col ">
                                    {/* <!-- Navbar menu content here --> */}
                                     <div className="flex mr-0 ml-auto">
                                        <li><Link to="/" className="text-[#B4B8CC]"><small>LOGIN</small></Link></li>
                                        <li><Link to="/" className="text-[#B4B8CC]"><small>SIGN UP</small></Link></li>
                                    </div>
                                    <div className="lg:flex md:flex hidden ">
                                        <li><Link to="/">Join as a Professional</Link></li>
                                        <li><button className="btn text-white bg-[#0C0C0C] rounded">Post Requirement</button></li>
                                    </div> 
                                </ul>
                            </div>
                        </div>
                    </div>
                    {/* <!-- Page content here --> */}
                    {children}
                </div>
            </div>
        </>
    );
};

export default Navbar;