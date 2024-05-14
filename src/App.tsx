import { Button, Chip } from "@nextui-org/react";
import ShowcaseComponent from "components/showcase-component";
import ColorPicker from "components/color-picker";
import { useNextUIConfig } from "hooks/useNextUIConfig";
import { Layout } from "shared/components/layout";

function App() {
  const { nextUIConfig, setNextUIConfig } = useNextUIConfig();

  function handleCopyConfig() {
    navigator.clipboard.writeText(JSON.stringify(nextUIConfig, null, 2));
  }

  return (
    <Layout>
      <div className="flex flex-wrap gap-4">
        <ColorPicker
          color="primary"
          label="Primary"
          onSelect={(color) => setNextUIConfig({ primary: color })}
        />
        <ColorPicker
          color="secondary"
          label="Secondary"
          onSelect={(color) => setNextUIConfig({ secondary: color })}
        />
        <ColorPicker
          color="success"
          label="Success"
          onSelect={(color) => setNextUIConfig({ success: color })}
        />
        <ColorPicker
          color="warning"
          label="Warning"
          onSelect={(color) => setNextUIConfig({ warning: color })}
        />
        <ColorPicker
          color="danger"
          label="Danger"
          onSelect={(color) => setNextUIConfig({ danger: color })}
        />
      </div>

      <div className="grid grid-cols-2 gap-4 pt-12">
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
    </Layout>
  );
}

export default App;
