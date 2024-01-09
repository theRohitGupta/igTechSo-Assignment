import { Accordion, AccordionButton, AccordionIcon, AccordionItem, AccordionPanel } from '@chakra-ui/accordion'
import React from 'react'
import { FaEye, FaPlay } from 'react-icons/fa'
import RatingStars from '../common/RatingStars'
import TryButton from '../common/TryButton'
import { FaCheckCircle } from "react-icons/fa";

function PopularCourses() {
    const randGen = (max) => {return Math.floor((Math.random() * max) + 1)}
    const courses = [
        {
            rating : randGen(5),
            studentsWatched : randGen(5000),
            reviews : randGen(500),
            title : "Professional graphic design tutorial full course with exercise file" ,
            desc : "Get your tutorials delivered at let home collect sample from the victory of the managments.",
            classes : randGen(25),
            hours : randGen(70),
            content : ["Comprehensive course covering professional graphic design techniques.", "Includes hands-on exercises with exercise files for practical learning.", "Focus on industry-standard design software and best practices.", "Suitable for beginners and intermediate designers looking to enhance their" ]
        },
        {
            rating : randGen(5),
            studentsWatched : randGen(5000),
            reviews : randGen(500),
            title : "Become ultimate photoshop expert within 30 days" ,
            desc : "Comprehensive course covering professional graphic design techniques from the victory.",
            classes : randGen(25),
            hours : randGen(70),
            content : ["How to reduce file pixel dimentions without loosing quality", "How to make logo pixel perfects with different extension", "Create vector file from restarize layer styles", "Make color gradient with photoshop build-in tools" ]
        },
        {
            rating : randGen(5),
            studentsWatched : randGen(5000),
            reviews : randGen(500),
            title : "After effects animation tutorial with photoshop documents" ,
            desc : "Includes hands-on exercises with exercise files for practical learning software and best practices.",
            classes : randGen(25),
            hours : randGen(70),
            content : ["In-depth tutorial on creating animations using Adobe After Effects.", "Integration with Photoshop documents for seamless design workflow.", "Emphasis on dynamic and engaging motion graphics.", "Practical examples and real-world projects for effective learning."]
        },
        {
            rating : randGen(5),
            studentsWatched : randGen(5000),
            reviews : randGen(500),
            title : "Adobe illustrator vector art design mockup" ,
            desc : "In-depth tutorial on Integration with Photoshop documents for seamless design workflow.",
            classes : randGen(25),
            hours : randGen(70),
            content : ["Tutorial showcasing vector art design using Adobe Illustrator.", "Creation of realistic mockups for presentations and projects.", "Step-by-step guidance on vector art principles and techniques.", "Practical application of design mockups for various industries."]
        },
    ]
  return (
    <div className=' mt-[120px] w-5/6 mx-auto'>
        <div className=' flex justify-center flex-col items-center mb-[80px] gap-2'>
            <p className=' uppercase text-richorange text-xs font-semibold tracking-widest'>Quality Features</p>
            <p className=' text-richblack text-2xl font-bold'>Popular Designing Course</p>
        </div>
        <div className=' mb-[180px] flex flex-col gap-4 '>
        {
            courses.map((val, i) => (
                <Accordion allowToggle key={i}>
                    <AccordionItem className='p-4 shadow-sm flex flex-col gap-4 rounded-lg'>
                        <AccordionButton>
                            <div className=' flex w-full items-center gap-4'>
                                <div>
                                    <div className=' text-richorange aspect-square bg-lightorange bg-opacity-50 rounded-full p-4'>
                                        <FaPlay className=' text-2xl'/>
                                    </div>
                                </div>
                                <div className='w-[70%] flex flex-col gap-2'>
                                    <div className=' flex gap-4 font-normal text-xs items-center text-richgrey-800'>
                                        <div className=' flex gap-2'>
                                            <RatingStars Review_Count={val.rating} Star_Color={" text-richyellow"}/>
                                            <p>{val.rating}.0</p>
                                            <p>({val.reviews} reviews)</p>
                                        </div>
                                        <div className=' flex text-richgrey-900 items-center gap-1 text-sm'><FaEye/><p>{Intl.NumberFormat("en-US").format(val.studentsWatched)} students watched</p></div>
                                    </div>
                                    <p className=' font-bold text-base text-left'>{val.title}</p>
                                    <p className=' font-normal text-xs text-left'>{val.desc}</p>
                                </div>
                                <div className=' w-[25%] flex items-center gap-2'>
                                    <TryButton text={`${val.classes} Video Classes | ${val.hours} hrs`} color=' bg-richgreen text-white text-xs font-semibold w-[80%]'/>
                                    <AccordionIcon  className={"w-[20%]"}/>
                                </div>
                            </div>
                        </AccordionButton>
                        <AccordionPanel pb={4}>
                            <div className=' grid grid-cols-2 gap-3 justify-between items-center w-5/6 mx-auto'>
                            {
                                val.content.map((item, i) => (
                                    <p key={i} className=' flex gap-2 items-center text-xs'><FaCheckCircle className=' text-richgrey-900 text-base'/> <p className=' line-clamp-1 text-richgrey-800'>{item}</p></p>
                                ))
                            }
                            </div>
                        </AccordionPanel>
                    </AccordionItem>
                </Accordion>
            ))
        }
        </div>
    </div>
  )
}

export default PopularCourses