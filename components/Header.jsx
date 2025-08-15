import React from "react";
import Link from "next/link";
import { Button } from "./ui/button";
import Nav from "./Nav";

const Header = () => {
  return (
    <header className="py-4 xl:py-6 text-white bg-primary-color ">
      <div className="container mx-auto flex items-center justify-between px-4 sm:px-6 lg:px-8">
        
        {/* Logo / Brand */}
        <Link href="/" className="flex items-center group">
          <h1 className="text-3xl sm:text-4xl font-bold tracking-tight transition-colors duration-300 group-hover:text-accent">
            Mohammad <span className="text-[#00e187]">.</span>
          </h1>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden xl:flex items-center gap-8">
          <Nav />
          <Link href="/contact">
            <Button className="transition-transform duration-300 hover:scale-105">
              Hire me
            </Button>
          </Link>
        </nav>

        {/* Mobile Menu Button */}
        <div className="xl:hidden">
          
        </div>
      </div>
    </header>
  );
};

export default Header;
