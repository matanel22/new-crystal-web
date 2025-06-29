'use client'
import  React,{ useState } from 'react'
import Image from 'next/image'

import PopupUser from './PopupUser';
export default function Logo() {
  
  const [popup, setpopup] = useState(false);
  const toggle = () => {
    setpopup(!popup);
  };
  return (<>
    <Image onClick={toggle}
    src="/logo.svg"
    width={220}
    height={50}
    alt="crystal logo"
  />
  {popup && <PopupUser toggle={toggle} />}
  </>
  )
}
