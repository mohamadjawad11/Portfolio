"use client";
import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const links = [
  { name: 'home', path: '/' },
  { name: 'services', path: '/services' },
  { name: 'resume', path: '/resume' },
  { name: 'Work', path: '/projects' },
  { name: 'contact', path: '/contact' },
];

const Nav = () => {
  const pathname = usePathname();
  console.log(pathname);
  return (
    <nav className='flex gap-8 m-2'>
      {links.map((link, index) => (
        <Link
          href={link.path}
          key={index}
          className={`${
            link.path === pathname && "text-[#00e187] border-b-2 border-[#00e187]"
          } capitalize font-medium hover:text-[#00e187] transition-all duration-300`}
        >
          {link.name}
        </Link>
      ))}
    </nav>
  );
};

export default Nav;