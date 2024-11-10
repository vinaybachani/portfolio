import React, { useContext, useEffect, useState } from 'react';
import { motion } from "framer-motion";
import Image from 'next/image';
import images from '../../../public/images/tech';
import ThemeContext from '../context/themeContext';

const Skill = ({ img, tech }) => {
    const { isDarkTheme } = useContext(ThemeContext);
    return (
        <motion.div className={`!relative ${isDarkTheme ? 'skilldark' : 'skilllight'} h-28 w-36 flex flex-col items-center justify-center bg-white dark:bg-dark p-2 rounded-lg my-3 mx-4 gap-1`}>
            <Image src={img} className='h-14 w-14' alt={tech} />
            <h3 className='text-dark dark:text-white font-bold text-center text-nowrap'>{tech}</h3>
        </motion.div>
    );
};

const Skills = () => {
    return (
        <>
            <h2 className="font-bold text-6xl lg:text-8xl mt-32 lg:mt-32 w-full text-center">S<span className='text-primary dark:text-primaryDark'>k</span>i<span className='text-primary dark:text-primaryDark'>l</span>l<span className='text-primary dark:text-primaryDark'>s</span></h2>
            <div className="my-5">
                <motion.div className='skills grid grid-cols-7' initial={{ y: 200 }} whileInView={{ y: 0, transition: { duration: 1 } }} viewport={{ once: true }}>
                    <div className="col-span-7 flex justify-center items-center flex-wrap">
                        <Skill img={images[11].image} tech={"ReactJS"} />
                        <Skill img={images[22].image} tech={"GSAP"} />
                        <Skill img={images[12].image} tech={"Tailwind"} />
                        <Skill img={images[3].image} tech={"BootStrap"} />
                        <Skill img={images[4].image} tech={"JQuery"} />
                        <Skill img={images[0].image} tech={"CSS"} />
                        <Skill img={images[1].image} tech={"HTML"} />
                    </div>
                </motion.div>

                <motion.div className='skills grid grid-cols-5' initial={{ y: 200 }} whileInView={{ y: 0, transition: { duration: 1 } }} viewport={{ once: true }}>
                    <div className="col-span-7 flex justify-center items-center flex-wrap">
                        <Skill img={images[9].image} tech={"NextJs"} />
                        <Skill img={images[13].image} tech={"TypeScript"} />
                        <Skill img={images[8].image} tech={"NodeJs"} />
                        <Skill img={images[6].image} tech={"MongoDB"} />
                        <Skill img={images[7].image} tech={"MySQL"} />
                    </div>
                </motion.div>

                <motion.div className='skills grid grid-cols-3' initial={{ y: 200 }} whileInView={{ y: 0, transition: { duration: 1 } }} viewport={{ once: true }}>
                    <div className="col-span-7 flex justify-center items-center flex-wrap">
                        <Skill img={images[5].image} tech={"JavaScript"} />
                        <Skill img={images[2].image} tech={"C++"} />
                        <Skill img={images[10].image} tech={"PHP"} />
                    </div>
                </motion.div>

                <motion.div className='skills grid grid-cols-3' initial={{ y: 200 }} whileInView={{ y: 0, transition: { duration: 1 } }} viewport={{ once: true }}>
                    <div className="col-span-7 flex justify-center items-center flex-wrap">
                        <Skill img={images[23].image} tech={"Framer Motion"} />
                    </div>
                </motion.div>
            </div>
        </>
    );
};

export default Skills;
