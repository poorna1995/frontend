"use client";

import Community from "@/components/home/community";
import DiscoverMore from "@/components/home/discover";
import HeroSection from "@/components/home/hero-section";
import PromotionCard from "@/components/home/promotion";

import { useState, useEffect } from "react";
// import { useSession } from "next-auth/react";

export default function Home() {
  const [recipes, setRecipes] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  // const { data: session } = useSession();

  useEffect(() => {
    const fetchRecipes = async () => {
      const res = await fetch("/api/recipes");
      const data = await res.json();
      setRecipes(data);
      setIsLoading(false);
    };
    fetchRecipes();
  }, []);

  return (
    <main className="mx-auto ">
      <div className="flex flex-col mx-auto">
        <HeroSection />
        <DiscoverMore />
        <Community />
        <PromotionCard />
      </div>
    </main>
  );
}
