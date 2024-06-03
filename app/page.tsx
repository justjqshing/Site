import Hero from "@/components/Hero";
import { FloatingNav } from "@/components/ui/floating-navbar";
import Image from "next/image";
import { FaAddressBook, FaFileContract, FaHome, FaMailBulk, FaProjectDiagram } from "react-icons/fa";
import Grid from "@/components/Grid";
import { ContactShadows } from "@react-three/drei";
export default function Home() {
  const Navitems = [
    {
      name: "Home",
      link: "#",
      icon: <FaHome/>
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
    <main className="relative bg-black-100 flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
      <div className="max-w-7xl w-full">
        <FloatingNav navItems={Navitems} className=""/>
       <Hero/>
       <Grid/>
      </div>
    </main>
  );
}
