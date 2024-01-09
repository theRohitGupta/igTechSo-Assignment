import React, { useEffect, useState } from 'react'
import { FaStar } from "react-icons/fa";

function RatingStars({Review_Count, Star_Color}) {
    const [starCount, setStarCount] = useState({
        full : 0,
        empty : 0,
    })

    useEffect(() => {
        const wholeStars = Math.floor(Review_Count) || 2
        setStarCount({
            full : wholeStars,
            empty : Number.isInteger(Review_Count) ? 5 - wholeStars : 4 - wholeStars
        })
    }, [Review_Count])

  return (
    <div className=' flex gap-1 text-richyellow items-center'>
        {[...new Array(starCount.full)].map((_,i) => {
            return <FaStar key={i} size={16} className={`${Star_Color}`}/>
        })}
        {[...new Array(starCount.empty)].map((_,i) => {
            return <FaStar key={i} size={16} className={`${Star_Color} opacity-20`}/>
        })}
    </div>
  )
}

export default RatingStars