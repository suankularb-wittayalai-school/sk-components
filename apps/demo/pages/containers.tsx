// External libraries
import Head from "next/head";
import Image from "next/image";

// SK Components
import {
  Actions,
  Button,
  Card,
  CardContent,
  CardHeader,
  Columns,
  ContentLayout,
  Header,
  List,
  ListItem,
  ListItemContent,
  MaterialIcon,
  Section,
} from "@suankularb-components/react";

// Utilities
import { CustomPage } from "@/utils/types";

const ContainersPage: CustomPage = () => (
  <>
    <Head>
      <title>Containers - SK Components</title>
    </Head>
    <ContentLayout>
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
                Atipol Sukrisadanon is arguably one of the teachers in
                Suankularb Wittayalai School.
              </p>
              <Actions>
                <Button appearance="filled">Learn more</Button>
              </Actions>
            </CardContent>
          </Card>
        </Columns>
      </Section>
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
      <Section>
        <Header level={2} icon={<MaterialIcon icon="assignment" />}>
          Header level 2
        </Header>
        <Header level={3} icon={<MaterialIcon icon="assignment" />}>
          Header level 3
        </Header>
        <Header level={4} icon={<MaterialIcon icon="assignment" />}>
          Header level 4
        </Header>
        <Header level={5} icon={<MaterialIcon icon="assignment" />}>
          Header level 5
        </Header>
        <Header level={6} icon={<MaterialIcon icon="assignment" />}>
          Header level 6
        </Header>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Molestiae
          recusandae voluptates dolorum natus, deserunt exercitationem
          voluptatibus numquam accusamus voluptatum, eaque consectetur est
          maxime asperiores rem deleniti accusantium iste ex quisquam!
        </p>
      </Section>
      <Section>
        <Header>List</Header>
        <List divided>
          <ListItem align="center" lines={3}>
            <Image src="/images/burger.png" width={56} height={56} alt="" />
            <ListItemContent
              overline="Meal of the day"
              title="Fish Burger"
              desc="฿50.00 • Contains fish"
            />
          </ListItem>
          <ListItem align="center" lines={2}>
            <Image src="/images/burger.png" width={56} height={56} alt="" />
            <ListItemContent title="Pork Burger" desc="฿50.00" />
          </ListItem>
          <ListItem align="center" lines={2}>
            <Image src="/images/burger.png" width={56} height={56} alt="" />
            <ListItemContent
              title="Beef Burger"
              desc="฿50.00 • Contains beef"
            />
          </ListItem>
        </List>
      </Section>
    </ContentLayout>
  </>
);

ContainersPage.pageHeader = {
  title: "Containers",
  icon: <MaterialIcon icon="dashboard" />,
  parentURL: "/",
};

export default ContainersPage;
