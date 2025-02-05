import Image from "next/image";
import SplashCursor from "../../components/Cursor";
import Navbar from "@/components/Navbar";
import CardDemo from "@/components/cards-demo-1";
import Card from "@/components/Card";
import Hero from "@/components/Hero";
import Footer from "@/components/Footer";


import { Button } from "@/components/ui/button";



export default function Home() {
  return (
    <div className="flex flex-col items-center  min-h-screen ">
    <SplashCursor />
    <Navbar/>
    <Hero/>
    <Footer/>
    </div>
  );
}
