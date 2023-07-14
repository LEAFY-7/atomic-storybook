import uiConfigs from "./ui.config";

const themeConfigs = {
  custom: ({ mode }: { mode: "light" | "dark" }) => {
    return mode === "light"
      ? { ...uiConfigs.theme, ["palette"]: uiConfigs.light }
      : { ...uiConfigs.theme, ["palette"]: uiConfigs.dark };
  },
};

export default themeConfigs;
