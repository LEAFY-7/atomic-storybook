import { Meta } from "@storybook/react";
import { Theme, css } from "@emotion/react";
import Div from "../components/Div/default-div";

export default {
  title: "Atom/Div",
  component: Div,
  argTypes: {
    size: {
      control: { type: "select" },
      options: ["default", "xs", "sm", "md", "lg", "xl"],
    },
    variant: {
      control: { type: "select" },
      options: ["default", "primary", "secondary", "translucent"],
    },
    isBorder: {
      control: "boolean",
    },
    width: {
      control: "number",
    },
    height: {
      control: "number",
    },
    marginTop: {
      control: "range",
    },
    marginBottom: {
      control: "range",
    },
    marginLeft: {
      control: "range",
    },
    marginRight: {
      control: "range",
    },
  },
} as Meta;

const Template = (args) => {
  const { size, width, height, children, variant } = args;

  const { width: w, height: h } = divSizeBox[size];

  let description = "";
  switch (size) {
    case "xs":
      description = "Extra Small Size Div 박스";
      break;
    case "sm":
      description = "Small Size Div 박스";
      break;
    case "md":
      description = "Medium Size Div 박스";
      break;
    case "lg":
      description = "Large Size Div 박스";
      break;
    case "xl":
      description = "Extra Large Size Div 박스";
      break;
    default:
      description = "";
      break;
  }

  return (
    <section>
      <h1>일반 Div 컴포넌트</h1>

      <h3>1. Size Props</h3>
      <strong>size Props에 따라 Div 박스의 크기가 달라집니다.</strong>
      <li>
        Leafy에서 제공하는 Div 박스의 Size Props는 "xs" , "sm" , "md" , "lg" ,
        "xl" , "default" 입니다.{" "}
      </li>
      <li>
        size를 prop으로 내려주지 않으면 default로 지정되며 커스텀하여 사용하게
        됩니다.
      </li>

      <h3>2. variant Props</h3>

      <strong>Leafy에서 제공하는 Div박스의 variant는 세 가지 입니다.</strong>
      <li>2.1. default - 아무것도 적용하지 않음</li>
      <li>2.2. primary - primary 배경색의 Div 박스</li>
      <li>2.3. secondary - secondary 배경색의 Div 박스</li>
      <li>2.4. translucent - 반투명의 Div 박스 </li>

      <h3>3. width/height</h3>
      <strong>
        size를 prop으로 내려주지 않으면 커스텀하여 사용할 수 있습니다.
      </strong>
      <li>width/height에 number로 내려주게 되면 %로 받게 됩니다.</li>
      <li>예 ) `width={100}` 넓이 : 100% </li>
      <li>width/height에 string으로 내려주게 되면 px로 받게 됩니다.</li>

      <li>예 ) `width="100px"` 넓이 : 100px </li>
      <li>
        (주의 ! 이 스토리북에서는 단일 타입만 적용이 되므로 숫자만 기입이
        가능합니다.)
      </li>

      <h3>4. Margin - Top, Bottom, Left, Right</h3>
      <li>margin top/bottom/left/right의 props는 number 타입입니다.</li>
      <li>number에 맞게 px단위로 이동을 하게 됩니다.</li>

      <h3>5. 그 밖의 props</h3>
      <li>
        display, justifyContent, alignItems, direction(flex-direction), color,
        backgroundColor, overflowX/Y, padding 등
      </li>
      <span> {description}</span>

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
        <Div {...args}>
          <div> {children}</div>
        </Div>
      </div>
      <td style={{ fontSize: "16px" }}>variant : {variant}</td>
      <td style={{ fontSize: "16px" }}>size : {size}</td>
      <td style={{ fontSize: "16px" }}>
        넓이 : {size === "default" ? w + "px" : width}
      </td>
      <td style={{ fontSize: "16px" }}>
        높이 : {size === "default" ? h + "px" : height}
      </td>
    </section>
  );
};

export const defaultDiv = Template.bind({});
defaultDiv.args = {
  size: "md",
  variant: "translucent",
  isBorder: false,
  width: "inherit",
  height: "inherit",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  direction: "row",

  children: "",
};

const divSizeBox = {
  default: {
    width: "none",
    height: "none",
    minWidth: "inherit",
    minHeight: "inherit",
    padding: 0,
    radius: 0.8,
    borderWidth: 1,
  },
  xs: {
    width: 60,
    height: 60,
    minWidth: 30,
    minHeight: 30,
    padding: 1,
    radius: 0.4,
    borderWidth: 1,
  },
  sm: {
    width: 80,
    height: 80,
    minWidth: 50,
    minHeight: 50,
    padding: 4,
    radius: 0.6,
    borderWidth: 1,
  },
  md: {
    width: 160,
    height: 160,
    minWidth: 100,
    minHeight: 100,
    padding: 8,
    radius: 0.8,
    borderWidth: 1,
  },
  lg: {
    width: 240,
    height: 240,
    minWidth: 140,
    minHeight: 140,
    padding: 16,
    radius: 1,
    borderWidth: 2,
  },
  xl: {
    width: 400,
    height: 400,
    minWidth: 240,
    minHeight: 240,
    padding: 24,
    radius: 1.2,
    borderWidth: 3,
  },
};
