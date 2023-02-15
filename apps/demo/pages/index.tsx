import { Button } from "@suankularb-components/react";

export default function Home() {
  return (
    <main className="p-4 items-start flex flex-row gap-2 flex-wrap">
      <Button appearance="filled">Button</Button>
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
    </main>
  );
}
