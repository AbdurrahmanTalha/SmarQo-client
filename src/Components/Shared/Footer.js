import React from 'react';
import flag from "../../images and icons/Mask Group 3.png"

const Footer = () => {
    return (
        <div className="p-16 bottom-0">
            <footer class="footer grid grid-cols-2 lg:grid-cols-3 border-t-2 border-gray-500/30  p-10 text-base-content">
                {/* <div className="grid grid-cols-2 lg:grid-cols-3 gap-16"> */}
                    <div className="mb-10 flex flex-col">
                        <span class="footer-title">For Customers</span>
                        <a class="link link-hover">Branding</a>
                        <a class="link link-hover">Design</a>
                        <a class="link link-hover">Marketing</a>
                        <a class="link link-hover">Advertisement</a>
                    </div>

                    <div className="mb-10 flex flex-col">
                        <span class="footer-title">About</span>
                        <a class="link link-hover">Terms of use</a>
                        <a class="link link-hover">Privacy policy</a>
                        <a class="link link-hover">Cookie policy</a>
                    </div>
                    <div className="mb-10 flex flex-col lg:mr-24 mr-0">
                        <a class="link link-hover">For Professionals</a>
                        <a class="link link-hover">Contact</a>
                        <a class="link link-hover">Jobs</a>
                        <a class="link link-hover">Press kit</a>
                    </div>
                    <div className="flex md:justify-end md:mr-0 lg:ml-auto lg:col-span-4">
                        <div class="form-control lg:w-80 sm:w-80 w-44 flex flex-col items-end">
                            <img src={flag} className="w-24" alt="" />
                            <p className="text-xl mb-3">Team@smarqo.com</p>
                            <p className="text-sm">+91 84568 65923</p>
                            <small className="">(MON-FRI, 7 AM -9PM)</small>
                        </div>
                    </div>
                {/* </div> */}
                
            </footer>
        </div>
    );
};

export default Footer;