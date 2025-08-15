import React from 'react';
import Link from 'next/link';
import { Button } from './ui/button';
import Nav from './Nav';

const Header = () => {
  return (
    <header className='py-4 xl:py-6 text-white'>
      <div className='container mx-auto flex items-center justify-between'>
        <Link href="/">
          <h1 className='text-4xl font-semibold ml-19 '>
            Mohammad <span className="text-[#00e187]">.</span>
          </h1>
        </Link>
        {/* Desktop nav */}
        <div className='hidden xl:flex items-center gap-8'>
          <Nav />
          <Link href='/contact'>
            <Button>Hire me</Button>
          </Link>
        </div>
        {/* Mobile nav */}
        <div className='xl:hidden'>mobile</div>
      </div>
    </header>
  );
};

export default Header;