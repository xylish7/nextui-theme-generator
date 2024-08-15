import { Config, TemplateType, ThemeType } from "shared/types";

const CONFIG_KEY = "config";
const SYNC_THEMES_KEY = "sync-themes";
const TEMPLATE_TYPE_KEY = "template-type";
const THEME_KEY = "theme";

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

function getTemplateType(): TemplateType | undefined {
  const templateType = localStorage.getItem(TEMPLATE_TYPE_KEY);
  if (templateType) {
    return templateType as TemplateType;
  }
  return undefined;
}

function setTemplateType(templateType: TemplateType) {
  localStorage.setItem(TEMPLATE_TYPE_KEY, templateType);
}

function getTheme(): ThemeType | undefined {
  const theme = localStorage.getItem(THEME_KEY);
  if (theme) {
    return theme as ThemeType;
  }
  return undefined;
}

function setTheme(theme: ThemeType) {
  localStorage.setItem(THEME_KEY, theme);
}

export const storage = {
  getConfiguration,
  getSyncThemes,
  getTemplateType,
  getTheme,
  setConfiguration,
  setSyncThemes,
  setTemplateType,
  setTheme,
};
