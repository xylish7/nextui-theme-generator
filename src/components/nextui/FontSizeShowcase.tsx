import ShowcaseComponent from "components/ShowcaseComponent";
import { SHOWCASE_ID } from "shared/constants";

export default function FontSizeShowcase() {
  return (
    <ShowcaseComponent id={SHOWCASE_ID} name="Font size (rem)">
      <div className="flex flex-col gap-2">
        <p className="text-tiny">Tiny</p>
        <p className="text-small">Small</p>
        <p className="text-medium">Medium</p>
        <p className="text-large">Large</p>
      </div>
    </ShowcaseComponent>
  );
}
