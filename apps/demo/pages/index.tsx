import { Button } from "@suankularb-components/react";

export default function Home() {
  return (
    <main className="p-4 items-start flex flex-col gap-2">
      <Button appearance="filled">Button</Button>
      <Button appearance="filled" dangerous>
        Button
      </Button>
      <Button appearance="tonal">Button</Button>
      <Button appearance="outlined">Button</Button>
      <Button appearance="text">Button</Button>
    </main>
  );
}
