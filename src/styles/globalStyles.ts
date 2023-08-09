import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  body,
  h1,
  h2,
  h3,
  h4,
  p,
  ul,
  ol,
  button,
  textarea,
  select,
  a {
    all: unset;
  }

  a {
    cursor: pointer;
  }
  
  a[disabled] {
    pointer-events: none;
    cursor: default;
  }
  
  p {
    display: inline-block;
  }
    
  body {
    overflow: auto;
    scroll-behavior: smooth;
    background-color: #F6F8FA;
    color: #1F2328;
    font-family: 'Cormorant', serif;
    font-family: 'Poppins', sans-serif;
    font-family: 'Roboto', sans-serif;
  }

  input,
  button,
  textarea,
  a {
    box-sizing: border-box;
  }

  table {
    border-spacing: 0;
  }
`;
