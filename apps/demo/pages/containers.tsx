// External libraries
import Head from "next/head";
import Image from "next/image";
import { FC, useState } from "react";

// SK Components
import {
  Actions,
  Avatar,
  Button,
  Card,
  CardContent,
  CardHeader,
  Columns,
  ContentLayout,
  Dialog,
  DialogContent,
  DialogHeader,
  FullscreenDialog,
  Header,
  List,
  ListItem,
  ListItemContent,
  MaterialIcon,
  Progress,
  Section,
  SegmentedButton,
  TextField,
} from "@suankularb-components/react";

// Utilities
import { CustomPage } from "@/utils/types";

const AvatarSection: FC = () => (
  <Section>
    <Header>Avatar</Header>
    <div className="flex flex-row gap-2">
      <Avatar>ST</Avatar>
      <Avatar>
        <Image src="/images/sadudee.png" width={40} height={40} alt="" />
      </Avatar>
      <Avatar />
    </div>
  </Section>
);

const CardSection: FC = () => (
  <Section>
    <Header>Card</Header>
    <Columns columns={3}>
      <Card appearance="elevated">
        <CardHeader
          icon={<MaterialIcon icon="person" />}
          title="Atipol Sukrisadanon"
          subtitle="Foreign Languages teacher"
        />
        <Image
          src="/images/atipol.jpg"
          width={800}
          height={533}
          alt="Atipol Sukrisadanon"
          priority
          className="h-auto w-full"
        />
        <CardContent>
          <p>
            Atipol Sukrisadanon is arguably one of the teachers in Suankularb
            Wittayalai School.
          </p>
          <Actions>
            <Button appearance="filled">Learn more</Button>
          </Actions>
        </CardContent>
      </Card>
    </Columns>
  </Section>
);

const ColumnsSection: FC = () => (
  <Section>
    <Header>Columns</Header>
    <Columns columns={6}>
      {[...Array(12)].map((_, i) => (
        <Card
          key={i}
          appearance="outlined"
          className="skc-headline-large !grid h-20 place-content-center"
        >
          {i + 1}
        </Card>
      ))}
    </Columns>
  </Section>
);

const DialogSection: FC = () => {
  const [showRemStudents, setShowRemStudents] = useState<boolean>(false);
  const [showReport, setShowReport] = useState<boolean>(false);

  const [view, setView] = useState<"bug-report" | "feature-request">(
    "bug-report"
  );
  const [issueTitle, setIssueTitle] = useState<string>("");
  const [issueDesc, setIssueDesc] = useState<string>("");
  const [issueExpect, setIssueExpect] = useState<string>("");

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
        width={420}
        onClose={() => setShowReport(false)}
      >
        <p>
          If you have a GitHub account, please consider reporting issues on our{" "}
          <a
            href="https://github.com/suankularb-wittayalai-school/mysk-frontend"
            target="_blank"
            rel="noreferrer"
          >
            GitHub repository
          </a>
          . Thank you!
        </p>
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
        <div className="flex flex-col gap-12 pb-12">
          <TextField
            appearance="outlined"
            label="Title"
            behavior="single-line"
            helperMsg="What is your issue?"
            value={issueTitle}
            onChange={setIssueTitle}
          />
          <TextField
            appearance="outlined"
            label="Description"
            behavior="textarea"
            helperMsg="A clear and concise description."
            value={issueDesc}
            onChange={setIssueDesc}
          />
          <TextField
            appearance="outlined"
            label="Expectation"
            behavior="textarea"
            helperMsg="What you expected to have happened/think should be
              implemented."
            value={issueExpect}
            onChange={setIssueExpect}
          />
        </div>
      </FullscreenDialog>
    </Section>
  );
};

const HeaderSection: FC = () => (
  <Section>
    <Header level={2} icon={<MaterialIcon icon="assignment" />}>
      Header level 2
    </Header>
    <Section>
      <Header level={3} icon={<MaterialIcon icon="assignment" />}>
        Header level 3
      </Header>
      <Section>
        <Header level={4} icon={<MaterialIcon icon="assignment" />}>
          Header level 4
        </Header>
        <Section>
          <Header level={5} icon={<MaterialIcon icon="assignment" />}>
            Header level 5
          </Header>
          <Section>
            <Header level={6} icon={<MaterialIcon icon="assignment" />}>
              Header level 6
            </Header>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Molestiae recusandae voluptates dolorum natus, deserunt
              exercitationem voluptatibus numquam accusamus voluptatum, eaque
              consectetur est maxime asperiores rem deleniti accusantium iste ex
              quisquam!
            </p>
          </Section>
        </Section>
      </Section>
    </Section>
  </Section>
);

const ListSection: FC = () => (
  <Section>
    <Header>List</Header>
    <List divided>
      <ListItem align="center" lines={3} stateLayerEffect>
        <Image src="/images/burger.png" width={56} height={56} alt="" />
        <ListItemContent
          overline="Meal of the day"
          title="Fish Burger"
          desc="฿50.00 • Contains fish"
        />
      </ListItem>
      <ListItem align="center" lines={2} stateLayerEffect>
        <Image src="/images/burger.png" width={56} height={56} alt="" />
        <ListItemContent title="Pork Burger" desc="฿50.00" />
      </ListItem>
      <ListItem align="center" lines={2} stateLayerEffect>
        <Image src="/images/burger.png" width={56} height={56} alt="" />
        <ListItemContent title="Beef Burger" desc="฿50.00 • Contains beef" />
      </ListItem>
    </List>
  </Section>
);

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

const ContainersPage: CustomPage = () => {
  return (
    <>
      <Head>
        <title>Containers - SK Components</title>
      </Head>
      <ContentLayout>
        <AvatarSection />
        <CardSection />
        <ColumnsSection />
        <DialogSection />
        <HeaderSection />
        <ListSection />
        <ProgressSection />
      </ContentLayout>
    </>
  );
};

ContainersPage.pageHeader = {
  title: "Containers",
  icon: <MaterialIcon icon="dashboard" />,
  parentURL: "/",
};

export default ContainersPage;
