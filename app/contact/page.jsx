"use client";

import { useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import emailjs from "emailjs-com";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import { SelectGroup } from "@radix-ui/react-select";
import { motion } from "framer-motion";

const info = [
  {
    icon: <FaPhoneAlt />,
    title: "Phone",
    description: "+961 78 958 764",
  },
  {
    icon: <FaEnvelope />,
    title: "Email",
    description: "hamdanjawad789@gmail.com",
  },
  {
    icon: <FaMapMarkerAlt />,
    title: "Address",
    description: "Lebanon,Beirut,Ghobeiry",
  },
];

const Contact = () => {
  const formRef = useRef();
  const [purpose, setPurpose] = useState(""); // State to track Select value

  const sendEmail = (e) => {
    e.preventDefault();

   emailjs.sendForm(
  process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
  process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
  formRef.current,
  process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
).then(
        (result) => {
          console.log("Message sent ✅", result.text);
          alert("Message sent successfully!");
          formRef.current.reset();
          setPurpose(""); // reset select
        },
        (error) => {
          console.log("Error ❌", error.text);
          alert("Failed to send message. Please try again.");
        }
      );
  };

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { delay: 2.4, duration: 0.4, ease: "easeIn" } }}
      className="py-10 px-4 flex justify-center items-center"
    >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row gap-10">
          {/* Contact Form */}
          <div className="w-full max-w-2xl mx-auto order-2 xl:order-none xl:ml-[170px]">
            <form ref={formRef} onSubmit={sendEmail} className="flex flex-col gap-6 p-8 bg-[#27272c] rounded-xl shadow-lg">
              <h3 className="text-3xl font-semibold text-[#00ff99]">Let's get in touch</h3>
              <p className="text-white/60 text-sm">
                If you have any questions, offers, or just want to say hi, feel free to drop me a message. I would love to hear from you!
              </p>

              {/* Input fields */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Input type="text" name="firstName" placeholder="First Name" required className="w-full rounded-xl bg-[#27272c] px-4 py-3 text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-[#00ff99] transition" />
                <Input type="text" name="lastName" placeholder="Last Name" required className="w-full rounded-xl bg-[#27272c] px-4 py-3 text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-[#00ff99] transition" />
                <Input type="email" name="email" placeholder="Email address" required className="w-full rounded-xl bg-[#27272c] px-4 py-3 text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-[#00ff99] transition" />
                <Input type="tel" name="phone" placeholder="Phone number" className="w-full rounded-xl bg-[#27272c] px-4 py-3 text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-[#00ff99] transition" />

                {/* Select */}
                <div className="md:col-span-2 relative">
                  <Select onValueChange={(value) => setPurpose(value)}>
                    <SelectTrigger className="relative flex items-center justify-between w-full px-4 py-3 bg-[#27272c] text-white/70 rounded-lg border border-transparent focus:outline-none focus:ring-2 transition-all border-white/90">
                      <SelectValue placeholder="Select contact purpose" />
                    </SelectTrigger>
                    <SelectContent className="z-50 mt-2 w-full overflow-hidden rounded-lg border hover:border-[#00ff99]/40 bg-[#1f1f23] shadow-xl">
                      <SelectGroup className="p-1">
                        <SelectItem value="Hire me">Hire me</SelectItem>
                        <SelectItem value="Mobile Development">Mobile Development</SelectItem>
                        <SelectItem value="Machine Learning">Machine Learning</SelectItem>
                        <SelectItem value="Web Development">Web Development</SelectItem>
                      </SelectGroup>
                    </SelectContent>
                  </Select>
                  <input type="hidden" name="purpose" value={purpose} />
                </div>

                {/* Textarea */}
                <div className="md:col-span-2">
                  <Textarea name="message" required placeholder="Type your message here please" className="h-[160px] w-full p-4 rounded-md border-2 hover:border-[#00ff99] bg-[#27272c] text-zinc-100 placeholder-zinc-400 focus:outline-none focus:ring-2 focus:ring-[#00ff99] resize-none" />
                </div>
              </div>

              {/* Submit Button */}
              <Button type="submit" size="md" className="w-full md:w-auto bg-[#00ff99] text-zinc-900 rounded-full px-6 py-3 font-semibold hover:bg-teal-600 focus:outline-none focus:ring-2 focus:ring-teal-600 focus:ring-offset-1 transition-colors duration-200 cursor-pointer">
                Send message
              </Button>
            </form>
          </div>

          {/* Contact Info */}
          <div className="flex-1 flex items-center xl:justify-end order-1 xl:order-none mb-8 xl:mb-0 xl:mr-[130px]">
            <ul className="flex flex-col gap-8">
              {info.map((item, index) => (
                <li key={index} className="flex items-center gap-6">
                  <div className="w-[52px] h-[52px] xl:w-[64px] xl:h-[64px] bg-[#27272c] text-[#00ff99] rounded-md flex items-center justify-center">
                    <div className="text-[24px]">{item.icon}</div>
                  </div>
                  <div className="flex-1">
                    <p className="text-white/60 text-sm">{item.title}</p>
                    <h3 className="text-lg font-medium">{item.description}</h3>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Contact;
