"use client";
import BlurText from "./ui/BlurText";

const Hero = () => {
  const handleAnimationComplete = () => {
    console.log("Animation completed!");
  };
  return (
    <>
      <div className=" flex mt-4  items-center">
        <BlurText
          text="Your Voice,Your Vote,Your Power!"
          delay={150}
          animateBy="words"
          direction="top"
          className="text-2xl mx-8"
        />
      </div>
      
    </>
  );
};

export default Hero;
