import { motion, spring } from "framer-motion";

function App() {
  return (
    <div className="h-screen flex items-center justify-center">
      <motion.div
        initial={{ x: -100 }}
        animate={{ x: 100 }}
        transition={{
          type: "spring",
          duration: 2,
          delay: 1,
          stiffness: 200
        }}
        className="w-28 h-28 bg-red-600"></motion.div>
    </div>
  )
}

export default App
