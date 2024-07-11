import { type CSSProperties, type ReactElement } from "react";

import { type PolymorphicComponentProp } from "../polymorphic";

import { type TypoKeys } from "@/styles/theme";

export type ButtonSizeSet = "xs" | "sm" | "md" | "lg";
export type ButtonVariants = "solid" | "outline" | "ghost" | "link";
export type ButtonColorScheme = "orange" | "blue" | "pink" | "black";
export type ButtonRadii = "rectangle" | "pill" | number;
export type ButtonWidth = "auto" | "full" | number;

export type ButtonProps<C extends React.ElementType> = PolymorphicComponentProp<
  C,
  {
    variant?: ButtonVariants;
    radius?: ButtonRadii;
    size?: ButtonSizeSet;
    colorScheme?: ButtonColorScheme;
    leftAddon?: ReactElement;
    rightAddon?: ReactElement;
    addonStyles?: CSSProperties;
    width?: ButtonWidth;
    typo?: TypoKeys;
  }
>;
