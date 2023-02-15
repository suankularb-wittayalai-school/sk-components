import {
  Button,
  MaterialIcon,
  SegmentedButton,
} from "@suankularb-components/react";

export default function Home() {
  return (
    <main className="p-4 flex flex-col gap-6">
      <div className="items-start flex flex-row gap-2 flex-wrap">
        <Button appearance="filled">Button</Button>
        <Button appearance="filled" icon={<MaterialIcon icon="add" />}>
          Button
        </Button>
        <Button appearance="filled" dangerous>
          Button
        </Button>
        <Button appearance="tonal">Button</Button>
        <Button appearance="tonal" dangerous>
          Button
        </Button>
        <Button appearance="outlined">Button</Button>
        <Button appearance="outlined" dangerous>
          Button
        </Button>
        <Button appearance="text">Button</Button>
        <Button appearance="text" dangerous>
          Button
        </Button>
      </div>
      <SegmentedButton alt="View" className="max-w-[32rem]">
        <Button appearance="outlined" selected>
          Schedule view
        </Button>
        <Button appearance="outlined">List view</Button>
      </SegmentedButton>
    </main>
  );
}
