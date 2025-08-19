"use client"
import { AnimatePresence, motion } from "framer-motion"
import { usePathname } from "next/navigation"
import Stairs from "./Stairs"

const StairTransition = () => {
  const pathname = usePathname();
  return (
    <AnimatePresence mode="wait">
      <div key={pathname}>
        {/* flex-row makes them columns instead of horizontal bars */}
        <div className="h-screen w-screen fixed top-0 left-0 right-0 pointer-events-none z-48 flex flex-row">
          <Stairs />
        </div>
        
        <motion.div
          className="h-screen w-screen fixed bg-primary-color top-8 pointer-events-none"
          initial={{ opacity: 1 }}
          animate={{
            opacity: 0,
            transition: {
              delay: 0.5,
              duration: 0.2,
              ease: "easeInOut"
            }
          }}
        />
      </div>
    </AnimatePresence>
  )
}

export default StairTransition
