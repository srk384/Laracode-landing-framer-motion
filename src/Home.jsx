import React from 'react'
import { motion } from "motion/react";


const Home = () => {

    const items = [...Array(5)].map((_, index) => (
        <div key={index} className={`text-xl sm:text-5xl font-bold ${index === 2 ? "opacity-100" : "opacity-[0.15]"}`}>console&gt;</div>
    ));

    const brands = ["apple.svg", "tesla.svg", "stripe.svg", "spotify.svg", "airbnb.svg",].map((link, index) => (
        <img key={index} src={link} alt="" className='w-20 sm:w-40' />
    ));

    return (
        <div className='w-full'>
            {/*--------------------------------section1--------------------------------- */}
            <motion.section
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{
                    delay: 1,
                    duration: 1,
                }}
                className='flex sm:h-83 h-60 flex-col sm:flex-row justify-evenly sm:items-center px-2'>
                <div className='font-bold text-3xl sm:text-5xl'>A Laravel <div>Learning Platform</div></div>
                <div className='w-[1px] h-60 bg-gray-200 sm:block hidden'></div>
                <div className='text-md sm:text-xl'>It’s never been a better time to become a <div>Laravel developer.</div></div>
            </motion.section>
            {/*--------------------------------section2--------------------------------- */}
            <section className='h-55 sm:h-90 w-full bg-[#00E593] flex items-center justify-around'>
                <div className="h-full overflow-hidden flex gap-10 sm:py-3.5 py-4.5">
                    <motion.div
                        className="flex flex-col gap-2 sm:gap-5"
                        animate={{ y: ["0%", "-100%"] }}
                        transition={{
                            repeat: 5,
                            duration: 0.5,
                            ease: "linear",
                        }}
                    >
                        {items}
                        {items}
                    </motion.div>
                    {/* -------------------desktop---------------- */}
                    <div className='flex items-center'>
                        <div className='text-5xl sm:block hidden'>git clone lara<span className='opacity-25'>code</span></div>
                    </div>
                </div>
                <div className='flex flex-col gap-4 items-center'>
                    {/* -------------------mobile---------------- */}
                    <div className='text-xl sm:text-5xl items-center sm:hidden block'>git clone lara<span className='opacity-25'>code</span></div>
                    <div>
                        <motion.button
                            className='bg-white border-4 rounded-md font-bold text-md sm:text-2xl p-2 sm:p-3 shadow-[2px_2px_0px_rgb(0,0,0)]'
                            animate={{ backgroundColor: ["#ffffff", "#00E593", "#ffffff"] }}
                            transition={{
                                times: [0, 0.7, 0.9],
                                duration: 2,
                                repeat: Infinity,
                                ease: "linear",
                            }}
                        >
                            EXECUTE&nbsp;&nbsp;;
                        </motion.button>
                        <div className="relative">
                            <motion.div
                                className="absolute top-0 left-0"
                                animate={{ x: [80, 60, 80], y: [20, -20, 20] }}
                                transition={{
                                    repeat: Infinity,
                                    duration: 2,
                                    ease: "easeInOut",
                                }}
                            >
                                <svg className='w-10 sm:w-15' width="60" height="60" viewBox="0 0 70 81" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M58.1215 79.2032L63.4801 75.0585C63.9523 74.6945 64.348 74.241 64.6446 73.7238C64.9411 73.2066 65.1327 72.6359 65.2082 72.0445C65.2838 71.4532 65.2418 70.8527 65.0848 70.2775C64.9278 69.7024 64.6588 69.1639 64.2932 68.693L45.8167 44.8052L65.5184 40.0038L65.6482 39.9709C66.776 39.6483 67.784 39.0012 68.5467 38.11C69.3095 37.2189 69.7933 36.123 69.9378 34.959L69.9751 34.6669C70.0793 33.4473 69.8061 32.2252 69.1927 31.166C68.5792 30.1068 67.6551 29.2617 66.5455 28.7451L9.10492 1.51671C8.09991 1.03947 6.98232 0.850024 5.87618 0.969403C4.77004 1.08878 3.7186 1.51231 2.83857 2.193C1.95853 2.87368 1.2843 3.7849 0.89071 4.82552C0.497121 5.86614 0.399562 6.99547 0.608862 8.08817L12.5246 70.5287C12.7615 71.7232 13.3539 72.8183 14.2242 73.6701C15.0946 74.5219 16.202 75.0908 17.4014 75.302C18.6007 75.5132 19.8359 75.357 20.9449 74.8537C22.0538 74.3504 22.9848 73.5237 23.6155 72.4819L23.6799 72.3646L33.2945 54.5043L51.7672 78.3916C52.5023 79.3418 53.5846 79.9611 54.7763 80.1133C55.9679 80.2655 57.1712 79.9382 58.1215 79.2032Z" fill="black" />
                                </svg>
                            </motion.div>
                        </div>

                    </div>
                </div>

            </section>
            {/*--------------------------------section3--------------------------------- */}
            <section className='h-30 sm:h-40 bg-[#272727]'>
                <div className="h-full sm:w-2/3 mx-auto flex items-center overflow-hidden">
                    <motion.div
                        className=" flex gap-20 sm:gap-40"
                        animate={{ x: ["0%", "-100%"] }}
                        transition={{
                            repeat: Infinity,
                            duration: 15,
                            ease: "linear",
                        }}
                    >
                        {brands}
                        {brands}
                    </motion.div>
                </div>

            </section>
        </div>
    )
}


export default Home