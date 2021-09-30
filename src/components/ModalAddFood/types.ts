export interface AddFood {
  name: string;
  description: string;
  price: number;
  image: string;
}

export interface ModalAddFoodProps {
  isOpen: boolean;
  handleAddFood: (food: AddFood) => void;
  setIsOpen: () => void;
}
