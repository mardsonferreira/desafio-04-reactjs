export interface Food {
    id: number;
    name: string;
    description: string;
    price: number;
    available: boolean;
    image: string;
}

export interface FoodProps {
    food: Food;
    handleEditFood: (food: Food) => void; 
    handleDelete: (id: number) => void; 
}