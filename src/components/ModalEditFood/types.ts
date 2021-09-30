export interface EditFood {
  name: string;
  description: string;
  price: number;
  image: string;
}

export interface ModalEditFoodProps {
  editingFood: EditFood;
  isOpen: boolean;
  handleUpdateFood: (food: EditFood) => void;
  setIsOpen: () => void;
}
