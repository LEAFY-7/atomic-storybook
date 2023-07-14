import { useState } from "react";
import { Meta } from "@storybook/react";
import Div from "../components/Div/default-div";
import * as Styled from "./index.styles";

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
      control: { type: "text" },
    },
    height: {
      control: { type: "text" },
    },
    marginTop: {
      control: "number",
    },
    marginBottom: {
      control: "number",
    },
    marginLeft: {
      control: "number",
    },
    marginRight: {
      control: "number",
    },
    padding: {
      control: "number",
    },
  },
} as Meta;

const Template = (args) => {
  const [toggle, setToggle] = useState(false);
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
      <button onClick={() => setToggle((prev) => !prev)}>설명 보기</button>
      {toggle && (
        <Styled.DescriptionBox>
          <Styled.H1>일반 Div 컴포넌트</Styled.H1>

          <Styled.H3>1. Size Props</Styled.H3>
          <Styled.Strong>
            size Props에 따라 Div 박스의 크기가 달라집니다.
          </Styled.Strong>
          <Styled.Li>
            Leafy에서 제공하는 Div 박스의 Size Props는 "xs" , "sm" , "md" , "lg"
            , "xl" , "default" 입니다.{" "}
          </Styled.Li>
          <Styled.Li>
            size를 prop으로 내려주지 않으면 default로 지정되며 커스텀하여
            사용하게 됩니다.
          </Styled.Li>

          <Styled.H3>2. variant Props</Styled.H3>

          <Styled.Strong>
            Leafy에서 제공하는 Div박스의 variant는 세 가지 입니다.
          </Styled.Strong>
          <Styled.Li>2.1. default - 아무것도 적용하지 않음</Styled.Li>
          <Styled.Li>2.2. primary - primary 배경색의 Div 박스</Styled.Li>
          <Styled.Li>2.3. secondary - secondary 배경색의 Div 박스</Styled.Li>
          <Styled.Li>2.4. translucent - 반투명의 Div 박스 </Styled.Li>

          <Styled.H3>3. width/height</Styled.H3>
          <Styled.Strong>
            size를 prop으로 내려주지 않으면 커스텀하여 사용할 수 있습니다.
          </Styled.Strong>
          <Styled.Li>
            width/height에 number로 내려주게 되면 %로 받게 됩니다.
          </Styled.Li>
          <Styled.Li>예 ) `width={100}` 넓이 : 100% </Styled.Li>
          <Styled.Li>
            width/height에 string으로 내려주게 되면 px로 받게 됩니다.
          </Styled.Li>

          <Styled.Li>예 ) `width="100px"` 넓이 : 100px </Styled.Li>
          <Styled.Li>
            (주의 ! 이 스토리북에서는 단일 타입만 적용이 되므로 숫자만 기입이
            가능합니다.)
          </Styled.Li>

          <Styled.H3>4. Margin - Top, Bottom, Left, Right</Styled.H3>
          <Styled.Li>
            margin top/bottom/left/right의 props는 number 타입입니다.
          </Styled.Li>
          <Styled.Li>number에 맞게 px단위로 이동을 하게 됩니다.</Styled.Li>

          <Styled.H3>5. 그 밖의 props</Styled.H3>
          <Styled.Li>
            display, justifyContent, alignItems, direction(flex-direction),
            color, backgroundColor, overflowX/Y, padding 등
          </Styled.Li>
        </Styled.DescriptionBox>
      )}

      <Styled.Wrapper>
        <Styled.SketchBook>
          <div style={{ display: "flex", flexDirection: "column" }}>
            {Array.from({ length: 19 }).map((d, index) => (
              <Styled.Spring key={index} />
            ))}
          </div>
          <Styled.InnerContent>
            <Styled.Detail>
              <Styled.Td>variant : {variant}</Styled.Td>
              <Styled.Td>size : {size}</Styled.Td>
              <Styled.Td>
                넓이 : {size === "default" ? w + "px" : width}
              </Styled.Td>
              <Styled.Td>
                높이 : {size === "default" ? h + "px" : height}
              </Styled.Td>
              <span> {description}</span>
            </Styled.Detail>
            <Div {...args}>
              <div> {children}</div>
            </Div>
            <Styled.BottomText>
              이 스케치북의 너비는 1200px 높이는 750px입니다.
            </Styled.BottomText>
          </Styled.InnerContent>
        </Styled.SketchBook>
      </Styled.Wrapper>
    </section>
  );
};

export const defaultDivComponent = Template.bind({});
defaultDivComponent.args = {
  variant: "translucent",
  size: "md",
  isBorder: false,
  width: "inherit",
  height: "inherit",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  direction: "row",
  padding: 0,

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
