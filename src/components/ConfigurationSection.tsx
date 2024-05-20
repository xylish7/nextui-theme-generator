interface ConfigurationSectionProps {
  children: React.ReactNode;
  id?: string;
  title: string;
}

export default function ConfigurationSection({
  children,
  id,
  title,
}: ConfigurationSectionProps) {
  return (
    <div id={id}>
      <span className="font-semibold">{title}</span>
      <div className="grid grid-cols-2 flex-wrap gap-4 mt-2">{children}</div>
    </div>
  );
}
