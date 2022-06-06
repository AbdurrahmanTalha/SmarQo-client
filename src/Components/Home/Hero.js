import React from 'react';
import { Link } from 'react-router-dom';
import Girl from "../../assets/girl.png";
import Phone from "../../assets/phone.png";
import Man from "../../assets/Guy.png";
import "./Hero.css"
const Hero = () => {
    return (
        <div className="hero min-h-screen p-5">
            <div className="hero-content grid lg:grid-cols-2 sm:grid-cols-1 mt-16 container mx-auto">
                <div className="flex flex-col items-center justify-center mt-24 lg:mt-0 md:mt-0">
                    <div className='block md:flex lg:flex'>
                        <img src={Girl} alt="" className="mx-auto lg:md:mx-none z-0" />
                        <div className='bg-[#202020] py-4 px-6 h-[100%] mt-[-10px] lg:mt-[10px] md:mt-[20px] ml-[-16px] flex  relative z-20'>
                            <div>
                                <h2 className='text-[1.2rem] text-[#FFFFFF]'>Tell us what u need</h2>
                                <p className='text-[12px] pt-2 text-[#FFFFFF]'>Whatever the service you're looking for, we'll help you find a professional for the job.</p>
                            </div>
                            <div className="overflow-hidden lg:w-1/5 md:w-1/5 mb-[-60px] mr-[-5px]">
                                <div className="text-[114px] text-[#454545] w-[100% font-semibold mt-[-18px]">1</div>
                            </div>
                        </div>
                    </div>

                    <div className='block md:flex lg:flex flex-row-reverse mt-[100px]'>
                        <img className='mx-auto lg:mt-[-37px] md:mt-[-37px]' src={Phone} alt="" />
                        <div className='bg-[#202020] relative lg:md:w-[446px] h-[100%] lg:mt-[60px] md:mt-[60px] mt-[-40px] mr-[-38px]  py-4 px-6 w-[115%]'>
                            <div className='flex md:mr-[-30px] justify-between mr-[18px]'>
                                <h2 className='text-[1.2rem] text-[#FFFFFF]'>Get Smart Quotes from <br /> top industry experts</h2>
                                <h2 className='text-[114px] text-[#454545] w-[100% font-semibold mt-[-57px] mb-[-55px]'>2</h2>
                            </div>
                            <p className='text-[12px] text-[#FFFFFF] pt-2 w-[284px]'>Check out their profiles, scores and websites to help you
                                make a decision.</p>
                            <div className="triangle hidden lg:block md:block"></div>
                        </div>
                    </div>
                    <div className='block md:flex lg:flex lg:mt-[-70px] md:mt-[70px] mt-[100px]'>
                        <img src={Man} alt="" className="mx-auto " />
                        <div className='bg-[#202020] py-4 px-6 h-[100%] mt-[-10px] lg:mt-[160px]  md:mt-[150px]  ml-[-35px] flex relative z-20 sm:w-[108%]'>
                            <div className="relative">
                                <h2 className='text-[1.2rem] text-[#FFFFFF]'>Hire the best professional</h2>
                                <p className='text-[12px] pt-2 text-[#FFFFFF]'>find the best ones for what you need & Connect!</p>
                                <div className="triangle-2 hidden lg:block md:block"></div>
                            </div>
                            <div className="overflow-hidden mb-[-60px] mr-[-5px]">
                                <div className="text-[114px] text-[#454545] w-[100% font-semibold mt-[-18px] pl-[42px] md:pl-[0px] lg:pl-[0px]">3</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="order-first">
                    <h1 className="text-5xl w-full ">Request <br></br><span className="font-bold">Smart Quotes</span><br></br> from professionals</h1>
                    <p className="py-6 text-[#8D9BB3]">Get quick Quotes from business Search <br></br> and connect with the best professionals and business</p>
                    <div className="flex btn-wide  sm:justify-center lg:md:ml-0 mx-auto sm:items-center flex-col lg:flex md:flex">
                        <button className="btn btn-wide mb-5 bg-[#0C0C0C] rounded capitalize">Post requirement now</button>
                        <div className="divider lg:md:hidden block">or</div>
                        <Link to="/SmartQuotes" className="lg:hidden md:hidden bg-base-200 text-blackcapitalize text-center">Join as a professional</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero;