import React from 'react'
import { FaEye, FaPlay } from 'react-icons/fa'
import RatingStars from './RatingStars'

function ReviewCard({review}) {
  return (
    <div className=' relative shadow-lg rounded-md my-5'>
        <div className=' relative'>
            <div className=' absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%] text-white aspect-square bg-white bg-opacity-50 rounded-full p-5'>
                <FaPlay className=' text-3xl'/>
            </div>
            <img src={review.reviewImage} alt={review.reviewTitle.split(" ").slice(1)} className=' aspect-video object-cover' />
        </div>
        <div className=' w-[90%] mx-auto py-5 flex gap-3 flex-col'>
            <div className=' flex gap-2 font-normal text-sm items-center text-richgrey-800'>
                <RatingStars Review_Count={review.rating} Star_Color={" text-richyellow"}/>
                <p>{review.rating}.0</p>
                <p>({Math.floor(Math.random() * (review.studentsWatched))} reviews)</p>
            </div>
            <p className=' font-bold text-base'>{review.reviewTitle}</p>
            <div className=' flex text-richgrey-900 items-center gap-2 text-sm'><FaEye/><p>{Intl.NumberFormat("en-US").format(review.studentsWatched)} students watched</p></div>
        </div>
    </div>
  )
}

export default ReviewCard