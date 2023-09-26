import React from 'react'
import { BiSolidUpArrow } from 'react-icons/bi'



export default function Footer() {
  return (
    <footer className='px-8 md:px-48 w-full relative flex flex-col items-center justify-center py-8'>
      <h2 className='font-bold mb-2'>Victor Ojedeji</h2>
      <ul className='flex items-center gap-8 capitalize'>
        <li>Home</li>
        <li>About</li>
        <li>Portfolio</li>
      </ul>

      <BiSolidUpArrow className='absolute bottom-8 right-48'/>
    </footer>
  )
}
