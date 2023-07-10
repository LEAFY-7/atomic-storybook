import styleConfig from "./style.config";
import uiConfigs from "./ui.config";

const themes = {
  light: uiConfigs.light,
  dark: uiConfigs.dark,
};

const themeConfigs = {
  custom: ({ mode }: { mode: "light" | "dark" }) => {
    return mode === "light"
      ? { ...styleConfig.theme, ["palette"]: themes.light }
      : { ...styleConfig.theme, ["palette"]: themes.dark };
  },
};

export default themeConfigs;
