import { Accordion, AccordionButton, AccordionItem, AccordionPanel } from '@chakra-ui/accordion'
import React, { useState } from 'react'
import { FaCirclePlus, FaCircleMinus } from "react-icons/fa6";

function FrequentQuestion() {
    const [openAccordionIndex, setOpenAccordionIndex] = useState(null);

    const handleAccordionToggle = (index) => {
      setOpenAccordionIndex((prevIndex) => (prevIndex === index ? null : index));
    };
  
    const isAccordionOpen = (index) => openAccordionIndex === index;

    const data = [
        {
            title: "How to contact with riders emergency ?",
            desc: "In a rider emergency, first, dial your country's emergency services number, like 911 in the United States, for immediate assistance. Simultaneously, check your ride-sharing app for an in-app emergency feature, providing a direct link to emergency services. Utilize the app's messaging or calling feature to contact the driver urgently. As an additional safety measure, share your live location and trip details with a trusted friend or family member through the app."
        },
        {
            title: "App installation failed, how to update system information?",
            desc: "If app installation fails, follow these steps: First, confirm your device meets the app's requirements, checking compatibility with your operating system. Next, update your operating system to the latest version. If the issue persists, clear the app cache or data in your device settings, and attempt the installation again. Should the problem persist, contact the app's support team, providing details about your device, operating system, and the encountered error for personalized assistance."
        },
        {
            title: "Website reponse taking time, how to improve?",
            desc: "An FAQ is a list of frequently asked questions (FAQs) and answers on a particular topic (also known as Questions and Answers [Q&A] or Frequently Asked Questions). The format is often used in articles, websites, email lists, and online forums where common questions tend to recur, for example through posts or queries by new users related to common knowledge gaps. The purpose of an FAQ is generally provide information."
        },
        {
            title: "New update fixed all bug and issues",
            desc: "Great news! The latest update addresses and resolves all bugs and issues, ensuring a smoother and more reliable experience with the app. Update your application to access these improvements and enjoy enhanced functionality."
        },
    ]
  return (
    <div className=' mt-[120px] w-5/6 mx-auto relative flex flex-col gap-10'>
        <div className=' flex justify-center flex-col items-center mb-[32px] gap-2'>
            <p className=' uppercase text-richorange text-xs font-semibold tracking-widest'>Frequent Question</p>
            <p className=' text-richblack text-2xl font-bold'>Do you have any question</p>
        </div>
        <div>
            {
                data.map((q,i) => (
                    <Accordion allowToggle key={i}>
                        <AccordionItem className='p-4 shadow-sm flex flex-col gap-4 rounded-lg'>
                        <AccordionButton className=' gap-4' onClick={() => handleAccordionToggle(i)}>
                            {isAccordionOpen(i) ? (
                            <FaCircleMinus className=' text-richgreen' />
                            ) : (
                            <FaCirclePlus className=' text-richgreen' />
                            )}
                            <p className=' font-bold'>{q.title}</p>
                        </AccordionButton>
                        <AccordionPanel pb={4}>
                            <p>{q.desc}</p>
                        </AccordionPanel>
                        </AccordionItem>
                    </Accordion>
                ))
            }
        </div>
    </div>
  )
}

export default FrequentQuestion