import React from 'react';
import { Link } from 'react-router-dom';
import Girl from "../../assets/girl.png";
import Phone from "../../assets/phone.png";
import Man from "../../assets/Guy.png";
import "./Hero.css"
const Hero = () => {
    return (
        <div className="hero min-h-screen">
            <div className="hero-content grid lg:grid-cols-2 sm:grid-cols-1">
                <div className="flex flex-col items-center justify-center">
                    <div className='flex'>
                        <img src={Girl} alt="" />
                        <div className='bg-[#202020] py-4 px-6 h-[100%] mt-[10px] 
                        ml-[-35px] flex'>
                            <div>
                                <h2 className='text-[1.2rem] text-[#FFFFFF]'>Tell us what u need</h2>
                                <p className='text-[12px] pt-2 text-[#FFFFFF]'>Whatever the service you're looking for, we'll help you find a professional for the job.</p>
                            </div>
                            <div className="overflow-hidden w-1/5 mb-[-60px] mr-[-5px]">
                                <div className="text-[114px] text-[#454545] w-[100% font-semibold mt-[-18px]">1</div>
                            </div>
                        </div>
                    </div>

                    <div className='flex flex-row-reverse middle-image'>
                        <div>
                            <img className='' src={Phone} alt="" />
                        </div>
                        <div className='bg-[#202020] relative  w-[446px] h-[100%] mt-[60px] mr-[-38px]  py-4 px-6 '>
                            <div className='flex mr-[-30px] justify-between'>
                                <h2 className='text-[1.2rem] text-[#FFFFFF]'>Get Smart Quotes from <br /> top industry experts</h2>
                                <h2 className='text-[114px] text-[#454545] w-[100% font-semibold mt-[-57px] mb-[-55px]'>2</h2>
                            </div>
                            <p className='text-[12px] text-[#FFFFFF] pt-2 w-[284px]'>Check out their profiles, scores and websites to help you
                                make a decision.</p>
                            <div className="triangle"></div>
                        </div>

                    </div>
                    <div className='flex mt-[-70px]'>
                        <div>
                            <img src={Man} alt="" />
                        </div>
                        <div className='bg-[#202020] py-4 px-6 h-[100%] mt-[130px] 
                        ml-[-35px] flex'>
                            <div className="relative">
                                <h2 className='text-[1.2rem] text-[#FFFFFF]'>Hire the best professional
                                </h2>
                                <p className='text-[12px] pt-2 text-[#FFFFFF]'>find the best ones for what you need & Connect!</p>
                                <div className="triangle-2"></div>
                            </div>
                            <div className="overflow-hidden w-[32%] mr-[-48px] mb-[-60px]">
                                <div className="text-[114px] text-[#454545] w-[100% font-semibold mt-[-26px]">3</div>
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