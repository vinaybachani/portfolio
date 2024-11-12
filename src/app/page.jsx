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
      <main className="text-dark w-full flex items-center justify-center xl:min-h-[90vh] min-h-[80vh] dark:text-light">
        <div className={`w-full h-full flex flex-col items-center justify-center z-0 bg-light dark:bg-dark px-5 sm:px-12 md:px-16 lg:px-32 !pt-0`}>
          <AnimateText text={"Transforming Ideas into Reality through Code and Design."} className="!text-3xl !text-center xl:!text-7xl md:!text-5xl sm:!text-3xl py-4" />
          <p className="my-4 text-xs md:text-sm lg:text-base font-medium text-center ml-2">
            {/* As a skilled full-stack developer, I am dedicated to turning ideas into innovative web applications. Explore my latest projects and articles, showcasing my expertise in ReactJs, NextJs and web development. */}
            As a skilled full-stack developer, I am committed to transforming ideas into cutting-edge web applications. Check out my latest projects, highlighting my expertise in tech stacks such as Next.js, React.js, Node.js, and overall web development.
          </p>
          <div className="flex items-center self-center mt-4">
            <Link href={"/Vinay_Resume.pdf"} target={"_blank"} className="flex items-center bg-dark text-base text-light p-1.5 px-4 md:p-2.5 md:px-6 md:text-lg rounded-lg font-semibold hover:bg-light hover:text-dark dark:bg-light dark:text-dark hover:dark:bg-dark hover:dark:text-light hover:dark:border-light border-2 border-solid border-transparent hover:border-dark" download={true}>Resume <LinkArrow className={"w-6 ml-1"} /></Link>
            <Link href={"mailto:blikevinay@gmail.com"} className="ml-4 text-base md:text-lg font-medium capitalize text-dark underline dark:text-light">Contact</Link>
          </div>
        </div>
        <HireMe />
      </main>
    </>
  );
}
