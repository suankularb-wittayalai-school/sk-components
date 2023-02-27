// External libraries
import Head from "next/head";
import Image from "next/image";
import { FC, useState } from "react";

// SK Components
import {
  Actions,
  Button,
  Card,
  CardContent,
  CardHeader,
  Columns,
  ContentLayout,
  Dialog,
  DialogContent,
  DialogHeader,
  Header,
  List,
  ListItem,
  ListItemContent,
  MaterialIcon,
  Section,
} from "@suankularb-components/react";

// Utilities
import { CustomPage } from "@/utils/types";

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
          className="w-full"
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
  const [removeStudentsOpen, setRemoveStudentsOpen] = useState<boolean>(false);
  return (
    <Section>
      <Header>Dialog</Header>

      {/* Dialog triggers */}
      <Actions align="left">
        <Button
          appearance="filled"
          icon={<MaterialIcon icon="delete" />}
          dangerous
          onClick={() => setRemoveStudentsOpen(true)}
        >
          Remove students
        </Button>
        <Button appearance="outlined" icon={<MaterialIcon icon="bug_report" />}>
          Report issue
        </Button>
      </Actions>

      {/* Remove Students Dialog */}
      <Dialog
        open={removeStudentsOpen}
        onClose={() => setRemoveStudentsOpen(false)}
      >
        <DialogHeader
          title="Remove students?"
          desc="The following students will no longer have access to the
            organization “Kornor.”"
        />
        <DialogContent>
          <List divided>
            <ListItem align="center" lines={1}>
              <ListItemContent title="Sadudee Theparree" />
            </ListItem>
            <ListItem align="center" lines={1}>
              <ListItemContent title="Tempoom Leelacharoen" />
            </ListItem>
          </List>
        </DialogContent>
        <Actions>
          <Button
            appearance="text"
            onClick={() => setRemoveStudentsOpen(false)}
          >
            Cancel
          </Button>
          <Button
            appearance="text"
            onClick={() => setRemoveStudentsOpen(false)}
          >
            Remove
          </Button>
        </Actions>
      </Dialog>
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

const ContainersPage: CustomPage = () => {
  return (
    <>
      <Head>
        <title>Containers - SK Components</title>
      </Head>
      <ContentLayout>
        <CardSection />
        <ColumnsSection />
        <DialogSection />
        <HeaderSection />
        <ListSection />
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
