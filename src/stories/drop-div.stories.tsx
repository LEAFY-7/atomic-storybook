import DropDiv from "../components/Div/drop-div";
import { Meta } from "@storybook/react";
import { action } from "@storybook/addon-actions";

export default {
  title: "Atom/Div",
  component: DropDiv,
  argTypes: {
    size: {
      control: {
        type: "radio",
      },
      options: ["xxs", "xs", "sm", "md", "lg", "xl", "xxl", "xxxl"],
    },
  },
} as Meta;

const Template = (args) => {
  const { size } = args;

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
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <DropDiv {...args} />
      <p>{description}</p>
    </div>
  );
};

export const waterDrop = Template.bind({});
waterDrop.args = {
  size: "lg",
  children: "",
};
