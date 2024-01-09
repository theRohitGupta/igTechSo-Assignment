import React from 'react'
import TryButton from '../common/TryButton'
import { FaArrowDownLong } from "react-icons/fa6";

function CoreFeatures() {
    const features = [
        {
            title : <p className=' text-richorange'>80k+</p>,
            desc : "We have more than students"
        },
        {
            title : <p className=' text-[#FF753A]'>150+</p>,
            desc : "Free online tutorials videos available"
        },
        {
            title : <p className=' text-[#FA578E]'>90+</p>,
            desc : "Daily updated blog post maintain"
        },
        {
            title : <p className=' text-[#E682FF]'>& 3M</p>,
            desc : "Job posted everydays with qualification"
        },
    ]
  return (
    <div className=' my-[140px] flex w-5/6 gap-8 mx-auto relative'>
        <div className=' w-[50%] relative'>
            <div className=' grid grid-cols-2 gap-8'>
                {
                    features.map((card, i) => (
                        <div key={i} className={`aspect-square shadow-lg rounded-md flex justify-center items-center flex-col gap-2 transition-all duration-200 z-10 ${i === 1 || i === 3 ? "-translate-y-6 hover:-translate-y-10" : "hover:-translate-y-4"}`}>
                            <div className=' text-4xl font-extrabold'>{card.title}</div>
                            <p className=' text-center w-3/4 mx-auto text-xs text-richgrey-900'>{card.desc}</p>
                        </div>
                    ))
                }
            </div>
            <button className=' absolute right-0'  onClick={() => window.scrollTo({ top: 2000, behavior: "smooth" })}><FaArrowDownLong className=' text-richgrey-900 text-2xl'/></button>
        </div>
        <div className=' flex justify-center flex-col mb-[32px] gap-4 w-[50%] pl-8'>
            <p className=' uppercase text-richorange text-xs font-semibold tracking-widest'>Quality Features</p>
            <p className=' text-richblack text-3xl font-bold'>Smart Jackpots that you may love this anytime & anywhere</p>
            <p className=' text-sm font-semibold leading-10' >Get your tests delivered at let home collect sample from the victory of the managments that supplies best design system guidelines ever. Get your tests delivered at let home collect sample.</p>
            <TryButton text={"Explore demo"}/>
        </div>
    </div>
  )
}

export default CoreFeatures