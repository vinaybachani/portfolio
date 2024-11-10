"use client"
import React, { useEffect, useState } from 'react'
import { motion } from "framer-motion"

const quote = {
    initial: {
        opacity: 1
    },
    animate: {
        opacity: 1,
        transition: {
            delay: 0.5,
            staggerChildren: 0.08
        }
    }
}

const singleWord = {
    initial: {
        opacity: 0,
        y: 50
    },
    animate: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 1
        }
    }
}
const AnimateText = ({ text, className = "" }) => {
    const [animationStart, setAnimationStart] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setAnimationStart(true);
        }, 1000);
        return () => clearTimeout(timer);
    }, []);
    return (
        <motion.div className='w-full mx-auto py-0 flex justify-center items-center overflow-hidden sm:py-2' initial={{ '--x': '100%' }} animate={animationStart ? { '--x': '-100%' } : {}} transition={{ repeat: Infinity, repeatType: "loop", repeatDelay: 1, type: 'spring', stiffness: 20, damping: 15, mass: 2 }}>
            <motion.h1 className={`inline-block w-full text-dark font-bold capitalize p-2 dark:text-light ${className}`} variants={quote} initial="initial" style={{ maskImage: 'linear-gradient(-75deg, white calc(var(--x) + 20%), transparent calc(var(--x) + 30%), white calc(var(--x) + 100%))', WebkitMaskImage: 'linear-gradient(-75deg, white calc(var(--x) + 20%), transparent calc(var(--x) + 30%), white calc(var(--x) + 100%))' }} animate="animate">
                {
                    text.split(" ").map((word, index) => (
                        <motion.span key={word + '-' + index} className='inline-block' variants={singleWord}>{word}&nbsp;</motion.span>
                    ))
                }
            </motion.h1>
        </motion.div >
    )
}

export default AnimateText
