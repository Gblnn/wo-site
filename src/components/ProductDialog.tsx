import { DialogContent } from "@radix-ui/react-dialog";
import { Dialog, DialogHeader } from "./ui/dialog";

interface Props {
  isOpen: boolean;
  onClose: () => void;
}

export default function ProductDialog(props: Props) {
  return (
    <Dialog open={props.isOpen} onOpenChange={props.onClose}>
      <DialogContent>
        <DialogHeader>Product Catalogue</DialogHeader>
      </DialogContent>
    </Dialog>
  );
}
