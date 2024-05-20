import ButtonShowcase from "components/nextui/ButtonShowcase";
import ChipShowcase from "components/nextui/ChipShowcase";
import InputShowcase from "components/nextui/InputShowcase";
import AvatarShowcase from "components/nextui/AvatarShowcase";
import BadgeShowcase from "components/nextui/BadgeShowcase";
import BreadcrumbsShowcase from "components/nextui/BreadcrumbsShowcase";
import CheckboxShowcase from "components/nextui/CheckboxShowcase";
import CodeShowcase from "components/nextui/CodeShowcase";
import CircularProgressShowcase from "components/nextui/CircularProgressShowcase";
import DropdownShowcase from "components/nextui/DropdownShowcase";
import LinkShowcase from "components/nextui/LinkShowcase";
import PaginationShowcase from "components/nextui/PaginationShowcase";
import SelectShowcase from "components/nextui/SelectShowcase";
import SwitchShowcase from "components/nextui/SwitchShowcase";
import SliderShowcase from "components/nextui/SliderShowcases";
import TabsShowcase from "components/nextui/TabsShowcase";
import FontSizeShowcase from "components/nextui/FontSizeShowcase";
import { SHOWCASE_ID } from "shared/constants";

export default function Showcase() {
  return (
    <div id={SHOWCASE_ID} className="grid grid-cols-1 gap-4 w-full">
      <AvatarShowcase />
      <BadgeShowcase />
      <BreadcrumbsShowcase />
      <ButtonShowcase />
      <CheckboxShowcase />
      <ChipShowcase />
      <CodeShowcase />
      <CircularProgressShowcase />
      <DropdownShowcase />
      <InputShowcase />
      <LinkShowcase />
      <PaginationShowcase />
      <SelectShowcase />
      <SwitchShowcase />
      <SliderShowcase />
      <TabsShowcase />
      <FontSizeShowcase />
    </div>
  );
}
