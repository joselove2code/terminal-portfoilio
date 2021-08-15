import styled from "styled-components";

export const Wrapper = styled.div`
  position: fixed;
  text-align: center;
  bottom: 0;
  left: 0;
  right: 0;

  @media (min-width: 769px) {
    display: none;
  }
`;

export const Input = styled.input`
  width: 0;
  opacity: 0;
`;

export const Button = styled.button`
  border: none;
  font-size: 30px;
  background: transparent;
`;