import { Config } from "shared/types";

const CONFIG_KEY = "config";

export function getConfiguration(): Config | undefined {
  const config = localStorage.getItem(CONFIG_KEY);
  if (config) {
    return JSON.parse(config);
  }
  return undefined;
}

export function setConfiguration(config: Config) {
  localStorage.setItem(CONFIG_KEY, JSON.stringify(config));
}
