import { Button, Chip } from "@nextui-org/react";
import ShowcaseComponent from "./components/showcase-component";

function App() {
  return (
    <main className="max-w-6xl mx-auto">
      <div className="grid grid-cols-2 gap-4 py-8">
        <ShowcaseComponent name="Button">
          <Button color="default">Default</Button>
          <Button color="primary">Primary</Button>
          <Button color="secondary">Secondary</Button>
          <Button color="success">Success</Button>
          <Button color="warning">Warning</Button>
          <Button color="danger">Danger</Button>
        </ShowcaseComponent>
        <ShowcaseComponent name="Chip">
          <Chip color="default">Default</Chip>
          <Chip color="primary">Primary</Chip>
          <Chip color="secondary">Secondary</Chip>
          <Chip color="success">Success</Chip>
          <Chip color="warning">Warning</Chip>
          <Chip color="danger">Danger</Chip>
        </ShowcaseComponent>
      </div>
    </main>
  );
}

export default App;
