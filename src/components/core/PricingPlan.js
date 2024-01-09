import React, { useState } from 'react'
import { FaCheckCircle } from 'react-icons/fa'
import { MdCancel } from "react-icons/md";
import TryButton from '../common/TryButton';

function PricingPlan() {
    const [priceBtn, setPriceBtn] = useState("monthly")
    const [premiumPrice, setPremiumPrice] = useState("49.99/mo")

    const plans = [
        {
            name : "Free Plan",
            desc : "For Small teams or office",
            btn: "Start Free Trial",
        },
        {
            name : "Premium Plan",
            desc : "For startup enterprise",
            btn : "Subscribe Now"
        }
    ]
    const data = [
        "Ultimate access to all course, exercises and assessments",
        "Free acess for all kind of exercise corrections with downloads.",
        "Total assessment corrections with free download access system",
        "Unlimited download of courses on the mobile app contents",
        "Download and print courses and exercises in PDF"
    ]
  return (
    <div className=' my-[180px] w-5/6 mx-auto relative flex flex-col justify-center items-center gap-14'>
        <div className=' flex justify-center flex-col items-center gap-2'>
            <p className=' uppercase text-richorange text-xs font-semibold tracking-widest'>Pricing Plan</p>
            <p className=' text-richblack text-2xl font-bold'>Choose your pricing policy</p>
        </div>
        <div className=' bg-[#F7F8FB] w-fit flex gap-2 p-1.5'>
            <div className={`px-4 py-2.5 ${priceBtn === "monthly" ? "bg-white shadow-lg" : " bg-transparent"} rounded-sm cursor-pointer`} onClick={() => {setPriceBtn("monthly"); setPremiumPrice("49.99/mo")}}>
                Monthly Plan
            </div>
            <div className={`px-4 py-2.5 ${priceBtn === "annual" ? "bg-white shadow-lg" : " bg-transparent"} rounded-sm cursor-pointer`} onClick={() => {setPriceBtn("annual"); setPremiumPrice("499.99/yr")}}>
                Annual Plan
            </div>
        </div>
        <div className=' flex gap-14'>
            {
                plans.map((plan,index) => (
                    <div key={index} className={` flex gap-14 flex-col rounded-lg px-8 pt-12 pb-8 ${index === 0 ? "shadow-md " : " border-richgreen border-2 shadow-md"} relative`}>
                        {
                            (index === 1) && <TryButton text={"Recommended"} color=' bg-richorange text-white absolute px-2 rounded-sm text-sm py-1 top-4'/>
                        }
                        <div className=" flex justify-between">
                            <div>
                                <p className=' text-richblack text-lg font-bold'>{plan.name}</p>
                                <p className=' text-richblack text-sm font-normal'>{plan.desc}</p>
                            </div>
                            {
                                (index === 1) && <div>
                                    <p className=' text-richblack text-sm font-normal'>Starting From</p>
                                    <p className=' text-richgreen text-xl font-bold'>{premiumPrice}</p>
                                </div> 
                            }
                        </div>
                        <div className=' flex flex-col gap-4 text-base'>
                            {
                                data.map((val, i) => (
                                    <p key={i} className=' flex gap-4 items-center'>
                                        {
                                            (((index === 0) && (i < 3)) || (index === 1)) &&  
                                            <>
                                                <FaCheckCircle className=" text-lg text-richgreen w-[10%]"/> 
                                                <p className=' text-richgrey-800'>{val}</p>
                                            </>
                                        }        
                                        {
                                            ((index === 0) && (i > 2)) && 
                                            <>
                                                <MdCancel className=" text-lg text-richgrey-800 opacity-60 w-[10%]"/> 
                                                <p className=' text-richgrey-800 opacity-60'>{val}</p> 
                                            </>
                                        }                                
                                    </p>
                                ))
                            }
                        </div>
                        <div className=' flex items-center justify-center'>
                            <TryButton text={plan.btn}/>
                        </div>
                    </div>
                ))
            }
        </div>
    </div>
  )
}

export default PricingPlan