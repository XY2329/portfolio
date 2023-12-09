import React from "react";
import TypeWritter from "typewriter-effect";
import { motion } from "framer-motion";
import Link from "next/link";
const HeroSection = () => {

    return (
        <main className="py-16 mt-16 md:flex md:shrink-0">
            <div className="grid grid-cols-1 md:grid-cols-12">
                <motion.div
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                    className="col-span-1 md:col-span-8 place-self-center justify-self-start"
                >
                    <h1 className="font-extrabold">
                        <span className="text-white text-8xl">
                            Hello, I'm{" "}
                            <span className="text-transparent bg-clip-text sm:text-8xl md:text-9xl bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
                                XY
                            </span>
                        </span>
                        <span className="text-7xl">
                            <TypeWritter
                                options={{
                                    autoStart: true,
                                    loop: true,
                                }}
                                onInit={(typewriter) => {
                                    typewriter
                                        .typeString`<span style="color:#FF77FF">Web Developer</span>`
                                        .pauseFor(1500)
                                        .deleteAll()
                                        .typeString`<span style="color:#9E7BFF">Backend Developer</span>`
                                        .pauseFor(1500)
                                        .deleteAll()
                                        .start()
                                }}
                            ></TypeWritter>
                        </span>
                        <p className="text-sky-100 mt-8 text-base sm:text-lg m d:text-xl mb-6">Slide down to know more about me!</p>
                        <Link
                            href="https://docs.google.com/document/d/1qUs6m7TJX0bkA4GgH9fHW0PRz7l3SG9l/edit?usp=sharing&ouid=114509184187451220050&rtpof=true&sd=true"
                            className="px-6 inline-block py-3 rounded-full border-2 border-pink-500 hover:bg-pink-400">
                        View my resume
                        </Link>
                    </h1>
                </motion.div>
                <div className="col-span-4 md:col-span-4 place-self-center mt-12 lg:mt-0 pt-0 lg:pt-24">
                    <div className="w-[400px] h-[400px] relative z-0">
                        <img
                        src="/Hero-Section.png"
                        alt="hero section"
                        className="transform rounded-full flex relative -translate-y-1/2 top-1/2 left-1/2">
                        </img>
                    </div>
                </div>
            </div>
        </main>
    );
};

export default HeroSection;
