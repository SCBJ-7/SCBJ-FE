import { Meta, StoryFn } from "@storybook/react";
import { useState } from "react";

import { Button } from "../../button";
import MiniAlertDialog from "../templates/mini-alert-dialog";

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

const DefaultTemplate: StoryFn<typeof Dialog.Root> = (args) => {
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

export const Default = DefaultTemplate.bind({});

const MiniAlertTemplate: StoryFn<typeof Dialog.Root> = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <Button colorScheme="black" onClick={() => setIsOpen(true)}>
        Toggle Dialog
      </Button>
      <MiniAlertDialog
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        title={"판매를 취소할까요?"}
        description={
          "판매를 취소하시면 판매내역을 조회하거나 복구할 수 없어요."
        }
        actionFn={() => alert("확인했습니다")}
        actionText={"확인"}
        closeFn={() => setIsOpen(false)}
        closeText={"닫기"}
      />
    </>
  );
};

export const MiniAlert = MiniAlertTemplate.bind({});
