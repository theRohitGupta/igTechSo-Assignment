import React from 'react'
import TryButton from '../common/TryButton'
import ReviewCard from '../common/ReviewCard'
import {Swiper, SwiperSlide} from 'swiper/react'
import { EffectCards, Navigation } from 'swiper/modules'
import "swiper/css"
import 'swiper/css/effect-cards';
import 'swiper/css/navigation';
import { FaCheckCircle } from 'react-icons/fa'
import world from "../../assets/world.png"

function FreeTutorial({reviews}) {
  return (
    <div className=' my-[140px] flex gap-32 mx-auto relative'>
        <div className=' absolute -z-50 top-[10%] -left-[12%] w-[700px] h-[600px] aspect-video object-cover'><img src={world} alt="world"/></div>
        <div className=' w-[40%] my-4 p-2 relative'>
            <Swiper effect={'cards'} grabCursor={true} navigation={true} modules={[EffectCards, Navigation]} className='mySwiper shadow-md'>
                {
                    reviews.map((review) => (
                        <SwiperSlide key={review._id} className=' bg-white'>
                            <ReviewCard review={review}/>
                        </SwiperSlide>
                    ))
                }
            </Swiper>
            <div className=' absolute bottom-[35%] -right-[10%] z-50'><TryButton text={"Free Tutorial"} color=' bg-richgreen text-white px-4 py-2 text-sm'><FaCheckCircle/></TryButton></div>
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