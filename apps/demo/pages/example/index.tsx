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
  Text,
} from "@suankularb-components/react";

// Internal components
import PageHeader from "@/components/PageHeader";

// Utilities
import { CustomPage } from "@/utils/types";

const ExamplePage: CustomPage = () => (
  <>
    <Head>
      <title>Examples - SK Components</title>
    </Head>
    <PageHeader>Examples</PageHeader>
    <ContentLayout key="example-page">
      <Section>
        <Card appearance="outlined">
          <CardContent>
            <Header>Lookup</Header>
            <Text type="headline-small">
              A list-detail view for finding students
            </Text>
          </CardContent>
          <CardContent>
            <p>Lookup showcases the following components:</p>
            <p>
              Card, Input Chip, Assist Chip, Filter Chip, Chip Field, Chip Set,
              Dialog, Full-screen Dialog, Form Item, Content Layout, Vertical
              Split Layout, Search, Snackbar
            </p>
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

ExamplePage.childURLs = ["/example/lookup"];

export default ExamplePage;
