import { Template } from "../shared/types";

import { autumn } from "./autumn";
import { coffee } from "./coffee";
import { emerald } from "./emerald";
import { nextui } from "./nextui";
import { winter } from "./winter";

export const templates: Template[] = [
  { label: "Autumn", name: "autumn", value: autumn },
  { label: "Coffee", name: "coffee", value: coffee },
  { label: "Emerald", name: "emerald", value: emerald },
  { label: "HeroUI", name: "nextui", value: nextui },
  { label: "Winter", name: "winter", value: winter },
];
