import { Global, ThemeProvider } from "@emotion/react";
import globalStyle from "@configs/style.config";
import themeConfigs from "@configs/theme.config";
import Temp from "./temp";

const App = () => {
  const isProduction = process.env.NODE_ENV;
  console.log(isProduction);

  return (
    <ThemeProvider theme={themeConfigs.custom({ mode: "light" })}>
      <Temp />
      <Global styles={globalStyle} />
    </ThemeProvider>
  );
};
export default App;
