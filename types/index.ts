import { ReactNode } from 'react';

export interface ImenuOption {
    label: string
    href: string
    id: number
    active: boolean
}

export interface IMenuState {
    options: ImenuOption[];
}

export interface IMenuProps {
    options: ImenuOption[];
    className?: string
    optionComponent: (props: ImenuOption) => ReactNode
}

export interface IHomeProps {
    options: ImenuOption[]
}

