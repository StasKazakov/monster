'use client'
import { MdMenu, MdOutlineSettings } from "react-icons/md";
import { FaPlus } from "react-icons/fa6";
import { LuMessageSquareText, LuHistory, LuMessageCircleQuestion } from "react-icons/lu";
import { useState } from "react";
import Settings from "../Settings/Settings.jsx";

const Sidebar = () => {

    const [extended, setExtended] = useState(false)
    const [settings, setSettings] = useState(false)

  return (
    <div className={`min-h-[100vh] flex flex-col justify-between bg-sidebar 
    px-6 py-10 transition-all duration-300 ease-in-out ${extended ? 'w-60' : 'w-25'}`}
    onMouseEnter={() => setExtended(true)}>
        <div>
            <MdMenu
            onClick={() => setExtended(prev=>!prev)} 
            className='text-2xl block ml-4 cursor-pointer'/>
            
            <div className="new-chat flex items-center gap-2.5 rounded-full cursor-pointer 
            px-4 py-4 my-4 bg-accent w-fit">
                <FaPlus className='text-2xl flex-shrink-0'/>
                {extended ? <p className="whitespace-nowrap">New Chat</p> : null }
            </div>
            {extended ? <div className="recent flex flex-col">
                <p className="recent-title mt-7 mb-5">Recent</p>
                <div className="recent-entry flex items-center gap-2.5 
                p-2.5 pr-10 rounded-full cursor-pointer bg-accent
                hover:bg-accent/80 w-fit">
                    <LuMessageSquareText className='text-2xl flex-shrink-0'/>
                    <p className="whitespace-nowrap">What is react ...</p>
                </div>
            </div> : null}
            
        </div>
        <div className='bottom flex flex-col'>
            <div className="bottom-item recent-entry flex mb-1 cursor-pointer 
            rounded-full p-2 pl-4 hover:bg-accent">
                <LuMessageCircleQuestion className='text-2xl mr-1 flex-shrink-0'/>
                {extended ? <p>Help</p> : null }
            </div>
            <div className="bottom-item recent-entry flex mb-1 cursor-pointer
            rounded-full p-2 pl-4 hover:bg-accent">
                <LuHistory className='text-2xl mr-1 flex-shrink-0'/>
                {extended ? <p>Activity</p> : null }
            </div>
            <div className="relative">
                <div className="bottom-item recent-entry flex cursor-pointer 
                rounded-full p-2 pl-4 hover:bg-accent h-min-20"
                onClick={() => setSettings(prev=>!prev)}>
                    <MdOutlineSettings className='text-2xl mr-1 flex-shrink-0'/>
                    {extended ? <p>Settings</p> : null }
                </div>
                {settings ?
                <div className="absolute left-full top-[-100] ml-2 w-52 shadow-lg rounded-xl py-4 bg-background-2">
                    <Settings />
                </div> : null}
            </div>
        </div>
    </div>
  )
}

export default Sidebar