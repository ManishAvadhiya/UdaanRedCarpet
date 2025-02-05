import Image from "next/image";
import SplashCursor from "../../components/Cursor";
import Navbar from "@/components/Navbar";
import CardDemo from "@/components/cards-demo-1";
import Card from "@/components/Card";
import Hero from "@/components/Hero";




export default function Home() {
  return (
    <div className="flex flex-col items-center  min-h-screen ">


    

    {/* <SplashCursor /> */}
    <Navbar />
    <Hero/>

    </div>
  );
}
