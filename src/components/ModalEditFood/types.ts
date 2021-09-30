export interface Food {
  id: number;
  name: string;
  description: string;
  price: number;
  available: boolean;
  image: string;
}

export interface ModalEditFoodProps {
  editingFood: Food;
  isOpen: boolean;
  handleUpdateFood: (food: Food) => void;
  setIsOpen: () => void;
}
