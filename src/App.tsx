import { motion, useInView } from "framer-motion";
import { useRef } from 'react';
import { FaGithub, FaDev } from "react-icons/fa";

import ThreeModel from "./components/ThreeModel";
import IconSliderModel from "./components/IconSliderModel";
import SocialLinksProfileModel from "./components/SocialLinksProfileModel";
import HeaderModel from "./components/HeaderModel";
import Contact from "./components/Contact";

function App() {
  const ref = useRef(null);
  const ref2 = useRef(null);
  const isInView = useInView(ref);
  const isHeroInView = useInView(ref2);

  return (
    <main className="bg-slate-900">
      <div className="container mx-auto">
        {/* header */}
        <HeaderModel />
        {/* hero */}
        <section id="home" className="py-40">
          <div className="flex flex-col md:flex-row items-center justify-between">
            {/* left */}
            <div className="space-y-5 text-center" ref={ref2}>
              <motion.h2
                initial={{ y: -100, opacity: 0 }}
                animate={isHeroInView ? { y: 0, opacity: 1 } : { y: -100, opacity: 0 }}
                transition={{
                  type: 'spring',
                  duration: 1,
                  delay: 0.5,
                  stiffness: 130,
                }}
                className="text-white xl:text-9xl lg:text-8xl md:text-7xl text-6xl font-bold lg:max-w-[40rem]"
              >
                I'm a <span className="text-teal-300">Web Developer</span>
              </motion.h2>
              <motion.p
                initial={{ y: -100, opacity: 0 }}
                animate={isHeroInView ? { y: 0, opacity: 1 } : { y: -100, opacity: 0 }}
                transition={{
                  type: 'spring',
                  duration: 1,
                  delay: 0.8,
                  stiffness: 130,
                }}
                className="text-white lg:max-w-[40rem] md:text-3xl text-2xl font-semibold"
              >
                Coding the <span className="text-teal-300">Future</span> , One Line at a Time
              </motion.p>
              <motion.div
                initial={{ y: -100, opacity: 0 }}
                animate={isHeroInView ? { y: 0, opacity: 1 } : { y: -100, opacity: 0 }}
                transition={{
                  type: 'spring',
                  duration: 1,
                  delay: 0.9,
                  stiffness: 130,
                }}
                className="flex flex-row items-center gap-4 justify-center"
              >
                <button className="px-6 py-4 rounded-md border-2 my-4 hover:translate-y-1 duration-150">
                  <span className="font-bold text-white text-3xl">Resume</span>
                </button>
                <button className="px-6 py-4 rounded-md border-2 my-4  border-teal-300 hover:translate-y-1 duration-150">
                  <span className="font-bold text-teal-300 text-3xl">Projects</span>
                </button>
              </motion.div>
            </div>

            {/* 3D model */}
            <div className="w-full lg:w-7/12 mt-10 lg:mt-0">
              <ThreeModel />
            </div>
          </div>
        </section>

        {/* About me */}
        <section id="about" className="py-20 bg-slate-900" ref={ref}>
            <h2 className="text-4xl font-bold text-teal-300 mb-4">About</h2>
          <div className="container mx-auto">
            <div className="flex flex-col md:flex-row items-center gap-4">
              <div className="text-center lg:w-1/3 md:w-1/3 transition-transform duration-1000 transform hover:rotate-y-360 mb-3">
                {/* Social Links Profile */}
                <SocialLinksProfileModel />
              </div>
              <div className="text-center w-2/3">
                <motion.h2
                  initial={{ y: -100, opacity: 0 }}
                  animate={isInView ? { y: 0, opacity: 1 } : { y: -100, opacity: 0 }}
                  transition={{
                    type: 'spring',
                    duration: 1,
                    delay: 0.5,
                    stiffness: 130,
                  }}
                  className="text-center text-white xl:text-9xl lg:text-8xl md:text-7xl text-6xl font-bold"
                >
                  Hi, I'm <span className="text-teal-300">Daichi</span>
                </motion.h2>
                <motion.p
                  initial={{ y: -100, opacity: 0 }}
                  animate={isInView ? { y: 0, opacity: 1 } : { y: -100, opacity: 0 }}
                  transition={{
                    type: 'spring',
                    duration: 1,
                    delay: 0.8,
                    stiffness: 130,
                  }}
                  className="text-white lg:text-2xl text-xl font-semibold mt-10">
                    I am a dedicated software developer with extensive experience in back-end and front-end web development.
                </motion.p>
                <motion.div
                  initial={{ y: -100, opacity: 0 }}
                  animate={isInView ? { y: 0, opacity: 1 } : { y: -100, opacity: 0 }}
                  transition={{
                    type: 'spring',
                    duration: 1,
                    delay: 0.9,
                    stiffness: 130,
                  }}
                  className="flex item-center gap-8 mt-10 justify-center items-center">
                  <a href="https://github.com/Izushi" target="_blank" rel="noopener noreferrer" className="px-6 py-4 rounded-md border-2 my-4 hover:translate-y-1 duration-150 flex items-center gap-2">
                    <FaGithub className="w-8 h-8" style={{ color: "white" }}/>
                    <span className="font-bold text-white text-3xl">GitHub</span>
                  </a>
                  <a href="https://dev.to/izushi" target="_blank" rel="noopener noreferrer" className="px-6 py-4 rounded-md border-2 my-4  border-teal-300 hover:translate-y-1 duration-150 flex items-center gap-2">
                    <FaDev className="w-8 h-8" style={{ color: "#5EEAD3" }}/>
                    <span className="font-bold text-teal-300 text-3xl">Dev.to</span>
                  </a>
                </motion.div>
              </div>
            </div>
          </div>
        </section>

        {/* experience */}
        <section id="work" className="py-20 bg-slate-900">
          <div className="container mx-auto">
              <h2 className="text-4xl font-bold text-teal-300 mb-4">Experience</h2>
            <div className="bg-slate-800 p-8 rounded-lg shadow-lg">
              <h3 className="text-white lg:text-8xl md:text-8xl text-6xl font-bold mb-4">Web Developer</h3>
              <p className="text-teal-300 lg:text-2xl text-xl font-semibold mb-6">
                Dec 2021 - Jun 2024
              </p>
              <p className="text-white lg:text-2xl text-xl font-semibold mb-4">
                I developed a web service for public gambling. I was involved in the design, development, and operation of both the business administration site and the user site, mainly using the LAMP stack to develop the RESTful API.
              </p>
            </div>
          </div>
        </section>

        {/* Skills */}
        <section id="skills" className="py-20 bg-slate-900">
          <div className="container mx-auto">
            <h2 className="text-4xl font-bold text-teal-300 mb-4">Skills</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-slate-800 p-4 rounded-lg shadow-lg">
                <h3 className="text-2xl font-bold text-white">Front-end</h3>
                <ul className="text-white">
                  <li>HTML</li>
                  <li>CSS</li>
                  <li>JavaScript</li>
                  <li>jQuery</li>
                  <li>React</li>
                </ul>
              </div>
              <div className="bg-slate-800 p-4 rounded-lg shadow-lg">
                <h3 className="text-2xl font-bold text-white">Back-end</h3>
                <ul className="text-white">
                  <li>PHP</li>
                  <li>Laravel</li>
                  <li>TypeScript</li>
                  <li>Node.js</li>
                  <li>Express</li>
                </ul>
              </div>
            </div>
          </div>
          <IconSliderModel/>
        </section>

        {/* Contact */}
        <section id="contact" className="py-20 bg-slate-900">
          <Contact />
        </section>

        {/* footer */}
        <footer className="py-10 bg-slate-900 text-white">
          <div className="container mx-auto">
            <p className="text-center">© 2024 My Portfolio Site</p>
          </div>
        </footer>
      </div>
    </main>
  );
};

export default App
