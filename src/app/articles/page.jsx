"use client"
import Head from 'next/head'
import React, { useRef } from 'react'
import Layout from '../components/Layout'
import AnimateText from '../components/AnimateText'
import Link from 'next/link'
import Image from 'next/image'
import article1 from "../../../public/images/articles/pagination component in reactjs.jpg"
import article2 from "../../../public/images/articles/create loading screen in react js.jpg"
import { motion, useMotionValue } from "framer-motion"
import TransitionEffect from '../components/TransitionEffect'

const MotionImage = motion.create(Image);

const MovingImage = ({ title, img, link }) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const imgRef = useRef(null);

  function handleMouse(event) {
    imgRef.current.style.display = 'inline-block'
    x.set(event.pageX)
    y.set(-10)
  }

  function handleLeave(event) {
    imgRef.current.style.display = 'none'
    x.set(0)
    y.set(0)
  }

  return (
    <Link href={link} target='_blank' onMouseMove={handleMouse} onMouseLeave={handleLeave}>
      <h2 className='capitalize text-lg sm:text-xl font-semibold hover:underline'>{title}</h2>
      <MotionImage src={img} alt={title} ref={imgRef} className='z-10 w-96 h-auto hidden absolute rounded-lg' style={{ x: x, y: y }} initial={{ opacity: 0 }} whileInView={{ opacity: 1, transition: { duration: 0.2 } }}
      // priority
      // sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw"
      />
    </Link>
  )
}

const ArticlePage = () => {

  const AllArticle = ({ img, title, date, link }) => {
    return (
      <motion.li className='relative w-full p-4 py-6 my-4 rounded-xl flex items-center justify-between bg-light text-dark first:mt-0 border border-solid border-dark border-r-4 border-b-4 dark:bg-dark dark:text-light dark:border-light flex-col md:flex-row' initial={{ y: 200 }} viewport={{ once: true }} whileInView={{ y: 0, transition: { duration: 0.5, ease: "easeInOut" } }}>
        <MovingImage img={img} title={title} link={link} />
        <span className='text-primary dark:text-primaryDark font-semibold pl-0 md:pl-4 text-sm sm:text-lg self-start md:!self-end'>{date}</span>
      </motion.li>
    )
  }

  const FeaturedArticles = ({ img, title, time, summary, link }) => {
    return (
      <li className='relative col-span-1 w-full p-4 rounded-2xl bg-light border border-solid border-dark dark:bg-dark dark:border-light'>
        <div className='absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2rem] bg-dark rounded-br-3xl' />
        <Link href={link} target='_blank' className='w-full inline-block cursor-pointer overflow-hidden rounded-lg'>
          <MotionImage src={img} alt={title} className='w-full h-auto ' whileHover={{ scale: 1.05 }} transition={{ duration: 0.2 }} />
        </Link>
        <Link href={link} target='_blank'>
          <h2 className='capitalize text-2xl font-bold my-2 mt-4 hover:underline'>{title}</h2>
          <p className='text-sm mb-2'>{summary}</p>
          <span className='text-primary font-semibold dark:text-primaryDark'>{time}</span>
        </Link>
      </li>
    )
  }
  return (
    <>
      <Head>
        <title>Vinay Bachani | Article Page</title>
        <meta name='description' content='Any Description' />
      </Head>
      <TransitionEffect />
      <main className='w-full mb-16 flex flex-col items-center justify-center overflow-hidden dark:text-light'>
        <Layout className='!pt-16'>
          <AnimateText text={"Words Can Change The World!"} className='mb-8 sm:mb-16 !text-4xl sm:!text-6xl lg:!text-8xl text-center' />
          <ul className='grid grid-cols-1 gap-8 lg:gap-16 md:grid-cols-2 gap-y-16 md:gap-y-0'>
            <FeaturedArticles title={'Build A Custom Pagination Component In Reactjs From Scratch'} summary={'Learn how to build a custom pagination component in ReactJS from scratch. Follow this step-by-step guide to integrate Pagination component in your ReactJS project.'} time={'9 min read'} link={'/'} img={article1} />
            <FeaturedArticles title={'Build A Custom Pagination Component In Reactjs From Scratch'} summary={'Learn how to build a custom pagination component in ReactJS from scratch. Follow this step-by-step guide to integrate Pagination component in your ReactJS project.'} time={'9 min read'} link={'/'} img={article2} />
          </ul>
          <h2 className='font-bold text-4xl w-full text-center my-16'>All Articles</h2>

          <ul>
            <AllArticle title={"Build A Custom Pagination Component In Reactjs From Scratch"} img={article1} date={"March 22 2023"} link={"/"} />
            <AllArticle title={"Build A Custom Pagination Component In Reactjs From Scratch"} img={article1} date={"March 22 2023"} link={"/"} />
            <AllArticle title={"Build A Custom Pagination Component In Reactjs From Scratch"} img={article1} date={"March 22 2023"} link={"/"} />
            <AllArticle title={"Build A Custom Pagination Component In Reactjs From Scratch"} img={article1} date={"March 22 2023"} link={"/"} />
            <AllArticle title={"Build A Custom Pagination Component In Reactjs From Scratch"} img={article1} date={"March 22 2023"} link={"/"} />
            <AllArticle title={"Build A Custom Pagination Component In Reactjs From Scratch"} img={article1} date={"March 22 2023"} link={"/"} />
          </ul>
        </Layout>
      </main>
    </>
  )
}

export default ArticlePage
