// External libraries
import { ComponentProps, FC, useContext, useState } from "react";

// SK Components
import {
  Avatar,
  Button,
  ChipField,
  ChipSet,
  Columns,
  FilterChip,
  FormItem,
  FullscreenDialog,
  InputChip,
  Snackbar,
  TextField,
} from "@suankularb-components/react";

// Contexts
import SnackbarContext from "@/contexts/SnackbarContext";

// Utilities
import { toggleItem } from "@/utils/array";

type PrivateDetail =
  | "citizen-id"
  | "passport-id"
  | "student-id"
  | "age"
  | "atk"
  | "vaccination"
  | "blood-group";

const RequestPrivInfoDialog: FC<
  Pick<ComponentProps<typeof FullscreenDialog>, "open" | "onClose">
> = ({ open, onClose }) => {
  const [form, setForm] = useState({
    purpose: "",
    recipients: [] as string[],
    explaination: "",
    details: [] as PrivateDetail[],
  });
  const [recipientField, setRecipientField] = useState<string>("");

  const { setSnackbar } = useContext(SnackbarContext);

  const toggleDetail = (toToggle: PrivateDetail) =>
    setForm({ ...form, details: toggleItem(toToggle, form.details) });

  return (
    <FullscreenDialog
      open={open}
      title="Request private info"
      action={
        <Button
          appearance="text"
          onClick={() => {
            onClose();
            setSnackbar(<Snackbar>Request sent</Snackbar>);
          }}
        >
          Request
        </Button>
      }
      onClose={onClose}
      width={640}
    >
      <Columns columns={2} className="!gap-y-6">
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
            onChange={(value) => setForm({ ...form, purpose: value as string })}
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
            onChange={(value) =>
              setForm({ ...form, explaination: value as string })
            }
          />
          <FormItem label="Details to request">
            <ChipSet>
              {[
                { value: "citizen-id", label: "Citizen ID" },
                { value: "passport-id", label: "Passport ID" },
                { value: "student-id", label: "Student ID" },
                { value: "age", label: "Age" },
                { value: "atk", label: "ATK" },
                { value: "vaccination", label: "Vaccination" },
                { value: "blood-group", label: "Blood group" },
              ].map((detail) => (
                <FilterChip
                  key={detail.value}
                  selected={form.details.includes(
                    detail.value as PrivateDetail,
                  )}
                  onClick={() =>
                    setForm({
                      ...form,
                      details: toggleItem(detail.value, form.details),
                    })
                  }
                >
                  {detail.label}
                </FilterChip>
              ))}
            </ChipSet>
          </FormItem>
        </div>
      </Columns>
    </FullscreenDialog>
  );
};

export default RequestPrivInfoDialog;
