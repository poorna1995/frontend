import React from "react";
import Card from "../ui/card";

const cardsData = [
  {
    description:
      "Explore the vibrant world of global cuisines with Jasper Caldwell. Discover unique recipes and culinary traditions from around the globe.",
    avatarSrc:
      "https://images.unsplash.com/photo-1543610892-0b1f7e6d8ac1?q=80&w=1856&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    imageSrc:
      "https://images.unsplash.com/photo-1447078806655-40579c2520d6?q=80&w=3270&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "Jasper Caldwell",
    rating: 5,
  },
  {
    description:
      "Join Dexter Blake on a culinary adventure filled with delicious recipes and food tips. Perfect for those who love to cook and explore new flavors.",

    avatarSrc:
      "https://images.unsplash.com/photo-1636041246170-9278569b9c36?q=80&w=3328&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    imageSrc:
      "https://images.unsplash.com/photo-1496116218417-1a781b1c416c?q=80&w=3270&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "Dexter Blake",
    rating: 3,
  },
  {
    description:
      "Dive into Sebastian Cole’s world of exquisite dishes and culinary innovation. Discover gourmet recipes and cooking techniques that elevate your meals.",
    avatarSrc:
      "https://images.unsplash.com/photo-1706885093487-7eda37b48a60?q=80&w=3387&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    imageSrc:
      "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?q=80&w=3270&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "Sebastian Cole",
    rating: 5,
  },
  {
    description:
      "Explore innovative recipes and cooking ideas with Griffin Adler. Perfect for food enthusiasts who are looking to try something new and exciting in the kitchen.",
    avatarSrc:
      "https://images.unsplash.com/photo-1640960543409-dbe56ccc30e2?q=80&w=2725&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    imageSrc:
      "https://images.unsplash.com/photo-1448043552756-e747b7a2b2b8?q=80&w=3300&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "Griffin Adler",
    rating: 4,
  },
  // Add more card data here
];

export default function Community() {
  return (
    <div className="container px-4 py-8 mx-auto">
      <h1 className="mb-12 text-5xl font-bold text-center text-gray-700">
        Our Community
      </h1>

      <div className="grid grid-cols-2 gap-4 md:grid-cols-2 lg:grid-cols-3">
        {cardsData.map((card, index) => (
          <Card
            key={index}
            description={card.description}
            avatarSrc={card.avatarSrc}
            imageSrc={card.imageSrc}
            title={card.title}
            rating={card.rating}
          />
        ))}
      </div>
    </div>
  );
}
