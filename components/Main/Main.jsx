'use client'
import { useTheme } from '../../context/ThemeContext.jsx'
import Image from 'next/image'

const Main = () => {
  const { theme, resetSidebar } = useTheme();
  return (
    <main 
    className='flex-1 min-h-screen'
    onClick={resetSidebar}
    >
      <div className='flex justify-between px-10 py-5 items-center'>
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
    </main>
  )
}

export default Main