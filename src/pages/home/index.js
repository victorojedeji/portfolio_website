import {
  BsLinkedin,
  BsGithub,
  BsWhatsapp,
  BsArrowUpRight,
  BsArrowDown,
  BsFiletypeScss,
  BsGit,
  BsWordpress,
} from "react-icons/bs";
import { RiTwitterXLine, RiUserLocationLine } from "react-icons/ri";
import { SiHashnode } from "react-icons/si";
import { AiFillHtml5 } from "react-icons/ai";
import {
  BiLogoCss3,
  BiLogoJavascript,
  BiLogoTailwindCss,
  BiLogoRedux,
} from "react-icons/bi";

import profileAvatar from "../../assets/profile_gif.gif";
import profilePic from "../../assets/profile_pic.jpg";

import { BiLogoGmail, BiLogoReact } from "react-icons/bi";
import { FaBootstrap } from "react-icons/fa";
import { TbBrandNextjs } from "react-icons/tb";

import {HashLink as HLink} from 'react-router-hash-link'
import { Link } from "react-router-dom";


export default function HomePage() {

  const scrollDown = () => {
    window.scrollTo({
      behavior: 'smooth'
    })
  }

  return (
    <section className="px-8 md:px-48 bg-neutral-100">
      <section className="flex flex-col lg:flex-row items-center h-[90vh] w-full relative mb-16" id="hero">
        <HLink to='#about_me'>
          <div className="flex flex-col justify-center items-center mr-8 py-4 px-4 absolute bottom-0 right-0" onClick={scrollDown}>
            <BsArrowDown className="text-2xl font-bold" />
            <span className="whitespace-nowrap text-sm font-bold">
              scroll down
            </span>
          </div>
        </HLink>
        <div className="flex items-center justify-center lg:justify-between py-12 lg:py-24 w-[100%] lg:w[50%]">
          <div className="mr-8 lg:mr-24">
            <Link>
              <BsLinkedin className="mb-4 text lg:text-2xl" />
            </Link>
            <Link>
              <BsGithub className="mb-4 text lg:text-2xl" />
            </Link>
            <Link>
              <RiTwitterXLine className="mb-4 text lg:text-2xl" />
            </Link>
            <Link>
              <SiHashnode className="mb-4 text lg:text-2xl" />
            </Link>
          </div>

          <div className="">
            <h1 className="text-3xl md:text-4xl font-bold whitespace-break-spaces lg:whitespace-nowrap mb-8">
              Victor Ojedeji Here 👋
            </h1>

            <h3 className="text-2xl">Software Developer</h3>
            <p className="text-base">Passionate Frontend Web Developer </p>
            <HLink to="#contact">
              <button className="bg-neutral-700 text-white mt-4 px-8 py-2 rounded-[8px] whitespace-nowrap flex items-center gap-2 ">
                <span className="text-md">Hire me</span>
                <BsArrowUpRight />
              </button>
            </HLink>
          </div>
        </div>

        <div className="w-[100%] lg:w-[50%] flex justify-center lg:justify-end items-center"  >
          <div
            className="w-[250px] h-[250px] rounded-full flex items-center justify-center bg-cover bg-center border-4 border-neutral-500"
            style={{
              backgroundImage: `url(${profileAvatar})`,
            }}
          ></div>
        </div>
      </section>

      <section className="mb-24" id='about_me'>
        <div>
          <h1 className="text-3xl md:text-4xl font-bold whitespace-nowrap text-center">
            About Me
          </h1>
          <p className="text-sm font-normal text-gray-500 text-center">
            Who is Victor Ojedeji Oluwatomi?
          </p>
        </div>

        <div className="mt-16 w-full flex flex-col lg:flex-row items-center justify-center lg:justify-start">
          <div className="relative w-full lg:w-[40%] h-full overflow-hidden mb-4 lg:mb-0 lg:mr-24 flex justify-center items-center ">
            <img
              src={profilePic}
              alt="Victor Ojedeji"
              className="object-cover w-[200px] h-[300px]"
            />
            <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-0 hover:bg-opacity-50 cursor-pointer transition-all duration-300">
              {/* <div className="hidden group-hover:block text-black text-center relative z-10">
                <p>Check out my GitHub</p>
              </div> */}
            </div>
          </div>

          <div className="w-full lg:w-[60%]">
            <p className="text-md lg:text-sm">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe,
              ipsum est vitae at aliquam vel necessitatibus quasi vero veritatis
              assumenda laborum? Nulla dolorem animi numquam! Suscipit expedita
              et autem porro fugit, asperiores velit nihil tenetur possimus?
              Repellat dolor amet minus optio? Unde ad facilis illo vel fuga
              temporibus blanditiis repellat.
            </p>
            <Link to="">
              <button className="bg-neutral-700 text-white mt-8 px-8 py-2 rounded-[8px] whitespace-nowrap flex items-center gap-2 ">
                <span className="text-md">Check out my github</span>
                <BsGithub />
              </button>
            </Link>
          </div>
        </div>
      </section>

      {/* <section id='portfolio'>
        <div>
          <h1 className="text-4xl font-bold whitespace-nowrap text-center">
            Portfolio
          </h1>

          <div>

          </div>
        </div>
      </section> */}

      <section className="mb-24 " id="skills">
        <h1 className="text-4xl font-bold whitespace-nowrap text-center">
          Skills
        </h1>

        <div className="flex flex-col lg:flex-row items-center justify-center mt-16 lg:gap-8">
          <div className="w-[100%] lg:w-[50%] py-4 px-4 rounded-[8px] lg:h-[60vh]">
            <div>
              <h2 className="text-center text-2xl">Soft Skills</h2>
            </div>

            <div className="flex flex-wrap mt-8 gap-3 justify-center">
              <div className="flex gap-4 items-center border-2 border-neutral-400 py-2 px-2 rounded-[8px]">
                <AiFillHtml5 className="text-2xl" />
                <span className="text-sm font-semibold">HTML5</span>
              </div>

              <div className="flex gap-4 items-center border-2 border-neutral-400 py-2 px-2 rounded-[8px]">
                <BiLogoCss3 className="text-2xl" />
                <span className="text-sm font-semibold">CSS3</span>
              </div>

              <div className="flex gap-4 items-center border-2 border-neutral-400 py-2 px-2 rounded-[8px]">
                <BiLogoJavascript className="text-2xl" />
                <span className="text-sm font-semibold">JAVASCRIPT</span>
              </div>

              <div className="flex gap-4 items-center border-2 border-neutral-400 py-2 px-2 rounded-[8px]">
                <BsFiletypeScss className="text-2xl" />
                <span className="text-sm font-semibold">SCSS</span>
              </div>

              <div className="flex gap-4 items-center border-2 border-neutral-400 py-2 px-2 rounded-[8px]">
                <FaBootstrap className="text-2xl" />
                <span className="text-sm font-semibold">BOOTSTRAP</span>
              </div>

              <div className="flex gap-4 items-center border-2 border-neutral-400 py-2 px-2 rounded-[8px]">
                <BsGit className="text-2xl" />
                <span className="text-sm font-semibold">GIT</span>
              </div>

              <div className="flex gap-4 items-center border-2 border-neutral-400 py-2 px-2 rounded-[8px]">
                <BiLogoReact className="text-2xl" />
                <span className="text-sm font-semibold">REACT</span>
              </div>

              <div className="flex gap-4 items-center border-2 border-neutral-400 py-2 px-2 rounded-[8px]">
                <BiLogoTailwindCss className="text-2xl" />
                <span className="text-sm font-semibold">TAILWINDCSS</span>
              </div>

              <div className="flex gap-4 items-center border-2 border-neutral-400 py-2 px-2 rounded-[8px]">
                <BiLogoRedux className="text-2xl" />
                <span className="text-sm font-semibold">REDUX TOOLKIT</span>
              </div>

              <div className="flex gap-4 items-center border-2 border-neutral-400 py-2 px-2 rounded-[8px]">
                <TbBrandNextjs className="text-2xl" />
                <span className="text-sm font-semibold">NEXTJS</span>
              </div>

              <div className="flex gap-4 items-center border-2 border-neutral-400 py-2 px-2 rounded-[8px]">
                <BsWordpress className="text-2xl" />
                <span className="text-sm font-semibold">WORDPRESS</span>
              </div>
            </div>
          </div>

          <div className="w-[100%] lg:w-[50%] py-4 px-4 rounded-[8px] lg:h-[60vh]">
            <div>
              <h2 className="text-center text-2xl">Technical Skills</h2>
            </div>

            <div className="flex flex-wrap mt-8 gap-3 justify-center">
              <div className="flex gap-4 items-center border-2 border-neutral-400 py-2 px-2 rounded-[8px]">
                {/* <AiFillHtml5 className="text-2xl" /> */}
                <span className="text-sm font-semibold">TIME MANAGEMENT</span>
              </div>

              <div className="flex gap-4 items-center border-2 border-neutral-400 py-2 px-2 rounded-[8px]">
                {/* <BiLogoCss3 className="text-2xl" /> */}
                <span className="text-sm font-semibold">
                  COMMUNICATION SKILLS
                </span>
              </div>

              <div className="flex gap-4 items-center border-2 border-neutral-400 py-2 px-2 rounded-[8px]">
                {/* <BiLogoJavascript className="text-2xl" /> */}
                <span className="text-sm font-semibold">
                  PROJECT MANAGEMENT
                </span>
              </div>

              <div className="flex gap-4 items-center border-2 border-neutral-400 py-2 px-2 rounded-[8px]">
                {/* <BsFiletypeScss className="text-2xl" /> */}
                <span className="text-sm font-semibold">PROBLEM SOLVING</span>
              </div>

              <div className="flex gap-4 items-center border-2 border-neutral-400 py-2 px-2 rounded-[8px]">
                {/* <FaBootstrap className="text-2xl" /> */}
                <span className="text-sm font-semibold">TEAMWORK</span>
              </div>

              <div className="flex gap-4 items-center border-2 border-neutral-400 py-2 px-2 rounded-[8px]">
                {/* <BsGit className="text-2xl" /> */}
                <span className="text-sm font-semibold">CREATIVITY</span>
              </div>

              <div className="flex gap-4 items-center border-2 border-neutral-400 py-2 px-2 rounded-[8px]">
                {/* <BiLogoReact className="text-2xl" /> */}
                <span className="text-sm font-semibold">PAIR PROGRAMMING</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full pb-16" id="contact">
        <h1 className="text-4xl font-bold whitespace-nowrap text-center">
          Get in Touch
        </h1>
        <h5 className="text-sm font-normal text-gray-500 text-center">
          Contact Me
        </h5>

        <div className="w-full flex flex-col lg:flex-row gap-8 mt-16">
          <div className="w-[100%] lg:w-[50%]">
            <h3 className="text-center text-2xl">Talk to me</h3>

            <div className="flex items-center gap-8 hover:bg-neutral-200 duration-300 py-2 px-4 rounded-[8px] mt-8 mb-4">
              <RiUserLocationLine className="text-3xl font-bold" />
              <div>
                <h4 className="tex-xl font-bold">Location</h4>
                <p className="text-base">Ibadan | Nigeria.</p>
              </div>
            </div>

            <div className="flex items-center gap-8 hover:bg-neutral-200 duration-300 py-2 px-4 rounded-[8px] mt-8 mb-4">
              <BiLogoGmail className="text-3xl font-bold" />
              <div>
                <h4 className="tex-xl font-bold">Email</h4>
                <p className="text-base">ojedejivictordaniel@gmail.com</p>
              </div>
            </div>

            <div className="flex items-center gap-8 hover:bg-neutral-200 duration-300 py-2 px-4 rounded-[8px] mt-8 mb-4">
              <BsWhatsapp className="text-3xl font-bold" />
              <div>
                <h4 className="tex-xl font-bold">whatsApp</h4>
                <p className="text-base">+234 812 653 6440</p>
              </div>
            </div>
          </div>

          <div className="w-[100%] lg:w-[50%]">
            <h3 className="text-center text-2xl">Send me a proposal</h3>

            <form class="max-w-md mx-auto mt-4 p-4 rounded-lg">
              <div class="mb-4 relative">
                <label class=" mb-2" for="name">
                  Name
                </label>
                <input
                  class="w-full py-2 px-3 border border-gray-300 rounded bg-transparent focus:outline-none"
                  type="text"
                  name="name"
                  id="name"
                  placeholder="Enter Your Name..."
                />
              </div>

              <div class="mb-4 relative">
                <label class=" mb-2" for="email">
                  Email
                </label>
                <input
                  class="w-full py-2 px-3 border border-gray-300 rounded bg-transparent focus:outline-none"
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Enter Your Email..."
                />
              </div>

              <div class="mb-4 relative">
                <label class=" mb-2" for="project">
                  Proposal
                </label>
                <textarea
                  class="w-full py-2 px-3 border border-gray-300 rounded bg-transparent focus:outline-none"
                  name="project"
                  id="project"
                  cols="30"
                  rows="10"
                  placeholder="Write Me Your Proposal..."
                ></textarea>
              </div>
            </form>
          </div>
        </div>
      </section>
    </section>
  );
}
