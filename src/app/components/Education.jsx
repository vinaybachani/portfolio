"use client"
import React, { useRef } from 'react'
import { motion, useScroll } from 'framer-motion'
import LiIcon from './LiIcon'
import RippleButton from './RippleButton'

const Details = ({ type, time, place, info, institue }) => {
    const ref = useRef(null);
    return (
        <li ref={ref} className='my-8 first:mt-0 last:mb-0 w-[80%] mx-auto flex flex-col items-center justify-between'>

            <LiIcon reference={ref} />
            <motion.div
                initial={{ y: 50 }}
                whileInView={{ y: 0 }}
                transition={{ duration: 0.5, type: "tween" }}
                className='w-full'
            >
                <h3 className='font-bold text-lg sm:text-xl md:text-2xl capitalize'>{type}</h3>
                <span className='capitalize font-medium text-dark/75 dark:text-light/75 text-sm sm:text-lg'>
                    {time} | {place}
                </span>
                <p className='capitalize font-medium text-dark/75 dark:text-light/75 text-sm sm:text-lg'>
                    {institue}
                </p>
                <p className='font-medium w-full text-sm md:text-lg'>{info}</p>
            </motion.div>
        </li>
    )
}

const Education = () => {
    const ref = useRef(null);

    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "center start"]
    })
    return (
        <div className='my-32'>
            <h2 className='font-bold text-4xl sm:text-6xl md:text-8xl w-full text-center mb-16'>E<span className='text-primary dark:text-primaryDark'>d</span>u<span className='text-primary dark:text-primaryDark'>c</span>a<span className='text-primary dark:text-primaryDark'>t</span>i<span className='text-primary dark:text-primaryDark'>o</span>n</h2>
            <div className='w-full md:w-[90%] lg:w-[75%] mx-auto relative' ref={ref}>
                <motion.div style={{ scaleY: scrollYProgress }} className='absolute left-[20px] sm:left-[30px] md:left-9 top-0 w-[2px] md:w-[4px] h-full bg-dark origin-top dark:bg-light' />
                <ul className='w-full flex flex-col items-start justify-between ml-2 sm:ml-4'>
                    <Details
                        type="High School"
                        time="2016-2018"
                        place="Bhavnagar"
                        institue="Fatima Convent High School"
                        info="Relevant courses included data structures and algorithms"
                    />
                    <Details
                        type="Bachelor of Science in Information Technology"
                        time="2018-2021"
                        place="Bhavnagar"
                        institue="Shree Swaminarayan College of Computer Science"
                        info="Relevant courses included data structures and algorithms"
                    />
                    <Details
                        type="Master of Science in Information Technology"
                        time="2022-2024"
                        place="Gandhinagar"
                        institue="Dhirubhai Ambani Institute of Information and Communication Technology"
                        info="Relevant courses included data structures and algorithms"
                    />
                </ul>
            </div>
        </div>
    )
}

export default Education
