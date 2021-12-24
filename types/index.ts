import { ReactNode } from "react";

export interface ImenuOption {
  label: string;
  href: string;
  id: number;
}

export interface IMenuProps {
  options: ImenuOption[];
  className?: string;
  optionComponent: (props: ImenuOption) => ReactNode;
}

export interface IHomeProps {
  options: ImenuOption[];
}
