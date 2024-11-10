"use client"
import React from 'react'
import Head from 'next/head'
import AnimateText from '../components/AnimateText'
import Layout from '../components/Layout'
import Link from 'next/link'
import Image from 'next/image'
import images from '../../../public/images/tech'
import { GitHubIcon } from '../components/Icons'
import project1 from "../../../public/images/projects/crypto-screener-cover-image.jpg";
import project2 from "../../../public/images/projects/spotify.png";
import project3 from "../../../public/images/projects/tictactoe1.png";
import project4 from "../../../public/images/projects/ai_content_generator2.png";
import project5 from "../../../public/images/projects/gemini.png";
import project6 from "../../../public/images/projects/bg-removal.png";
import project7 from "../../../public/images/projects/fashion_studio_website_no_change.jpg";
import project8 from "../../../public/images/projects/buymybills.png";


import { motion } from "framer-motion"
import TransitionEffect from '../components/TransitionEffect'

const MotionImage = motion.create(Image);


const FeaturedProjects = ({ type, title, img, summary, link, github, tools }) => {
  return (
    <article className='w-full flex items-center justify-between rounded-2xl sm:rounded-3xl border border-solid border-dark bg-light shadow-2xl p-4 sm:p-8 lg:p-12 relative rounded-br-3xl sm:rounded-br-2xl dark:bg-dark dark:border-light flex-col lg:flex-row'>
      <div className='absolute top-0 -right-2 sm:-right-3 -z-10 w-full sm:w-[101%] h-[102%] sm:h-[103%] rounded-[1.5rem] sm:rounded-[2.5rem] bg-dark rounded-br-3xl dark:bg-light' />
      <Link href={link} target='_blank' className='w-full lg:w-1/2 cursor-pointer overflow-hidden rounded-lg'>
        <MotionImage src={img} alt={title} className='w-full h-auto' whileHover={{ scale: 1.05 }} transition={{ duration: 0.2 }}
          priority
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw"
        />
      </Link>
      <div className='w-full lg:p-1/2 flex flex-col items-start justify-between pl-0 lg:pl-16 pt-6 lg:pt-0'>
        <span className='text-primary font-medium text-base sm:text-xl dark:text-primaryDark'>{type}</span>
        <Link href={link} target='_blank' className='hover:underline underline-offset-2'>
          <h2 className='my-2 w-full text-left text-sm sm:text-3xl font-bold dark:text-light'>{title}</h2>
        </Link>
        <p className='my-2 font-medium text-dark dark:text-light text-sm sm:text-lg text-justify'>{summary}</p>
        <div className='relative w-full flex flex-wrap'>
          {
            tools.map((tech, index) => {
              const matchedImage = images.find((image) => image.tech === tech);
              return matchedImage ? (
                <motion.div className='relative' key={tech + index}
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1, transition: { delay: index * 0.09, duration: 0.2 } }}
                >
                  <div
                    className='border-[2px] border-primary dark:border-primaryDark rounded-md flex items-center justify-center p-1 h-10 w-10 m-1'
                  >
                    <Image src={matchedImage.image} alt={tech} width={100} height={100} />
                  </div>
                </motion.div>
              ) : null;
            })
          }
        </div>
        <div className='mt-2 flex items-center'>
          <Link href={github} target='_blank' className='w-10'><GitHubIcon /></Link>
          <Link href={link} target='_blank' className='ml-4 rounded-lg bg-dark text-light p-2 px-4 sm:px-6 text-base sm:text-lg font-semibold dark:bg-light dark:text-dark mt-2'>Visit Project</Link>
        </div>
      </div>
    </article>
  )
}

const Project = ({ title, type, img, link, github, tools, description }) => {
  return (
    <article className='lg:min-h-[550px] w-full flex flex-col items-center justify-center rounded-2xl border border-solid border-dark bg-light p-4 sm:p-6 relative dark:bg-dark dark:border-light'>
      <div className='absolute top-0 -right-2 md:-right-3 -z-10 w-[101%] h-[102%] sm:h-[103%] rounded-[1.5rem] sm:rounded-[2rem] bg-dark rounded-br-3xl dark:bg-light' />
      <Link href={link} target='_blank' className='w-full cursor-pointer overflow-hidden rounded-lg'>
        <MotionImage src={img} alt={title} className='w-full xl:h-80 h-auto' whileHover={{ scale: 1.05 }} transition={{ duration: 0.2 }} />
      </Link>
      <div className='w-full flex flex-col items-start justify-between mt-4'>
        <span className='text-primary font-medium text-base md:text-lg lg:text-xl dark:text-primaryDark'>{type}</span>
        <Link href={link} target='_blank' className='hover:underline underline-offset-2'>
          <h2 className='my-2 w-full text-left text-2xl lg:text-3xl font-bold'>{title}</h2>
        </Link>
        <p className='text-[14px] text-justify'>{description}</p>
        <div className='w-full mt-2'>
          <div className="w-full">
            <div className='relative w-full flex flex-wrap'>
              {
                tools.map((tech, index) => {
                  const matchedImage = images.find((image) => image.tech === tech);
                  return matchedImage ? (
                    <motion.div className='relative' key={tech + index}
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1, transition: { delay: index * 0.09, duration: 0.2 } }}
                    >
                      <div
                        className='border-[2px] border-primary dark:border-primaryDark rounded-md flex items-center justify-center p-1 h-10 w-10 m-1'
                      >
                        <Image src={matchedImage.image} alt={tech} width={100} height={100} />
                      </div>
                    </motion.div>
                  ) : null;
                })
              }
            </div>
          </div>
        </div>
        <div className='mt-5 flex items-center justify-between w-full'>
          <Link href={link} target='_blank' className='underline text-base md:text-lg font-semibold'>Visit</Link>
          {/* <p>Tools</p> */}
          <Link href={github} target='_blank' className='w-6 md:w-8'><GitHubIcon /></Link>
        </div>
      </div>
    </article>
  )
}

const projectPage = () => {
  return (
    <>
      <Head>
        <title>Vinay Bachani | Project Page</title>
        <meta name='description' content='any description' />
      </Head>
      <TransitionEffect />
      <main className='w-full mb-16 flex flex-col items-center justify-center dark:text-light'>
        <Layout className='!pt-16'>
          <AnimateText text={"Imagination Trumps Knowledge!"} className='mb-8 sm:mb-16 !text-4xl sm:!text-6xl lg:!text-8xl text-center' />
          <div className='grid grid-cols-12 gap-24 gap-y-24 md:gap-y-32 gap-x-0 sm:gap-x-8 lg:gap-x-16'>
            <div className='col-span-12'>
              <FeaturedProjects
                type={"Featured Project"}
                title={"Crypto Screener Application"}
                summary={`A feature-rich Crypto Screener App using React, Tailwind CSS, Context API, React Router and Recharts. It shows detail regarding almost all the cryptocurrency. You can easily convert the price in your local currency`}
                link={'https://react-crypto-chi.vercel.app/'}
                img={project1}
                github={'https://github.com/vinaybachani/React-crypto'}
                tools={['HTML', 'CSS', 'ReactJs', 'TailwindCSS', 'Vercel', 'Lucide']}
              />
            </div>
            <div className='col-span-12 md:col-span-6'>
              <Project
                type={"App Clone"}
                title={"Spotify Clone"}
                description={`A basic Spotify clone that is responsive and includes a selection of songs with options to play, pause, and control playback.`}
                link={'https://spotify-clone-lemon-phi.vercel.app/'}
                img={project2}
                github={'https://github.com/vinaybachani/Spotify-Clone'}
                tools={['HTML', 'CSS', 'ReactJs', 'TailwindCSS', 'Vite', 'Vercel']}
              />
            </div>
            <div className='col-span-12 md:col-span-6'>
              <Project
                type={"Multiplayer Game"}
                title={"Multiplayer TicTacToe Game"}
                description={`A multiplayer Tic-Tac-Toe game built with Socket.io, allowing you to play with anyone, anywhere.`}
                link={'https://tic-tac-toe-client-delta.vercel.app/'}
                img={project3}
                github={'https://github.com/vinaybachani/TicTacToe-client'}
                tools={['HTML', 'CSS', 'ReactJs', 'TailwindCSS', 'Vite', 'Socket', 'Vercel']}
              />
            </div>
            <div className='col-span-12'>
              <FeaturedProjects
                type={"SAAS App"}
                title={"AI Content Generator"}
                summary={`An all-in-one SaaS app powered by the Gemini API that lets you generate content tailored to your needs. No need to write out a full prompt—simply select the service, and receive detailed information on your chosen topic`}
                link={'https://ai-content-generator-six-pi.vercel.app/'}
                img={project4}
                github={'https://github.com/vinaybachani/AI-Content-Generator'}
                tools={['HTML', 'CSS', 'ReactJs', 'NextJs', 'TailwindCSS', 'Lucide', 'Clerk', 'Drizzle', 'Razorpay', 'Vercel']}
              />
            </div>
            <div className='col-span-12 md:col-span-6'>
              <Project
                type={"App Clone"}
                title={"Gemini Clone"}
                description={`A simple Gemini clone built with the Gemini API, fully responsive and capable of storing your chat history`}
                link={'https://gemini-2-0-one.vercel.app/'}
                img={project5}
                github={'https://github.com/vinaybachani/gemini-2.0'}
                tools={['HTML', 'CSS', 'ReactJs', 'Vite', 'Vercel']}
              />
            </div>
            <div className='col-span-12 md:col-span-6'>
              <Project
                type={"SAAS App"}
                title={"Background Removal App"}
                description={`A full-stack SaaS application that enables background removal from images and includes a payment gateway, allowing you to purchase additional credits.`}
                link={'https://bg-removal-azure.vercel.app/'}
                img={project6}
                github={'https://github.com/vinaybachani/BG-Removal'}
                tools={['HTML', 'CSS', 'ReactJs', 'NextJs', 'TailwindCSS', 'Lucide', 'Clerk', 'NodeJS', 'ExpressJs', 'MongoDB', 'Razorpay', 'Vercel']}
              />
            </div>
            {/* <div className='col-span-12'>
              <FeaturedProjects
                type={"SAAS App"}
                title={"AI Content Generator"}
                summary={`A feature-rich Crypto Screener App using React, Tailwind CSS, Context API, React Router and Recharts. It shows detail regarding almost all the cryptocurrency. You can easily convert the price in your local currency`}
                link={'/'}
                img={project4}
                github={'/'}
                tools={['CSS', 'HTML']}
              />
            </div> */}
            <div className='col-span-12 md:col-span-6'>
              <Project
                type={"Website Template"}
                title={"Fashion Studio Website"}
                description={`A sleek and stylish clothing website template that leverages GSAP and Locomotive Scroll for visually captivating and dynamic scrolling effects.`}
                link={'https://wibe-studio-omega.vercel.app/'}
                img={project7}
                github={'https://github.com/vinaybachani/wibe-studio'}
                tools={['HTML', 'CSS', 'ReactJs', 'Gsap', 'Framermotion', 'Vercel']}
              />
            </div>
            <div className='col-span-12 md:col-span-6'>
              <Project
                type={"Website Template"}
                title={"Buymybills Website"}
                description={`A client project featuring a responsive landing page template that harnesses Framer Motion and GSAP for dynamic, animated scrolling effects.`}
                link={'https://gobuymybills.com/'}
                img={project8}
                github={'/'}
                tools={['HTML', 'CSS', 'ReactJs', 'Gsap', 'TailwindCSS', 'Framermotion', 'NextJS', 'Vercel']}

              />
            </div>
          </div>
        </Layout>
      </main>
    </>
  )
}

export default projectPage