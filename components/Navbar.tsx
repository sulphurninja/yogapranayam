import React from 'react'
import { motion } from 'framer-motion';

function Navbar() {
    return (
   
          
            <motion.div className='fixed  w-full flex'
            >
                <motion.ul className='lg:text-[50px] text-[30px] space-y-7 font-soft cursor-pointer' >
                    <motion.li
                        animate={{ x: [50, 100, 50], opacity: 1, scale: 1 }}
                        transition={{
                            duration: 3,
                            delay: 0.3,
                            ease: [0.5, 0.71, 1, 1.2],
                        }}
                        initial={{ opacity: 0, scale: 0.5 }}
                        whileHover={{ scale: 1.2 }}
                        className='pl-[10px] text-white font-bold'>
                        Home
                    </motion.li>
                    <motion.li animate={{ x: [50, 100, 50], opacity: 1, scale: 1 }}
                        transition={{
                            duration: 3,
                            delay: 0.6,
                            ease: [0.5, 0.71, 1, 1.2],
                        }}
                        initial={{ opacity: 0, scale: 0.5 }}
                        whileHover={{ scale: 1.2 }}
                        className='pl-[10px] text-white font-bold'>About</motion.li>
                    <motion.li animate={{ x: [50, 100, 50], opacity: 1, scale: 1 }}
                        transition={{
                            duration: 3,
                            delay: 0.9,
                            ease: [0.5, 0.71, 1, 1.2],
                        }}
                        initial={{ opacity: 0, scale: 0.5 }}
                        whileHover={{ scale: 1.2 }}
                        className='pl-[10px] text-white font-bold'>Blog</motion.li>
                    <motion.li animate={{ x: [50, 100, 50], opacity: 1, scale: 1 }}
                        transition={{
                            duration: 3,
                            delay: 1.2,
                            ease: [0.5, 0.71, 1, 1.2],
                        }}
                        initial={{ opacity: 0, scale: 0.5 }}
                        whileHover={{ scale: 1.2 }}
                        className='pl-[10px] text-green-200 font-soft '>Ashtang Yog</motion.li>




                </motion.ul>
            </motion.div>
        
    )
}

export default Navbar
