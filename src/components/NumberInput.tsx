import { Input } from "@nextui-org/react";
import { FLOAT_NUMBER_REGEX } from "shared/constants";

interface NumberInputProps {
  label: string;
  value: string;
  onChange: (value: string) => void;
}

export default function NumberInput({
  label,
  value,
  onChange,
}: NumberInputProps) {
  function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    const value = event.target.value;

    if (FLOAT_NUMBER_REGEX.test(value) || !value) {
      onChange(value);
    }
  }

  return (
    <Input label={label} value={value.toString()} onChange={handleChange} />
  );
}
