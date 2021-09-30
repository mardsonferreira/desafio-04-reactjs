export interface FoodProps {
  id: number;
  name: string;
  description: string;
  price: number;
  available: boolean;
  image: string;
}

export interface AddFoodProps {
    name: string;
    description: string;
    price: number;
    image: string;
  }
