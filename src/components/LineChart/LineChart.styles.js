import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;

  margin-bottom: 12px;
  font-size: 12px;
  color: #004d61;
`;

export const ProgressBar = styled.div`
  width: ${(props) => (props.percentage ? props.percentage : 0)}%;
  height: 14px;
  border-radius: 3px;
  background-color: ${(props) => (props.color ? props.color : "#004d61")};

  transition: 0.5s ease;
`;
