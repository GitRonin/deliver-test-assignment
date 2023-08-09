// Styled-components
import styled from "styled-components";

export const Wrap = styled.div`
  margin-top: 40px;
  display: flex;
  align-items: center;
  width: 450px;
  height: 150px;
  padding: 14px;
  border-radius: 6px;
  border: 1px solid #ccc;
  gap: 20px;
`;

export const Info = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
`;

export const UserName = styled.div`
  color: #0969da;
  font-weight: 600;
  font-size: 18px;
  flex: 1;
`;
export const Bio = styled.div`
  flex: 3;
  color: #7e8287;
`;
export const Link = styled.a`
  color: #898f96;
  &:hover {
    text-decoration: underline;
  }
`;
export const Avatar = styled.img`
  width: 150px;
  height: 150px;
  cursor: pointer;
`;
