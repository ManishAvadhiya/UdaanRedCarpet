"use client";
import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger,
  } from "@/components/ui/alert-dialog"
  import { Button } from "@/components/ui/button"
import Image from "next/image";
import React, { useState } from "react";
import { Carousel, Card } from "@/components/ui/apple-cards-carousel";
import toast from "react-hot-toast";
import { useUser } from "@clerk/nextjs";

export function AppleCardsCarouselDemo() {
  const [data, setData] = useState([
    {
      id: 1,
      category: "Face of the Year",
      title: "The most charismatic face of the year!",
      src: "https://images.unsplash.com/photo-1593508512255-86ab42a8e620?q=80&w=3556&auto=format&fit=crop",
      selected_nominee_id: null,
      nominees: [
        { id: 101, name: "MacBook", src: "https://assets.aceternity.com/macbook.png" },
        { id: 102, name: "iPhone", src: "https://assets.aceternity.com/iphone.png" },
        { id: 103, name: "iPad", src: "https://assets.aceternity.com/ipad.png" },
        { id: 104, name: "Apple Watch", src: "https://assets.aceternity.com/watch.png" }
      ]
    },
    {
      id: 2,
      category: "Artist of the Year (Male)",
      title: "A true creative genius!",
      src: "https://images.unsplash.com/photo-1531554694128-c4c6665f59c2?q=80&w=3387&auto=format&fit=crop",
      selected_nominee_id: null,
      nominees: [
        { id: 201, name: "AirPods", src: "https://assets.aceternity.com/airpods.png" },
        { id: 202, name: "Apple TV", src: "https://assets.aceternity.com/apple-tv.png" },
        { id: 203, name: "HomePod", src: "https://assets.aceternity.com/homepod.png" },
        { id: 204, name: "Magic Keyboard", src: "https://assets.aceternity.com/magic-keyboard.png" }
      ]
    },
    {
      id: 3,
      category: "Artist of the Year (Female)",
      title: "Master of the creative arts!",
      src: "https://images.unsplash.com/photo-1713869791518-a770879e60dc?q=80&w=2333&auto=format&fit=crop",
      selected_nominee_id: null,
      content: <DummyContent />,
      nominees: [
        { id: 301, name: "Apple Pencil", src: "https://assets.aceternity.com/apple-pencil.png" },
        { id: 302, name: "iMac", src: "https://assets.aceternity.com/imac.png" },
        { id: 303, name: "Mac Mini", src: "https://assets.aceternity.com/mac-mini.png" },
        { id: 304, name: "Mac Studio", src: "https://assets.aceternity.com/mac-studio.png" }
      ]
    },
    {
      id: 4,
      category: "Sports Person of the Year (Male)",
      title: "An unstoppable sports champion!",
      src: "https://images.unsplash.com/photo-1599202860130-f600f4948364?q=80&w=2515&auto=format&fit=crop",
      selected_nominee_id: null,
      content: <DummyContent />,
      nominees: [
        { id: 401, name: "Mac Pro", src: "https://assets.aceternity.com/mac-pro.png" },
        { id: 402, name: "iPhone SE", src: "https://assets.aceternity.com/iphone-se.png" },
        { id: 403, name: "iPhone Pro", src: "https://assets.aceternity.com/iphone-pro.png" },
        { id: 404, name: "Apple Vision Pro", src: "https://assets.aceternity.com/apple-vision-pro.png" }
      ]
    },
    {
      id: 5,
      category: "Sports Person of the Year (Female)",
      title: "A sports icon in the making!",
      src: "https://images.unsplash.com/photo-1511984804822-e16ba72f5848?q=80&w=2048&auto=format&fit=crop",
      selected_nominee_id: null,
      content: <DummyContent />,
      nominees: [
        { id: 501, name: "Apple Car", src: "https://assets.aceternity.com/apple-car.png" },
        { id: 502, name: "MacBook Air", src: "https://assets.aceternity.com/macbook-air.png" },
        { id: 503, name: "MacBook Pro", src: "https://assets.aceternity.com/macbook-pro.png" },
        { id: 504, name: "Thunderbolt Display", src: "https://assets.aceternity.com/thunderbolt-display.png" }
      ]
    },
    {
      id: 6,
      category: "Mr. Persona",
      title: "The gentleman with unmatched style!",
      src: "https://images.unsplash.com/photo-1593508512255-86ab42a8e620?q=80&w=3556&auto=format&fit=crop",
      selected_nominee_id: null,
      nominees: [
        { id: 601, name: "Magic Mouse", src: "https://assets.aceternity.com/magic-mouse.png" },
        { id: 602, name: "iPhone 15", src: "https://assets.aceternity.com/iphone-15.png" },
        { id: 603, name: "Apple VR", src: "https://assets.aceternity.com/apple-vr.png" },
        { id: 604, name: "AirPods Max", src: "https://assets.aceternity.com/airpods-max.png" }
      ]
    },
    {
      id: 7,
      category: "Mrs. Persona",
      title: "Elegance and grace combined!",
      src: "https://images.unsplash.com/photo-1602081957921-9137a5d6eaee?q=80&w=2793&auto=format&fit=crop",
      selected_nominee_id: null,
      nominees: [
        { id: 701, name: "iPad Mini", src: "https://assets.aceternity.com/ipad-mini.png" },
        { id: 702, name: "iPad Air", src: "https://assets.aceternity.com/ipad-air.png" },
        { id: 703, name: "MacBook M3", src: "https://assets.aceternity.com/macbook-m3.png" },
        { id: 704, name: "Apple Smart Keyboard", src: "https://assets.aceternity.com/smart-keyboard.png" }
      ]
    },
    {
      id: 8,
      category: "Rising Star (Male)",
      title: "A future legend in the making!",
      src: "https://images.unsplash.com/photo-1531554694128-c4c6665f59c2?q=80&w=3387&auto=format&fit=crop",
      selected_nominee_id: null,
      nominees: [
        { id: 801, name: "MacBook Retina", src: "https://assets.aceternity.com/macbook-retina.png" },
        { id: 802, name: "Mac Mini M2", src: "https://assets.aceternity.com/mac-mini-m2.png" },
        { id: 803, name: "Apple Magic Trackpad", src: "https://assets.aceternity.com/magic-trackpad.png" },
        { id: 804, name: "iPad Pro", src: "https://assets.aceternity.com/ipad-pro.png" }
      ]
    },
    {
      id: 9,
      category: "Rising Star (Female)",
      title: "Shining bright with limitless potential!",
      src: "https://images.unsplash.com/photo-1713869791518-a770879e60dc?q=80&w=2333&auto=format&fit=crop",
      selected_nominee_id: null,
      nominees: [
        { id: 901, name: "iPhone 14 Pro", src: "https://assets.aceternity.com/iphone-14-pro.png" },
        { id: 902, name: "Apple Studio Display", src: "https://assets.aceternity.com/studio-display.png" },
        { id: 903, name: "Mac Studio M2", src: "https://assets.aceternity.com/mac-studio-m2.png" },
        { id: 904, name: "Apple AirTag", src: "https://assets.aceternity.com/airtag.png" }
      ]
    }
  ]);
  const { user } = useUser();
  const selectedIds = data.map(item => item.selected_nominee_id);
  const actualvalues = selectedIds.filter(item => item !== null);
  
  const handleSubmit = async  ()=>{
    const email = user.primaryEmailAddress?.emailAddress; // Get user email

    if (actualvalues.length !== 9){
      return toast.error('Please vote for all categories')
       
    }
    try {
      const res = await fetch("/api/vote", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({actualvalues,email}),
      });

      if (res.ok) {
        toast.success("Voted Successful!");
         
        
      } else {
        const errorMessage = await res.text();
        toast.error(`${errorMessage}`);
      }
    } catch (error) {
      console.error("Voting failed:", error);
      toast.error("Something went wrong! Please try again.");
    }
  }
  

  const updateImageSrc = (index, newSrc) => {
    console.log(newSrc)
    setData((prevData) =>
      prevData.map((item, i) =>
        i === index ? { ...item, src: newSrc.src,title:newSrc.name ,selected_nominee_id:newSrc.id  } : item
      )
    );
  };

  const cards = data.map((card, index) => (
    <Card key={card.src} card={{ ...card, content: <DummyContent updateImageSrc={updateImageSrc} index={index} images={card.nominees} /> }} index={index} />
  ));

  return (
    <div className="w-full h-full py-20 flex flex-col justify-center items-center">
      <h2 className="max-w-7xl pl-4 mx-auto text-4xl md:text-5xl font-bold   font-sans">
        Vote your favorite person.
      </h2>
        
      <Carousel items={cards} />
      <div className="flex justify-center items-center m-4">
      <AlertDialog className="">
      <AlertDialogTrigger asChild>
        <Button variant="outline" className="text-white bg-green-700 border-neutral-500 ">Submit</Button>
      </AlertDialogTrigger>
      <AlertDialogContent className="w-10/12 rounded-md">
        <AlertDialogHeader>
          <AlertDialogTitle className="text-black">Are you absolutely sure?</AlertDialogTitle>
          
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel className="text-black">Cancel</AlertDialogCancel>
          <AlertDialogAction onClick={handleSubmit} >Continue</AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
      </div>
    
        {
          
          selectedIds.map((id,i) => (
            <div key={i}>
              {id}
            </div>
          ))
        }
     
    </div>
  );
}

const DummyContent = ({ updateImageSrc, index,images }) => {
    
      
  
    return (
      <div className="bg-[#F5F5F7] dark:bg-neutral-800 p-8 md:p-14 rounded-3xl mb-4">
        {images.map((imgSrc, i) => (
          <div key={i}>
            <Image
            key={i}
            src={imgSrc.src}
            alt={`Dummy Image ${i + 1}`}
            height="500"
            width="500"
            className="md:w-1/2 md:h-1/2 h-full w-full mx-auto object-contain cursor-pointer mb-4 text-black"
            onClick={() => updateImageSrc(index, imgSrc)} // Updates src when clicked
          />
          <h2 className=" text-black text-center font-bold">{imgSrc.name}</h2>
          </div>
          
        ))}
        <p className="text-neutral-600 dark:text-neutral-400  md:text-3xl text-2xl font-bold mt-4 text-center font-sans max-w-3xl mx-auto">
          Click to vote your nominee
        </p>
      </div>
    );
  };
  


export default AppleCardsCarouselDemo;
