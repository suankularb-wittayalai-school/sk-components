// External libraries
import Head from "next/head";
import Link from "next/link";

// SK Components
import {
  Actions,
  Button,
  Card,
  CardContent,
  ContentLayout,
  Header,
  MaterialIcon,
  Section,
} from "@suankularb-components/react";

// Utilities
import { CustomPage } from "@/utils/types";

const ExamplePage: CustomPage = () => (
  <>
    <Head>
      <title>Examples - SK Components</title>
    </Head>
    <ContentLayout key="example-page">
      <Section>
        <Card appearance="outlined">
          <CardContent>
            <Header>Lookup</Header>
            <span className="skc-headline-small">
              A list-detail view for finding students
            </span>
          </CardContent>
          <CardContent>
            <p>Lookup showcases the following components:</p>
            <ul className="ml-6 list-disc">
              <li>Split Layout</li>
              <li>Card</li>
              <li>Assist Chip</li>
              <li>Dialog</li>
              <li>Full-screen Dialog</li>
              <li>Search</li>
            </ul>
            <Actions>
              <Button appearance="filled" href="/example/lookup" element={Link}>
                Visit
              </Button>
            </Actions>
          </CardContent>
        </Card>
      </Section>
    </ContentLayout>
  </>
);

ExamplePage.pageHeader = {
  title: "Examples",
  icon: <MaterialIcon icon="capture" />,
};

ExamplePage.childURLs = ["/example/lookup"];

export default ExamplePage;
