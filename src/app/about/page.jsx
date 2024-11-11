"use client"
import Head from 'next/head'
import React, { useEffect, useRef } from 'react'
import AnimateText from '../components/AnimateText'
import Layout from '../components/Layout'
import Image from 'next/image'
import profilePic from '../../../public/images/profile/me.png'
import { useInView, useMotionValue, useSpring } from 'framer-motion'
import Skills from '../components/Skills'
import Experience from '../components/Experience'
import Education from '../components/Education'
import TransitionEffect from '../components/TransitionEffect'
import RippleButton from '../components/RippleButton'
import Hobbies from '../components/Hobbies'

const AnimatedNumbers = ({ value }) => {
  const ref = useRef(null);
  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, { duration: 3000 });
  const isInView = useInView(ref, { once: true });
  useEffect(() => {
    if (isInView) {
      motionValue.set(value)
    }
  }, [isInView, motionValue, value]);

  useEffect(() => {
    springValue.on("change", (latest) => {
      if (ref.current && latest.toFixed(0) <= value) {
        ref.current.textContent = latest.toFixed(0);
      }
    }, [springValue, value])
  })
  return <span ref={ref}></span>
}



const AboutPage = () => {
  const tumseNaHoRef = useRef(null);
  const salaryRef = useRef(null);
  return (
    <>
      <Head>
        <title>Vinay Bachani | About Page</title>
        <meta name='description' content='any description' />
      </Head>
      <TransitionEffect />
      <main className='flex w-full flex-col items-center justify-center dark:text-light'>
        <Layout className='!pt-10'>
          <AnimateText text={'Passion Powers Purpose!'} className='mb-10 xl:mb-14 !text-3xl md:!text-6xl lg:!text-7xl text-center' />
          <div className="grid w-full grid-cols-8 gap-8 sm:gap-16">
            <div className='col-span-8 sm:col-span-8 md:col-span-4 lg:col-span-4 xl:col-span-3 flex flex-col items-start justify-start order-2 md:order-1 text-justify'>
              <h2 className='mb-4 text-lg font-bold uppercase text-dark/75 dark:text-light/75'>Biography</h2>
              <p className='font-medium'>
                {`Hello! I’m Vinay Bachani, a dedicated web developer with a focus on designing beautiful, dynamic and user-centric digital experiences. With two years of experience, I’m always excited to find fresh, innovative methods to turn client visions into reality.`}
              </p>

              <p className='font-medium my-4'>
                {`I believe design goes beyond aesthetics—it’s about solving problems and crafting seamless, enjoyable experiences for users`}
              </p>

              <p className='my-4 font-medium'>
                {`Driven by a passion for learning and staying ahead of trends, I’m always refining my skills and embracing new challenges. From solving complex bugs to designing responsive layouts, I find great satisfaction in delivering results that exceed client expectations.`}
              </p>

            </div>

            <div className='col-span-8 sm:col-span-8 md:col-span-4 lg:col-span-4 xl:col-span-3 mx-auto right-4 relative h-max rounded-2xl border-2 border-solid border-dark bg-light dark:bg-dark p-4 md:p-6 dark:border-light order-1 md:order-2 w-full xl:w-[90%] ml-4 xl:ml-10'>
              <div className='absolute top-0 -right-3 -z-10 w-[102%] h-[103%] rounded-[2rem] bg-dark dark:bg-light' />
              <Image
                src={profilePic}
                alt='about'
                className='w-full h-auto rounded-2xl'
                priority
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
              <div className="w-full flex flex-col items-center justify-between gap-1 mt-4">
                <h2 className="text-sm sm:text-lg text-center lg:text-left font-medium">What I wish to hear from you.</h2>
                <RippleButton
                  path={'/audios/salary_kitna_loge.m4a'}
                  ref={salaryRef}
                  classes={`relative h-10 w-10 md:h-14 md:w-14 flex items-center justify-center uppercase text-3xl leading-3 bg-gray-300 dark:bg-gray-700 rounded-full p-2 md:p-3 outline-none border-none`}
                />
              </div>
            </div>



            <div className="col-span-8 sm:col-span-8 xl:col-span-2 flex flex-row xl:flex-col items-center xl:text-end justify-between order-3">
              <div className='flex flex-col items-center justify-center lg:items-end'>
                <span className='inline-block font-bold text-4xl sm:text-5xl md:text-6xl lg:text-7xl'>
                  <AnimatedNumbers value={3} />+
                </span>
                <h2 className='text-sm sm:text-base md:text-lg lg:text-xl font-medium capitalize text-dark/75 dark:text-light/75 text-center'>Satisfied Clients</h2>
              </div>
              <div className='flex flex-col items-center justify-center lg:items-end'>
                <span className='inline-block font-bold text-4xl sm:text-5xl md:text-6xl lg:text-7xl'>
                  <AnimatedNumbers value={9} />+
                </span>
                <h2 className='text-sm sm:text-base md:text-lg lg:text-xl font-medium capitalize text-dark/75 dark:text-light/75 text-center'>Projects Completed</h2>
              </div>

              <div className='flex flex-col items-center lg:items-end justify-center'>
                <span className='inline-block font-bold text-4xl sm:text-5xl md:text-6xl lg:text-7xl'>
                  <AnimatedNumbers value={2} />+
                </span>
                <h2 className='text-sm sm:text-base md:text-lg lg:text-xl font-medium capitalize text-dark/75 dark:text-light/75 text-center'>Years of Experience</h2>
              </div>
            </div>
          </div>
          <Skills />
          <Experience />
          <Education />
          <Hobbies />
        </Layout>
      </main>
    </>
  )
}

export default AboutPage
