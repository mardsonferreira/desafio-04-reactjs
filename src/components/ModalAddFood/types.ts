export interface Food {
  id: number;
  name: string;
  description: string;
  price: number;
  available: boolean;
  image: string;
}

export interface ModalAddFoodProps {
  isOpen: boolean;
  handleAddFood: (food: Food) => void;
  setIsOpen: () => void;
}
