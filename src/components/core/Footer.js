import React from 'react'

function Footer() {
    const data = [
        {
            title : "About Us",
            links : ["Support Center", "Customer Support", "About Us", "Copyright", "Popular Campaign"]
        },
        {
            title : "Our Information",
            links : ["Return Policy", "Privacy Policy", "Terms & Conditions", "Site Map", "Store Hours"]
        },
        {
            title : "My Account",
            links : ["Press inquiries", "Social media", "directories", "Images & B-roll", "Permissions"]
        },
        {
            title : "Policy",
            links : ["Application security", "Software principles", "Unwanted software policy", "Responsible supply chain"]
        },
    ]
  return (
    <div className=' my-[50px] w-3/4 mx-auto flex justify-between items-start'>
        {
            data.map((val,i) => (
                <div className=' flex flex-col items-start gap-4'>
                    <p className=' font-semibold'>{val.title}</p>
                    <div className=' flex flex-col gap-2 items-start text-sm'>
                    {
                        val.links.map((item,i) => (
                            <button key={i}>{item}</button>
                        ))
                    }
                    </div>
                </div>
            ))
        }
    </div>
  )
}

export default Footer