import React from 'react';
import { FaInstagram, FaTwitter, FaFacebookF } from 'react-icons/fa';


const Contact = () => {
    return (
        <div className="min-h-screen flex flex-col lg:flex-row bg-white">
            {/* Image Section */}
            <div className="w-full lg:w-1/2 h-[40vh] sm:h-[50vh] lg:h-auto flex items-center justify-center">
                 <img className='h-[300px] sm:h-[400px] lg:h-[550px] mx-auto mt-8 sm:mt-16 lg:mt-28' src="../public/contact.png" alt="Contact" />
            </div>
            
            {/* Content Section */}
            <div className="w-full lg:w-1/2 h-[60vh] sm:h-[50vh] lg:h-auto">
                <div className='itim-regular text-black text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl tracking-tighter mt-8 sm:mt-12 lg:mt-20 px-4 sm:px-6 lg:px-8'>
                    Contact Us
                </div>
                
                <div className='h-auto mt-6 sm:mt-8 lg:mt-10 border-t-4 border-l-4 border-black flex flex-col sm:flex-row'>
                    {/* Form Section */}
                    <div className='flex flex-col mt-8 sm:mt-12 lg:mt-16 ml-0 sm:ml-8 lg:ml-16 gap-8 sm:gap-12 lg:gap-16 flex-1 px-4 sm:px-6 lg:px-0'>
                        <input 
                            className='placeholder-gray-500 focus:outline-none pb-2 sm:pb-3 placeholder:text-lg sm:placeholder:text-xl lg:placeholder:text-2xl xl:placeholder:text-3xl itim-regular text-black text-lg sm:text-xl lg:text-2xl xl:text-3xl border-b-2 border-black bg-transparent' 
                            type="text" 
                            placeholder='Full Name' 
                        />
                        <input 
                            className='placeholder-gray-500 focus:outline-none pb-2 sm:pb-3 placeholder:text-lg sm:placeholder:text-xl lg:placeholder:text-2xl xl:placeholder:text-3xl border-b-2 border-black itim-regular text-black text-lg sm:text-xl lg:text-2xl xl:text-3xl bg-transparent' 
                            type="email" 
                            placeholder='E-mail' 
                        />
                        <input 
                            className='placeholder-gray-500 focus:outline-none pb-2 sm:pb-3 border-b-2 border-black placeholder:text-lg sm:placeholder:text-xl lg:placeholder:text-2xl xl:placeholder:text-3xl itim-regular text-black text-lg sm:text-xl lg:text-2xl xl:text-3xl bg-transparent' 
                            type="text" 
                            placeholder='Message' 
                        />
                        <button className='bg-black text-white p-3 w-full sm:w-fit sm:p-4 text-lg sm:text-xl lg:text-2xl cursor-pointer rounded-xl sm:rounded-2xl hover:bg-gray-800 transition-colors duration-200'>
                            Contact Us
                        </button>
                    </div>
                    
                    {/* Info Section */}
                    <div className='flex flex-col gap-12 sm:gap-16 lg:gap-20 text-black text-center sm:text-left ml-0 sm:ml-8 lg:ml-20 itim-regular my-8 sm:my-12 lg:my-24 flex-1 px-4 sm:px-6 lg:px-0'>
                        <div className=''>
                            <div className='text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl'>Contact</div>
                            <div className='text-sm sm:text-base lg:text-lg'>CodeReviewer.com</div>
                        </div>
                        <div className=''>
                            <div className='text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl'>Based in</div>
                            <div className='text-sm sm:text-base lg:text-lg'>India</div>
                        </div>
                        <div className="flex text-xl sm:text-2xl lg:text-3xl gap-6 sm:gap-8 lg:gap-10 justify-center sm:justify-start">
                            <FaFacebookF className="cursor-pointer hover:scale-110 transition-transform" />
                            <FaInstagram className="cursor-pointer hover:scale-110 transition-transform" />
                            <FaTwitter className="cursor-pointer hover:scale-110 transition-transform" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;
