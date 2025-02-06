"use client";
import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

import React, { useContext, useRef, useState } from "react";
import { BlurImage, Carousel, CarouselContext } from "@/components/ui/apple-cards-carousel";
import { redirect } from "next/navigation";

export function AppleCardsCarouselDemo2() {
    const [data, setData] = useState([
        {
            category: "Face of the Year(Male)",
            title: "You can do more with AI.",
            src: "https://images.unsplash.com/photo-1593508512255-86ab42a8e620?q=80&w=3556&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        },
        {
            category: "Productivity",
            title: "Enhance your productivity.",
            src: "https://images.unsplash.com/photo-1531554694128-c4c6665f59c2?q=80&w=3387&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        },
        {
            category: "Product",
            title: "Launching the new Apple Vision Pro.",
            src: "https://images.unsplash.com/photo-1713869791518-a770879e60dc?q=80&w=2333&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        },
        {
            category: "Product",
            title: "Maps for your iPhone 15 Pro Max.",
            src: "https://images.unsplash.com/photo-1599202860130-f600f4948364?q=80&w=2515&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        },
        {
            category: "iOS",
            title: "Photography just got better.",
            src: "https://images.unsplash.com/photo-1602081957921-9137a5d6eaee?q=80&w=2793&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        },
        {
            category: "Hiring",
            title: "Hiring for a Staff Software Engineer",
            src: "https://images.unsplash.com/photo-1511984804822-e16ba72f5848?q=80&w=2048&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        },
    ]);

    const cards = data.map((card, index) => (
        <Card key={card.src} card={card} index={index} onclick={()=>redirect("/vote")}  />
    ));

    return (
        <div className="w-full h-full py-20 flex flex-col justify-center items-center">
           

            <Carousel items={cards} />

            
        </div>
    );
}
export const Card = ({
    card,
    index,
    layout = false
  }) => {
    
  
    return (<>
     
      <motion.button
        layoutId={layout ? `card-${card.title}` : undefined}
        onClick={()=>redirect("/vote")}
        className="rounded-3xl bg-gray-100 dark:bg-neutral-900 h-80 w-[90vw] md:h-[40rem] lg:w-[1000px] overflow-hidden flex flex-col items-start justify-start relative z-10">
        <div
          className="absolute h-full top-0 inset-x-0 bg-gradient-to-b from-black/50 via-transparent to-transparent z-30 pointer-events-none" />
        <div className="relative z-40 p-8">
          <motion.p
            layoutId={layout ? `category-${card.category}` : undefined}
            className="text-white text-sm md:text-base font-medium font-sans text-left">
            {card.category}
          </motion.p>
          <motion.p
            layoutId={layout ? `title-${card.title}` : undefined}
            className="text-white text-xl md:text-3xl font-semibold max-w-xs text-left [text-wrap:balance] font-sans mt-2">
            {card.title}
          </motion.p>
        </div>
        <BlurImage
          src={card.src}
          alt={card.title}
          fill
          className="object-cover absolute z-10 inset-0" />
      </motion.button>
    </>);
  };
  
export default AppleCardsCarouselDemo2;
