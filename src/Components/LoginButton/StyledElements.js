import styled from "styled-components";

export const ButtonStyle = styled.button`
  gap: 8px;
  width: 100%;
  height: 48px;
  padding: 0 16px;
  font-size: 18px;
  font-family: "Lato", sans-serif;
  font-weight: 700;
  border-radius: 6px;
  border: none;
  cursor: pointer;
  opacity: 1;

  color: ${({ colorvariant }) =>
    colorvariant === "secondary" ? "#1E2024" : "#F9FAFA"};

  background-color: ${({ backgroundvariant }) =>
    backgroundvariant === "secondary" ? "#E3E5E8" : "#1E2024"};

  @media (max-width: 1440px) {
    width: 360px;
    height: 44px;
    font-size: 17px;
  }

  @media (max-width: 1366px) {
    width: 344px;
    height: 40px;
    font-size: 16px;
  }
  @media (max-width: 480px) {
    width: 100%;
    height: 42px;
    font-size: 15px;
  }
`;
