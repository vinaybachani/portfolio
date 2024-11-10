import React from 'react'
import { CircularText } from './Icons'
import Link from 'next/link'

const HireMe = () => {
    return (
        <div className='absolute right-0 sm:right-4 left-auto -top-8 bottom-auto flex items-center justify-center overflow-hidden lg:!right-auto lg:!top-auto lg:bottom-4 lg:left-4 lg:fixed'>
            <div className="w-24 h-auto flex items-center justify-center relative lg:w-48">
                <CircularText className={"fill-dark animate-spin-slow dark:fill-light"} />
                <Link href={"mailto:blikevinay@gmail.com"} className='flex items-center justify-center absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-dark text-light shadow-2xl border-2 border-solid border-dark w-12 h-12 text-[10px] lg:w-20 lg:h-20 lg:text-[15px] rounded-full font-semibold hover:bg-light dark:bg-light dark:text-dark hover:dark:bg-dark hover:dark:text-light hover:border-light'>Hire Me</Link>
            </div>
        </div>
    )
}

export default HireMe
