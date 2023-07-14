/** @jsxImportSource @emotion/react */
import React from "react";
import type { CSSProperties, HTMLAttributes } from "react";
import { Theme, css } from "@emotion/react";
import { theme } from "../../configs/ui.config";
import { variantStyles } from "./typography.style";

type VariantType = "H1" | "H2" | "H3" | "BODY1" | "BODY2" | "BODY3";
interface Props
  extends HTMLAttributes<
    HTMLHeadingElement | HTMLParagraphElement | HTMLSpanElement
  > {
  to?: string;
  as?: "span" | "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p";
  variant: VariantType;
  fontSize?: keyof typeof theme.fontSize;
  lineHeight?: keyof typeof theme.lineHeight | "none";
  color?: keyof typeof theme.colors;
  fontWeight?: keyof typeof theme.fontWeight;
  marginTop?: number;
  marginRight?: number;
  marginBottom?: number;
  marginLeft?: number;
  paddingTop?: number;
  paddingRight?: number;
  paddingBottom?: number;
  paddingLeft?: number;
  opacity?: number;
  textAlign?: CSSProperties["textAlign"];
  width?: CSSProperties["width"];
}

const Typography = ({
  as: Component = "span",
  variant = "BODY1",
  width = "inherit",
  color = "black",
  fontSize = "md",
  lineHeight = "none",
  fontWeight = "bold",
  marginTop = 0,
  marginRight = 0,
  marginBottom = 0,
  marginLeft = 0,
  paddingTop = 0,
  paddingRight = 0,
  paddingBottom = 0,
  paddingLeft = 0,
  opacity = 1,
  textAlign = "left",
  to = "",
  children,
  ...rest
}: React.PropsWithChildren<Props>) => {
  const typographyVariant = variantStyles[variant](theme);

  const newWidth = typeof width === "number" ? `${width}%` : width;

  const defaultTypographyStyle = css`
    display: ${Component === "span" && "inline-block"};
    margin-top: ${marginTop + "px"};
    margin-right: ${marginRight + "px"};
    margin-bottom: ${marginBottom + "px"};
    margin-left: ${marginLeft + "px"};
    padding-top: ${paddingTop + "px"};
    padding-right: ${paddingRight + "px"};
    padding-bottom: ${paddingBottom + "px"};
    padding-left: ${paddingLeft + "px"};
    opacity: ${opacity};
    text-align: ${textAlign};
    width: ${newWidth};
    ${typographyVariant}
    line-height: ${lineHeight !== "none" && theme.lineHeight[lineHeight]};
    color: ${theme.colors[color]};
  `;
  return (
    <Component css={defaultTypographyStyle} {...rest}>
      {children}
    </Component>
  );
};
export default Typography;
