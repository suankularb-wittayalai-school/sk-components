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
  SplitLayout,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  TextField,
} from "@suankularb-components/react";

// Utilities
import { CustomPage } from "@/utils/types";
import Link from "next/link";

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
  const [understood, setUnderstood] = useState<boolean>(false);

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
        width={820}
        onClose={() => setShowReport(false)}
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
          </div>
        </Columns>
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

const SplitLayoutSection: FC = () => (
  <Section>
    <Header>Split Layout</Header>
    <SplitLayout ratio={[4, 8]}>
      <Card
        appearance="outlined"
        className="skc-headline-large !grid place-content-center"
      >
        Left
      </Card>
      <Card
        appearance="outlined"
        className="skc-headline-large !grid place-content-center"
      >
        Right
      </Card>
    </SplitLayout>
    <Actions>
      <Button appearance="outlined" href="/example/lookup" element={Link}>
        See full demo
      </Button>
    </Actions>
  </Section>
);

const ListSection: FC = () => {
  const [cart, setCart] = useState<string[]>(["fish-burger"]);

  function modifyCart(item: string) {
    if (cart.includes(item))
      setCart(cart.filter((cartItem) => item !== cartItem));
    else setCart([...cart, item]);
  }

  return (
    <Section>
      <Header>List</Header>
      <List divided>
        {/* Select all */}
        <ListItem align="center" lines={1}>
          <ListItemContent title="Select all" />
          <Checkbox
            value={cart.length === 3 ? true : cart.length === 0 ? false : null}
            tristate
            onChange={(value) =>
              setCart(
                value ? ["fish-burger", "pork-burger", "beef-burger"] : []
              )
            }
            inputAttr={{ "aria-labelledby": "list-item-select-all" }}
          />
        </ListItem>

        {/* Menu */}
        <ListItem align="center" lines={3}>
          <Image src="/images/burger.png" width={56} height={56} alt="" />
          <ListItemContent
            overline="Meal of the day"
            title="Fish Burger"
            desc="฿50.00 • Contains fish"
          />
          <Checkbox
            value={cart.includes("fish-burger")}
            onChange={() => modifyCart("fish-burger")}
            inputAttr={{ "aria-labelledby": "list-item-fish-burger" }}
          />
        </ListItem>
        <ListItem align="center" lines={2}>
          <Image src="/images/burger.png" width={56} height={56} alt="" />
          <ListItemContent title="Pork Burger" desc="฿50.00" />
          <Checkbox
            value={cart.includes("pork-burger")}
            onChange={() => modifyCart("pork-burger")}
            inputAttr={{ "aria-labelledby": "list-item-pork-burger" }}
          />
        </ListItem>
        <ListItem align="center" lines={2}>
          <Image src="/images/burger.png" width={56} height={56} alt="" />
          <ListItemContent title="Beef Burger" desc="฿50.00 • Contains beef" />
          <Checkbox
            value={cart.includes("beef-burger")}
            onChange={() => modifyCart("beef-burger")}
            inputAttr={{ "aria-labelledby": "list-item-beef-burger" }}
          />
        </ListItem>
      </List>
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

const TableSection: FC = () => (
  <Section>
    <Header>Table</Header>
    <Table contentWidth={480}>
      <TableHead>
        <TableRow>
          <TableCell header>Test date</TableCell>
          <TableCell header>Method</TableCell>
          <TableCell header>Result</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        <TableRow>
          <TableCell>Jan 8, 2023</TableCell>
          <TableCell>ATK via saliva</TableCell>
          <TableCell>Negative</TableCell>
        </TableRow>
        <TableRow>
          <TableCell>Jan 1, 2023</TableCell>
          <TableCell>RT-PCR</TableCell>
          <TableCell>Positive</TableCell>
        </TableRow>
        <TableRow>
          <TableCell>Jan 1, 2023</TableCell>
          <TableCell>ATK via saliva</TableCell>
          <TableCell>Positive</TableCell>
        </TableRow>
      </TableBody>
    </Table>
  </Section>
);

const ContainersPage: CustomPage = () => (
  <>
    <Head>
      <title>Containers - SK Components</title>
    </Head>
    <ContentLayout key="containers-page">
      <AvatarSection />
      <CardSection />
      <ColumnsSection />
      <DialogSection />
      <HeaderSection />
      <SplitLayoutSection />
      <ListSection />
      <ProgressSection />
      <TableSection />
    </ContentLayout>
  </>
);

ContainersPage.pageHeader = {
  title: "Containers",
  icon: <MaterialIcon icon="dashboard" />,
  parentURL: "/",
};

export default ContainersPage;
