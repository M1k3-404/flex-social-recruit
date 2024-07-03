import { Button, Chip, ScrollShadow } from "@nextui-org/react";
import Image from "next/image";
import Link from "next/link";
import { HiBriefcase, HiBuildingOffice2 } from "react-icons/hi2";

export default function Home() {
  return (
    <main className="h-screen flex items-center justify-between bg-[#000] overflow-y-hidden">
      <div className="lg:w-[50%] w-[90%] h-[90%] bg-[#1d1d1d] rounded-lg mx-auto p-4">
        <div className="w-full border-b pb-4 border-white/25">
          <div className="w-full">
            <div className="w-full flex lg:p-4 pb-0 items-center">
              <Image
                src={"/flex-social.png"}
                alt="Hero"
                width={40}
                height={40}
                className="rounded-md bg-[#0c0c0c] p-2"
              />
              <p className="text-white text-md font-medium ml-3">Flex Social</p>
            </div>
            
          </div>

          <p className="text-3xl lg:ml-4 mt-2 font-medium">Full Stack Engineer - Intern</p>
        
          <div className="lg:ml-4 mt-2 flex items-center text-xs space-x-2">
            <p>Sri Lanka</p>
            <span>|</span>
            {/* change */}
            <p>16 hours ago</p>
            <span>|</span>
            <p>51 applicants</p>
          </div>

          <div className="flex justify-between items-end mt-8">
            <div>
              <div className="lg:ml-4 flex items-center text-sm space-x-2">
                <HiBriefcase size={21} className="mr-4" />
                <Chip size="sm">Remote</Chip>
                <span>|</span>
                <p>Internship</p>
              </div>

              <div className="lg:ml-4 mt-3 flex items-center text-sm space-x-2">
                <HiBuildingOffice2 size={21} className="mr-4" />
                <p>1-10 employees</p>
              </div>
            </div>

            <Button as={Link} href="/apply" size="sm" className="px-10 lg:flex items-center hidden">Apply</Button>
          </div>
          <Button as={Link} href="/apply" size="sm" className="w-full mt-4 lg:hidden">Apply</Button>
        </div>
        
        <ScrollShadow hideScrollBar size={20} className="w-full min-[1519px]:h-[60%] md:h-[70%] h-[60%] pt-4 overflow-y-auto">
          <p className="sm:text-sm text-xs font-light text-justify mb-6">
            We're Flex Social, a forward-thinking startup that merges the power of human creativity with cutting-edge technology. We're more than just a social media agency; we're a full-service solution provider offering a comprehensive suite of services – from social media marketing to web development, enterprise software, and mobile app creation. We even specialize in developing innovative SaaS solutions and are experts in integrating AR technology to bring your brand to life in revolutionary ways.
            <br /><br />
            At Flex Social, we're passionate about bringing imagination to life with technology. We promote creativity in our fast-paced environment, where the latest trends and technologies are embraced to empower creative ideas. Collaboration is key, and we believe in fostering a supportive atmosphere where everyone's voice is valued. We thrive on open communication and believe in empowering individuals to take ownership of their projects.
            <br /><br />
            Joining Flex Social isn't just a job; it's an opportunity to be part of a passionate team that's redefining the way brands connect with their audience through the power of technology and creativity.
          </p>
          <p className="font-medium">Job Description</p>
          <p className="text-sm font-light text-justify mb-6">
            This is a full-time remote role for a Full Stack Developer - Intern. As an intern, you will be involved in day-to-day tasks related to full-stack development. This includes coding, debugging, testing, and maintaining web applications. You will work closely with the development team to implement new features and improve the overall user experience. This is a great opportunity to gain practical experience and enhance your skills as a developer.
          </p>
          <p className="font-medium">Qualifications</p>
          <ul className="text-sm font-light text-justify mb-6 list-disc ml-4">
            <li>Familiarity with front-end frameworks like ReactJS or NextJS</li>
            <li>Familiarity with software development methodologies, such as Agile</li>
            <li>Experience with back-end technologies such as C#, Java or JavaScript</li>
            <li>Understanding of databases and SQL</li>
            <li>Knowledge of version control systems like Git</li>
            <li>Excellent problem-solving and communication skills</li>
            <li className="mb-2">Pursuing a degree in Computer Science or a related field</li>

            <li>Previous experience or projects in web development is a plus</li>
          </ul>

          <p className="text-sm font-light text-justify mb-3">
            As a Flex Social intern, you'll gain hands-on experience working with the latest AR, AI, and Blockchain technologies. You'll have the opportunity to contribute to real-world projects, collaborate with our talented team, and directly interact with clients, giving you a well-rounded understanding of the industry.
            <br /><br />
            We believe in creating a work environment that's flexible and supportive for our employees. Our roles ensure that flexibility to maintain a good work-life balance.
          </p>
        </ScrollShadow>
      </div>
    </main>
  );
}