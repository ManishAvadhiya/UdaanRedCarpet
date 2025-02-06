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
import React, { useState } from "react";
import { Carousel, Card } from "@/components/ui/apple-cards-carousel";

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
        <Card key={card.src} card={card} index={index}  />
    ));

    return (
        <div className="w-full h-full py-20 flex flex-col justify-center items-center">
            <h2 className="max-w-7xl pl-4 mx-auto text-4xl md:text-5xl font-bold font-sans">
                Get to know your iSad.
            </h2>

            <Carousel items={cards} />

            <div className="flex justify-center items-center m-4">
                <AlertDialog>
                    <AlertDialogTrigger asChild>
                        <Button variant="outline" className="text-white bg-green-700 border-neutral-500">
                            Submit
                        </Button>
                    </AlertDialogTrigger>
                    <AlertDialogContent className="w-10/12 rounded-md">
                        <AlertDialogHeader>
                            <AlertDialogTitle className="text-black">Are you absolutely sure?</AlertDialogTitle>
                        </AlertDialogHeader>
                        <AlertDialogFooter>
                            <AlertDialogCancel className="text-black">Cancel</AlertDialogCancel>
                            <AlertDialogAction>Continue</AlertDialogAction>
                        </AlertDialogFooter>
                    </AlertDialogContent>
                </AlertDialog>
            </div>
        </div>
    );
}

export default AppleCardsCarouselDemo2;
