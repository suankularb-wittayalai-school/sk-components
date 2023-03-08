// External libraries
import { FC } from "react";

// SK Components
import {
  Actions,
  Button,
  Dialog,
  DialogContent,
  DialogHeader,
  DialogProps,
  MaterialIcon,
} from "@suankularb-components/react";

const ShareDialog: FC<Pick<DialogProps, "open" | "onClose">> = ({
  open,
  onClose,
}) => (
  <Dialog open={open} onClose={onClose} width={312}>
    <DialogHeader desc="Share Siravit Phokeed…" />
    <DialogContent className="mx-6 flex flex-col gap-4">
      {/* Save to contacts */}
      <div className="flex flex-col gap-2">
        <Actions align="full">
          <Button
            appearance="outlined"
            icon={<MaterialIcon icon="contact_page" />}
            onClick={onClose}
          >
            Save to contacts
          </Button>
        </Actions>
        <p className="skc-label-small text-on-surface-variant">
          Save a .vcf file to see this person as a contact on your device.
        </p>
      </div>

      {/* Copy link */}
      <div className="flex flex-col gap-2">
        <Actions align="full">
          <Button
            appearance="outlined"
            icon={<MaterialIcon icon="link" />}
            onClick={onClose}
          >
            Copy link
          </Button>
        </Actions>
        <p className="skc-label-small text-on-surface-variant">
          Get a link to this page.
        </p>
      </div>

      {/* Print */}
      <div className="flex flex-col gap-2">
        <Actions align="full">
          <Button
            appearance="outlined"
            icon={<MaterialIcon icon="print" />}
            onClick={onClose}
          >
            Print
          </Button>
        </Actions>
        <p className="skc-label-small text-on-surface-variant">
          Print out the details of this person. Private info you have access to
          is also included.
        </p>
      </div>
    </DialogContent>
    <Actions>
      <Button appearance="text" onClick={onClose}>
        Done
      </Button>
    </Actions>
  </Dialog>
);

export default ShareDialog;
