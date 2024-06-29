import { Select, SelectItem } from "@nextui-org/react";
import { Template, ThemeTemplate, templates } from "shared/templates";
import { ColorsConfig } from "shared/types";

interface Templates {
  name: ThemeTemplate | null;
  onChange: (template: Template) => void;
}

export function Templates({ name, onChange }: Templates) {
  function handleChange(e: React.ChangeEvent<HTMLSelectElement>) {
    const value = e.target.value as ThemeTemplate;
    const template = templates.find((template) => template.name === value);
    if (template) {
      onChange(template);
    }
  }

  return (
    <Select
      label="Theme templates"
      labelPlacement="outside"
      placeholder="Select a theme"
      selectedKeys={name === null ? [] : [name]}
      onChange={handleChange}
    >
      {templates.map((template, index) => (
        <SelectItem
          value={index}
          key={template.name}
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
