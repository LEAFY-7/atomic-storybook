import { useState } from "react";
import { Meta } from "@storybook/react";
import DropButton from "../components/Button/drop-button";
import * as Styled from "./index.styles";
export default {
  title: "Atom/Button",
  component: DropButton,
  argTypes: {
    variant: {
      control: { type: "select" },
      options: ["primary", "secondary", "default"],
    },
    size: {
      control: { type: "radio" },
      options: ["xs", "sm", "md", "lg", "xl"],
    },

    backgroundColor: {
      control: { type: "select" },
      options: [
        "primary",
        "secondary",
        "inherit",
        "currentColor",
        "transparent",
        "green",
        "lgreen",
        "white",
        "grey",
        "black",
        "red",
        "yellow",
        "blossom",
      ],
    },
    isBorder: {
      control: "boolean",
    },
    disabled: {
      control: "boolean",
    },
    fontSize: {
      control: { type: "select" },
      options: [
        false,
        "xxs",
        "xs",
        "sm",
        "md",
        "lg",
        "xl",
        "xxl",
        "xxxl",
        "xxxxl",
      ],
    },
    color: {
      control: { type: "select" },
      options: [
        false,
        "primary",
        "secondary",
        "inherit",
        "currentColor",
        "transparent",
        "green",
        "lgreen",
        "white",
        "grey",
        "black",
        "red",
        "yellow",
        "blossom",
      ],
    },
  },
} as Meta;

const Template = (args) => {
  const [toggle, setToggle] = useState(false);
  const { size, height, children } = args;

  return (
    <section>
      <Styled.H1>Drop 물방울 버튼 컴포넌트</Styled.H1>
      <Styled.Strong>이 버튼 컴포넌트는 hover시에 물방울이 등장</Styled.Strong>
      <DropButton onClick={() => setToggle((prev) => !prev)}>
        설명 보기
      </DropButton>
      {toggle && (
        <Styled.DescriptionBox>
          <Styled.H3>1. variant</Styled.H3>
          <Styled.Strong>
            variant의 props에 따라 다른 유형이 등장합니다.
          </Styled.Strong>
          <Styled.Li>"primary", "secondary", "default"</Styled.Li>

          <Styled.H3>2. size</Styled.H3>
          <Styled.Strong>
            size props에 따라 내부 padding의 설정 크기가 변형됩니다.
          </Styled.Strong>
          <Styled.Li>"xs", "sm", "md", "lg", "xl" </Styled.Li>

          <Styled.H3>3. disabled</Styled.H3>
          <Styled.Li>
            disabled 상태를 나타냅니다. 타입은 boolean 이며 default : false
          </Styled.Li>

          <Styled.H3>4. isBorder</Styled.H3>
          <Styled.Li>
            배경 테두리 선을 나타냅니다. 타입은 Boolean이며 default : false
          </Styled.Li>

          <Styled.H3>5. custom</Styled.H3>
          <Styled.Li>
            하지만 variant 타입에 국한되지 않고, backgroundColor, color속성등을
            통해서도 변형이 가능합니다.
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
              <Styled.Td>size : {size}</Styled.Td>
              <Styled.Td>높이 : {height} </Styled.Td>
            </Styled.Detail>
            <div>
              <DropButton {...args}>{children}</DropButton>
            </div>
            <Styled.BottomText>
              이 스케치북의 너비는 1200px 높이는 750px입니다.
            </Styled.BottomText>
          </Styled.InnerContent>
        </Styled.SketchBook>
      </Styled.Wrapper>
    </section>
  );
};

export const dropButtonComponent = Template.bind({});
dropButtonComponent.args = {
  variant: "default",
  size: "md",
  isBorder: false,
  children: "click",
  color: false,
  disabled: false,
};
