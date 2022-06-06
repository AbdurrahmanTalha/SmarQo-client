import React from 'react';
import flag from "../../assets/Mask Group 3.png"

const Footer = () => {
    return (
        <div className="lg:md:p-16 px-5 bottom-0 relative">
            <footer className="footer grid grid-cols-2 lg:grid-cols-3 border-t-2 align-middle  border-gray-500/30  p-10 text-base-content">
                <div className="mb-10 flex flex-col lg:mr-24 mr-0">
                    <span>For Professionals</span>
                    <a className="lg:md:text-[16px] text-[13px] font-medium">How it Works</a>
                    <a className="lg:md:text-[16px] text-[13px] font-medium">Pricing</a>
                    <a className="lg:md:text-[16px] text-[13px] font-medium">Join as a professional</a>
                </div>

                <div className="mb-10 flex flex-col">
                    <a className="lg:md:text-[16px] text-[13px] font-medium">Help Center</a>
                    <a className="lg:md:text-[16px] text-[13px] font-medium">Mobile App</a>
                </div>
                <div className="mb-10 flex flex-col">
                    <span>For Customers</span>
                    <a className="lg:md:text-[16px] text-[13px] font-medium">Find a professional</a>
                    <a className="lg:md:text-[16px] text-[13px] font-medium">How it works</a>
                    <a className="lg:md:text-[16px] text-[13px] font-medium">Login</a>
                </div>
                <div className="flex md:justify-end justify-start  md:mr-0 lg:ml-auto lg:col-span-4">
                    <div className="form-control ml-[-50px] lg:w-80 sm:w-80 w-44 flex flex-col items-end">
                        <img src={flag} className="lg:md:w-[107px] w-[43px] h-[28px]  lg:md:h-[72px]" alt="" />
                        <p className="lg:md:text-[16px] text-[14px] font-medium lg:mb-[19px] md:mb-[19px] mb-[16px]">Team@smarqo.com</p>
                        <p className="lg:md:text-[21px]  text-[18px] font-medium">+91 84568 65923</p>
                        <p className="text-[11px] font-light">(MON-FRI, 7 AM -9 PM)</p>
                        <div>
                            <div className="grid grid-flow-col gap-1">
                                <a><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-current"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path></svg></a>
                                <a><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-current"><path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"></path></svg></a>
                                <a><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-current"><path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path></svg></a>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default Footer;