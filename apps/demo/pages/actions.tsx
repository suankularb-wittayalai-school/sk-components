// External libraries
import Head from "next/head";
import { FC, useState } from "react";

// SK Components
import {
  Actions,
  AssistChip,
  Button,
  Columns,
  ContentLayout,
  FAB,
  Header,
  MaterialIcon,
  SegmentedButton,
  ToggleButton,
} from "@suankularb-components/react";

// Utilities
import { CustomPage } from "@/utils/types";

const ButtonsSection: FC = () => (
  <>
    <Header>Button</Header>
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
  </>
);

const SegmentedButtonSection: FC = () => {
  const [view, setView] = useState<"schedule" | "list">("schedule");

  return (
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
  );
};

const ToggleButtonsSection: FC = () => {
  const [favorite, setFavorite] = useState<boolean>(false);
  const [mic, setMic] = useState<boolean>(false);
  const [cloud, setCloud] = useState<boolean>(false);
  const [eco, setEco] = useState<boolean>(false);
  const [star, setStar] = useState<boolean>(false);

  return (
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
  );
};

const FABsSection: FC = () => (
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
);

const AssistChipsSection: FC = () => (
  <>
    <div className="flex flex-row flex-wrap items-start gap-2">
      <AssistChip icon={<MaterialIcon icon="lightbulb" />}>
        Turn on lights
      </AssistChip>
      <AssistChip icon={<MaterialIcon icon="block" />} dangerous>
        Block number
      </AssistChip>
      <AssistChip icon={<MaterialIcon icon="lightbulb" />} disabled>
        Turn on lights
      </AssistChip>
    </div>
    <div
      className="flex flex-row flex-wrap place-content-center gap-2
        rounded-xl bg-gradient-to-br from-indigo-500 to-indigo-900 py-8 px-4"
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
  </>
);

const ActionsPage: CustomPage = () => {
  return (
    <>
      <Head>
        <title>Actions - SK Components</title>
      </Head>
      <ContentLayout>
        <ButtonsSection />
        <SegmentedButtonSection />
        <Actions align="full">
          <Button appearance="filled" icon={<MaterialIcon icon="add" />}>
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
        <ToggleButtonsSection />
        <FABsSection />
        <AssistChipsSection />
        <Columns columns={6}>
          {[...Array(12)].map((_, i) => (
            <div
              className="skc-headline-large grid h-20 place-content-center
              rounded-xl border-2 border-blue-900"
              key={i}
            >
              {i + 1}
            </div>
          ))}
        </Columns>
      </ContentLayout>
    </>
  );
};

ActionsPage.pageHeader = {
  title: "Actions",
  icon: <MaterialIcon icon="touch_app" />,
  parentURL: "/",
};

export default ActionsPage;
