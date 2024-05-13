import { Button, Chip, Tooltip } from "@nextui-org/react";
import ShowcaseComponent from "components/showcase-component";
import ColorPicker from "components/color-picker";
import { colors } from "shared/constants";
import { cssVars } from "lib/cssVars";
import { Copy, Moon, Sun } from "@phosphor-icons/react";
import useTheme from "hooks/useTheme";

function App() {
  const { theme, toggleTheme } = useTheme();

  return (
    <main className="max-w-6xl mx-auto py-8">
      <div className="flex gap-4 justify-end">
        <Tooltip content="Copy configuration">
          <Button isIconOnly size="lg" variant="flat">
            <Copy size={24} />
          </Button>
        </Tooltip>
        <Tooltip content="Toggle theme">
          <Button isIconOnly size="lg" variant="flat" onClick={toggleTheme}>
            {theme === "light" ? <Moon size={24} /> : <Sun size={24} />}
          </Button>
        </Tooltip>
      </div>

      <div className="flex gap-4">
        <ColorPicker
          label="Primary"
          onSelect={(color) => {
            cssVars.setPrimaryColor(colors[color]);
          }}
        />
        <ColorPicker
          label="Secondary"
          onSelect={(color) => {
            cssVars.setSecondaryColor(colors[color]);
          }}
        />
        <ColorPicker
          label="Success"
          onSelect={(color) => {
            cssVars.setSuccessColor(colors[color]);
          }}
        />
        <ColorPicker
          label="Warning"
          onSelect={(color) => {
            cssVars.setWarningColor(colors[color]);
          }}
        />
        <ColorPicker
          label="Danger"
          onSelect={(color) => {
            cssVars.setDangerColor(colors[color]);
          }}
        />
      </div>

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
