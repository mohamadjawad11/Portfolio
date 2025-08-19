"use client";

import { Sheet, SheetContent, SheetTrigger, SheetTitle } from '@/components/ui/sheet';
import { VisuallyHidden } from '@radix-ui/react-visually-hidden';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { CiMenuFries } from 'react-icons/ci';
import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';

const links = [
  { name: 'home', path: '/' },
  { name: 'services', path: '/services' },
  { name: 'resume', path: '/resume' },
  { name: 'projects', path: '/projects' },
  { name: 'contact', path: '/contact' },
];

const MobileNav = () => {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <button className="p-3 rounded-md bg-[#232329] text-[#00ff99] cursor-pointer">
          <CiMenuFries size={28} />
          <VisuallyHidden>Open menu</VisuallyHidden>
        </button>
      </SheetTrigger>

      <AnimatePresence>
        {open && (
         <SheetContent className="bg-[#232329] text-white w-full max-w-xs p-6 flex flex-col">
  <motion.div
    initial={{ x: '-100%' }}
    animate={{ x: 0 }}
    exit={{ x: '-100%' }}
    transition={{ type: 'spring', stiffness: 300, damping: 30 }}
    className="flex flex-col space-y-6"
  >
    <SheetTitle className="text-2xl font-bold text-[#9AF8D2FF] pb-7">
      Mohammad<span className="text-[#00ff99]">.</span>
    </SheetTitle>

    {links.map((link) => (
      <Link
        key={link.name}
        href={link.path}
        onClick={() => setOpen(false)}
        className={`text-lg capitalize transition-colors duration-200 ${
          pathname === link.path ? 'text-[#00ff99]' : 'text-white hover:text-[#00ff99]'
        }`}
      >
        {link.name}
      </Link>
    ))}
  </motion.div>
</SheetContent>

        )}
      </AnimatePresence>
    </Sheet>
  );
};

export default MobileNav;
