import { Meta, StoryFn } from "@storybook/react";
import { useState } from "react";

import { BottomSheet } from "..";
import { Button } from "../../button";

export default {
  title: "Components/BottomSheet",
  component: BottomSheet.Root,
  parameters: { layout: "centered" },
  tags: ["autodocs"],
  argTypes: {
    closeOnClickDim: {
      control: "boolean",
      defaultValue: true,
    },
    bg: {
      control: "select",
      options: ["white", "black", "gray"],
      defaultValue: "white",
    },
    direction: {
      control: "select",
      options: ["vertical", "horizontal"],
      defaultValue: "horizontal",
    },
  },
} as Meta<typeof BottomSheet>;

const Template: StoryFn<typeof BottomSheet.Root> = (args) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <Button colorScheme="black" onClick={() => setIsOpen(true)}>
        Toggle BottomSheet
      </Button>
      <BottomSheet.Root
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        bg={args.bg}
        closeOnClickDim={args.closeOnClickDim}
      >
        <BottomSheet.Content>
          <BottomSheet.Control />
          <BottomSheet.Title align="center">
            Example Bottom Sheet
          </BottomSheet.Title>
          <p style={{ textAlign: "center", marginTop: "1rem" }}>
            Here's some content in the bottom sheet.
          </p>
          <BottomSheet.Footer direction={args.direction}>
            <Button
              variant="outline"
              size="md"
              width="full"
              onClick={() => setIsOpen(false)}
            >
              Close
            </Button>
            <Button
              variant="solid"
              size="md"
              width="full"
              onClick={() => alert("Confirmed!")}
            >
              Confirm
            </Button>
          </BottomSheet.Footer>
        </BottomSheet.Content>
      </BottomSheet.Root>
    </>
  );
};

export const Default = Template.bind({});
