import React, { useEffect, useState } from "react";
import { Carousel, Card } from "@/components/ui/card_carousel";
import { Button } from "../ui/button";
import { fetchRecipes } from "@/lib/api";
import { Recipe } from "@/types/card";

export default function DiscoverMore() {
  const [recipes, setRecipes] = useState<Recipe[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadRecipes = async () => {
      try {
        const data = await fetchRecipes();
        setRecipes(data);
      } catch (err) {
        setError((err as Error).message);
      } finally {
        setLoading(false);
      }
    };

    loadRecipes();
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  // Convert recipes to Card components
  const items = recipes.map((recipe) => (
    <Card
      key={recipe.id}
      card={{
        src: recipe.image_url, // This should be a full URL
        title: recipe.title,
        category: recipe.category,
        content: <p>{recipe.description}</p>,
      }}
      index={recipe.id}
    />
  ));

  return (
    <div>
      <div className="container py-20 mx-auto">
        <div className="flex flex-col items-center ">
          <div className="mb-12 md:mb-0 md:pr-8">
            <h1 className="mb-8 text-5xl font-bold text-center">
              Discover More Recipes
            </h1>

            <div className="flex justify-center">
              <Button className="px-4 py-2 font-bold text-white bg-yellow-500 rounded-full hover:bg-yellow-600">
                Explore Recipes
              </Button>
            </div>
          </div>
        </div>
        <Carousel items={items} initialScroll={0} />
      </div>
    </div>
  );
}
