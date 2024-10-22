import { motion, spring } from "framer-motion";
import ThreeModel from "./components/ThreeModel";
import IconSliderModel from "./components/IconSliderModel";

function App() {
  return (
    <main className="bg-slate-900">
      <div className="container mx-auto">
        {/* header */}
        <motion.header
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{
          type: 'spring',
          duration: 1,
          delay: 0.5,
          stiffness: 130,
        }}
        className="fixed top-0 left-0 right-0  w-full text-white z-10">
          <div className="container mx-auto flex justify-between items-center h-16">
            <span className="font-bold text-3xl">My Portfolio Site</span>

            <nav>
              <ul className="flex items-center gap-4 text-3xl">
                <li>
                  <a href="#home" className="hover:text-teal-300 transition-colors duration-300">Home</a>
                </li>
                <li>
                  <a href="#about" className="hover:text-teal-300 transition-colors duration-300">About</a>
                </li>
                <li>
                  <a href="#contact" className="hover:text-teal-300 transition-colors duration-300">Contact</a>
                </li>
              </ul>
            </nav>
          </div>
        </motion.header>
        {/* hero */}
        <section id="home" className="lg:py-40 pt-16">
          <div className="flex items-center justify-between">
            {/* left */}
            <div className="space-y-5">
              <motion.h2
              initial={{ y: 100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{
                type: 'spring',
                duration: 1,
                delay: 0.5,
                stiffness: 130,
              }}
              className="text-white lg:text-9xl md:text-8xl font-bold lg:max-w-[40rem]">
                I'm a <span className="text-teal-300">Web Developer</span>
              </motion.h2>
              <motion.p
              initial={{ y: -100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{
                type: 'spring',
                duration: 1,
                delay: 0.8,
                stiffness: 130,
              }}
              className="text-white lg:max-w-[40rem] lg:text-4xl font-semibold">
                Coding the <span className="text-teal-300">Future</span> , One Line at a Time
              </motion.p>
              <motion.div
              initial={{ y: -100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{
                type: 'spring',
                duration: 1,
                delay: 0.9,
                stiffness: 130,
              }}
              className="flex item-center gap-4">
                <button className="px-6 py-4 rounded-md border-2 my-4 hover:translate-y-1 duration-150">
                  <span className="font-bold text-white text-3xl">More Details</span>
                </button>
                <button className="px-6 py-4 rounded-md border-2 my-4  border-teal-300 hover:translate-y-1 duration-150">
                  <span className="font-bold text-teal-300 text-3xl">Samples</span>
                </button>
              </motion.div>
            </div>

            {/* 3D model */}
            <div className="w-7/12">
              <ThreeModel />
            </div>
          </div>
        </section>

        {/* About me */}
        <section id="about" className="py-20 bg-slate-900">
          <div className="container mx-auto">
            <h2 className="text-4xl font-bold text-teal-300 mb-4">About Me</h2>
            <div className="flex items-center">
              <img src="../public/images/my_profile.JPG" alt="Example" className="w-1/3 rounded-lg shadow-lg mr-4" />
              <div>
                <motion.h2
                initial={{ y: 100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{
                  type: 'spring',
                  duration: 1,
                  delay: 0.5,
                  stiffness: 130,
                }}
                className="text-white lg:text-9xl md:text-8xl font-bold lg:max-w-[40rem]">
                  Hi, I'm <span className="text-teal-300">Daz</span>
                </motion.h2>
                <motion.p
                  initial={{ y: -100, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{
                    type: 'spring',
                    duration: 1,
                    delay: 0.8,
                    stiffness: 130,
                  }}
                  className="text-white lg:text-2xl font-semibold mt-10">
                    I am a dedicated software developer with extensive experience in back-end and front-end web development.
                </motion.p>
              </div>
            </div>
          </div>
        </section>

        {/* Skills */}
        <section id="skills" className="py-20 bg-slate-900">
          <div className="container mx-auto">
            <h2 className="text-4xl font-bold text-teal-300 mb-4">Skills</h2>
            <div className="grid grid-cols-2 gap-4">
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
