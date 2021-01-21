import styled from "styled-components";

export const Wrapper = styled.div``;

export const Title = styled.h2`
  height: 32px;
  color: #004d61;
  font-size: 18px;
  font-weight: 400;
`;

export const Array = styled.div`
  height: 424px;
  overflow: auto;

  /* Cor do fundo da rolagem */
  ::-webkit-scrollbar-track {
    background-color: #f4f4f4;
  }
  /* Largura da rolagem */
  ::-webkit-scrollbar {
    width: 2px;
  }
  /* Cor de funfo da rolagem */
  ::-webkit-scrollbar-thumb {
    background: #004d61;
  }
`;
