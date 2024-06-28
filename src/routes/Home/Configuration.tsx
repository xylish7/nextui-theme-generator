import { useContext, useEffect, useState } from "react";
import {
  Button,
  Card,
  CardBody,
  CardHeader,
  Switch,
  Tooltip,
} from "@nextui-org/react";

import ColorPicker from "components/ColorPicker";
import { CopyButton } from "components/CopyButton";
import ConfigurationSection from "components/ConfigurationSection";
import NumberInput from "components/NumberInput";
import { ConfigContext } from "providers/ConfigProvider";
import { getNextUIPluginConfig } from "lib/configuration";
import {
  setCssColor,
  setAllCssVars,
  setCssBackground,
  setCssLineHeight,
  setCssRadius,
  setCssFontSize,
  setCssBorderWidth,
  setCssContentColor,
  setCssOtherColor,
  setOtherCssParams,
} from "lib/css-vars";
import { COLORS_ID, BASE_COLORS_ID, OTHER_COLORS_ID } from "shared/constants";
import { ThemeContext } from "providers/ThemeProvider";
import usePrevious from "hooks/usePrevious";
import { storage } from "lib/local-storage";
import {
  ArrowCounterClockwise,
  ArrowsClockwise,
  Moon,
  Sun,
} from "@phosphor-icons/react";
import { Templates } from "./Templates";

export default function Configuration() {
  const [syncThemes, setSyncThemes] = useState(true);
  const { theme, setTheme } = useContext(ThemeContext);
  const prevTheme = usePrevious(theme);
  const isLight = theme === "light";
  const syncIcon = syncThemes ? <ArrowsClockwise size={14} /> : null;

  const {
    config,
    resetConfig,
    setBaseColor,
    setBorderWidth,
    setBrandColor,
    setConfiguration,
    setLineHeight,
    setFontSize,
    setOtherColor,
    setOtherParams,
    setRadius,
  } = useContext(ConfigContext);

  useEffect(() => {
    if (prevTheme !== theme) {
      setAllCssVars(config, theme);
    }

    if (prevTheme === theme) {
      storage.setConfiguration(config);
    }
  }, [config, theme, prevTheme]);

  useEffect(() => {
    const storageThemesSync = storage.getSyncThemes();
    setSyncThemes(storageThemesSync);
  }, []);

  /**
   * Handle the syncing of the themes.
   */
  function handleThemeSyncing(isSyncing: boolean) {
    setSyncThemes(isSyncing);
    storage.setSyncThemes(isSyncing);
  }

  return (
    <Card className="max-w-xs w-full p-2 h-min relative mx-auto md:sticky md:top-28 z-30 md:h-[calc(100vh-10rem)]">
      <CardHeader className="flex justify-between">
        <span className="font-semibold text-lg">NextUI Configuration</span>
      </CardHeader>
      <CardBody className="flex flex-col">
        <div className="flex gap-2">
          <Tooltip content={isLight ? "Dark" : "Light"}>
            <Button
              color="secondary"
              isIconOnly
              size="sm"
              variant="flat"
              onClick={() => setTheme(isLight ? "dark" : "light")}
            >
              {isLight ? <Moon size={18} /> : <Sun size={18} />}
            </Button>
          </Tooltip>
          <Tooltip content="Reset theme">
            <Button
              color="secondary"
              isIconOnly
              size="sm"
              variant="flat"
              onClick={() => {
                const newConfig = resetConfig(theme, syncThemes);
                setAllCssVars(newConfig, theme);
                storage.setConfiguration(newConfig);
              }}
            >
              <ArrowCounterClockwise size={18} />
            </Button>
          </Tooltip>
          <CopyButton getData={() => getNextUIPluginConfig(config)} />
        </div>

        <div className="mt-4">
          <Switch
            color="secondary"
            isSelected={syncThemes}
            size="sm"
            startContent={<ArrowsClockwise size={14} />}
            onValueChange={handleThemeSyncing}
          >
            Sync dark and light themes
          </Switch>
        </div>

        <div className="mt-4">
          <Templates
            onChange={(config) => {
              setConfiguration(config, theme, syncThemes);
              setAllCssVars(config, theme);
            }}
          />
        </div>

        <div className="flex flex-col gap-8 mt-6">
          <ConfigurationSection id={COLORS_ID} title="Brand colors">
            <ColorPicker
              hexColor={config[theme].brandColor.default}
              label="Default"
              type="default"
              onChange={(hexColor) => setCssColor("default", hexColor, theme)}
              onClose={(hexColor) =>
                setBrandColor({ default: hexColor }, theme, false)
              }
            />
            <ColorPicker
              hexColor={config[theme].brandColor.primary}
              icon={syncIcon}
              label="Primary"
              type="primary"
              onChange={(hexColor) => setCssColor("primary", hexColor, theme)}
              onClose={(hexColor) =>
                setBrandColor({ primary: hexColor }, theme, syncThemes)
              }
            />
            <ColorPicker
              hexColor={config[theme].brandColor.secondary}
              icon={syncIcon}
              label="Secondary"
              type="secondary"
              onChange={(hexColor) => setCssColor("secondary", hexColor, theme)}
              onClose={(hexColor) =>
                setBrandColor({ secondary: hexColor }, theme, syncThemes)
              }
            />
            <ColorPicker
              hexColor={config[theme].brandColor.success}
              icon={syncIcon}
              label="Success"
              type="success"
              onChange={(hexColor) => setCssColor("success", hexColor, theme)}
              onClose={(hexColor) =>
                setBrandColor({ success: hexColor }, theme, syncThemes)
              }
            />
            <ColorPicker
              hexColor={config[theme].brandColor.warning}
              icon={syncIcon}
              label="Warning"
              type="warning"
              onChange={(hexColor) => setCssColor("warning", hexColor, theme)}
              onClose={(hexColor) =>
                setBrandColor({ warning: hexColor }, theme, syncThemes)
              }
            />
            <ColorPicker
              hexColor={config[theme].brandColor.danger}
              icon={syncIcon}
              label="Danger"
              type="danger"
              onChange={(hexColor) => setCssColor("danger", hexColor, theme)}
              onClose={(hexColor) =>
                setBrandColor({ danger: hexColor }, theme, syncThemes)
              }
            />
          </ConfigurationSection>

          <ConfigurationSection id={BASE_COLORS_ID} title="Base colors">
            <ColorPicker
              hexColor={config[theme].baseColor.background}
              label="Background"
              type="background"
              onChange={(hexColor) => setCssBackground(hexColor)}
              onClose={(hexColor) =>
                setBaseColor({ background: hexColor }, theme)
              }
            />
            <ColorPicker
              hexColor={config[theme].baseColor.foreground}
              label="Foreground"
              type="foreground"
              onChange={(hexColor) =>
                setCssColor("foreground", hexColor, theme)
              }
              onClose={(hexColor) =>
                setBaseColor({ foreground: hexColor }, theme)
              }
            />
            <ColorPicker
              hexColor={config[theme].baseColor.content1}
              label="Content 1"
              type="content1"
              onChange={(hexColor) => setCssContentColor(1, hexColor)}
              onClose={(hexColor) =>
                setBaseColor({ content1: hexColor }, theme)
              }
            />
            <ColorPicker
              hexColor={config[theme].baseColor.content2}
              label="Content 2"
              type="content2"
              onChange={(hexColor) => setCssContentColor(2, hexColor)}
              onClose={(hexColor) =>
                setBaseColor({ content2: hexColor }, theme)
              }
            />
            <ColorPicker
              hexColor={config[theme].baseColor.content3}
              label="Content 3"
              type="content3"
              onChange={(hexColor) => setCssContentColor(3, hexColor)}
              onClose={(hexColor) =>
                setBaseColor({ content3: hexColor }, theme)
              }
            />
            <ColorPicker
              hexColor={config[theme].baseColor.content4}
              label="Content 4"
              type="content4"
              onChange={(hexColor) => setCssContentColor(4, hexColor)}
              onClose={(hexColor) =>
                setBaseColor({ content4: hexColor }, theme)
              }
            />
          </ConfigurationSection>

          <ConfigurationSection id={OTHER_COLORS_ID} title="Other colors">
            <ColorPicker
              hexColor={config[theme].otherColor.focus}
              icon={syncIcon}
              label="Focus"
              type="focus"
              onChange={(hexColor) => setCssOtherColor("focus", hexColor)}
              onClose={(hexColor) =>
                setOtherColor({ focus: hexColor }, theme, syncThemes)
              }
            />
            <ColorPicker
              hexColor={config[theme].otherColor.overlay}
              label="Overlay"
              type="overlay"
              onChange={(hexColor) => setCssOtherColor("overlay", hexColor)}
              onClose={(hexColor) =>
                setOtherColor({ overlay: hexColor }, theme, false)
              }
            />
            <ColorPicker
              hexColor={config[theme].otherColor.divider}
              label="Divider"
              type="divider"
              onChange={(hexColor) => setCssOtherColor("divider", hexColor)}
              onClose={(hexColor) =>
                setOtherColor({ divider: hexColor }, theme, false)
              }
            />
          </ConfigurationSection>

          <ConfigurationSection title="Font size (rem)">
            <NumberInput
              label="Tiny"
              value={config.layout.fontSize.tiny}
              onChange={(value) => {
                setFontSize({ tiny: value });
                setCssFontSize("tiny", value);
              }}
            />
            <NumberInput
              label="Small"
              value={config.layout.fontSize.small}
              onChange={(value) => {
                setFontSize({ small: value });
                setCssFontSize("small", value);
              }}
            />
            <NumberInput
              label="Medium"
              value={config.layout.fontSize.medium}
              onChange={(value) => {
                setFontSize({ medium: value });
                setCssFontSize("medium", value);
              }}
            />
            <NumberInput
              label="Large"
              value={config.layout.fontSize.large}
              onChange={(value) => {
                setFontSize({ large: value });
                setCssFontSize("large", value);
              }}
            />
          </ConfigurationSection>

          <ConfigurationSection title="Line height (rem)">
            <NumberInput
              label="Tiny"
              value={config.layout.lineHeight.tiny}
              onChange={(value) => {
                setLineHeight({ tiny: value });
                setCssLineHeight("tiny", value);
              }}
            />
            <NumberInput
              label="Small"
              value={config.layout.lineHeight.small}
              onChange={(value) => {
                setLineHeight({ small: value });
                setCssLineHeight("small", value);
              }}
            />
            <NumberInput
              label="Medium"
              value={config.layout.lineHeight.medium}
              onChange={(value) => {
                setLineHeight({ medium: value });
                setCssLineHeight("medium", value);
              }}
            />
            <NumberInput
              label="Large"
              value={config.layout.lineHeight.large}
              onChange={(value) => {
                setLineHeight({ large: value });
                setCssLineHeight("large", value);
              }}
            />
          </ConfigurationSection>

          <ConfigurationSection cols={3} title="Radius (rem)">
            <NumberInput
              label="Small"
              value={config.layout.radius.small}
              onChange={(value) => {
                setRadius({ small: value });
                setCssRadius("small", value);
              }}
            />
            <NumberInput
              label="Medium"
              value={config.layout.radius.medium}
              onChange={(value) => {
                setRadius({ medium: value });
                setCssRadius("medium", value);
              }}
            />
            <NumberInput
              label="Large"
              value={config.layout.radius.large}
              onChange={(value) => {
                setRadius({ large: value });
                setCssRadius("large", value);
              }}
            />
          </ConfigurationSection>

          <ConfigurationSection cols={3} title="Border width (px)">
            <NumberInput
              label="Small"
              value={config.layout.borderWidth.small}
              onChange={(value) => {
                setBorderWidth({ small: value });
                setCssBorderWidth("small", value);
              }}
            />
            <NumberInput
              label="Medium"
              value={config.layout.borderWidth.medium}
              onChange={(value) => {
                setBorderWidth({ medium: value });
                setCssBorderWidth("medium", value);
              }}
            />
            <NumberInput
              label="Large"
              value={config.layout.borderWidth.large}
              onChange={(value) => {
                setBorderWidth({ large: value });
                setCssBorderWidth("large", value);
              }}
            />
          </ConfigurationSection>

          <ConfigurationSection cols={1} title="Other params">
            <NumberInput
              label="Disabled opacity (0-1)"
              value={config.layout.otherParams.disabledOpacity}
              onChange={(value) => {
                setOtherParams({ disabledOpacity: value });
                setOtherCssParams("disabledOpacity", value);
              }}
            />
            <NumberInput
              label="Divider weight (px)"
              value={config.layout.otherParams.dividerWeight}
              onChange={(value) => {
                setOtherParams({ dividerWeight: value });
                setOtherCssParams("dividerWeight", value);
              }}
            />
            <NumberInput
              label="Hover opacity (0-1)"
              value={config.layout.otherParams.hoverOpacity}
              onChange={(value) => {
                setOtherParams({ hoverOpacity: value });
                setOtherCssParams("hoverOpacity", value);
              }}
            />
          </ConfigurationSection>
        </div>
      </CardBody>
    </Card>
  );
}
