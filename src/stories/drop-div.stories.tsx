import DropDiv from "../components/Div/drop-div";
import { Meta } from "@storybook/react";
import { action } from "@storybook/addon-actions";

export default {
  title: "Atom/Div",
  component: DropDiv,
  argTypes: {
    size: {
      control: {
        type: "select",
      },
      options: ["xxs", "xs", "sm", "md", "lg", "xl", "xxl", "xxxl"],
    },
  },
} as Meta;

const Template = (args) => {
  const { size } = args;
  const { width, height, shadow } = dropSizeBox[size];

  let description = "";
  switch (size) {
    case "xxs":
      description = "Double Extra Small Size DropDiv";
      break;
    case "xs":
      description = "Extra Small Size DropDiv";
      break;
    case "sm":
      description = "Small Size DropDiv";
      break;
    case "md":
      description = "Medium Size DropDiv";
      break;
    case "lg":
      description = "Large Size DropDiv";
      break;
    case "xl":
      description = "Extra Large Size DropDiv";
      break;
    case "xxl":
      description = "Extra Extra Large Size DropDiv";
      break;
    case "xxxl":
      description = "Triple Large Size DropDiv";
      break;
    default:
      description = "";
      break;
  }

  return (
    <section>
      <h1>물방울 모양의 Div 컴포넌트</h1>
      <li>size Props에 따라 물방울의 크기가 달라집니다.</li>
      <div
        style={{
          width: "100vw",
          height: "100vh",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <DropDiv {...args} />

        <td style={{ fontSize: "16px" }}>넓이 : {width} px</td>
        <td style={{ fontSize: "16px" }}>높이 : {height} px</td>
      </div>
    </section>
  );
};

export const waterDrop = Template.bind({});
waterDrop.args = {
  size: "lg",
  children: "",
};

const dropSizeBox = {
  xxs: {
    width: 40,
    height: 40,
    shadow: 10,
  },
  xs: {
    width: 70,
    height: 70,
    shadow: 12,
  },
  sm: {
    width: 100,
    height: 100,
    shadow: 15,
  },
  md: {
    width: 120,
    height: 120,
    shadow: 18,
  },
  lg: {
    width: 150,
    height: 150,
    shadow: 20,
  },
  xl: {
    width: 180,
    height: 180,
    shadow: 25,
  },
  xxl: {
    width: 200,
    height: 200,
    shadow: 30,
  },
  xxxl: {
    width: 350,
    height: 350,
    shadow: 30,
  },
};
