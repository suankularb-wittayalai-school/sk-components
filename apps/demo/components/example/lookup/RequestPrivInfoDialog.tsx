// External libraries
import { FC, useState } from "react";

// SK Components
import {
  Avatar,
  Button,
  ChipField,
  ChipSet,
  Columns,
  FormItem,
  FullscreenDialog,
  FullscreenDialogProps,
  InputChip,
  TextField,
} from "@suankularb-components/react";

const RequestPrivInfoDialog: FC<
  Pick<FullscreenDialogProps, "open" | "onClose">
> = ({ open, onClose }) => {
  const [form, setForm] = useState({
    purpose: "",
    recipients: [],
    explaination: "",
  });
  const [recipientField, setRecipientField] = useState<string>("");

  return (
    <FullscreenDialog
      open={open}
      title="Request private info"
      action={
        <Button appearance="text" onClick={onClose}>
          Request
        </Button>
      }
      onClose={onClose}
      width={640}
    >
      <Columns columns={2}>
        <div className="flex flex-col gap-4">
          <p id="dialog-request-private-info">
            As a teacher, you can ask Siravit Phokeed for more of their
            information we deemed private.
          </p>
          <p>
            They will see this request—what you need and who you are—and can
            decide to accept and give you this information, or reject it.
          </p>
          <p>
            The request will expire in 30 days. You’ll have access to the
            information for 60 days after your request is accepted.
          </p>
        </div>
        <div className="flex flex-col gap-6">
          <TextField
            appearance="outlined"
            label="Request purpose"
            behavior="single-line"
            required
            value={form.purpose}
            onChange={(value) => setForm({ ...form, purpose: value })}
          />
          <ChipField
            label="Send request to"
            placeholder="Enter name/ID"
            value={recipientField}
            onChange={setRecipientField}
          >
            <ChipSet>
              <InputChip avatar={<Avatar />} onDelete={() => {}}>
                Siravit P.
              </InputChip>
            </ChipSet>
          </ChipField>
          <TextField
            appearance="outlined"
            label="Explaination"
            behavior="multi-line"
            value={form.explaination}
            onChange={(value) => setForm({ ...form, explaination: value })}
          />
          {/* TODO: Select information to request (demo Form Item, Chip Set, Filter Chip) */}
        </div>
      </Columns>
    </FullscreenDialog>
  );
};

export default RequestPrivInfoDialog;
