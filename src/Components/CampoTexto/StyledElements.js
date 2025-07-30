import styled from "styled-components";

export const CampoTextoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
  @media (max-width: 480px) {
    margin-bottom: 16px;
  }
`;

export const Label = styled.label`
  font-weight: 700;
  font-size: 14px;
  text-transform: uppercase;
  color: #535964;
  margin-bottom: 4px;
  @media (max-width: 1440px) {
    font-size: 13px;
  }

  @media (max-width: 1366px) {
    font-size: 13px;
  }
  @media (max-width: 480px) {
    font-size: 12px;
  }
`;

export const Input = styled.input`
  width: 100%;
  border: none;
  padding: 10px 0;
  border-bottom: 1px solid #e3e5e8;
  background-color: #f9fafa;
  box-sizing: border-box;
  font-family: Lato;
  color: #1e2024;

  &::placeholder {
    font-weight: 400;
    font-size: 17px;
    color: #858b99;
  }

  &:focus {
    outline: none;
  }

  @media (max-width: 1440px) {
    width: 360px;

    &::placeholder {
      font-size: 16px;
    }
  }

  @media (max-width: 1366px) {
    width: 344px;

    &::placeholder {
      font-size: 15px;
    }
  }
  @media (max-width: 480px) {
    width: 100%;

    &::placeholder {
      font-size: 14px;
    }
  }
`;
