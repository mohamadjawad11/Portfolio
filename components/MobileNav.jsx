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
      {/* The trigger button will always be the menu icon */}
      <SheetTrigger className="flex justify-center items-center p-2 z-50 cursor-pointer xl:hidden">
        <CiMenuFries className="text-[32px] text-accent-default" />
      </SheetTrigger>

      {/* Sheet content will handle its own closing 'x' icon */}
      <SheetContent side="right" className="p-6 w-full md:w-96 bg-[#0d0d0f] text-white flex flex-col gap-6 relative">
        {/* Accessible title */}
        <SheetTitle>
          <VisuallyHidden>Mobile navigation menu</VisuallyHidden>
        </SheetTitle>

        {/* Branding (optional, depends on your design) */}
        <div className="text-4xl font-bold text-accent flex items-center justify-center gap-2 mb-6">
          Mohammad<span className="text-[#00e187]">.</span>
        </div>

        {/* Navigation links */}
        <nav className="flex flex-col gap-4 mt-2">
          <AnimatePresence>
            {links.map((link, index) => (
              <motion.div
                key={link.path}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                transition={{ delay: 0.05 * index, duration: 0.3, ease: 'easeInOut' }}
              >
                <Link
                  href={link.path}
                  onClick={() => setOpen(false)}
                  className={`capitalize block px-3 py-2 rounded-lg transition-all duration-300 font-medium text-lg
                    ${
                      pathname === link.path
                        ? 'bg-white text-[#1c1c22] font-bold shadow-lg'
                        : 'hover:bg-white/10 hover:translate-x-2 hover:scale-105'
                    }`}
                >
                  {link.name}
                </Link>
              </motion.div>
            ))}
          </AnimatePresence>
        </nav>

        {/* Optional footer or contact button */}
        <motion.div
          className="mt-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          <Link
            href="/contact"
            onClick={() => setOpen(false)}
            className="block w-full text-center py-2 bg-primary-color text-[#0d0d0f] font-bold rounded-lg shadow-md hover:bg-accent/80 transition-colors duration-300"
          >
            Hire me
          </Link>
        </motion.div>
      </SheetContent>
    </Sheet>
  );
};

export default MobileNav;