import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  cursor: default;
`;

export const Indicator = styled.div`
  height: 14px;
  width: 14px;
  border-radius: 7px;

  margin-right: 8px;

  cursor: pointer;

  ${(props) => (props.value ? "background-color : #004d61;" : "")}
  border: 2px solid #004d61;
`;
