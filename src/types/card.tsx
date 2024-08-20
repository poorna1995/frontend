type Card = {
  src: string;
  title: string;
  category: string;
  content: React.ReactNode;
};

// Define the interface for a recipe
export interface Recipe {
  id: number;
  title: string;
  category: string;
  image_url: string; // Ensure this matches your API response
  description: string;
}
