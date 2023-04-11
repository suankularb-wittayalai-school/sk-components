// External libraries
import Head from "next/head";
import { FC, useContext, useEffect, useState } from "react";

// SK Components
import {
  Actions,
  AssistChip,
  Avatar,
  Button,
  ChipSet,
  ContentLayout,
  FAB,
  FilterChip,
  Header,
  InputChip,
  MaterialIcon,
  Menu,
  MenuItem,
  Section,
  SegmentedButton,
  Snackbar,
  SuggestionChip,
  ToggleButton,
} from "@suankularb-components/react";

// Internal components
import PageHeader from "@/components/PageHeader";

// Contexts
import SnackbarContext from "@/contexts/SnackbarContext";

// Utilities
import { toggleItem } from "@/utils/array";
import { CustomPage } from "@/utils/types";

const ButtonsSection: FC = () => {
  const { setSnackbar } = useContext(SnackbarContext);

  const [loading, setLoading] = useState<boolean>(false);
  useEffect(() => {
    let loadingSim: NodeJS.Timeout;
    if (loading)
      loadingSim = setTimeout(() => {
        setLoading(false);
        setSnackbar(
          <Snackbar action={<Button appearance="text">Undo</Button>}>
            Task failed successfully
          </Snackbar>
        );
      }, 2000);
    return () => {
      if (loadingSim) clearTimeout(loadingSim);
    };
  }, [loading]);

  return (
    <Section>
      <Header level={3}>Common Button</Header>
      <Actions align="left">
        <Button appearance="filled">Button</Button>
        <Button appearance="filled" icon={<MaterialIcon icon="add" />}>
          Button
        </Button>
        <Button appearance="filled" dangerous>
          Button
        </Button>
        <Button appearance="filled" disabled>
          Button
        </Button>
        <Button appearance="tonal">Button</Button>
        <Button appearance="tonal" dangerous>
          Button
        </Button>
        <Button appearance="tonal" disabled>
          Button
        </Button>
        <Button appearance="outlined">Button</Button>
        <Button appearance="outlined" dangerous>
          Button
        </Button>
        <Button appearance="outlined" disabled>
          Button
        </Button>
        <Button appearance="text">Button</Button>
        <Button appearance="text" dangerous>
          Button
        </Button>
        <Button appearance="text" disabled>
          Button
        </Button>
      </Actions>
      <Actions align="full">
        <Button
          appearance="filled"
          icon={<MaterialIcon icon="add" />}
          onClick={() => {
            setLoading(true);
            setSnackbar(<Snackbar>Failing task…</Snackbar>);
          }}
          loading={loading}
        >
          Add
        </Button>
        <Button
          appearance="outlined"
          icon={<MaterialIcon icon="delete" />}
          dangerous
        >
          Delete
        </Button>
      </Actions>
    </Section>
  );
};

const SegmentedButtonSection: FC = () => {
  const [view, setView] = useState<"schedule" | "list">("schedule");

  return (
    <Section>
      <Header level={3}>Segmented Button</Header>
      <SegmentedButton alt="View">
        <Button
          appearance="outlined"
          selected={view === "schedule"}
          onClick={() => setView("schedule")}
        >
          Schedule view
        </Button>
        <Button
          appearance="outlined"
          selected={view === "list"}
          onClick={() => setView("list")}
        >
          List view
        </Button>
      </SegmentedButton>
    </Section>
  );
};

const ToggleButtonsSection: FC = () => {
  const [favorite, setFavorite] = useState<boolean>(false);
  const [mic, setMic] = useState<boolean>(false);
  const [cloud, setCloud] = useState<boolean>(false);
  const [eco, setEco] = useState<boolean>(false);
  const [star, setStar] = useState<boolean>(false);

  return (
    <Section>
      <Header level={3}>Toggle Button</Header>
      <Actions align="left">
        <ToggleButton
          appearance="filled"
          icon={<MaterialIcon icon="favorite" />}
          alt="Favorite"
          tooltip="Save to favorites"
          value={favorite}
          onChange={setFavorite}
        />
        <ToggleButton
          appearance="filled"
          icon={<MaterialIcon icon="microphone" />}
          alt="Microphone"
          tooltip="Toggle microphone"
          dangerous
          value={mic}
          onChange={setMic}
        />
        <ToggleButton
          appearance="tonal"
          icon={<MaterialIcon icon="cloud_upload" />}
          alt="Upload to cloud"
          tooltip="Toggle upload to cloud"
          value={cloud}
          onChange={setCloud}
        />
        <ToggleButton
          appearance="outlined"
          icon={<MaterialIcon icon="eco" />}
          alt="Eco mode"
          tooltip="Toggle eco mode"
          value={eco}
          onChange={setEco}
        />
        <ToggleButton
          appearance="standard"
          icon={<MaterialIcon icon="star" />}
          alt="Star"
          tooltip="Star"
          value={star}
          onChange={setStar}
        />
      </Actions>
    </Section>
  );
};

const FABsSection: FC = () => (
  <Section>
    <Header level={3}>Floating Action Button</Header>
    <div className="flex flex-row flex-wrap items-start gap-2">
      <FAB
        color="tertiary"
        icon={<MaterialIcon icon="shopping_cart" />}
        tooltip="Go to checkout"
      >
        Checkout
      </FAB>
      <FAB
        color="surface"
        size="small"
        icon={<MaterialIcon icon="shopping_cart" />}
        tooltip="Go to checkout"
      />
      <FAB
        color="primary"
        size="small"
        icon={<MaterialIcon icon="shopping_cart" />}
        tooltip="Go to checkout"
      />
      <FAB
        color="secondary"
        icon={<MaterialIcon icon="shopping_cart" />}
        tooltip="Go to checkout"
      />
      <FAB
        color="tertiary"
        size="large"
        icon={<MaterialIcon icon="shopping_cart" />}
        tooltip="Go to checkout"
      />
    </div>
  </Section>
);

const InputChipSection: FC = () => {
  const [chipValue, setChipValue] = useState<string>("siravit@yahoo.com");

  return (
    <Section>
      <Header level={3}>Input Chip</Header>
      <ChipSet>
        <InputChip onClick={() => {}}>Siravit Phokeed</InputChip>
        <InputChip onDelete={() => {}}>Siravit Phokeed</InputChip>
        <InputChip selected onDelete={() => {}}>
          Siravit Phokeed
        </InputChip>
        <InputChip
          avatar={<Avatar />}
          editable
          value={chipValue}
          onChange={setChipValue}
        >
          Siravit Phokeed
        </InputChip>
        <InputChip avatar={<Avatar />} onDelete={() => {}}>
          Siravit Phokeed
        </InputChip>
        <InputChip avatar={<Avatar />} selected onDelete={() => {}}>
          Siravit Phokeed
        </InputChip>
      </ChipSet>
    </Section>
  );
};

const AssistChipSection: FC = () => (
  <Section>
    <Header level={3}>Assist Chip</Header>
    <ChipSet>
      <AssistChip icon={<MaterialIcon icon="lightbulb" />}>
        Turn on lights
      </AssistChip>
      <AssistChip icon={<MaterialIcon icon="block" />} dangerous>
        Block number
      </AssistChip>
      <AssistChip icon={<MaterialIcon icon="lightbulb" />} disabled>
        Turn on lights
      </AssistChip>
    </ChipSet>
    <div
      className="from-primary-60 to-primary-30 flex flex-row flex-wrap
        place-content-center gap-2 rounded-md bg-gradient-to-r py-8
        px-4"
    >
      <AssistChip icon={<MaterialIcon icon="lightbulb" />} elevated>
        Turn on lights
      </AssistChip>
      <AssistChip icon={<MaterialIcon icon="block" />} elevated dangerous>
        Block number
      </AssistChip>
      <AssistChip
        icon={<MaterialIcon icon="lightbulb" />}
        elevated
        dangerous
        disabled
      >
        Turn on lights
      </AssistChip>
    </div>
  </Section>
);

type FilterChipFilter = "students" | "teachers" | "parents";

const FilterChipSection: FC = () => {
  const [filters, setFilters] = useState<FilterChipFilter[]>(["students"]);
  const [showStudentsOptions, setShowStudentsOptions] =
    useState<boolean>(false);

  const toggleFilter = (toToggle: FilterChipFilter) =>
    setFilters(toggleItem(toToggle, filters));

  return (
    <Section>
      <Header>Filter Chip</Header>
      <ChipSet>
        <FilterChip
          selected={filters.includes("students")}
          onClick={() => toggleFilter("students")}
          onMenuToggle={() => setShowStudentsOptions(!showStudentsOptions)}
          menu={
            <Menu open={showStudentsOptions} density={-4}>
              <MenuItem onClick={() => setShowStudentsOptions(false)} selected>
                Juniors
              </MenuItem>
              <MenuItem onClick={() => setShowStudentsOptions(false)}>
                Seniors
              </MenuItem>
            </Menu>
          }
        >
          Students
        </FilterChip>
        <FilterChip
          selected={filters.includes("teachers")}
          onClick={() => toggleFilter("teachers")}
        >
          Teachers
        </FilterChip>
        <FilterChip
          selected={filters.includes("parents")}
          onClick={() => toggleFilter("parents")}
        >
          Parents
        </FilterChip>
      </ChipSet>
    </Section>
  );
};

const SuggestionChipSection: FC = () => (
  <Section>
    <Header>Suggestion Chip</Header>
    <ChipSet>
      <SuggestionChip>Looks good to me</SuggestionChip>
      <SuggestionChip icon={<MaterialIcon icon="thumb_up" />}>
        Looks good to me
      </SuggestionChip>
      <SuggestionChip icon={<MaterialIcon icon="thumb_up" />} disabled>
        Looks good to me
      </SuggestionChip>
    </ChipSet>
  </Section>
);

const MenuSection: FC = () => {
  const [showMenu, setShowMenu] = useState<boolean>(false);

  return (
    <Section>
      <Header>Menu</Header>
      <Actions>
        <div className="relative w-fit">
          <Button appearance="filled" onClick={() => setShowMenu(!showMenu)}>
            Toggle Menu
          </Button>
          <Menu open={showMenu} onBlur={() => setShowMenu(false)}>
            <MenuItem
              icon={<MaterialIcon icon="content_cut" />}
              metadata="⌘X"
              onClick={() => setShowMenu(false)}
            >
              Cut
            </MenuItem>
            <MenuItem
              icon={<MaterialIcon icon="content_copy" />}
              metadata="⌘C"
              onClick={() => setShowMenu(false)}
            >
              Copy
            </MenuItem>
            <MenuItem
              icon={<MaterialIcon icon="content_paste" />}
              metadata="⌘V"
              onClick={() => setShowMenu(false)}
            >
              Paste
            </MenuItem>
          </Menu>
        </div>
      </Actions>
    </Section>
  );
};

const ActionsPage: CustomPage = () => (
  <>
    <Head>
      <title>Actions - SK Components</title>
    </Head>
    <PageHeader
      title="Actions"
      icon={<MaterialIcon icon="touch_app" />}
      parentURL="/components"
    />
    <ContentLayout key="actions-page">
      <Section>
        <Header>Button</Header>
        <ButtonsSection />
        <SegmentedButtonSection />
        <ToggleButtonsSection />
        <FABsSection />
      </Section>
      <Section>
        <Header>Chips</Header>
        <InputChipSection />
        <AssistChipSection />
        <FilterChipSection />
        <SuggestionChipSection />
      </Section>
      <MenuSection />
    </ContentLayout>
  </>
);

ActionsPage.parentURL = "/components";

export default ActionsPage;
