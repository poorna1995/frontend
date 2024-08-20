// import React from "react";
// import { Carousel, Card } from "@/components/ui/apple-cards-carousel";
// import { Button } from "../ui/button";

// import { useEffect, useState } from "react";
// import { Carousel } from "../ui/apple-cards-carousel";
// import { Button } from "../ui/button";
// import { fetchRecipes } from "@/lib/api";
// import { Recipe } from "@/types/card";

// export default function DiscoverMore() {
//   return (
//     <div>
//       <div className="container py-20 mx-auto">
//         <div className="flex flex-col items-center ">
//           <div className="mb-12 md:mb-0 md:pr-8">
//             <h1 className="mb-8 text-5xl font-bold text-center">
//               Discover More Recipes
//             </h1>

//             <div className="flex justify-center">
//               <Button className="px-4 py-2 font-bold text-white bg-yellow-500 rounded-full hover:bg-yellow-600">
//                 Explore Recipes
//               </Button>
//             </div>
//           </div>
//         </div>
//         <Carousel items={items} initialScroll={0} />
//       </div>
//     </div>
//   );
// }

// const card1 = {
//   src: "/image1.jpg",
//   title: "Creamy Salad",
//   category: "Salads",
//   content: <p>Enjoy a fresh and creamy salad that’s perfect for any meal.</p>,
// };

// const card2 = {
//   src: "/image2.jpg",
//   title: "Tofu Tomato Soup",
//   category: "Soups",
//   content: <p>A hearty and nutritious tofu tomato soup to warm your soul.</p>,
// };

// const card3 = {
//   src: "/image3.jpg",
//   title: "Crunchy Potatoes",
//   category: "Side Dishes",
//   content: <p>Deliciously crispy potatoes that make the perfect side dish.</p>,
// };

// const card4 = {
//   src: "/image4.jpg",
//   title: "Raspberry Pancake",
//   category: "Breakfast",
//   content: (
//     <p>
//       Fluffy pancakes topped with fresh raspberries and a hint of sweetness.
//     </p>
//   ),
// };

// const card5 = {
//   src: "/image.png",
//   title: "Buttermilk Biscuits",
//   category: "Baked Goods",
//   content: (
//     <p>Flaky and buttery biscuits that are great for breakfast or dinner.</p>
//   ),
// };

// const card6 = {
//   src: "/image5.png",
//   title: "Raspberry Pancake",
//   category: "Breakfast",
//   content: (
//     <p>Another variation of our fluffy pancakes with raspberry topping.</p>
//   ),
// };

// const items = [
//   <Card key="1" card={card1} index={0} />,
//   <Card key="2" card={card2} index={1} />,
//   <Card key="3" card={card3} index={2} />,
//   <Card key="4" card={card4} index={3} />,
//   <Card key="5" card={card5} index={4} />,
//   <Card key="6" card={card6} index={5} />,
//   // Add more cards as needed
// ];
// import React, { useEffect, useState } from "react";
// import { Carousel, Card } from "@/components/ui/apple-cards-carousel";
// import { Button } from "../ui/button";
// import { fetchRecipes } from "@/utils/api";
// import React, { useEffect, useState } from "react";
// import { Carousel, Card } from "@/components/ui/apple-cards-carousel";
// import { Button } from "../ui/button";
// import { fetchRecipes } from "@/lib/api";
// import { Recipe } from "@/types/card";

// export default function DiscoverMore() {
//   const [recipes, setRecipes] = useState<Recipe[]>([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState<string | null>(null);

//   useEffect(() => {
//     const loadRecipes = async () => {
//       try {
//         const data = await fetchRecipes();
//         setRecipes(data);
//       } catch (err) {
//         setError((err as Error).message);
//       } finally {
//         setLoading(false);
//       }
//     };

//     loadRecipes();
//   }, []);

//   if (loading) return <p>Loading...</p>;
//   if (error) return <p>Error: {error}</p>;

//   // Convert recipes to Card components
//   const items = recipes.map((recipe) => (
//     <Card
//       key={recipe.id}
//       card={{
//         src: recipe.image_url,
//         title: recipe.title,
//         category: recipe.category,
//         content: <p>{recipe.description}</p>,
//       }}
//       index={recipe.id}
//     />
//   ));

//   return (
//     <div>
//       <div className="container py-20 mx-auto">
//         <div className="flex flex-col items-center ">
//           <div className="mb-12 md:mb-0 md:pr-8">
//             <h1 className="mb-8 text-5xl font-bold text-center">
//               Discover More Recipes
//             </h1>

//             <div className="flex justify-center">
//               <Button className="px-4 py-2 font-bold text-white bg-yellow-500 rounded-full hover:bg-yellow-600">
//                 Explore Recipes
//               </Button>
//             </div>
//           </div>
//         </div>
//         <Carousel items={items} initialScroll={0} />
//       </div>
//     </div>
//   );
// }

// // src/components/DiscoverMore.tsx
// import React, { useEffect, useState } from "react";
// import { Carousel, Card } from "@/components/ui/apple-cards-carousel";
// import { Button } from "../ui/button";
// import { fetchRecipes } from "@/lib/api";
// import { Recipe } from "@/types/card";

// export default function DiscoverMore() {
//   const [recipes, setRecipes] = useState<Recipe[]>([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState<string | null>(null);

//   useEffect(() => {
//     const loadRecipes = async () => {
//       try {
//         const data = await fetchRecipes();
//         setRecipes(data);
//       } catch (err) {
//         setError((err as Error).message);
//       } finally {
//         setLoading(false);
//       }
//     };

//     loadRecipes();
//   }, []);

//   if (loading) return <p>Loading...</p>;
//   if (error) return <p>Error: {error}</p>;

//   // Convert recipes to Card components
//   const items = recipes.map((recipe) => (
//     <Card
//       key={recipe.id}
//       card={{
//         src: recipe.image_url, // Ensure this URL is correct
//         title: recipe.title,
//         category: recipe.category,
//         content: <p>{recipe.description}</p>,
//       }}
//       index={recipe.id}
//     />
//   ));

//   return (
//     <div>
//       <div className="container py-20 mx-auto">
//         <div className="flex flex-col items-center ">
//           <div className="mb-12 md:mb-0 md:pr-8">
//             <h1 className="mb-8 text-5xl font-bold text-center">
//               Discover More Recipes
//             </h1>

//             <div className="flex justify-center">
//               <Button className="px-4 py-2 font-bold text-white bg-yellow-500 rounded-full hover:bg-yellow-600">
//                 Explore Recipes
//               </Button>
//             </div>
//           </div>
//         </div>
//         <Carousel items={items} initialScroll={0} />
//       </div>
//     </div>
//   );
// }

// src/components/DiscoverMore.tsx

import React, { useEffect, useState } from "react";
import { Carousel, Card } from "@/components/ui/apple-cards-carousel";
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
