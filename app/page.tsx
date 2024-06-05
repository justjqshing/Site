import Hero from "@/components/Hero";
import { FloatingNav } from "@/components/ui/floating-navbar";
import Image from "next/image";
import { FaAddressBook, FaFileContract, FaHome, FaMailBulk, FaProjectDiagram } from "react-icons/fa";
import Grid from "@/components/Grid";
import { ContactShadows } from "@react-three/drei";
import Projects from "@/components/Projects";
import { HeroHighlight } from "@/components/ui/Highlight";
import { PiHouseThin } from "react-icons/pi";
export default function Home() {
  const Navitems = [
    {
      name: "Home",
      link: "#",
      icon: <PiHouseThin/>
    },
    {
      name: "About",
      link: "#about",
      icon: <FaAddressBook/>,
    },
    {
      name: "Projects",
      link: "#projects",
      icon: <FaProjectDiagram/>,
    },
    {
      name: "Contact",
      link: "#contact",
      icon: <FaMailBulk/>,
    },
  ];
  
  return (
    <main className="relative bg-black-100 flex justify-center items-center flex-col overflow-hidden mx-auto ">
      <div className="max-w-7xl w-full sm:px-10 px-5">
        <FloatingNav navItems={Navitems} className=""/>
       <Hero/>
       </div>
       <HeroHighlight containerClassName="dark:bg-black-100">
          <div className="w-screen h-full max-w-7xl sm:px-10 px-5 ">
            <Grid/>

          </div>
        </HeroHighlight>
       
       <div className="max-w-7xl w-full sm:px-10 px-5">
       <Projects/>
      </div>
    </main>
  );
}
