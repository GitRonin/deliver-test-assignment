// Styled-components
import styled from "styled-components";

export const Wrap = styled.div``;

export const StyledInput = styled.input`
    border-radius: 6px;
    outline: none;
    box-shadow: inset 0 0 0 1px transparent;
    width: 550px;
    height: 60px;
    padding: 5px 12px;
    white-space: nowrap;
    text-align: left;
    font-size: 18px;
    line-height: 20px;
    vertical-align: middle;
    border: 1px solid #ccc;
    transition: all 0.2s ease-out;    
    cursor: text;
    &:focus {
        transition: all 0.2s ease-out;    
        border: 1px solid #0969DA;
    }
    &:disabled {
        cursor: not-allowed;
    }
`
