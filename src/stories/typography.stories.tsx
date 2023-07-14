import { useState } from "react";
import { Meta } from "@storybook/react";
import * as Styled from "./index.styles";
import Typography from "../components/Typography/default-typography";

export default {
  title: "Atom/typography",
  component: Typography,
  argTypes: {
    as: {
      control: { type: "select" },
      options: ["span", "h1", "h2", "h3", "h4", "h5", "h6", "p"],
    },
    variant: {
      control: { type: "select" },
      options: ["H1", "H2", "H3", "BODY1", "BODY2", "BODY3"],
    },
    color: {
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
    textAlign: {
      control: { type: "select" },
      options: ["left", "right", "center", "start", "end"],
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
  },
} as Meta;

const Template = (args) => {
  const [toggle, setToggle] = useState(false);
  const { as, children } = args;

  return (
    <section>
      <button onClick={() => setToggle((prev) => !prev)}>설명 보기</button>
      {toggle && (
        <>
          <Styled.H1>Typography 컴포넌트</Styled.H1>
          <Styled.Strong>
            이 컴포넌트는 텍스트를 다루는 컴포넌트입니다.
          </Styled.Strong>

          <Styled.H3>1. variant</Styled.H3>
          <Styled.Li>
            이 컴포넌트 variant의 유형에 따라 크기와 굵기가 다른 모양을
            지원합니다.
          </Styled.Li>
          <Styled.Li> H1, H2, H3, BODY1, BODY2, BODY3</Styled.Li>

          <Styled.H3>2. as Props</Styled.H3>
          <Styled.Strong>
            as에 변형을 원하는 태그를 등록할 수 있습니다.
          </Styled.Strong>
          <Styled.Li>
            변형가는한 태그 "span", "h1", "h2", "h3", "h4", "h5", "h6", "p" 등
          </Styled.Li>

          <Styled.H3>3. px 이동과 관련 Props </Styled.H3>
          <Styled.Strong>
            이 컴포넌트의 좌우 이동과 관련한 Props으로
            marginTop,marginBottom,marginLeft,marginRight가 있습니다.
          </Styled.Strong>
          <Styled.Li>
            각각의 Props들은 number타입을 받으며, 상하좌우로 이동은 px단위로
            하게 됩니다.
          </Styled.Li>

          <Styled.H3>4. 정렬과 관련 props </Styled.H3>
          <Styled.Li>textAlign을 Props으로 받아 정렬을 지원합니다.</Styled.Li>
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
              <Styled.Td>이 Typography 컴포넌트의 태그 {as}</Styled.Td>
            </Styled.Detail>
            <Typography {...args}>{children}</Typography>
            <Styled.BottomText>
              이 스케치북의 너비는 1200px 높이는 750px입니다.
            </Styled.BottomText>
          </Styled.InnerContent>
        </Styled.SketchBook>
      </Styled.Wrapper>
    </section>
  );
};

export const defaultTypography = Template.bind({});
defaultTypography.args = {
  as: "span",
  variant: "BODY1",
  color: "black",
  fontSize: "md",
  children: "children에 텍스트를 입력해주세요.",
};
