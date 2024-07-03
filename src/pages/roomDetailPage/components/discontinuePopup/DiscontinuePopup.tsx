import { Button } from "@/components/ui/button";
import { Dialog, type DialogProps } from "@/components/ui/dialog";

interface DiscontinuePopupProps extends DialogProps {
  action: () => void;
}

const DiscontinuePopup = ({
  isOpen,
  onClose,
  action,
}: DiscontinuePopupProps) => {
  return (
    <Dialog.Root isOpen={isOpen} onClose={onClose}>
      <Dialog.Content>
        <Dialog.Title>판매를 취소할까요?</Dialog.Title>
        <Dialog.Desc>
          판매를 취소하면 판매내역을
          <br />
          조회하거나 복구할 수 없어요.
        </Dialog.Desc>
        <Dialog.Footer direction="vertical">
          <Button variant="solid" size="sm" width="full" onClick={action}>
            네, 취소할게요
          </Button>
          <Button variant="outline" size="sm" width="full" onClick={onClose}>
            아니요, 그냥 둘래요
          </Button>
        </Dialog.Footer>
      </Dialog.Content>
    </Dialog.Root>
  );
};

export default DiscontinuePopup;
