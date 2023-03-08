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
        <Columns columns={2} className="!items-stretch sm:!gap-6">
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
              <Actions>
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
            <CardContent className="flex-grow">
              <p className="flex-grow">
                Form Group, Form Item, Search, Select, Switch, Text Field
              </p>
              <Actions>
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
              icon={<MaterialIcon icon="swap_horizaontal" />}
              title="Communication"
            />
            <CardContent className="flex-grow">
              <p className="flex-grow">
                Dialog, Dialog Header, Dialog Content, Full-screen Dialog,
                Progress, Snackbar
              </p>
              <Actions>
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

          {/* Dashboard */}
          <Card appearance="outlined">
            <CardHeader
              icon={<MaterialIcon icon="dashboard" />}
              title="Containers"
            />
            <CardContent className="flex-grow">
              <p className="flex-grow">
                Card, Card Header, Card Content, Columns, Data Table, Data Table
                Search, Data Table Filters, Data Table Content, Data Table Head,
                Data Table Body, Data Table Pagination, Divider, List, List
                Item, List Item Content, Table, Table Head, Table Body, Table
                Foot, Table Row, Table Cell
              </p>
              <Actions>
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
