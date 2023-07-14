import DropDiv from "../components/Div/drop-div";
import { Meta } from "@storybook/react";
import * as Styled from "./index.styles";

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
  const { width, height, children } = dropSizeBox[size];

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
      <Styled.DescriptionBox>
        <Styled.H1>물방울 모양의 Div 컴포넌트</Styled.H1>
        <Styled.Strong>
          size Props에 따라 물방울의 크기가 달라집니다.
        </Styled.Strong>
      </Styled.DescriptionBox>
      <Styled.Wrapper>
        <Styled.SketchBook>
          <div style={{ display: "flex", flexDirection: "column" }}>
            {Array.from({ length: 19 }).map((d, index) => (
              <Styled.Spring key={index} />
            ))}
          </div>
          <Styled.InnerContent>
            <Styled.Detail>
              <Styled.Td>size : {size}</Styled.Td>
              <Styled.Td>넓이 : {width} px</Styled.Td>
              <Styled.Td>높이 : {height} px</Styled.Td>
              <span> {description}</span>
            </Styled.Detail>
            <DropDiv {...args}>{children}</DropDiv>
            <Styled.BottomText>
              이 스케치북의 너비는 1200px 높이는 750px입니다.
            </Styled.BottomText>
          </Styled.InnerContent>
        </Styled.SketchBook>
      </Styled.Wrapper>
    </section>
  );
};

export const dropDivComponent = Template.bind({});
dropDivComponent.args = {
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
