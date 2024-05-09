import { StoryFn, Meta } from "@storybook/react";

import Button from "../button";
import { ButtonProps } from "../types";

import QMark from "@/assets/icons/ic_question-mark.svg?react";

export default {
  title: "Components/Button",
  component: Button,
  parameters: { layout: "centered" },
  tags: ["autodocs"],
  argTypes: {
    colorScheme: {
      control: "select",
      options: ["orange", "blue", "pink", "black"],
    },
    size: {
      control: "select",
      options: ["xs", "sm", "md", "lg"],
    },
    variant: {
      control: "select",
      options: ["solid", "outline", "ghost", "link"],
    },
    radius: {
      control: "select",
      options: ["rectangle", "pill"],
    },
    disabled: {
      control: "boolean",
    },
    width: {
      control: "select",
      options: ["full", "auto", 80, 90, 100, 120],
    },
  },
} as Meta;

const Template: StoryFn<ButtonProps<"button">> = (args) => <Button {...args} />;

export const SolidButton = Template.bind({});
SolidButton.args = {
  children: "Button",
  colorScheme: "orange",
  variant: "solid",
  size: "sm",
  radius: "rectangle",
  width: "auto",
  typo: "button5",
};

export const OutlineButton = Template.bind({});
OutlineButton.args = {
  ...SolidButton.args,
  children: "Button",
  variant: "outline",
  colorScheme: "blue",
};

export const WithLeftAddon = Template.bind({});
WithLeftAddon.args = {
  ...SolidButton.args,
  leftAddon: <QMark fill="white" />,
  children: "With Left Addon",
  variant: "outline",
};

export const Disabled = Template.bind({});
Disabled.args = {
  ...SolidButton.args,
  disabled: true,
  children: "Disabled Button",
};
