import { ReactNode } from "react";

export interface ModalProps {
  isOpen: boolean;
  children: ReactNode;
  setIsOpen: () => void;
}
