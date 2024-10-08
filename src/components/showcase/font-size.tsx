import { ShowcaseComponent } from "components/showcase-component";

export function FontSize() {
  return (
    <ShowcaseComponent name="Font size / Line height (rem)">
      <div className="flex flex-col gap-2">
        <p className="text-tiny">Tiny</p>
        <p className="text-small">Small</p>
        <p className="text-medium">Medium</p>
        <p className="text-large">Large</p>
      </div>
    </ShowcaseComponent>
  );
}
