"use client"
import React from 'react';
import { motion } from "framer-motion";
import Image from 'next/image';
import HobbyImages from '../../../public/images/hobby';

const Hobbies = () => {
    const Hobby = ({ img, delay }) => {
        return (
            <motion.div className={`!relative border-4 border-primary dark:border-primaryDark h-24 w-28 flex flex-col items-center justify-center bg-white dark:bg-dark p-2 rounded-lg my-2 mx-4 gap-1`} initial={{ y: 200 }} whileInView={{
                y: 0,
                transition: { duration: 0.3, delay: delay, ease: "easeOut" }
            }} viewport={{ once: true }}>
                <Image src={img} className='h-14 w-14' alt='img' />
            </motion.div>
        );
    };
    return (
        <>
            <h2 className="font-bold text-6xl lg:text-8xl mt-32 lg:mt-32 w-full text-center">H<span className='text-primary dark:text-primaryDark'>o</span>b<span className='text-primary dark:text-primaryDark'>b</span>i<span className='text-primary dark:text-primaryDark'>e</span>s</h2>
            <h3 className='text-center text-[12px] md:text-[16px] font-semibold text-black dark:text-white'>What I enjoy doing when coding hits a snag</h3>
            <div className="my-5">
                <motion.div className='skills grid grid-cols-7'>
                    <motion.div className="col-span-7 flex justify-center items-center flex-wrap">
                        {HobbyImages.map((img, index) => (
                            <Hobby key={index} img={img} delay={index * 0.09} />
                        ))}
                    </motion.div>
                </motion.div>
            </div>
        </>
    );
}

export default Hobbies
