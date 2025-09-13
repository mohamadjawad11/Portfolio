"use client";
import CountUp from "react-countup";

const stats = [
  { num: 3, text: "Years of Experience" },
  { num: 8, text: "Projects Completed" },
  { num: 10, text: "Technologies Mastered" },
  { num: 400, text: "Code commits" },
];

const Stats = () => {
  return (
    <section className="pt-4 pb-12 xl:pt-0 xl:pb-0 mr-10 xl:mr-0">
      <div className="container mx-auto">
        {/* Use grid: 2 columns on small, 4 columns on xl */}
        <div className="grid grid-cols-2 gap-6 xl:grid-cols-4 xl:gap-12 max-w-[80vw] mx-auto xl:max-w-none">
          {stats.map((stat, index) => (
            <div
              className="flex flex-col items-center gap-2 text-center"
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
