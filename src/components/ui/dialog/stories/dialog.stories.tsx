import { Meta, StoryFn } from "@storybook/react";
import { useState } from "react";

import { Button } from "../../button";

import { Dialog } from "@/components/ui/dialog";

export default {
  title: "Components/Dialog",
  component: Dialog.Root,
  parameters: { layout: "centered" },
  tags: ["autodocs"],
  argTypes: {
    closeOnClickDim: {
      control: "boolean",
      defaultValue: true,
    },
    bg: {
      control: "select",
      options: ["white", "black"],
      defaultValue: "white",
    },
    direction: {
      control: "select",
      options: ["vertical", "horizontal"],
      defaultValue: "horizontal",
    },
  },
} as Meta<typeof Dialog>;

const Template: StoryFn<typeof Dialog.Root> = (args) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <Button colorScheme="black" onClick={() => setIsOpen(true)}>
        Toggle Dialog
      </Button>
      <Dialog.Root
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        bg={args.bg}
        closeOnClickDim={args.closeOnClickDim}
      >
        <Dialog.Content>
          <Dialog.Title>Example Dialog</Dialog.Title>
          <Dialog.Desc>Here's some content in the dialog.</Dialog.Desc>
          <Dialog.Footer direction={args.direction}>
            <Button
              variant="solid"
              size="sm"
              width="full"
              onClick={() => alert("Confirmed!")}
            >
              Confirm
            </Button>
            <Button
              variant="outline"
              size="sm"
              width="full"
              onClick={() => setIsOpen(false)}
            >
              Close
            </Button>
          </Dialog.Footer>
        </Dialog.Content>
      </Dialog.Root>
    </>
  );
};

export const Default = Template.bind({});
