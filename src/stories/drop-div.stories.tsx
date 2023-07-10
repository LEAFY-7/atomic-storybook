import DropDiv from "../components/Div/drop-div";

export default {
  title: "DropDiv",
  component: DropDiv,
};

export const Default = () => {
  const task = {
    content: "하하하",
    complete: false,
  };
  return <DropDiv size="sm"></DropDiv>;
};
