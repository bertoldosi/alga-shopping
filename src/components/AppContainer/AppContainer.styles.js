import styled from "styled-components";

export const Wrapper = styled.main`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 20px;

  padding: 20px;

  div {
    div {
      h4 {
        margin-bottom: 10px;
      }
    }
  }
`;
