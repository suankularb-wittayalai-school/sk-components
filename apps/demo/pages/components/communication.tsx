// External libraries
import Head from "next/head";
import { FC } from "react";

// SK Components
import {
  Button,
  ContentLayout,
  Header,
  MaterialIcon,
  Section,
  Snackbar,
} from "@suankularb-components/react";

// Utilities
import { CustomPage } from "@/utils/types";

const SnackbarSection: FC = () => (
  <Section>
    <Header>Snackbar</Header>
    <p>
      You can find Snackbars fully working in Actions. Click/Tap in the
      full-width “Add” Button.
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
