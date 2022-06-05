import React from 'react';
import { Link } from 'react-router-dom';
import home1 from "../../assets/girl.png"
import home2 from "../../assets/phone.png"
import home3 from "../../assets/Guy.png"
import "./Hero.css";
const Hero = () => {
    return (
        <div className="hero min-h-screen max-w-screen px-10">
            <div className="hero-content grid lg:grid-cols-2 sm:grid-cols-1">
                <div className="flex flex-col justify-center items-center">
                    <div className="">
                        <div className="hero-girl relative ">
                            <div className="z-10">
                                <img className="w-[297px]" src={home1} alt="" />
                            </div>
                            <div className="bg-[#202020] h-[111px] w-[420px] absolute ml-[270px] overflow-y-hidden  z-50 mt-[-180px]  py-4 px-3  text-white ">
                                <h2 className="text-[1.2rem] ">Tell us what u need</h2>
                                <p className="text-xs">Whatever the service you're looking for, we'll help you find a <br></br>
                                    professional for the job.</p>
                                <div className="flex justify-end items-start mt-[-80px] ml  -[53px] overflow-y-hidden">
                                    <p className="text-[#707070] text-[114px]">1</p>
                                </div>
                            </div>
                        </div>
                        <div className="hero-phone relative">
                            <div className="z-10">
                                <img className="w-[843px]" src={home2} alt="" />
                            </div>
                            <div className="bg-[#202020] h-[171px] w-[446px] absolute ml-[-165px] overflow-y-hidden  z-50 mt-[-336px]  pt-[15px] pl-[27px] pr-[-20px]  text-white ">
                                <h2 className="text-[1.2rem] ">Get Smart Quotes from
                                    <br></br>top industry experts</h2>
                                <p className="text-xs">Check out their profiles, scores and websites to help you
                                    <br></br> make a decision.</p>
                                <div className="flex justify-end items-start mt-[-146px] ml-[53px] overflow-y-hidden">
                                    =                 <p className="text-[#707070] text-[114px]">2</p>
                                </div>
                            </div>
                        </div>
                        <div className="hero-guy relative ">
                            <div className="z-10">
                                <img className="w-[297px]" src={home3} alt="" />
                            </div>
                            <div className="bg-[#202020] h-[130px] w-[446px] absolute ml-[270px] overflow-y-hidden  z-50 mt-[-180px]  py-4 px-3  text-white ">
                                <h2 className="text-[1.2rem] ">Tell us what u need</h2>
                                <p className="text-xs">Whatever the service you're looking for, we'll help you find a <br></br>
                                    professional for the job.</p>
                                <div className="flex justify-end items-start mt-[-80px] ml  -[53px] overflow-y-hidden">
                                    <p className="text-[#707070] text-[114px]">3</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="order-first">
                    <h1 className="text-5xl w-full ">Request <br></br><span className="font-bold">Smart Quotes</span><br></br> from professionals</h1>
                    <p className="py-6 text-[#8D9BB3]">Get quick Quotes from business Search <br></br> and connect with the best professionals and business</p>
                    <div className="flex btn-wide  justify-center items-center flex-col lg:flex md:flex">
                        <button className="btn btn-wide mb-5 bg-[#0C0C0C] rounded capitalize">Post requirement now</button>
                        <Link to="/SmartQuotes" className="btn btn-wide block lg:hidden md:hidden bg-base-200 text-black rounded capitalize">Join as a professional</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero;