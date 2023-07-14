import { useState } from "react";
import { Meta } from "@storybook/react";
import Box from "../components/Box/default-box";
import * as Styled from "./index.styles";
export default {
  title: "Atom/Box",
  component: Box,
  argTypes: {
    as: {
      control: { type: "select" },
      options: [
        "div",
        "main",
        "nav",
        "section",
        "article",
        "header",
        "aside",
        "ul",
      ],
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
    width: {
      control: "number",
    },
    height: {
      control: "number",
    },
    marginTop: {
      control: { type: "number" },
    },
    marginBottom: {
      control: { type: "number" },
    },
    marginLeft: {
      control: { type: "number" },
    },
    marginRight: {
      control: { type: "number" },
    },
    padding: {
      control: "number",
    },
  },
} as Meta;

const Template = (args) => {
  const [toggle, setToggle] = useState(false);
  const { as, size, width, height, children } = args;

  return (
    <section>
      <button onClick={() => setToggle((prev) => !prev)}>설명 보기</button>
      {toggle && (
        <>
          <Styled.H1>일반 Box 컴포넌트</Styled.H1>
          <Styled.Strong>
            이 컴포넌트는 일반적인 Div와 달리 시멘틱 태그를 위해 사용
          </Styled.Strong>

          <Styled.H3>1. as Props</Styled.H3>
          <Styled.Strong>
            as에 변형을 원하는 태그를 등록할 수 있습니다.
          </Styled.Strong>
          <Styled.Li>
            변형가는한 태그 "div", "main", "nav", "section", "article",
            "header", "aside", "ul" 등
          </Styled.Li>

          <Styled.H3>2. width/height</Styled.H3>
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
            가능하지만, 실제 사용시에는 숫자는 %로 적용되며 px로 적용하기
            위해서는 문자열로 입력합니다.)
          </Styled.Li>

          <Styled.H3>3. Margin - margin, Top, Bottom, Left, Right</Styled.H3>
          <Styled.Li>
            margin top/bottom/left/right의 props는 number 타입입니다.
          </Styled.Li>
          <Styled.Li>number에 맞게 px단위로 이동을 하게 됩니다.</Styled.Li>

          <Styled.H3>4. Padding -padding, Top, Bottom, Left, Right</Styled.H3>
          <Styled.Li>
            padding top/bottom/left/right의 props는 number 타입입니다.
          </Styled.Li>
          <Styled.Li>
            number에 맞게 px단위로 padding을 적용하게 됩니다.
          </Styled.Li>

          <Styled.H3>5. 그 밖의 props</Styled.H3>
          <Styled.Li>
            display, justifyContent, alignItems, direction(flex-direction),
            color, backgroundColor, overflowX/Y, padding 등
          </Styled.Li>
        </>
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
              <Styled.Td>이 Box의 태그는 {as}</Styled.Td>
              <Styled.Td>size : {size}</Styled.Td>
              <Styled.Td>넓이 : {width} %</Styled.Td>
              <Styled.Td>높이 : {height} %</Styled.Td>
            </Styled.Detail>
            <Box {...args}>{children}</Box>
            <Styled.BottomText>
              이 스케치북의 너비는 1200px 높이는 750px입니다.
            </Styled.BottomText>
          </Styled.InnerContent>
        </Styled.SketchBook>
      </Styled.Wrapper>
    </section>
  );
};

export const defaultBoxComponent = Template.bind({});
defaultBoxComponent.args = {
  as: "div",
  backgroundColor: "inherit",
  width: "inherit",
  height: "inherit",
  display: "block",
  position: "static",
  justifyContent: "flex-start",
  alignItems: "flex-start",
  direction: "row",
  padding: 0,
  margin: 0,
  children: "",
};
