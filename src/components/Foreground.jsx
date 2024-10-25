import React, {useRef,useState} from 'react'
import { LuFileSignature } from "react-icons/lu";
import Card from './Card'
import { motion } from "framer-motion"




function Foreground() {
    const ref = useRef(null);
    const data = [
        {
         desc: 'This is the description of the file 1',
         size: "0.9mb", 
         close: true,
         tag: {isOpen: true, tagTitle: 'Download Now', tagColor: 'blue'},
        },
        {
         desc: 'This is the description of the file 2',
         size: "0.9mb", 
         close: false,
         tag: {isOpen: true, tagTitle: 'Download Now', tagColor: 'green'},
        },
        {
         desc: 'This is the description of the file 3',
         size: "0.9mb", 
         close: true,
         tag: {isOpen: true, tagTitle: 'Download Now', tagColor: 'blue'},
        },
    ]
  return (

    <div ref={ref} className='fixed top-0 left-0 z-[3] w-full h-full flex gap-x-48 items-center justify-center p-5'>
      {data.map((item,index)=> (
        <Card data={item} reference={ref}/>
      ))}
    </div>
  )
}

export default Foreground
