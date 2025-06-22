import React, { useState, useEffect } from 'react';
import { FaArrowRight, FaReact, FaNodeJs, FaGithub, FaDocker, FaJsSquare } from 'react-icons/fa';
import { AnimatePresence, motion } from "framer-motion";
import { FiAlertCircle } from "react-icons/fi";
import { useNavigate } from 'react-router-dom';


const techIcons = [
    <FaReact key="react" />,
    <FaNodeJs key="node" />,
    <FaGithub key="github" />,
    <FaDocker key="docker" />,
    <FaJsSquare key="js" />, 
];

const Landing = () => {
    const [isOpen, setIsOpen] = useState(false);
    const navigate = useNavigate();
    const handleclick=()=>{
        navigate('/ai');
    }

    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "";
        }
        return () => {
            document.body.style.overflow = "";
        };
    }, [isOpen]);

    return (
        <div className="bg-black overflow-hidden rounded-2xl sm:rounded-3xl shadow-2xl bg-[url('https://cdn.vectorstock.com/i/500p/84/65/modern-white-geometric-background-vector-32028465.jpg')] bg-cover bg-no-repeat bg-center w-[95vw] min-h-[60vh] sm:min-h-[70vh] lg:min-h-[80vh] mx-auto">
            <motion.div 
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                viewport={{ once: true }}
                className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-center pt-8 sm:pt-12 lg:pt-20 tracking-tight font-sans font-bold px-4"
            >
                Commit Smarter
            </motion.div>
            <motion.p 
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
                viewport={{ once: true }}
                className="text-center text-base sm:text-lg md:text-xl lg:text-2xl pt-4 sm:pt-6 lg:pt-8 max-w-2xl sm:max-w-3xl lg:max-w-4xl mx-auto text-black px-4 leading-relaxed"
            >
                Code Reviewers is a smart tool that helps you write cleaner, better code. It catches bugs, suggests improvements, and ensures every commit meets high standards—before you merge.
            </motion.p>

            <motion.div 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
                viewport={{ once: true }}
                className="text-center pt-6 sm:pt-8 flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 px-4"
            >
                <button onClick={handleclick} className="bg-black text-white px-4 sm:px-6 py-2.5 sm:py-3 rounded-lg inline-flex items-center gap-2 hover:bg-gray-900 transition cursor-pointer text-sm sm:text-base">
                    Get Started
                    <FaArrowRight className="text-sm sm:text-base" />
                </button>
                <button onClick={() => setIsOpen(true)} className="border border-black text-black px-4 sm:px-6 py-2.5 sm:py-3 rounded-lg hover:bg-black hover:text-white transition cursor-pointer text-sm sm:text-base">
                    Support Us
                </button>
                <SpringModal isOpen={isOpen} setIsOpen={setIsOpen} />
            </motion.div>

            
            <motion.div 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 1, delay: 0.5 }}
                viewport={{ once: true }}
                className="overflow-hidden mt-12 sm:mt-16 lg:mt-20"
            >
                <div className="flex animate-slide space-x-6 sm:space-x-8 lg:space-x-10 text-gray-800 px-4 sm:px-6 whitespace-nowrap">
                    {Array(10).fill(techIcons).flat().map((icon, index) => (
                        <div key={index} className="min-w-[50px] sm:min-w-[60px] lg:min-w-[80px] h-[50px] sm:h-[60px] lg:h-[80px] w-[50px] sm:w-[60px] lg:w-[80px] flex items-center justify-center text-3xl sm:text-4xl lg:text-6xl">
                            {icon}
                        </div>
                    ))}
                </div>
            </motion.div>



            <style>
                {`
          @keyframes slide {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
          .animate-slide {
            animation: slide 20s linear infinite;
          }
        `}
            </style>
        </div>
    );
};

export default Landing;

const SpringModal = ({ isOpen, setIsOpen }) => {
    return (
        <AnimatePresence>
            {isOpen && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onClick={() => setIsOpen(false)}
                    className="bg-slate-900/20 backdrop-blur p-4 sm:p-6 lg:p-8 fixed inset-0 z-50 grid place-items-center overflow-y-scroll cursor-pointer"
                >
                    <motion.div
                        initial={{ scale: 0, rotate: "12.5deg" }}
                        animate={{ scale: 1, rotate: "0deg" }}
                        exit={{ scale: 0, rotate: "0deg" }}
                        onClick={(e) => e.stopPropagation()}
                        className="bg-gradient-to-br from-gray-600 to-indigo-800 text-white p-4 sm:p-6 rounded-lg w-full max-w-sm sm:max-w-md lg:max-w-lg shadow-xl cursor-default relative overflow-hidden mx-4"
                    >
                        <FiAlertCircle className="text-white/10 rotate-12 text-[120px] sm:text-[180px] lg:text-[250px] absolute z-0 -top-12 sm:-top-16 lg:-top-24 -left-12 sm:-left-16 lg:-left-24" />
                        <div className="relative z-10">
                            <div className="bg-white w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 mb-2 rounded-full text-2xl sm:text-2xl lg:text-3xl text-indigo-600 grid place-items-center mx-auto">
                                <FiAlertCircle />
                            </div>
                            <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-center mb-2">
                                One more thing!
                            </h3>
                            <p className="text-center mb-4 sm:mb-6 text-sm sm:text-base">
                            Why do programmers prefer dark mode?
                            Because light attracts bugs. 😄
                            </p>
                            <div className="flex flex-col sm:flex-row gap-2">
                                <button
                                    onClick={() => setIsOpen(false)}
                                    className="bg-transparent hover:bg-white/10 transition-colors text-white font-semibold w-full py-2 rounded cursor-pointer text-sm sm:text-base"
                                >
                                    Nah, go back
                                </button>
                                <button
                                    onClick={() => setIsOpen(false)}
                                    className="bg-white hover:opacity-90 transition-opacity text-indigo-600 font-semibold w-full py-2 rounded cursor-pointer text-sm sm:text-base"
                                >
                                    Understood!
                                </button>
                            </div>
                        </div>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};
