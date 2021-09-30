import React from "react";

import { IconBaseProps } from "react-icons/lib";

export interface Props {
  name: string;
  icon?: React.ComponentType<IconBaseProps>;
}

export type InputProps = JSX.IntrinsicElements["input"] & Props;
