"use client";
import { useUser } from "@clerk/nextjs"; // ✅ Use Clerk's client-side hook
import Hero from "@/components/Hero";
import SplitText from "../../components/SplitText";
import { AppleCardsCarouselDemo2 } from "@/components/Applehome";

export default function Home() {
  const { user, isLoaded } = useUser(); // ✅ Get user info from Clerk

  // ✅ Handle loading state
  if (!isLoaded) {
    return <div className="text-center text-lg">Loading user...</div>;
  }

  // ✅ Handle case when user is not logged in
  if (!user) {
    return <div className="text-center text-lg">User not logged in</div>;
  }

  return (
    <div className="flex flex-col items-center min-h-screen">
      <Hero />

      {/* ✅ Display User Data */}
      <div className="text-xl font-bold">
        ✅ Email: {user.primaryEmailAddress?.emailAddress || "No Email Found"}
      </div>

      <SplitText
        text="Hello, Tailwind!"
        className="text-2xl font-semibold text-center"
        delay={150}
        animationFrom={{ opacity: 0, transform: "translate3d(0,50px,0)" }}
        animationTo={{ opacity: 1, transform: "translate3d(0,0,0)" }}
        easing="easeOutCubic"
        threshold={0.2}
        rootMargin="-50px"
      />

      <AppleCardsCarouselDemo2 />
    </div>
  );
}
