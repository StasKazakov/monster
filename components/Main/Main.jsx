'use client'
import { useTheme } from '../../context/ThemeContext.jsx'
import Image from 'next/image'
import { GiCompass } from "react-icons/gi";
import { FaLightbulb } from "react-icons/fa6";
import { LuMessageSquareText, LuImagePlus } from "react-icons/lu";
import { FaCode } from "react-icons/fa";
import { FaMicrophone } from "react-icons/fa6";
import { IoMdSend } from "react-icons/io";


const Main = () => {
  const { theme, resetSidebar } = useTheme();
  return (
    <main 
    className='flex flex-col justify-between flex-1 min-h-screen'
    onClick={resetSidebar}
    >
    <div className='flex-1 flex flex-col'>
      <div className='flex justify-between px-10 pt-5 items-center'>
        {theme === 'dark' ? (
        <>
          <h1 className='text-5xl font-titillium text-green-500 '>
            Coding Monster
          </h1>
          <Image
            src="/user-dark.png"
            alt="user"
            width={100}
            height={100}
            className='rounded-full'
          />
        </>
        ) : (
          <>
            <h1 className='text-5xl font-titillium text-blue-500'>
              Coding Master
            </h1>
            <Image
              src="/user-light.png"
              alt="user"
              width={100}
              height={100}
              className='rounded-full'
            />
          </>
        )
        }
      </div>
      <div className="text-5xl
        text-[#c4c7c5] font-semibold p-5 flex flex-col text-center mb-2" >
        <p><span className='font-bold bg-gradient-to-r from-indigo-500 via-purple-500 
        to-pink-500 bg-clip-text text-transparent'>Hello, Developer!</span></p>
        <p><span className='font-bold bg-gradient-to-r from-indigo-500 via-purple-500 
        to-pink-500 bg-clip-text text-transparent'>How can I help you today?</span></p>
      </div>

      <div className='flex px-50'>
            <div className="card flex flex-col text-center 
                h-[200px] p-4 bg-sidebar rounded-lg cursor-pointer
                m-2 hover:bg-bg-hover border-[1px] border-accent">
                    <p className='mb-8'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis, repellat?</p>
                    <GiCompass className='text-4xl w-full h-1/2 items-end'/>
                </div>
                <div className="card flex flex-col text-center
                h-[200px] p-4 bg-sidebar rounded-lg cursor-pointer 
                m-2 hover:bg-bg-hover border-[1px] border-accent">
                    <p className='mb-8'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis, repellat?</p>
                    <FaLightbulb className='text-4xl w-full h-1/2 items-end'/>
                </div>
                <div className="card flex flex-col text-center
                h-[200px] p-4 bg-sidebar rounded-lg cursor-pointer 
                m-2 hover:bg-bg-hover border-[1px] border-accent">
                    <p className='mb-8'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis, repellat?</p>
                    <LuMessageSquareText className='text-4xl w-full h-1/2 items-end'/>
                </div>
                <div className="card flex flex-col text-center
                h-[200px] p-4 bg-sidebar rounded-lg cursor-pointer 
                m-2 hover:bg-bg-hover border-[1px] border-accent">
                    <p className='mb-8'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis, repellat?</p>
                    <FaCode className='text-4xl w-full h-1/2 items-end'/>
          </div>
        </div>
      </div>
      <div className="w-full m-auto pb-5">
          <div className="max-w-[900px] mx-auto search-box flex items-center justify-between
          bg-sidebar p-5 rounded-full border-[1px] border-accent">
              <input className='text-2xl bg-transparent border-none outline-none' 
              type="text" 
              placeholder='Enter a prompt here'
                />
              <div className='flex gap-2'>
                  <LuImagePlus className='text-3xl cursor-pointer' />
                  <FaMicrophone className='text-3xl cursor-pointer'/>
                  <IoMdSend 
                      className='text-3xl cursor-pointer'
                    />
              </div>
          </div>
      </div>

    </main>
  )
}

export default Main