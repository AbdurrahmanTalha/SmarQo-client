import React from 'react';
import { Link } from 'react-router-dom';
import home2 from "../../images and icons/home 2nd image.png";
import home3 from "../../images and icons/home 3rd image.png";
import Girl from "../../images and icons/girl.png";
import Phone from "../../images and icons/phone.png";
import Man from "../../images and icons/Mask Group 2.png";
const Hero = () => {
    return (
        <div class="hero min-h-screen">
            <div class="hero-content grid lg:grid-cols-2 sm:grid-cols-1">
                <div className="flex flex-col">
                    <div className='flex'>
                        <img src={Girl} alt="" />
                        <div className='bg-[#202020] py-4 px-6 h-[100%] mt-[10px] 
                        ml-[-35px] flex'>
                            <div>
                                <h2 className='text-[1.2rem] text-[#FFFFFF]'>Tell us what u need</h2>
                                <p className='text-[12px] text-[#FFFFFF]'>Whatever the service you're looking for, we'll help you find a professional for the job.</p>
                            </div>
                            <div className="overflow-hidden w-1/5 mb-[-60px] mr-[-5px]">
                                <div className="text-[114px] text-[#454545] w-[100% font-semibold mt-[-18px]">1</div>
                            </div>
                        </div>
                    </div>

                    <img src={home2} alt="" />
                    {/* <img src={home3} alt="" /> */}

                    <div className='flex'>
                        <img src={Man} alt="" />
                        <div className='bg-[#202020] py-4 px-6 h-[100%] mt-[130px] 
                        ml-[-35px] flex'>
                            <div>
                                <h2 className='text-[1.2rem] text-[#FFFFFF]'>Hire the best professional
                                </h2>
                                <p className='text-[12px] text-[#FFFFFF]'>find the best ones for what you need & Connect!</p>
                            </div>
                            <div className="overflow-hidden w-[32%] mr-[-48px] mb-[-60px]">
                                <div className="text-[114px] text-[#454545] w-[100% font-semibold mt-[-26px]">3</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="order-first">
                    <h1 class="text-5xl w-full ">Request <br></br><span className="font-bold">Smart Quotes</span><br></br> from professionals</h1>
                    <p class="py-6 text-[#8D9BB3]">Get quick Quotes from business Search <br></br> and connect with the best professionals and business</p>
                    <div className="flex btn-wide  justify-center items-center flex-col lg:flex md:flex">
                        <button class="btn btn-wide mb-5 bg-[#0C0C0C] rounded capitalize">Post requirement now</button>
                        <Link to="/SmartQuotes" class="btn btn-wide block lg:hidden md:hidden bg-base-200 text-black rounded capitalize">Join as a professional</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero;