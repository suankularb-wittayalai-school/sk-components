// External libraries
import Head from "next/head";

// SK Components
import {
  Card,
  Columns,
  ContentLayout,
  Header,
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
    </ContentLayout>
  </>
);

ContainersPage.pageHeader = {
  title: "Containers",
  icon: <MaterialIcon icon="dashboard" />,
  parentURL: "/",
};

export default ContainersPage;
