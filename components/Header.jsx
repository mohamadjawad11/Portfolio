import React from 'react'
import Link from 'next/link'
import { Button } from './ui/button'
import Nav from './Nav'

const Header = () => {
  return (
    <header className='py-8 xl:py-12 text-white'>
    <div className='container mx-auto'>
        <Link href="/">
            <h1 className='text-4xl font-semibold'>
                Mohammad <span className="text-accent-deafult">.</span>
            </h1>
        </Link>
        <div className='hidden xl:flex'>
            <Nav/>
            <Link>
                
            </Link>
        </div>
        
    </div>
    </header>
  )
}

export default Header