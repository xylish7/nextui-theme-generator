import { Shade } from "shared/types";
import hexToHsl from "utils/hexToHsl";

function setPrimaryColor(color: Shade) {
  document.documentElement.style.setProperty(
    "--nextui-primary",
    hexToHsl(color[500])
  );
  document.documentElement.style.setProperty(
    "--nextui-primary-600",
    hexToHsl(color[600])
  );

  document.documentElement.style.setProperty(
    "--nextui-primary-foreground",
    hexToHsl(color.foreground)
  );
}

function setSecondaryColor(color: Shade) {
  document.documentElement.style.setProperty(
    "--nextui-secondary",
    hexToHsl(color[500])
  );
  document.documentElement.style.setProperty(
    "--nextui-secondary-600",
    hexToHsl(color[600])
  );

  document.documentElement.style.setProperty(
    "--nextui-secondary-foreground",
    hexToHsl(color.foreground)
  );
}

function setSuccessColor(color: Shade) {
  document.documentElement.style.setProperty(
    "--nextui-success",
    hexToHsl(color[500])
  );
  document.documentElement.style.setProperty(
    "--nextui-success-600",
    hexToHsl(color[600])
  );
  document.documentElement.style.setProperty(
    "--nextui-success-foreground",
    hexToHsl(color.foreground)
  );
}

function setWarningColor(color: Shade) {
  document.documentElement.style.setProperty(
    "--nextui-warning",
    hexToHsl(color[500])
  );
  document.documentElement.style.setProperty(
    "--nextui-warning-600",
    hexToHsl(color[600])
  );

  document.documentElement.style.setProperty(
    "--nextui-warning-foreground",
    hexToHsl(color.foreground)
  );
}

function setDangerColor(color: Shade) {
  document.documentElement.style.setProperty(
    "--nextui-danger",
    hexToHsl(color[500])
  );
  document.documentElement.style.setProperty(
    "--nextui-danger-600",
    hexToHsl(color[600])
  );

  document.documentElement.style.setProperty(
    "--nextui-danger-foreground",
    hexToHsl(color.foreground)
  );
}

export const cssVars = {
  setPrimaryColor,
  setSecondaryColor,
  setSuccessColor,
  setWarningColor,
  setDangerColor,
};
