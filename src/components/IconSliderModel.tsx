import { motion } from 'framer-motion';
import {
  FaHtml5,
  FaCss3,
  FaSass,
  FaJs,
  FaReact,
  FaPhp,
  FaLaravel,
  FaNodeJs,
  
} from "react-icons/fa";

const slides = [
  { icon: <FaHtml5 className="w-12 h-12" /> },
  { icon: <FaCss3 className="w-12 h-12" /> },
  { icon: <FaSass className="w-12 h-12" /> },
  { icon: <FaJs className="w-12 h-12" /> },
  { icon: <FaReact className="w-12 h-12" /> },
  { icon: <FaPhp className="w-12 h-12" /> },
  { icon: <FaLaravel className="w-12 h-12" /> },
  { icon: <FaNodeJs className="w-12 h-12" /> },
  ];



const IconSliderModel = () => {
    const duplicatedSlides = [...slides, ...slides];

    return (
        <div className="relative h-full overflow-hidden py-12 text-white bg-slate-900 mx-auto" style={{ width: "100%" }}>
            <div className="absolute inset-0 z-20 before:absolute before:left-0 before:top-0 before:w-1/4 before:h-full before:bg-gradient-to-r before:from-slate-900 before:to-transparent before:filter before:blur-3 after:absolute after:right-0 after:top-0 after:w-1/4 after:h-full after:bg-gradient-to-l after:from-slate-900 after:to-transparent after:filter after:blur-3"></div>
            <motion.div
                className="flex"
                animate={{
                    x: ['0%', '-100%'],
                    transition: {
                        ease: 'linear',
                        duration: 15,
                        repeat: Infinity,
                    }
                }}
            >
                {duplicatedSlides.map((slide, index) => (
                    <div key={index} className="flex-shrink-0" style={{ width: `${100 / slides.length}%` }}>
                        <div className="flex items-center justify-center h-full">
                            {slide.icon}
                        </div>
                    </div>
                ))}
            </motion.div>
        </div>
    );
};

export default IconSliderModel;