import React from 'react'
import TryButton from '../common/TryButton'

function ReadyToLearn() {
  return (
    <div className=' py-[120px] w-3/4 mx-auto border-b-[0.5px] border-richgrey-900 border-opacity-20 '>
        <div className='flex justify-center items-center flex-col gap-10'>
            <p className=' text-4xl font-bold w-[50%] text-center leading-[65px]'>Ready to learn design with Nia Matos</p>
            <TryButton text={"Start Learning Today"}/>
        </div>
    </div>
  )
}

export default ReadyToLearn