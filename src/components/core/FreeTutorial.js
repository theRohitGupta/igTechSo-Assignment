import React from 'react'
import TryButton from '../common/TryButton'
import ReviewCard from '../common/ReviewCard'
import {Swiper, SwiperSlide} from 'swiper/react'
import { EffectCards, Navigation } from 'swiper/modules'
import "swiper/css"
import 'swiper/css/effect-cards';
import 'swiper/css/navigation';

function FreeTutorial({reviews}) {
  return (
    <div className=' my-[140px] flex w-5/6 gap-14 mx-auto relative'>
        {/* <div className=' absolute corefeatures_bg w-full h-[500px] -left-[80%] rounded-[150px]'></div> */}
        <div className=' w-[50%] my-4'>
            <Swiper effect={'cards'} grabCursor={true} navigation={true} modules={[EffectCards, Navigation]} className='mySwiper'>
                {
                    reviews.map((review) => (
                        <SwiperSlide key={review._id} className=' bg-white'>
                            <ReviewCard review={review}/>
                        </SwiperSlide>
                    ))
                }
            </Swiper>
        </div>
        <div className=' flex justify-center flex-col mb-[32px] gap-4 w-[50%] pl-8'>
            <p className=' uppercase text-richorange text-xs font-semibold tracking-widest'>Free Tutorial</p>
            <p className=' text-richblack text-3xl font-bold'>More than thousand of free tutorial upload every weeks</p>
            <p className=' text-sm font-semibold leading-10' >Get your tests delivered at let home collect sample from the victory of the managments that supplies best design system guidelines ever. Get your tests delivered at let home collect sample.</p>
            <TryButton text={"Explore details"}/>
        </div>
    </div>
  )
}

export default FreeTutorial