// External libraries
import Head from "next/head";
import Link from "next/link";

// SK Components
import {
  Actions,
  Button,
  Card,
  CardContent,
  CardHeader,
  Columns,
  ContentLayout,
  MaterialIcon,
  Section,
} from "@suankularb-components/react";

// Utilities
import { CustomPage } from "@/utils/types";

const ComponentsPage: CustomPage = () => (
  <>
    <Head>
      <title>Components - SK Components</title>
    </Head>
    <ContentLayout key="components-page">
      <Section>
        <Columns columns={4}>
          {/* Actions */}
          <Card appearance="outlined">
            <CardHeader
              icon={<MaterialIcon icon="touch_app" />}
              title="Actions"
            />
            <CardContent>
              <p>
                Actions, Button, Segmented Button, Toggle Button, Input Chip,
                Assist Chip, Filter Chip, Suggestion Chip, Chip Set, FAB
              </p>
              <Actions align="full">
                <Button
                  appearance="tonal"
                  href="/components/actions"
                  element={Link}
                >
                  View showcase
                </Button>
              </Actions>
            </CardContent>
          </Card>

          {/* Input */}
          <Card appearance="outlined">
            <CardHeader icon={<MaterialIcon icon="input" />} title="Input" />
            <CardContent>
              <p>Form Group, Form Item, Search, Select, Switch, Text Field</p>
              <Actions align="full">
                <Button
                  appearance="tonal"
                  href="/components/input"
                  element={Link}
                >
                  View showcase
                </Button>
              </Actions>
            </CardContent>
          </Card>

          {/* Communication */}
          <Card appearance="outlined">
            <CardHeader
              icon={<MaterialIcon icon="swap_horiz" />}
              title="Communication"
            />
            <CardContent>
              <p>
                Dialog, Dialog Header, Dialog Content, Full-screen Dialog,
                Progress, Snackbar
              </p>
              <Actions align="full">
                <Button
                  appearance="tonal"
                  href="/components/communication"
                  element={Link}
                >
                  View showcase
                </Button>
              </Actions>
            </CardContent>
          </Card>

          {/* Dashboard */}
          <Card appearance="outlined">
            <CardHeader
              icon={<MaterialIcon icon="dashboard" />}
              title="Containers"
            />
            <CardContent>
              <p>
                Card, Card Header, Card Content, Columns, Data Table, Data Table
                Search, Data Table Filters, Data Table Content, Data Table Head,
                Data Table Body, Data Table Pagination, Divider, List, List
                Item, List Item Content, Table, Table Head, Table Body, Table
                Foot, Table Row, Table Cell
              </p>
              <Actions align="full">
                <Button
                  appearance="tonal"
                  href="/components/containers"
                  element={Link}
                >
                  View showcase
                </Button>
              </Actions>
            </CardContent>
          </Card>
        </Columns>
      </Section>
    </ContentLayout>
  </>
);

ComponentsPage.pageHeader = {
  title: "Components",
  icon: <MaterialIcon icon="widgets" />,
};

ComponentsPage.childURLs = [
  "/components/actions",
  "/components/input",
  "/components/navigation",
  "/components/containers",
];

export default ComponentsPage;
