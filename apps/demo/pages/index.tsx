// External libraries
import { useState } from "react";

// SK Components
import {
  Actions,
  Button,
  MaterialIcon,
  SegmentedButton,
  ToggleButton,
} from "@suankularb-components/react";

export default function Home() {
  const [view, setView] = useState<"schedule" | "list">("schedule");
  const [favorite, setFavorite] = useState<boolean>(false);

  return (
    <main className="p-4 flex flex-col gap-6">
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
          icon={<MaterialIcon icon="favorite" />}
          alt="Favorite"
          tooltip="Save to favorites"
          dangerous
          value={favorite}
          onChange={setFavorite}
        />
        <ToggleButton
          appearance="tonal"
          icon={<MaterialIcon icon="favorite" />}
          alt="Favorite"
          tooltip="Save to favorites"
          value={favorite}
          onChange={setFavorite}
        />
        <ToggleButton
          appearance="outlined"
          icon={<MaterialIcon icon="favorite" />}
          alt="Favorite"
          tooltip="Save to favorites"
          value={favorite}
          onChange={setFavorite}
        />
        <ToggleButton
          appearance="standard"
          icon={<MaterialIcon icon="favorite" />}
          alt="Favorite"
          tooltip="Save to favorites"
          value={favorite}
          onChange={setFavorite}
        />
      </Actions>
    </main>
  );
}
