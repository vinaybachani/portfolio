"use client"
import Image from "next/image";
import ProfilePic from "../../public/images/profile/developer-pic-1.png"
import AnimateText from "./components/AnimateText";
import Link from "next/link";
import { LinkArrow } from "./components/Icons";
import HireMe from "./components/HireMe";
import TransitionEffect from "./components/TransitionEffect";

export default function Home() {

  return (
    <>
      <TransitionEffect />
      <main className="flex items-center text-dark w-full min-h-screen dark:text-light">
        <div className={`w-full h-full inline-block z-0 bg-light dark:bg-dark p-8 sm:p-12 md:p-16 lg:p-32 !pt-0`}>
          <div className="flex items-center justify-between w-full flex-col lg:flex-row">
            <div className="w-full sm:w-3/4 md:w-[60%] lg:w-1/2">
              <Image src={ProfilePic} alt="headimage" className="w-full h-auto"
                priority
                sizes="(max-width: 550px) 100vw, (max-width: 1200px) 50vw, 50vw"
              />
            </div>
            <div className="w-full flex flex-col items-center self-center lg:w-1/2">
              <AnimateText text={"Transforming Ideas into Reality through Code and Design."} className="!text-3xl !text-center lg:!text-left xl:!text-5xl md:!text-5xl sm:!text-3xl" />
              <p className="my-4 text-xs md:text-sm lg:text-base font-medium text-center lg:text-left ml-2">
                {/* As a skilled full-stack developer, I am dedicated to turning ideas into innovative web applications. Explore my latest projects and articles, showcasing my expertise in ReactJs, NextJs and web development. */}
                As a skilled full-stack developer, I am committed to transforming ideas into cutting-edge web applications. Check out my latest projects, highlighting my expertise in tech stacks such as Next.js, React.js, Node.js, and overall web development.
              </p>
              <div className="flex items-center self-center lg:self-start mt-4">
                <Link href={"/dummy.pdf"} target={"_blank"} className="flex items-center bg-dark text-base text-light p-1.5 px-4 md:p-2.5 md:px-6 md:text-lg rounded-lg font-semibold hover:bg-light hover:text-dark dark:bg-light dark:text-dark hover:dark:bg-dark hover:dark:text-light hover:dark:border-light border-2 border-solid border-transparent hover:border-dark" download={true}>Resume <LinkArrow className={"w-6 ml-1"} /></Link>
                <Link href={"mailto:blikevinay@gmail.com"} className="ml-4 text-base md:text-lg font-medium capitalize text-dark underline dark:text-light">Contact</Link>
              </div>
            </div>
          </div>
        </div>
        <HireMe />
      </main>
    </>
  );
}
