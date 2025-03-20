import React from 'react'
import { useState } from 'react'
import { motion, AnimatePresence } from "motion/react";


const Navabar = () => {
  const [isOpen, setisOpen] = useState(false)

  const menu = ["Home", "Curriculum", "FAQ", "Conatct"].map((item, index) => (
    isOpen ?
      <a href='/' key={index}><li className='hover:text-green-500 hover:cursor-pointer font-semibold active:bg-neutral-400 w-full text-center p-3'>{item}</li></a> :
      <li key={index} className='hover:text-green-500 hover:cursor-pointer font-semibold'>{item}</li>
  ))
  const menuVariants = {
    hidden: { opacity: 0, y: -20 }, 
    visible: { opacity: 1, y: 0 }, 
    exit: { opacity: 0, y: -20 }, 
  };

  return (
    <div>
      <nav className='flex justify-between sm:justify-evenly items-center h-25 gap-15 min-w-screen px-2 relative'>
        <div className='font-bold text-xl sm:text-2xl'><span className='text-[#007F51]'>lara</span>code</div>
        <div className='sm:block hidden'>
          <ul className='flex gap-20'>
            {menu}
          </ul>
        </div>
        <div className='flex gap-5'>
          <button className='bg-[#00E593] border-3 border-black rounded-md text-sm sm:text-md font-bold p-1.5 sm:px-3 hover:scale-105 transition hover:cursor-pointer shadow-[2px_2px]'>Join Today</button>
          <motion.img
            key={isOpen} // Forces re-animation on state change
            src={isOpen ? "x.svg" : "ham.svg"}
            alt="Menu"
            className="block sm:hidden w-7 cursor-pointer"
            onClick={() => setisOpen(!isOpen)}
            initial={{ rotate: 0, scale: 1 }}
            animate={{ rotate: isOpen ? 90 : 0, scale: [1, 1.2, 1] }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          />
          <AnimatePresence>
            {isOpen && (
              <motion.div
                className="w-full top-20 left-0 bg-gray-300/50 absolute sm:hidden block z-50 backdrop-blur-md"
                initial="hidden"
                animate="visible"
                exit="exit"
                variants={menuVariants}
                transition={{ duration: 0.3, ease: "easeInOut" }} // Smooth animation
              >
                <ul className="flex flex-col">{menu}</ul>
              </motion.div>
            )}
          </AnimatePresence>

        </div>
      </nav>
    </div>
  )
}

export default Navabar