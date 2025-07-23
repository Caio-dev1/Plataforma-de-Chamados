import styled from "styled-components";

export const LoginSection = styled.section`
  display: flex;
  justify-content: flex-end;
  height: 100vh;
  overflow: hidden;
`;

export const LoginForm = styled.form`
  background-color: #F9FAFA;
  width: 680px;
  height: 844px;
  border-top-left-radius: 20px;
  padding: 48px 140px;
  margin-top: 12px;
  opacity: 1;

  @media (max-width: 1440px) {
    width: 680px;
    height: 756px;
    margin-top: 12px;
  }
`;
