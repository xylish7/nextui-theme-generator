import { Config } from "shared/types";

const CONFIG_KEY = "config";
const SYNC_THEMES_KEY = "sync-themes";

function getConfiguration(): Config | undefined {
  const config = localStorage.getItem(CONFIG_KEY);
  if (config) {
    return JSON.parse(config);
  }
  return undefined;
}

function setConfiguration(config: Config) {
  localStorage.setItem(CONFIG_KEY, JSON.stringify(config));
}

function getSyncThemes(): boolean {
  const syncThemes = localStorage.getItem(SYNC_THEMES_KEY);
  if (syncThemes) {
    return syncThemes === "false" ? false : true;
  }
  return true;
}

function setSyncThemes(syncThemes: boolean) {
  localStorage.setItem(SYNC_THEMES_KEY, syncThemes.toString());
}

export const storage = {
  getConfiguration,
  getSyncThemes,
  setConfiguration,
  setSyncThemes,
};
