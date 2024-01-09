import React from 'react'
import {Swiper, SwiperSlide} from 'swiper/react'
import { FreeMode } from 'swiper/modules'
import "swiper/css"
import "swiper/css/free-mode"
import ReviewCard from '../common/ReviewCard'

function QualityFeatures({reviews}) {
  return (
    <div className=' mt-[180px]'>
        <div className=' flex justify-center flex-col items-center mb-[32px] gap-2'>
            <p className=' uppercase text-richorange text-xs font-semibold tracking-widest'>Quality Features</p>
            <p className=' text-richblack text-2xl font-bold'>Tutorials that people love most</p>
        </div>
        {
            reviews.length ? (
                <div>
                    <Swiper slidesPerView={3} loop={true} spaceBetween={32} modules={[FreeMode]} className='mySwiper'>
                        {
                            reviews.map((review) => (
                                <SwiperSlide key={review._id}>
                                    <ReviewCard review={review}/>
                                </SwiperSlide>
                            ))
                        }
                    </Swiper>
                </div>
            ) : (<></>)
        }

    </div>
  )
}

export default QualityFeatures