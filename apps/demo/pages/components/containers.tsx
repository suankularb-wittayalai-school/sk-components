// External libraries
import {
  PaginationState,
  SortingState,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
} from "@tanstack/react-table";

import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

import { FC, useContext, useMemo, useState } from "react";

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
  DataTable,
  DataTableBody,
  DataTableColumnDef,
  DataTableContent,
  DataTableHead,
  DataTablePagination,
  DataTableSearch,
  Header,
  InputChip,
  Interactive,
  List,
  ListItem,
  ListItemContent,
  MaterialIcon,
  Menu,
  MenuItem,
  Section,
  SegmentedButton,
  Snackbar,
  SplitLayout,
  Tab,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  TabsContainer,
  Text,
} from "@suankularb-components/react";

// Internal components
import PageHeader from "@/components/PageHeader";

// Contexts
import SnackbarContext from "@/contexts/SnackbarContext";

// Utilities
import { CustomPage } from "@/utils/types";

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
      <Card appearance="outlined">
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
          className="!grid h-20 place-content-center"
        >
          <Text type="headline-large">{i + 1}</Text>
        </Card>
      ))}
    </Columns>
  </Section>
);

type Task = {
  task: string;
  assignee?: string;
  progress: "not-started" | "in-progress" | "completed" | "blocked";
  dueDate?: Date;
};

const progressMap = {
  "not-started": {
    icon: <MaterialIcon icon="warning" className="!text-on-surface-variant" />,
    label: "Not started",
  },
  "in-progress": {
    icon: <MaterialIcon icon="pending" className="!text-primary" />,
    label: "In progress",
  },
  completed: {
    icon: <MaterialIcon icon="check_circle" className="!text-outline" />,
    label: "Completed",
  },
  blocked: {
    icon: <MaterialIcon icon="block" className="!text-error" />,
    label: "Blocked",
  },
};

const DataTableSection: FC = () => {
  const { setSnackbar } = useContext(SnackbarContext);

  const [globalFilter, setGlobalFilter] = useState<string>("");
  const [sorting, setSorting] = useState<SortingState>([]);
  const [pagination, setPagination] = useState<PaginationState>({
    pageIndex: 0,
    pageSize: 5,
  });

  const data = useMemo<Task[]>(
    () => [
      {
        task: "MySK Data API specification",
        assignee: "Smart W.",
        progress: "in-progress",
        dueDate: new Date(2023, 1, 28),
      },
      {
        task: "MySK Authentication API specification",
        assignee: "Smart W.",
        progress: "not-started",
      },
      { task: "MySK SDK specification", progress: "not-started" },
      { task: "MySK Data API", progress: "blocked" },
      { task: "MySK Authentication API", progress: "blocked" },
      { task: "Lorem ipsum dolor sit amet", progress: "completed" },
      { task: "Eaque animi dolore illo rem", progress: "completed" },
      { task: "Unde ad reiciendis", progress: "blocked" },
      { task: "Excepturi perferendis", progress: "blocked" },
      { task: "Ducimus voluptatibus", progress: "not-started" },
      { task: "Vero repellendus nisi", progress: "completed" },
      { task: "Consequuntur voluptatibus", progress: "completed" },
      { task: "Asperiores, quas quos", progress: "not-started" },
      { task: "Suscipit itaque necessitati", progress: "completed" },
      { task: "Veniam voluptatem ipsam", progress: "completed" },
    ],
    [],
  );

  const columns = useMemo<DataTableColumnDef<Task>[]>(
    () => [
      { accessorKey: "task", header: "Task", thAttr: { className: "w-4/12" } },
      {
        accessorKey: "assignee",
        header: "Assigned to",
        thAttr: { className: "w-3/12" },
        render: (task) =>
          task.assignee ? (
            <InputChip avatar={<Avatar />}>{task.assignee}</InputChip>
          ) : null,
      },
      {
        accessorKey: "progress",
        header: "Progress",
        thAttr: { className: "w-3/12" },
        tdAttr: (task) => ({
          menu: (
            <Menu>
              {Object.keys(progressMap).map((level) => (
                <MenuItem
                  key={level}
                  icon={progressMap[level as keyof typeof progressMap].icon}
                  selected={task.progress === level}
                >
                  {progressMap[level as keyof typeof progressMap].label}
                </MenuItem>
              ))}
            </Menu>
          ),
        }),
        render: (task) => (
          <>
            {progressMap[task.progress].icon}
            <span>{progressMap[task.progress].label}</span>
          </>
        ),
      },
      {
        accessorKey: "dueDate",
        header: "Due date",
        thAttr: { className: "w-2/12" },
        render: (task: any) =>
          (task.dueDate as Date)?.toLocaleDateString("en-US", {
            month: "short",
            day: "numeric",
          }),
      },
    ],
    [],
  );

  const {
    getHeaderGroups,
    getRowModel,
    getPrePaginationRowModel,
    setPageIndex,
  } = useReactTable({
    data,
    columns,
    state: { globalFilter, sorting, pagination },
    onGlobalFilterChange: setGlobalFilter,
    onSortingChange: setSorting,
    onPaginationChange: setPagination,
    getCoreRowModel: getCoreRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
  });

  return (
    <Section>
      <Header>Data Table</Header>
      <DataTable layout>
        <DataTableSearch value={globalFilter} onChange={setGlobalFilter} />
        <DataTableContent contentWidth={720}>
          <DataTableHead headerGroups={getHeaderGroups()} />
          <DataTableBody<Task>
            rowModel={getRowModel()}
            rowActions={(row) => (
              <SegmentedButton alt="Row actions">
                <Button
                  appearance="outlined"
                  icon={<MaterialIcon icon="edit" />}
                  tooltip="Edit this entry"
                  onClick={() =>
                    setSnackbar(<Snackbar>You’re editing {row.task}</Snackbar>)
                  }
                />
                <Button
                  appearance="outlined"
                  icon={<MaterialIcon icon="delete" />}
                  tooltip="Delete this entry"
                  dangerous
                  onClick={() =>
                    setSnackbar(<Snackbar>{row.task} deleted</Snackbar>)
                  }
                />
              </SegmentedButton>
            )}
          />
        </DataTableContent>
        <DataTablePagination
          rowsPerPage={5}
          totalRows={getPrePaginationRowModel().rows.length}
          onChange={(page) => setPageIndex(page - 1)}
        />
      </DataTable>
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

const InteractiveSection: FC = () => (
  <Section>
    <Header>Interactive</Header>
    <Interactive
      shadowEffect
      onClick={() => console.log("Interacted!")}
      className="bg-secondary-container text-on-secondary-container
        state-layer:bg-on-secondary-container flex h-14 w-24 flex-col
        rounded-sm px-4 py-2 text-left
        transition-[border,background-color,color] [&_*]:w-full [&_*]:truncate
        [&_*]:break-all"
    >
      <Text type="title-medium" className="!bg-transparent">
        English
      </Text>
      <Text type="body-small" className="!bg-transparent">
        Atipol
      </Text>
    </Interactive>
  </Section>
);

const SplitLayoutSection: FC = () => (
  <Section>
    <Header>Split Layout</Header>
    <SplitLayout ratio={[4, 8]}>
      <div>
        <Card appearance="outlined" className="!grid h-20 place-content-center">
          <Text type="headline-large">Left</Text>
        </Card>
      </div>
      <div>
        <Card
          appearance="outlined"
          className="h-20 place-content-center sm:!grid"
        >
          <Text type="headline-large">Right</Text>
        </Card>
      </div>
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
                value ? ["fish-burger", "pork-burger", "beef-burger"] : [],
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

const TabSection: FC = () => {
  const [primaryView, setPrimaryView] = useState<
    "overview" | "students" | "teachers"
  >("overview");
  const [secondaryView, setSecondaryView] = useState<"list" | "gallery">(
    "list",
  );

  return (
    <Section>
      <Header>Tab</Header>
      <TabsContainer appearance="primary" alt="Primary view">
        <Tab
          icon={<MaterialIcon icon="info" />}
          label="Overview"
          selected={primaryView === "overview"}
          onClick={() => setPrimaryView("overview")}
        />
        <Tab
          icon={<MaterialIcon icon="groups" />}
          label="Students"
          selected={primaryView === "students"}
          onClick={() => setPrimaryView("students")}
        />
        <Tab
          icon={<MaterialIcon icon="group" />}
          label="Teachers"
          selected={primaryView === "teachers"}
          onClick={() => setPrimaryView("teachers")}
        />
      </TabsContainer>
      <TabsContainer appearance="secondary" alt="Secondary view">
        <Tab
          icon={<MaterialIcon icon="list" />}
          label="List"
          selected={secondaryView === "list"}
          onClick={() => setSecondaryView("list")}
        />
        <Tab
          icon={<MaterialIcon icon="photo" />}
          label="Gallery"
          selected={secondaryView === "gallery"}
          onClick={() => setSecondaryView("gallery")}
        />
      </TabsContainer>
    </Section>
  );
};

const ContainersPage: CustomPage = () => (
  <>
    <Head>
      <title>Containers - SK Components</title>
    </Head>
    <PageHeader parentURL="/components">Containers</PageHeader>
    <ContentLayout key="containers-page">
      <AvatarSection />
      <CardSection />
      <ColumnsSection />
      <DataTableSection />
      <HeaderSection />
      <InteractiveSection />
      <SplitLayoutSection />
      <ListSection />
      <TableSection />
      <TabSection />
    </ContentLayout>
  </>
);

ContainersPage.parentURL = "/components";

export default ContainersPage;
