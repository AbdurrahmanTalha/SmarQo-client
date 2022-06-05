import React from 'react';
import { Link } from 'react-router-dom';
import logo from "../../images and icons/sqo log.png"

const Navbar = ({ children }) => {
    return (
        <>
            <div class="drawer shadow-lg shadow-black absolute">
                <input id="my-drawer-3" type="checkbox" class="drawer-toggle" />
                <div class="drawer-content flex flex-col">
                    {/* <!-- Navbar --> */}

                    <div class="w-full shadow-xs navbar py-6 mb-6">
                        <div class="flex-1 px-2 mx-2 lg:block sm:block">
                            <div className="flex items-center justify-start">
                                <Link to="/" className="flex items-center justify-start mr-[94px] "><img src={logo} className="w-[125px]" alt="" />
                                    <span className="ml-[-25px] md:block hidden lg:block text-[31px]">SmarQo</span></Link>
                                <div class="dropdown bg-none hidden lg:block md:block">
                                    <label tabindex="0" class="ml-5 ">
                                        <span className="text-sm text-[#5D6277]">Explore  <i class="fa-solid fa-arrow-down"></i></span>
                                    </label>
                                    <ul tabindex="0" class="dropdown-content flex flex-col menu p-2 shadow bg-base-100 rounded-box w-52">
                                        <li><Link to="/login" className="text-[#B4B8CC] sm:btn ">LOGIN</Link></li>
                                        <li><Link to="/register" className="text-[#B4B8CC] sm:btn">SIGN UP</Link></li>
                                    </ul>
                                </div>
                            </div>

                        </div>
                        <div>
                            <div class="flex-none block justify-center items-center">
                                <ul class="menu menu-horizontal flex flex-col ">
                                    {/* <!-- Navbar menu content here --> */}
                                    <div className="flex mr-0 ml-auto mb-[-8px]">
                                        <li><Link to="/login" className="text-[#B4B8CC] hidden
                                        md:block lg:block"><small>LOGIN</small></Link></li>
                                        <li><Link to="/login" className="text-[#B4B8CC] lg:hidden sm:hidden block btn m"><small>LOGIN</small></Link></li>
                                        <li><Link to="/register" className="text-[#B4B8CC]"><small>SIGN UP</small></Link></li>
                                    </div>
                                    <div className="lg:flex md:flex hidden items-center justify-center gap-4">
                                        <li><Link to="/" className=' text-[16px]'>Join as a Professional</Link></li>
                                        <li><button className="btn-sm text-white bg-[#0C0C0C] rounded text-[1rem]">Post Requirement</button></li>
                                    </div>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="bg-base-200">
                        {children}
                    </div>
                </div>
            </div>
        </>
    );
};

export default Navbar;