import Link from "next/link";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const socials = [
  { name: "Github", icon: FaGithub, link: "https://github.com/mohamadjawad11" },
  { name: "Linkedin", icon: FaLinkedin, link: "https://www.linkedin.com/in/mohamad-jawad-71babb283" },
];

const Social = ({ containerStyles, iconStyles }) => {
  return (
    <div className={containerStyles}>
      {socials.map((item, index) => (
        <Link key={index} href={item.link} className={iconStyles}>
          <item.icon />
        </Link>
      ))}
    </div>
  );
};

export default Social;