"use client"
import Link from 'next/link'
import React, { useContext, useEffect, useRef, useState } from 'react'
import Logo from './Logo'
import { TwitterIcon, LinkedinIcon, GitHubIcon, LeetCodeIcon, SunIcon, MoonIcon } from './Icons'
import { motion } from "framer-motion";
import useThemeSwitcher from './hooks/useThemeSwitcher'
import { usePathname, useRouter } from 'next/navigation';
// import AnimatedCursor from 'react-animated-cursor';
import ThemeContext from '../context/themeContext'
import { PhoneIcon } from 'lucide-react'

const MotionLink = motion.create(Link);

const CustomLink = ({ href, title, className = "" }) => {
    const pathName = usePathname();

    return (
        <Link href={href} className={`${className} relative group`}>
            {title}
            <span className={`h-[1px] inline-block bg-dark absolute left-0 -bottom-0.5 group-hover:w-full transition-[width] ease duration-300 ${pathName === href ? 'w-full' : 'w-0'} dark:bg-light`}></span>
        </Link>
    );
};

const CustomMobileLink = ({ href, title, className = "", toggle }) => {
    const pathName = usePathname();
    const router = useRouter();

    const handleClick = (e) => {
        toggle();
        e.preventDefault();
        router.push(href)
    }

    return (
        <button href={href} className={`${className} relative group text-light dark:text-dark my-2`} onClick={handleClick}>
            {title}
            <span className={`h-[1px] inline-block bg-light absolute left-0 -bottom-0.5 group-hover:w-full transition-[width] ease duration-300 ${pathName === href ? 'w-full' : 'w-0'} dark:bg-dark`}></span>
        </button>
    );
};

// in framer motion we can also use it as motion.element but it can be specifically used with html elements like motion.a
const NavBar = () => {
    const [mode, setMode] = useThemeSwitcher();
    const { isDarkTheme, setIsDarkTheme } = useContext(ThemeContext);
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        setIsDarkTheme(mode === 'dark' ? true : false);
    }, [mode, setIsDarkTheme])

    const handleClick = (event) => {
        event.stopPropagation();
        setIsOpen((prev) => !prev);
    };
    useEffect(() => {
        if (isOpen) {
            document.body.classList.add('no-scroll');
        }
        else {
            document.body.classList.remove('no-scroll');
        }

        return () => {
            document.body.classList.remove('no-scroll');
        }
    }, [isOpen]);

    const modalRef = useRef(null);
    const buttonRef = useRef(null);
    useEffect(() => {
        const handleOutsideClick = (event) => {
            if (
                modalRef.current &&
                !modalRef.current.contains(event.target) &&
                buttonRef.current &&
                !buttonRef.current.contains(event.target)
            ) {
                setIsOpen(false);
            }
        };

        document.addEventListener("mousedown", handleOutsideClick);

        return () => {
            document.removeEventListener("mousedown", handleOutsideClick);
        };
    }, []);

    return (
        <header className='w-full px-8 py-8 z-10 font-medium flex items-center justify-between dark:text-light relative md:px-12 lg:px-32'>
            <button ref={buttonRef} className='flex-col justify-center items-center flex lg:hidden' onClick={handleClick}>
                <span className={`bg-dark dark:bg-light block transition-all duration-300 ease-in-out h-0.5 w-6 rounded-sm -translate-y-0.5 ${isOpen ? 'rotate-45 translate-y-1' : '-translate-y-0.5'}`}></span>
                <span className={`bg-dark dark:bg-light block transition-all duration-300 ease-in-out h-0.5 w-6 rounded-sm my-0.5 ${isOpen ? 'opacity-0' : 'opacity-100'}`}></span>
                <span className={`bg-dark dark:bg-light block transition-all duration-300 ease-in-out h-0.5 w-6 rounded-sm ${isOpen ? '-rotate-45 -translate-y-1' : 'translate-y-0.5'}`}></span>
            </button>

            <div className='w-full hidden justify-between items-center lg:flex'>
                <nav>
                    <CustomLink href="/" title="Home" className='mr-4' />
                    <CustomLink href="/about" title="About" className='mx-4' />
                    <CustomLink href="/projects" title="Projects" className='mx-4' />
                    {/* <CustomLink href="/articles" title="Articles" className='ml-4' /> */}
                </nav>
                <nav className='flex items-center justify-center flex-wrap'>
                    {/* <MotionLink href="" target={"_blank"} className='w-6 mx-3' whileHover={{ y: -2 }} whileTap={{ scale: 0.7 }}><TwitterIcon /></MotionLink> */}
                    <MotionLink href="tel:6354558233" target={"_blank"} className='w-6 mx-3' whileHover={{ y: -2 }} whileTap={{ scale: 0.9 }}><PhoneIcon /></MotionLink>
                    <MotionLink href="https://www.linkedin.com/in/vinay-bachani/" target={"_blank"} className='w-6 mx-3' whileHover={{ y: -2 }} whileTap={{ scale: 0.9 }}><LinkedinIcon /></MotionLink>
                    <MotionLink href="https://github.com/vinaybachani" target={"_blank"} className='w-6 mx-3' whileHover={{ y: -2 }} whileTap={{ scale: 0.9 }}><GitHubIcon /></MotionLink>
                    <MotionLink href="https://leetcode.com/u/vinaybachani1234/" target={"_blank"} className='w-6 mx-2 dark:fill-light' whileHover={{ y: -2 }} whileTap={{ scale: 0.9 }}><LeetCodeIcon /></MotionLink>

                    <button onClick={() => setMode(mode === "light" ? "dark" : "light")} className={`ml-1 flex items-center justify-center rounded-full p-1 ${mode === "dark" ? "bg-light text-dark" : "bg-dark text-light"}`}>
                        {
                            mode === "dark" ?
                                <SunIcon className={"fill-dark"} /> :
                                <MoonIcon className={"fill-dark"} />
                        }
                    </button>
                </nav>
            </div>

            {
                isOpen ?
                    <motion.div ref={modalRef} className='min-w-[70vw] flex flex-col justify-between items-center fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-30 bg-dark/90 dark:bg-light/75 rounded-lg backdrop-blur-md py-32' initial={{ scale: 0, opacity: 0, x: "-50%", y: "-50%" }} animate={{ scale: 1, opacity: 1 }}>
                        <nav className='flex items-center flex-col justify-center'>
                            <CustomMobileLink href="/" title="Home" className='' toggle={handleClick} />
                            <CustomMobileLink href="/about" title="About" className='' toggle={handleClick} />
                            <CustomMobileLink href="/projects" title="Projects" className='' toggle={handleClick} />
                            {/* <CustomMobileLink href="/articles" title="Articles" className='' toggle={handleClick} /> */}
                        </nav>
                        <nav className='flex items-center justify-center flex-wrap mt-2'>
                            {/* <MotionLink href="" target={"_blank"} className='w-6 mx-3' whileHover={{ y: -2 }} whileTap={{ scale: 0.7 }}><TwitterIcon /></MotionLink> */}
                            <MotionLink href="tel:6354558233" target={"_blank"} className='w-6 mx-3' whileHover={{ y: -2 }} whileTap={{ scale: 0.9 }}><PhoneIcon className='dark:fill-dark fill-light' /></MotionLink>
                            <MotionLink href="https://www.linkedin.com/in/vinay-bachani/" target={"_blank"} className='w-6 mx-3' whileHover={{ y: -2 }} whileTap={{ scale: 0.9 }}><LinkedinIcon /></MotionLink>
                            <MotionLink href="https://github.com/vinaybachani" target={"_blank"} className='w-6 mx-3 dark:bg-dark bg-light rounded-full' whileHover={{ y: -2 }} whileTap={{ scale: 0.9 }}><GitHubIcon /></MotionLink>
                            <MotionLink href="https://leetcode.com/u/vinaybachani1234/" target={"_blank"} className='w-6 mx-2 dark:fill-dark fill-light' whileHover={{ y: -2 }} whileTap={{ scale: 0.9 }}><LeetCodeIcon /></MotionLink>

                            <button onClick={() => setMode(mode === "light" ? "dark" : "light")} className={`ml-1 flex items-center justify-center rounded-full p-1 ${mode === "dark" ? "bg-light text-dark" : "bg-dark text-light"}`}>
                                {
                                    mode === "dark" ?
                                        <SunIcon className={"fill-dark"} /> :
                                        <MoonIcon className={"fill-dark"} />
                                }
                            </button>
                        </nav>
                    </motion.div>
                    : null
            }
            {/* 
            <div className='absolute left-[40%] md:left-[45%] lg:left-[47%] top-0 lg:top-2 translate-x-[50%]'>
                <Logo />
            </div> */}
            <div className='absolute left-[50%] translate-x-[-50%]'>
                <Logo />
            </div>
        </header>
    )
}

export default NavBar
