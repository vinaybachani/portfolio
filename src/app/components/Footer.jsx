"use client"
import React, { useRef } from 'react'
import Layout from './Layout'
import Link from 'next/link'
import RippleButton from './RippleButton'

const Footer = () => {
    const sorrowRef = useRef(null);
    return (
        <footer className='w-full border-t-2 border-solid border-dark font-medium text-base sm:text-lg dark:text-light dark:border-light'>
            <Layout className='py-6 flex items-center justify-between flex-col lg:flex-row lg:py-8 gap-3'>
                {/* <span>{new Date().getFullYear()} &copy; All Rights Reserved.</span> */}
                <Link href={"mailto:blikevinay@gmail.com"} target='_blank' className='underline underline-offset-2'>Say Hello</Link>
                <div className="flex flex-col md:flex-row items-center gap-1">
                    <h2 className="text-lg text-center lg:text-left font-medium text-[10px]">Before finalizing your choice, please hear this</h2>
                    <RippleButton path={'/audios/sorrow_tune.mp3'} ref={sorrowRef} classes={`relative h-10 w-10 flex items-center justify-center uppercase text-3xl leading-3 bg-gray-300 dark:bg-gray-700 rounded-full p-2 outline-none border-none`} />
                </div>
                <div className='flex items-center py-2 lg:py-0'>
                    Build with <span className='text-primary dark:text-primaryDark text-2xl px-1'>&#9825;</span> <Link className='underline underline-offset-2' href={'/'}></Link>
                </div>
            </Layout>
        </footer>
    )
}

export default Footer
