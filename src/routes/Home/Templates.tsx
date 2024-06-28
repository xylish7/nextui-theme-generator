import { Select, SelectItem } from "@nextui-org/react";
import { templates } from "shared/templates";
import { ColorsConfig, Config } from "shared/types";

interface Templates {
  onChange: (value: Config) => void;
}

export function Templates({ onChange }: Templates) {
  return (
    <Select
      label="Theme templates"
      labelPlacement="outside"
      placeholder="Select a theme"
      onChange={(e) => onChange(templates[parseInt(e.target.value)].value)}
    >
      {templates.map((template, index) => (
        <SelectItem
          value={index}
          key={index}
          startContent={<Swatch colors={template.value.light.brandColor} />}
        >
          {template.label}
        </SelectItem>
      ))}
    </Select>
  );
}

interface SwatchProps {
  colors: ColorsConfig["brandColor"];
}

function Swatch({ colors }: SwatchProps) {
  return (
    <div className="flex h-6 rounded-lg">
      {Object.entries(colors).map(([key, value]) => (
        <div key={key} style={{ background: value }} className="w-2 h-full" />
      ))}
    </div>
  );
}
