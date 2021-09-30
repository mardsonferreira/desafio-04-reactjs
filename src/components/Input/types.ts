import { IconType } from "react-icons/lib";

export interface Props {
    name: string;
    Icon: IconType;
}

export type InputProps = JSX.IntrinsicElements['input'] & Props;
