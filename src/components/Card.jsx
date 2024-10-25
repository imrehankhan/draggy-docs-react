import React from 'react'
import { LuFileSignature } from "react-icons/lu";
import { LuDownload } from "react-icons/lu";
import { IoCloseOutline } from "react-icons/io5";
import { motion } from "framer-motion"



function Card({data,reference}) {
  return (
    <>
    <motion.div drag dragConstraints={reference} whileDrag={{scale:1.2}} dragTransition={{ bounceStiffness: 600, bounceDamping: 10 }} className='relative flex-shrink-0 h-64 w-56 bg-zinc-900 rounded-[40px] text-white p-5 overflow-hidden'>
      <LuFileSignature />
      <p className='text-sm mt-5'>{data.desc}</p>
      <footer className={`footer absolute bottom-0 ${data.tag.tagColor === "green" ? "bg-green-600" : "bg-blue-600"} w-full h-16 left-0 px-6 py-6 text-black flex justify-between items-center`}>
        <h5 className='text-sm'>{data.size}</h5>
        <span className={`w-6 h-6 bg-zinc-200 rounded-full flex items-center justify-center`}>
        {data.close ? <IoCloseOutline/> : <LuDownload size="0.8em"/>}
        </span>

      </footer>

      </motion.div>
      </>
  )
}

export default Card
