import Head from "next/head";
import Image from "next/image";
import {
  AiFillTwitterCircle,
  AiFillLinkedin,
  AiFillGithub,
} from "react-icons/ai";

import Technologies from "@components/Technologies";
import Contact from "@components/Contact";
import Projects from "@components/Projects";

import developer from "../public/developer.png";
import portrait from "../public/self-portrait.png";

export default function Home() {
  
  return (
    <div>
      <Head>
        <title>janiidu</title>
        <meta name="description" content="Hey, I'm Janidu Rathnayaka. A Web Developer who loves to design and code. I use React.js or Next.js to build the web application interfaces and their functionalities." />
        <meta name="keywords" content="Janidu Rathnayaka, Developer Portofolio, Web Developer"/>
        <meta property="og:title" content="Janidu Rathanayaka - Web Developer"/>
        <link rel="icon" href={portrait} />
        <link rel="stylesheet" href="@/globals.css" />
      </Head>

      <main className=" bg-[#201A26] px-10 md:px-20 lg:px-30 xl:px-60">
        <section className="mb-20">
          <div className="md:flex md:items-center">
            <div className="text-center lg:p-10 md:p-0">
              <p className="text-2xl md:text-2xl font-bold py-2 bg-gradient-to-r from-red-500 to-blue-500 text-transparent bg-clip-text">
                Hello World!
              </p>
              <h2 className="text-3xl md:text-4xl py-2 font-bold  text-slate-100">
                I'm Janidu Rathnayaka
              </h2>
              <p className="text-xl md:text-xl py-5 font-bold text-gray-400 ">
                Software Enginering Undergraduate
              </p>
              <p className="lg:text-xl text-l font-bold py-8 bg-gradient-to-r from-red-500 to-blue-500 text-transparent bg-clip-text md:text-2xl">
                Find Me On
              </p>
              <div className="text-3xl lg:text-5xl flex justify-center gap-16 text-gray-400">
                <a href="https://twitter.com/janiidu" target="_blank">< AiFillTwitterCircle className="hover:scale-110 active:scale-90 transition-all"/></a>
                <a href="http://www.linkedin.com/in/janidu-rathnayake-83583b1a4" target="_blank">< AiFillLinkedin  className="hover:scale-110 active:scale-90 transition-all"/></a>
                <a href="https://github.com/janiidu14" target="_blank">< AiFillGithub  className="hover:scale-110 active:scale-90 transition-all"/></a>
              </div>
            </div>
            <Image src={developer} alt="Developer Image" width={300} className="mx-auto my-auto hidden md:block" />
          </div>
        </section>

        <section id="about-me" className=" mb-20">
          <div className="md:flex md:items-center">
            <div className="my-20 mr-10 lg:mr-0">
              <Image src={portrait} alt="Portrait Image" width={200} className="border-teal-600 rounded-full mx-auto" />
            </div>
            <div className="mx-auto">
              <h3 className="text-xl font-bold dark:text-white md:text-3xl text-center">
                About Me
              </h3>
              <p className="py-5 leading-8 dark:text-gray-200 max-w-xl mx-auto md:text-l text-center">
              Feelance designer and developer for startups and small-scale businessses collaborated with talanted
              people to create digital products for both business and consumer use.
              I offer from a wide range of services including designing and developemnt.
              </p>
              <a href="https://drive.google.com/file/d/1K2xeG5dg0PAhvb_QsYv3I7kRO4CGvO4A/view?usp=sharing" target="_blank">
                <div className="my-5 flex justify-center">
                  <button className=" p-0.5 mb-2 overflow-hidden text-sm font-medium  rounded-lg group bg-gradient-to-br from-purple-500 to-pink-500 group-hover:from-purple-500 group-hover:to-pink-500 hover:text-white">
                    <span className="relative font-bold px-5 py-2.5 inline-flex items-center transition-all ease-in duration-75 bg-gray-900 rounded-md group-hover:bg-opacity-0">
                      Resume
                    </span>
                  </button>
                </div>
              </a>
            </div>
          </div>
        </section>
      
        <section id="technologies">
          <div className="my-10">
            <h3 className="text-3xl py-10 text-center font-bold dark:text-white ">Technologies</h3>
            <Technologies />
          </div>
        </section>

        <section id="projects" className="py-10">
          <h3 className="text-3xl py-10 text-center font-bold dark:text-white ">Projects</h3>
          <Projects />
          
          <Contact />
          
          <div className="mt-10 border-b border-2 border-gray-200"></div>
          <div className="py-6 flex justify-between">
            <p>&copy; 2023 | All Rights Reserved By <a href="" className="text-purple-300 ">Janidu Rathnayaka</a> </p>
            <div>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}

