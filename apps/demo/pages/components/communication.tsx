// External libraries
import Head from "next/head";
import { FC } from "react";

// SK Components
import {
  Button,
  Columns,
  ContentLayout,
  Header,
  MaterialIcon,
  Progress,
  Section,
  Snackbar,
} from "@suankularb-components/react";

// Utilities
import { CustomPage } from "@/utils/types";

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
    <ContentLayout key="communication-page">
      <ProgressSection />
      <SnackbarSection />
    </ContentLayout>
  </>
);

CommunicationPage.pageHeader = {
  title: "Communication",
  icon: <MaterialIcon icon="swap_horiz" />,
  parentURL: "/components",
};

export default CommunicationPage;
