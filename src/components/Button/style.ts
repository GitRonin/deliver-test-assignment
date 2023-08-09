// Styled-components
import styled from "styled-components";

export const Wrap = styled.div``;

export const StyledButton = styled.button`
  background-color: #1f883d;
  width: 150px;
  height: 50px;
  cursor: pointer;
  border-radius: 6px;
  color: #e7f2ea;
  display: flex;
  align-items: center;
  justify-content: center;
  user-select: none;
  font-weight: 500;
  font-size: 24px;
  transition: all 0.2s ease-out;
  &:hover {
    transition: all 0.2s ease-out;
    background-color: #1a7132;
  }
  &:active {
    transition: all 0.2s ease-out;
    background-color: #165f2b;
  }
  &:disabled {
    cursor: not-allowed;
    opacity: 0.5;
    background-color: #1f883d;
  }
`;

export const Loader = styled.span`
  width: 30px;
  height: 30px;
  border: 2px solid #fff;
  border-bottom-color: transparent;
  border-radius: 50%;
  display: inline-block;
  box-sizing: border-box;
  animation: rotation 1s linear infinite;

  @keyframes rotation {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;
