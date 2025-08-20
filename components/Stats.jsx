"use client";
import CountUp from "react-countup";

const stats = [
  { num: 4, text: "Years of Experience" },
  { num: 12, text: "Projects Completed" },
  { num: 10, text: "Technologies Mastered" },
  { num: 400, text: "Code commits" },
];

const Stats = () => {
  return (
    <section className="pt-4 pb-12 xl:pt-0 xl:pb-0">
      <div className="container mx-auto">
        {/* Parent flex: column on mobile, row on xl */}
        <div className="flex flex-col gap-6 xl:flex-row xl:gap-12 max-w-[80vw] mx-auto xl:max-w-none">
          {stats.map((stat, index) => (
            // Each stat: number and text side by side
            <div
              className="flex flex-row items-center gap-4"
              key={index}
            >
              <CountUp
                end={stat.num}
                duration={5}
                delay={0}
                className="text-4xl xl:text-6xl font-extrabold"
              />
              <p className="text-white/80">{stat.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
