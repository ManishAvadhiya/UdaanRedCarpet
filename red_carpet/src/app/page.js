"use client"
import Image from "next/image";
import SplashCursor from "../../components/Cursor";

import CardDemo from "@/components/cards-demo-1";
import Card from "@/components/Card";
import Hero from "@/components/Hero";
import Footer from "@/components/Footer";


import { Button } from "@/components/ui/button";
import SplitText from "../../components/SplitText";
import AppleCardsCarouselDemo from "@/components/Apple";
import { AppleCardsCarouselDemo2 } from "@/components/Applehome";



export default function Home() {
  return (
    <div className="flex flex-col items-center  min-h-screen ">
    {/* <SplashCursor /> */}

    <Hero/>

    <SplitText
  text="Hello, Tailwind!"
  className="text-2xl font-semibold text-center   "
  delay={150}
  animationFrom={{ opacity: 0, transform: 'translate3d(0,50px,0)' }}
  animationTo={{ opacity: 1, transform: 'translate3d(0,0,0)' }}
  easing="easeOutCubic"
  threshold={0.2}
  rootMargin="-50px"

/>
<AppleCardsCarouselDemo2 />
    </div>
  );
}
