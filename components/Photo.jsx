"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import PortfolioImage from "@/app/assets/PortfolioImage2.png";

const Photo = () => {
  return (
    <div className="relative w-[240px] h-[240px] xl:w-[500px] xl:h-[500px]" >
      {/* Image */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, transition: { delay: 2.4, duration: 0.6 } }}
        className="absolute inset-0 rounded-full overflow-hidden"
      >
        <Image
          src={PortfolioImage}
          alt="Photo"
          priority
          quality={100}
          fill
          className="object-cover"
        />
      </motion.div>

      {/* Circle Effect */}
      <motion.svg
        className="w-full h-full"
        fill="transparent"
        viewBox="0 0 506 506"
        xmlns="http://www.w3.org/2000/svg"
      >
        <motion.circle
          cx="263"
          cy="300"
          r="240"
          stroke="#00ff99"
          strokeWidth="4"
          strokeLinecap="round"
          strokeLinejoin="round"
          initial={{ strokeDasharray: "24 18 0 0" }}
          animate={{
            strokeDasharray: ["15 120 25 25", "16 25 92 72", "4 250 22 22"],
            rotate: [120, 360],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            repeatType: "reverse",
          }}
        />
      </motion.svg>
    </div>
  );
};

export default Photo;
