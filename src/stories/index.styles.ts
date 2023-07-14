import styled from "@emotion/styled";

export const H1 = styled.h1`
  font-size: 22px;
`;

export const H3 = styled.h3`
  font-size: 16px;
`;

export const Strong = styled.strong`
  font-size: 18px;
`;
export const Li = styled.li`
  margin-top: 8px;
  margin-bottom: 8px;
  font-size: 14px;
  font-weight: 600;
  color: #859398;
`;
export const Td = styled.td`
  font-size: 16px;
  margin-top: 4px;
  margin-bottom: 4px;
`;
export const Wrapper = styled.div`
  display: flex;
  align-items: center;
`;

export const SketchBook = styled.div`
  position: relative;
  width: 1200px;
  height: 750px;
  display: flex;

  padding: 24px;
  background-color: #fff;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
  border-radius: 10px;
`;
export const Spring = styled.div`
  width: 20px;
  height: 40px;
  background-color: #000;
  border-radius: 10px;
  position: relative;
  overflow: hidden;
  &::before,
  &::after {
    content: "";
    position: absolute;
    width: 12px;
    height: 12px;
    background-color: #fff;
    border-radius: 50%;
  }
`;

export const Detail = styled.div`
  position: absolute;
  right: 20px;
  top: 0;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-end;
  font-size: 14px;
`;
export const InnerContent = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const BottomText = styled.span`
  position: absolute;
  bottom: 0;
  right: 50px;
  margin-top: 8px;
  margin-bottom: 8px;
  font-size: 14px;
  font-weight: 600;
  color: #859398;
`;
