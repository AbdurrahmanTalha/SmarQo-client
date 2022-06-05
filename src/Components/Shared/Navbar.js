import React from 'react';
import { Link } from 'react-router-dom';
import logo from "../../assets/sqo log.png"

const Navbar = ({ children }) => {
    return (
        <>
            <div className="drawer shadow-lg shadow-black absolute">
                <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content flex flex-col">
                    {/* <!-- Navbar --> */}

                    <div className="w-full shadow-xs navbar py-12 mb-28">
                        <div className="flex-1 px-2 mx-2 lg:block sm:block">
                            <div className="flex items-center justify-start">
                                <Link to="/" className="flex items-center justify-start mr-[94px] "><img src={logo} className="w-[125px]" alt="" />
                                    <span className="ml-[-25px] md:block hidden lg:block text-[31px]">SmarQo</span></Link>
                                <div className="dropdown bg-none hidden lg:block md:block">
                                    <label tabIndex="0" className="ml-5 ">
                                        <span className="text-sm text-[#5D6277]">Explore  <i className="fa-solid fa-arrow-down"></i></span>
                                    </label>
                                    <ul tabIndex="0" className="dropdown-content flex flex-col menu p-2 shadow bg-base-100 rounded-box w-52">
                                        <li><Link to="/login" className="text-[#B4B8CC] sm:btn ">LOGIN</Link></li>
                                        <li><Link to="/register" className="text-[#B4B8CC] sm:btn">SIGN UP</Link></li>
                                    </ul>
                                </div>
                            </div>

                        </div>
                        <div>
                            <div className="flex-none block justify-center items-center">
                                <ul className="menu menu-horizontal flex flex-col ">
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