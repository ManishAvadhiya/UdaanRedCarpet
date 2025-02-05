import Image from "next/image";
import SplashCursor from "../../components/Cursor";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";



export default function Home() {
  return (
    <>
    {/* <SplashCursor /> */}
    <Navbar />
    <Hero/>
    </>
  );
}
