"use client"
import React, { useRef } from 'react'
import { motion, useScroll } from 'framer-motion'
import LiIcon from './LiIcon'
import RippleButton from './RippleButton'

const Details = ({ position, company, companyLink, time, address, work }) => {
    const ref = useRef(null);
    return (
        <li ref={ref} className='my-8 first:mt-0 last:mb-0 w-[80%] mx-auto flex flex-col items-center justify-between'>

            <LiIcon reference={ref} />
            <motion.div
                initial={{ y: 50 }}
                whileInView={{ y: 0 }}
                transition={{ duration: 0.5, type: "tween" }}
            >
                <h3 className='font-bold text-lg sm:text-xl md:text-2xl capitalize'>{position}&nbsp; <a href={companyLink} target='_blank' className='text-primary capitalize dark:text-primaryDark'>@{company}</a></h3>
                <span className='capitalize font-medium text-dark/75 dark:text-light/75 text-sm sm:text-lg'>
                    {time} | {address}
                </span>
                <p className='font-medium w-full text-sm md:text-lg'>{work}</p>
            </motion.div>
        </li>
    )
}

const Experience = () => {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "center start"]
    })
    const degreeRef = useRef(null);

    return (
        <div className='my-32'>
            <h2 className='font-bold text-4xl sm:text-6xl md:text-8xl w-full text-center'>E<span className='text-primary dark:text-primaryDark'>x</span>p<span className='text-primary dark:text-primaryDark'>e</span>r<span className='text-primary dark:text-primaryDark'>i</span>e<span className='text-primary dark:text-primaryDark'>n</span>c<span className='text-primary dark:text-primaryDark'>e</span></h2>
            <div className="mb-16 flex flex-col sm:flex-row items-center justify-center lg:!self-start gap-1 lg:gap-2 mt-2">
                <h2 className="text-[17px] text-center lg:text-left font-semibold">{`What Drove My Master's and Corporate Career?`}</h2>
                <RippleButton path={'/audios/degree_nahi_hogi.m4a'} ref={degreeRef} classes={`relative h-10 w-10 flex items-center justify-center uppercase text-3xl leading-3 bg-gray-300 dark:bg-gray-700 rounded-full p-2 outline-none border-none`} />
            </div>
            <div className='w-full md:w-[90%] lg:w-[75%] mx-auto relative' ref={ref}>
                <motion.div style={{ scaleY: scrollYProgress }} className='absolute left-[20px] sm:left-[30px] md:left-9 top-0 w-[2px] md:w-[4px] h-full bg-dark origin-top dark:bg-light' />
                <ul className='w-full flex flex-col items-start justify-between ml-2 sm:ml-4'>
                    <Details position={"React Developer"}
                        company={"Franchise Insider"}
                        companyLink="www.google.com"
                        time={"November 2021 - November 2022"}
                        address={"Ahmedabad, Gujarat"}
                        work="Worked on a team responsible for developing new features for Google's
                    search engine, including improving the accuracy and relevance of search results and
                    developing new tools for data analysis and visualization."/>
                    <Details position={"Frontend Developer"}
                        company={"Availkart"}
                        companyLink="www.google.com"
                        time={"November 2022 - March 2023"}
                        address={"Remote"}
                        work="Worked on a team responsible for developing new features for Google's
                    search engine, including improving the accuracy and relevance of search results and
                    developing new tools for data analysis and visualization."/>
                    <Details position={"Software Engineer Intern"}
                        company={"Momentum Ventures"}
                        companyLink="www.google.com"
                        time={"January 2024 - July 2024"}
                        address={"Ahmedabad, Gujarat"}
                        work="Worked on a team responsible for developing new features for Google's
                    search engine, including improving the accuracy and relevance of search results and
                    developing new tools for data analysis and visualization."/>
                    <Details position={"Full Stack Developer"}
                        company={"ATTPL"}
                        companyLink="www.google.com"
                        time={"July 2024 - Present"}
                        address={"Remote"}
                        work="Worked on a team responsible for developing new features for Google's
                    search engine, including improving the accuracy and relevance of search results and
                    developing new tools for data analysis and visualization."/>
                </ul>
            </div>
        </div>
    )
}

export default Experience
