import React, { useState } from 'react';
import { motion } from 'framer-motion';

const SocialLinksProfileModel = () => {
    const [isFlipped, setIsFlipped] = useState(false);
    const buttonClass = "bg-gray-500 text-white py-2 px-3 rounded-md mb-2 font-bold text-sm hover:bg-teal-300 hover:text-black";

    return (
        <div
            className="w-80 md:w-64 lg:w-80 cursor-pointer"
            onMouseEnter={() => setIsFlipped(true)}
            onMouseLeave={() => setIsFlipped(false)}
        >
            <motion.div
                className={"relative w-full h-112 pt-[142.5%] transition-transform duration-1000"}
                style={{ transformStyle: 'preserve-3d' }}
                whileHover={isFlipped ? { rotateY: 180 } : {}}
            >
                {/* Front Side */}
                <div
                    className="absolute inset-0 bg-gray-800 p-6 rounded-md"
                    style={{ backfaceVisibility: 'hidden', transform: 'rotateY(0deg)' }}
                >
                    <div className="flex flex-col items-center justify-center mb-5">
                        <img src="../../public/images/my_profile.JPG" alt="my-profile" className="h-28 w-28 object-cover rounded-full mb-3" />
                        <h1 className="text-base mb-2 text-white">Daichi Izushi</h1>
                        <p className="text-white text-xs mb-4 font-bold">📍Vancouver, BC</p>
                        <p className="text-xs mb-3 tracking-wide text-white">"backend developer."</p>
                    </div>
                    <div className="flex flex-col">
                        <a href="https://www.linkedin.com/in/daichi-izushi-98793531b/" target="_blank" rel="noopener noreferrer" className={`${buttonClass} mb-2`}>LinkedIn</a>
                        <a href="https://x.com/shoehead_id" target="_blank" rel="noopener noreferrer" className={`${buttonClass} mb-2`}>X</a>
                        <a href="https://www.instagram.com/i_brand_on/" target="_blank" rel="noopener noreferrer" className={buttonClass}>Instagram</a>
                    </div>
                </div>
                {/* Back Side */}
                <div
                    className="absolute inset-0 bg-gray-800 p-6 rounded-md"
                    style={{ backfaceVisibility: 'hidden', transform: 'rotateY(180deg)' }}
                >
                    <div className="flex flex-col items-center justify-center mb-5">
                        <h1 className="text-base mb-2 text-white">More About Me</h1>
                        <p className="text-white text-xs mb-4 font-bold">I love coding and sharing knowledge.</p>
                        <p className="text-xs mb-3 tracking-wide text-white">Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus ea id consequuntur eaque nulla omnis cupiditate vel voluptatibus, nesciunt, hic mollitia a laboriosam dicta delectus ut corporis vitae illum? Quidem!</p>
                    </div>
                </div>
            </motion.div>
        </div>
    );
};

export default SocialLinksProfileModel;