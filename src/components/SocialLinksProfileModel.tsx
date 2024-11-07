const SocialLinksProfileModel = () => {
    const buttonClass = "bg-gray-500 text-white py-2 px-3 rounded-md mb-2 font-bold text-sm hover:bg-teal-300 hover:text-black";
    return (
        <div className="bg-gray-800 p-6 mx-auto w-80 md:w-64 lg:w-80 rounded-md">
            <div className="flex flex-col items-center justify-center mb-5">
                <img src="../../public/images/my_profile.JPG" alt="avatar-jessica" className="h-28 w-28 object-cover rounded-full mb-3" />
                <h1 className="text-base mb-2 text-white">Daichi Izushi</h1>
                <p className="text-white text-xs mb-4 font-bold">📍Vancouver, BC</p>
                <p className="text-xs mb-3 tracking-wide text-white">"backend developer."</p>
            </div>
            <div className="flex flex-col">
                <a href="https://www.linkedin.com/in/daichi-izushi-98793531b/" target="_blank" rel="noopener noreferrer" className={buttonClass}>LinkedIn</a>
                <a href="https://x.com/shoehead_id" target="_blank" rel="noopener noreferrer" className={buttonClass}>X</a>
                <a href="https://www.instagram.com/i_brand_on/" target="_blank" rel="noopener noreferrer" className={buttonClass}>Instagram</a>
            </div>
        </div>
    );
};

export default SocialLinksProfileModel;