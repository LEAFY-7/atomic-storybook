import { useState } from "react";
import { Meta } from "@storybook/react";
import Flex from "../components/Group/flex";
import * as Styled from "./index.styles";
import Div from "../components/Div/default-div";
import Box from "../components/Box/default-box";
import DropButton from "../components/Button/drop-button";

export default {
  title: "Atom/Flex",
  component: Flex,
  argTypes: {
    as: {
      control: { type: "select" },
      options: ["div", "main", "nav", "span"],
    },
    direction: {
      control: { type: "select" },
      options: ["row", "column"],
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

    justifyContent: {
      control: { type: "radio" },
      options: [
        "flex-start",
        "flex-end",
        "center",
        "space-between",
        "space-around",
        "space-evenly",
      ],
    },
    alignItems: {
      control: { type: "radio" },
      options: ["flex-start", "flex-end", "center", "baseline", "revert"],
    },
  },
} as Meta;

const Template = (args) => {
  const [toggle, setToggle] = useState(false);
  const { as, children } = args;

  return (
    <section>
      <Styled.H1>Flex 컴포넌트</Styled.H1>
      <Styled.Strong>
        이 컴포넌트는 컴포넌트들 간의 Grouping을 위한 컴포넌트입니다.
      </Styled.Strong>
      <DropButton onClick={() => setToggle((prev) => !prev)}>
        설명 보기
      </DropButton>
      {toggle && (
        <Styled.DescriptionBox>
          <Styled.H3>1. Grouping</Styled.H3>
          <Styled.Li>
            흔히 컴포넌트들을 묶고 정렬을 위해 상위 컴포넌트에 display flex를
            해줍니다.
          </Styled.Li>
          <Styled.Li>
            이러한 자주 쓰이는 패턴을 하나의 Flex컴포넌트를 만들어 컴포넌트들
            간의 단순 그룹역할을 하도록 합니다.
          </Styled.Li>

          <Styled.H3>2. as Props</Styled.H3>
          <Styled.Strong>
            as에 변형을 원하는 태그를 등록할 수 있습니다.
          </Styled.Strong>
          <Styled.Li>변형가는한 태그 "div", "main","nav","span" 등</Styled.Li>

          <Styled.H3>3. flex 관련 Props </Styled.H3>
          <Styled.Strong>
            flex와 관련된 기능들, 방향, 정렬, 배치 등을 prop으로 받습니다.
          </Styled.Strong>
          <Styled.Li>
            direction : flex-direction의 기능으로 row(기본값), column을
            받습니다.
          </Styled.Li>
          <Styled.Li>
            justifyContent : 컨텐츠들의 정렬을 위한 기능으로
            flex-start(기본값)부터 center까지 기존의 justify-content에 쓰이는
            css를 받습니다.
          </Styled.Li>
          <Styled.Li>
            alignItems : 컨텐츠들의 정렬을 위한 기능으로 flex-start(기본값)부터
            center까지 기존의 aligns-items에 쓰이는 css를 받습니다.
          </Styled.Li>
          <Styled.Li>
            alignContent : 컨텐츠들의 정렬을 위한 기능으로 normal(기본값)부터
            center까지 기존의 aligns-items에 쓰이는 css를 받습니다.
          </Styled.Li>
          <Styled.H3>4. 그 밖의 props </Styled.H3>
          <Styled.Li>베경색을 props으로 받습니다.</Styled.Li>
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
              <Styled.Td>이 flex의 태그는 {as}</Styled.Td>
            </Styled.Detail>
            <Box
              width={100}
              height={100}
              style={{ padding: "0px calc((100% - 1000px) / 2)" }}
            >
              <Flex {...args}>{children}</Flex>
            </Box>
            <Styled.BottomText>
              이 스케치북의 너비는 1200px 높이는 750px입니다.
            </Styled.BottomText>
          </Styled.InnerContent>
        </Styled.SketchBook>
      </Styled.Wrapper>
    </section>
  );
};

export const flexComponent = Template.bind({});

flexComponent.args = {
  as: "div",
  direction: "row",
  justifyContent: "flex-start",
  alignItems: "flex-start",
  wrap: "nowrap",

  children: (
    <>
      <Flex>
        <Div variant="primary" size="lg">
          예) Div 컴포넌트 primary
        </Div>
        <Div variant="secondary" size="lg">
          예) Div 컴포넌트 secondary
        </Div>
      </Flex>
      <Flex>
        <Div variant="translucent" size="lg">
          예) Div 컴포넌트 translucent
        </Div>
      </Flex>
    </>
  ),
};
