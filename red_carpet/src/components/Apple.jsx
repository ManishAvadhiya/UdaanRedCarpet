// "use client";
// import Image from "next/image";
// import React, { useState } from "react";
// import { Carousel, Card } from "@/components/ui/apple-cards-carousel";

// export function AppleCardsCarouselDemo() {
//     const [url,setUrl] = useState("");
//   const cards = data.map((card, index) => (
//     <Card key={card.src} card={card} index={index} />
//   ));

//   return (
//     (<div className="w-full h-full py-20">
//       <h2
//         className="max-w-7xl pl-4 mx-auto text-xl md:text-5xl font-bold text-neutral-800 dark:text-neutral-200 font-sans">
//         Get to know your iSad.
//       </h2>
//       <Carousel items={cards} />
//     </div>)
//   );
// }

// const DummyContent = () => {
//   return (<>
//     {[...new Array(4).fill(1)].map((_, index) => {
//       return (
//         (<div
//           key={"dummy-content" + index}
//           className="bg-[#F5F5F7] dark:bg-neutral-800 p-8 md:p-14 rounded-3xl mb-4">
//             <Image
//             src="https://assets.aceternity.com/macbook.png"
//             alt="Macbook mockup from Aceternity UI"
//             height="500"
//             width="500"
//             className="md:w-1/2 md:h-1/2 h-full w-full mx-auto object-contain" 
//             onClick={()=>setUrl("https://assets.aceternity.com/macbook.png")}/>
//           <p
//             className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto">
            
//               Manan Patel
            
//           </p>
          
//         </div>)
//       );
//     })}
//   </>);
// };

// const data = [
//   {
//     category: "Face of the Year(Male)",
//     title: "You can do more with AI.",
//     src: "https://images.unsplash.com/photo-1593508512255-86ab42a8e620?q=80&w=3556&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//     content: <DummyContent />,
//   },
//   {
//     category: "Productivity",
//     title: "Enhance your productivity.",
//     src: "https://images.unsplash.com/photo-1531554694128-c4c6665f59c2?q=80&w=3387&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//     content: <DummyContent />,
//   },
//   {
//     category: "Product",
//     title: "Launching the new Apple Vision Pro.",
//     src: "https://images.unsplash.com/photo-1713869791518-a770879e60dc?q=80&w=2333&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//     content: <DummyContent />,
//   },

//   {
//     category: "Product",
//     title: "Maps for your iPhone 15 Pro Max.",
//     src: "https://images.unsplash.com/photo-1599202860130-f600f4948364?q=80&w=2515&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//     content: <DummyContent />,
//   },
//   {
//     category: "iOS",
//     title: "Photography just got better.",
//     src: "https://images.unsplash.com/photo-1602081957921-9137a5d6eaee?q=80&w=2793&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//     content: <DummyContent />,
//   },
//   {
//     category: "Hiring",
//     title: "Hiring for a Staff Software Engineer",
//     src: "https://images.unsplash.com/photo-1511984804822-e16ba72f5848?q=80&w=2048&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//     content: <DummyContent />,
//   },
// ];


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

export function AppleCardsCarouselDemo() {
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
        content: <DummyContent />,
      },
    
      {
        category: "Product",
        title: "Maps for your iPhone 15 Pro Max.",
        src: "https://images.unsplash.com/photo-1599202860130-f600f4948364?q=80&w=2515&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        content: <DummyContent />,
      },
      {
        category: "iOS",
        title: "Photography just got better.",
        src: "https://images.unsplash.com/photo-1602081957921-9137a5d6eaee?q=80&w=2793&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        content: <DummyContent />,
      },
      {
        category: "Hiring",
        title: "Hiring for a Staff Software Engineer",
        src: "https://images.unsplash.com/photo-1511984804822-e16ba72f5848?q=80&w=2048&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        content: <DummyContent />,
      },
  ]);

  const updateImageSrc = (index, newSrc) => {
    setData((prevData) =>
      prevData.map((item, i) =>
        i === index ? { ...item, src: newSrc.src,title:newSrc.name } : item
      )
    );
  };

  const cards = data.map((card, index) => (
    <Card key={card.src} card={{ ...card, content: <DummyContent updateImageSrc={updateImageSrc} index={index} /> }} index={index} />
  ));

  return (
    <div className="w-full h-full py-20 flex flex-col justify-center items-center">
      <h2 className="max-w-7xl pl-4 mx-auto text-4xl md:text-5xl font-bold   font-sans">
        Get to know your iSad.
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
          <AlertDialogAction >Continue</AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
      </div>
    </div>
  );
}

const DummyContent = ({ updateImageSrc, index }) => {
    const images = [
        {
          name: "MacBook",
          src: "https://assets.aceternity.com/macbook.png",
        },
        {
          name: "iPhone",
          src: "https://assets.aceternity.com/iphone.png",
        },
        {
          name: "iPad",
          src: "https://assets.aceternity.com/ipad.png",
        },
        {
          name: "Apple Watch",
          src: "https://assets.aceternity.com/watch.png",
        },
      ];
      
  
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
        <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto">
          Click an image to update it
        </p>
      </div>
    );
  };
  


export default AppleCardsCarouselDemo;
