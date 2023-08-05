// External libraries
import Head from "next/head";
import { FC, useState } from "react";

// SK Components
import {
  Actions,
  Avatar,
  Button,
  Checkbox,
  Columns,
  ContentLayout,
  Dialog,
  DialogContent,
  DialogHeader,
  FormItem,
  FullscreenDialog,
  Header,
  List,
  ListItem,
  ListItemContent,
  MaterialIcon,
  Progress,
  Section,
  SegmentedButton,
  Snackbar,
  TextField,
} from "@suankularb-components/react";

// Internal components
import PageHeader from "@/components/PageHeader";

// Utilities
import { CustomPage } from "@/utils/types";

const DialogSection: FC = () => {
  const [showRemStudents, setShowRemStudents] = useState<boolean>(false);
  const [showReport, setShowReport] = useState<boolean>(false);
  const [understood, setUnderstood] = useState<boolean>(false);

  const [view, setView] = useState<"bug-report" | "feature-request">(
    "bug-report"
  );
  const [issueTitle, setIssueTitle] = useState<string>("");
  const [issueDesc, setIssueDesc] = useState<string>("");
  const [issueExpect, setIssueExpect] = useState<string>("");
  const [showDiscard, setShowDiscard] = useState<boolean>(false);

  return (
    <Section>
      <Header>Dialog</Header>

      {/* Dialog triggers */}
      <Actions align="left">
        <Button
          appearance="filled"
          icon={<MaterialIcon icon="delete" />}
          dangerous
          onClick={() => setShowRemStudents(true)}
        >
          Remove students
        </Button>
        <Button
          appearance="outlined"
          icon={<MaterialIcon icon="bug_report" />}
          onClick={() => setShowReport(true)}
        >
          Report issue
        </Button>
      </Actions>

      {/* Remove students Dialog */}
      <Dialog open={showRemStudents} onClose={() => setShowRemStudents(false)}>
        <DialogHeader
          title="Remove students?"
          desc="The following students will no longer have access to the
            organization “Kornor.”"
        />
        <DialogContent>
          <List divided>
            <ListItem align="center" lines={1}>
              <Avatar>ST</Avatar>
              <ListItemContent title="Sadudee Theparree" />
            </ListItem>
            <ListItem align="center" lines={1}>
              <Avatar>TL</Avatar>
              <ListItemContent title="Tempoom Leelacharoen" />
            </ListItem>
          </List>
        </DialogContent>
        <Actions>
          <Button appearance="text" onClick={() => setShowRemStudents(false)}>
            Cancel
          </Button>
          <Button appearance="text" onClick={() => setShowRemStudents(false)}>
            Remove
          </Button>
        </Actions>
      </Dialog>

      {/* Report issue Full-screen Dialog */}
      <FullscreenDialog
        open={showReport}
        title="Report an issue"
        action={
          <Button appearance="text" onClick={() => setShowReport(false)}>
            Submit
          </Button>
        }
        width={820}
        onClose={() => setShowDiscard(true)}
      >
        <Columns columns={2}>
          <div className="flex flex-col gap-4">
            <p id="dialog-report-an-issue">
              If you have a GitHub account, please consider reporting issues on
              our{" "}
              <a
                href="https://github.com/suankularb-wittayalai-school/mysk-frontend"
                target="_blank"
                rel="noreferrer"
              >
                GitHub repository
              </a>
              . Thank you!
            </p>
            <FormItem
              label="I have already queried the issues page and cannot find my
                issue."
            >
              <Checkbox value={understood} onChange={setUnderstood} />
            </FormItem>
            <SegmentedButton alt="View" full className="pb-4">
              <Button
                appearance="outlined"
                selected={view === "bug-report"}
                onClick={() => setView("bug-report")}
              >
                Bug report
              </Button>
              <Button
                appearance="outlined"
                selected={view === "feature-request"}
                onClick={() => setView("feature-request")}
              >
                Feature request
              </Button>
            </SegmentedButton>
          </div>
          <div>
            <div className="flex flex-col gap-12 pb-12">
              <TextField<string>
                appearance="outlined"
                label="Title"
                behavior="single-line"
                helperMsg="What is your issue?"
                value={issueTitle}
                onChange={setIssueTitle}
              />
              <TextField<string>
                appearance="outlined"
                label="Description"
                behavior="textarea"
                helperMsg="A clear and concise description."
                value={issueDesc}
                onChange={setIssueDesc}
              />
              <TextField<string>
                appearance="outlined"
                label="Expectation"
                behavior="textarea"
                helperMsg="What you expected to have happened/think should be
                  implemented."
                value={issueExpect}
                onChange={setIssueExpect}
              />
            </div>
          </div>
        </Columns>
      </FullscreenDialog>

      <Dialog
        open={showDiscard}
        width={270}
        onClose={() => setShowDiscard(false)}
      >
        <DialogHeader desc="Discard draft?" />
        <Actions>
          <Button appearance="text" onClick={() => setShowDiscard(false)}>
            Keep editing
          </Button>
          <Button
            appearance="text"
            dangerous
            onClick={() => {
              setShowDiscard(false);
              setShowReport(false);
            }}
          >
            Discard
          </Button>
        </Actions>
      </Dialog>
    </Section>
  );
};

const ProgressSection: FC = () => (
  <Section>
    <Header>Progress</Header>
    <Columns columns={2}>
      <Progress
        appearance="linear"
        alt="Linear determinate Progress demo"
        value={70}
        visible
      />
      <Progress
        appearance="linear"
        alt="Linear indeterminate Progress demo"
        visible
      />
      <Progress
        appearance="circular"
        alt="Circular determinate Progress demo"
        value={70}
        visible
      />
      <Progress
        appearance="circular"
        alt="Circular indeterminate Progress demo"
        visible
      />
    </Columns>
  </Section>
);

const SnackbarSection: FC = () => (
  <Section>
    <Header>Snackbar</Header>
    <p>
      You can find Snackbars fully working in Actions. Click/Tap the full-width
      “Add” Button.
    </p>
    <Snackbar open>Task failed successfully</Snackbar>
    <Snackbar action={<Button appearance="text">Undo</Button>} open>
      Task failed successfully
    </Snackbar>
    <Snackbar open>
      Lorem ipsum dolor, sit amet consectetur adipisicing elit nesciunt quam
    </Snackbar>
    <Snackbar action={<Button appearance="text">Retry</Button>} open>
      Lorem ipsum dolor, sit amet consectetur adipisicing elit nesciunt quam
    </Snackbar>
  </Section>
);

const CommunicationPage: CustomPage = () => (
  <>
    <Head>
      <title>Communication - SK Components</title>
    </Head>
    <PageHeader parentURL="/components">Communication</PageHeader>
    <ContentLayout key="communication-page">
      <DialogSection />
      <ProgressSection />
      <SnackbarSection />
    </ContentLayout>
  </>
);

CommunicationPage.parentURL = "/components";

export default CommunicationPage;
