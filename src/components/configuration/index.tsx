import { useContext, useEffect, useState } from "react";
import { Card, CardBody, Switch } from "@heroui/react";
import { ArrowsClockwise } from "@phosphor-icons/react";

import { SelectTemplate } from "components/select-template";
import usePrevious from "hooks/use-previous";
import { ThemeContext } from "providers/theme";
import { ThemeBuilderContext } from "providers/theme-builder";
import { Template } from "shared/types";
import { generatePluginConfig } from "utils/config";
import { setAllCssVars } from "utils/css-vars";
import { storage } from "utils/local-storage";

import { BrandColors } from "./brand-colors";
import { BaseColors } from "./base-colors";
import { OtherColors } from "./other-colors";
import { FontSizes } from "./font-sizes";
import { LineHeights } from "./line-heights";
import { Radiuses } from "./radiuses";
import { BorderWidths } from "./border-widths";
import { Other } from "./other";
import { Actions } from "./actions";
import { templates } from "templates";

export default function Configuration() {
  const [selectedTemplate, setSelectedTemplate] = useState<Template | null>(
    templates.find((template) => template.name === storage.getTemplateType()) ??
      null
  );
  const [syncThemes, setSyncThemes] = useState(storage.getSyncThemes() ?? true);
  const { config, resetConfig, setConfiguration } =
    useContext(ThemeBuilderContext);
  const { theme, setTheme } = useContext(ThemeContext);
  const prevTheme = usePrevious(theme);
  const isLight = theme === "light";
  const syncIcon = syncThemes ? <ArrowsClockwise /> : null;

  /**
   * Update the CSS variables and the configuration when the theme changes.
   */
  useEffect(() => {
    // Set the CSS variables when the theme changes
    if (prevTheme !== theme) {
      setAllCssVars(config, theme);
    }

    // Set the configuration in the local storage when the theme changes
    if (prevTheme === theme) {
      storage.setConfiguration(config);
    }
  }, [config, theme, prevTheme]);

  /**
   * Handle the syncing of the themes.
   */
  function handleThemeSyncing(isSyncing: boolean) {
    setSyncThemes(isSyncing);
    storage.setSyncThemes(isSyncing);
  }

  /**
   * Handle the toggling of the theme.
   */
  function handleToggleTheme() {
    setTheme(isLight ? "dark" : "light");
  }

  /**
   * Reset the theme to the default one.
   */
  function handleResetTheme() {
    if (selectedTemplate) {
      setConfiguration(selectedTemplate.value, theme, syncThemes);
      setAllCssVars(selectedTemplate.value, theme);
    } else {
      const config = resetConfig(theme, syncThemes);

      setAllCssVars(config, theme);
    }
    storage.setConfiguration(config);
  }

  return (
    <Card className="max-w-xs w-full p-2 h-min relative mx-auto md:sticky md:top-28 z-30 md:h-[calc(100vh-12rem)]">
      <CardBody className="flex flex-col">
        <div className="flex flex-col gap-6">
          <Actions
            theme={theme}
            onCopy={() => generatePluginConfig(config)}
            onResetTheme={handleResetTheme}
            onToggleTheme={handleToggleTheme}
          />

          <Switch
            color="secondary"
            isSelected={syncThemes}
            size="sm"
            startContent={<ArrowsClockwise />}
            onValueChange={handleThemeSyncing}
          >
            Sync dark and light themes
          </Switch>

          <SelectTemplate
            name={selectedTemplate?.name ?? null}
            onChange={(template) => {
              setConfiguration(template.value, theme, syncThemes);
              setAllCssVars(template.value, theme);
              setSelectedTemplate(template);
              storage.setTemplateType(template.name);
            }}
          />
        </div>

        <div className="flex flex-col gap-8 mt-6">
          <BrandColors
            config={config}
            syncIcon={syncIcon}
            syncThemes={syncThemes}
            theme={theme}
          />
          <BaseColors config={config} theme={theme} />
          <OtherColors
            config={config}
            syncIcon={syncIcon}
            syncThemes={syncThemes}
            theme={theme}
          />
          <FontSizes config={config} />
          <LineHeights config={config} />
          <Radiuses config={config} />
          <BorderWidths config={config} />
          <Other config={config} />
        </div>
      </CardBody>
    </Card>
  );
}
