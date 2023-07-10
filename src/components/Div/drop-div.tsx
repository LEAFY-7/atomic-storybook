/** @jsxImportSource @emotion/react */
import React from "react";
import { css } from "@emotion/react";

type DropProps = React.PropsWithChildren<{
  size?: "xxs" | "xs" | "sm" | "md" | "lg" | "xl" | "xxl" | "xxxl";
}>;

const DefaultDrop = React.forwardRef(function DefaultDrop(
  { size = "md", children, ...rest }: DropProps,
  forwardedRef: React.Ref<HTMLDivElement>
) {
  const { width, height, shadow } = dropSizeBox[size];

  const wrapperStyle = css`
    position: relative;
    width: ${width + "px"};
    height: ${height + "px"};
  `;

  const innerStyle = css`
    position: absolute;
    left: 0%;
    right: 0%;
    top: 0%;
    bottom: 0%;
    background: radial-gradient(
      66.35% 237.95% at 21.48% 25.52%,
      rgba(250, 250, 250, 0.3) 0%,
      rgba(250, 250, 250, 0.01) 18.75%,
      #fafafa 100%
    );
    mix-blend-mode: normal;
    box-shadow:
      5px ${shadow + "px"} ${shadow + "px"} rgba(14, 17, 27, 0.1),
      inset 5px ${shadow + "px"} ${shadow + "px"} rgba(14, 17, 27, 0.15);
    backdrop-filter: blur(15px);
    border-radius: 50%;
  `;

  return (
    <div css={wrapperStyle} ref={forwardedRef} {...rest}>
      <div css={innerStyle}>{children}</div>
    </div>
  );
});

export default DefaultDrop;

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
