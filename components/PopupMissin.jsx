import Image from 'next/image'
import React from 'react'
import But from './Btn'

export default function PopupMissin() {
  return (
    <div className='w-96 flex flex-col pb-2 absolute top-0 left-0 bg-white border-r-[1px] border-blue_color h-full p-2 z-40'>
    <div className='w-full '>
        <Image
          src={"/x.svg"}
          width={15}
          height={15}/>
        </div>
         <div className='w-full flex border-b-2 pb-2 flex-col items-center justify-between h-[20%]'>
        
         <div className='' >
          <Image
          src={"/logo.svg"}
          width={220}
          height={54}/>
        </div>
        <div>
          <div>
        <div className='flex text-3xl font-semibold justify-center items-center'>
          משימות 
        </div>
        <div className='flex text-xl leading-9  justify-center items-center'>
         {"ישראל"} | { 12345}  
        </div>
        </div> 
        </div>
</div>
<div className='flex justify-center items-center'>
hhhh
        </div> 
        <div className=' h-4/5 flex justify-center items-center'>
        <Image src="addEvent.svg" width={200}height={200}/>
        </div>
        
        <div className='flex justify-center items-center'>
          <But
          text={"הוסף משימה"}/>
        </div>
    
    </div>
  )
}
