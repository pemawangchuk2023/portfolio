"use client"
import Image from "next/image";
import { Button } from "./ui/button";
import Link from "next/link";
import {motion} from "framer-motion";
import { TypeAnimation } from "react-type-animation";

const HeroSection = () => {
  return (
    <section className="lg:py-48">
      <div className="grid grid-cols-1 sm:grid-cols-12">
        <motion.div 
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="col-span-8 place-self-center text-center sm:text-left justify-self-start"
        >
        <div className="col-span-7 place-self-center text-center sm:text-left">
          <h1 className="text-white mb-4 text-4xl sm:text-5xl lg:text-6xl lg:leading-normal font-bold">
            Hi There, I am
            <br />
            <span>
            <TypeAnimation
              sequence={[
                "Blockchain Developer",
                1000,
                "Bitcoin Historian",
                1000,
                "UI/UX Designer",
                1000,
              ]}
              wrapper="span"
              speed={60}
              repeat={Infinity}
            />
            </span>
          </h1>
          <p className="text-[#FAFAFF] text-base sm:text-lg mb-6 lg:text-xl">
            I am Pema Wangchuk, an aspiring full-stack web3 Developer and a
            meticulous smart contract auditor.
          </p>
          <div>
            <Link
              href="/"
              className="px-6 inline-block py-3 w-full sm:w-fit rounded-full mr-4 bg-gradient-to-br from-primary-500 to-secondary-500 hover:bg-slate-800 text-white"
            >
              Hire Me
            </Link>
            <Link
              href="/"
              className="px-1 inline-block py-1 w-full sm:w-fit rounded-full bg-gradient-to-br from-primary-500 to-secondary-500 hover:bg-slate-800 text-white mt-3"
            >
              <span className="block bg-[#121212] hover:bg-slate-800 rounded-full px-5 py-2">
                Download CV
              </span>
            </Link>
          </div>
        </div>
        </motion.div>
       
        <motion.div  
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="col-span-4 place-self-center mt-4 lg:mt-0">
            
        <div className="col-span-5 place-self-center mt-4 lg:mt-0">
          <div className="rounded-full  w-[250px] h-[250px] lg:w-[400px] lg:h-[400px] relative">
            <Image
              src="/images/hero.png"
              alt="hero"
              width={300}
              height={300}
              className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
            />
          </div>
        </div>
        </motion.div>
      </div>
    </section>
  );
};
export default HeroSection;
