import React from 'react'

function FunctionWorks() {
    const info = [
        {
            number : 1,
            title : "Set disbursement Instructions",
            desc : "Get your blood tests delivered at home collect a sample from the your blood tests."
        },
        {
            number : 2,
            title : "Assembly retrieves funds from your account",
            desc : "Get your blood tests delivered at home collect a sample from the your blood tests."
        },
        {
            number : 3,
            title : "Assembly initiates disbursement",
            desc : "Get your blood tests delivered at home collect a sample from the your blood tests."
        },
        {
            number : 4,
            title : "Customer recieves funds payment",
            desc : "Get your blood tests delivered at home collect a sample from the your blood tests."
        }
    ]
  return (
    <div className=' my-[120px] w-5/6 mx-auto relative'>
        <div className=' functionworks_bg w-full h-[100%] -z-50 scale-x-[200] scale-y-[1.5] absolute'></div>
        <div className=' flex justify-center flex-col items-center mb-[32px] gap-2'>
            <p className=' uppercase text-richorange text-xs font-semibold tracking-widest'>Whats the function</p>
            <p className=' text-richblack text-2xl font-bold'>Let's see how it works</p>
        </div>
        <div className=' flex justify-between gap-8 mt-[50px]'>
            {
                info.map((val) => (
                    <div key={val.number} className=' flex flex-col gap-3'>
                        <div className=' flex relative'>
                            <div className=' text-richblack bg-white bg-opacity-50 p-3 font-bold text-xl aspect-square shadow-md rounded-full grid place-content-center'>
                                <p className='p-1 aspect-square'>0{val.number}</p>
                            </div>
                            { (val.number % 2 !== 0) && <svg xmlns="http://www.w3.org/2000/svg"  height="43" viewBox="0 0 204 43" fill="none" className=' absolute w-[70%] -right-4 bottom-3'>
                                <path d="M1 32.7207C1 32.7207 93.3 -38.8069 196 32.7207" stroke="#C2CBDE" stroke-width="1.5" stroke-dasharray="5 5"/>
                                <path d="M181.219 39.4988C181.219 39.4988 200.334 45.0252 202.156 38.7642C203.978 32.5031 202.611 26.0287 196.694 17.1587" stroke="#C2CBDE" stroke-width="1.5" stroke-dasharray="4 4"/>
                                </svg>
                            }
                            {(val.number === 2) && <svg xmlns="http://www.w3.org/2000/svg" height="43" viewBox="0 0 204 43" fill="none" className=' absolute w-[70%] -right-4 -bottom-2'>
                                <path d="M0.481445 10.2583C0.481445 10.2583 92.7814 81.7859 195.481 10.2583" stroke="#C2CBDE" stroke-width="1.5" stroke-dasharray="5 5"/>
                                <path d="M180.7 3.47577C180.7 3.47577 199.816 -2.05055 201.638 4.21038C203.46 10.4713 202.093 16.9456 196.176 25.8154" stroke="#C2CBDE" stroke-width="1.5" stroke-dasharray="4 4"/>
                                </svg>
                            }
                        </div>
                        <p className=' font-bold text-base text-left'>{val.title}</p>
                        <p className=' font-normal text-xs text-left'>{val.desc}</p>
                    </div>

                ))
            }
        </div>
    </div>
  )
}

export default FunctionWorks