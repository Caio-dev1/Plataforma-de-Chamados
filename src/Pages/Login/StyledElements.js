import styled from "styled-components";

export const LoginSection = styled.section`
  display: flex;
  justify-content: flex-end;
  height: 100vh;
  overflow: hidden;

  @media (max-width: 480px) {
    justify-content: center;
    align-items: flex-start;
    padding-top: 40px;
  }
`;
export const LogoImg = styled.img`
  width: 60px;
  height: 60px;
`;
export const LoginWrapper = styled.div`
  background-color: #f9fafa;
  width: 820px;
  height: auto;
  border-top-left-radius: 20px;
  padding: 72px 120px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 32px;

  @media (max-width: 1440px) {
    width: 740px;
    padding: 56px 90px;
    gap: 24px;
  }

  @media (max-width: 1366px) {
    width: 680px;
    padding: 48px 80px;
    gap: 20px;
  }

  @media (max-width: 768px) {
    width: 100%;
    height: auto;
    border-radius: 20px;
    padding: 32px 24px;
    gap: 16px;
  }
  @media (max-width: 480px) {
    width: 100%;
    min-height: 100vh;
    border-radius: 0;
    gap: 20px;
    box-sizing: border-box;
  }
`;

export const LoginForm = styled.form`
  border: 1px solid #e3e5e8;
  border-radius: 10px;
  padding: 45px;
  width: 450px;
  display: flex;
  flex-direction: column;
  gap: 35px;
  @media (max-width: 1440px) {
    padding: 29px;
    width: auto;
  }

  @media (max-width: 1366px) {
    font-size: 28px;
    width: auto;
  }
  @media (max-width: 480px) {
    width: 300px;
    gap: 32px;
    padding: 24px;
  }
`;
export const SignIn = styled.div`
  border: 1px solid #e3e5e8;
  border-radius: 10px;
  padding: 30px;
  width: 480px;
  display: flex;
  flex-direction: column;
  gap: 35px;
  @media (max-width: 1440px) {
    padding: 29px;
    width: auto;
  }

  @media (max-width: 1366px) {
    font-size: 28px;
    width: auto;
  }
  @media (max-width: 480px) {
    width: 300px;
    padding: 24px;
    gap: 24px;
  }
`;
export const HeaderLogo = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;
export const Brandname = styled.h3`
  font-weight: 700;
  font-style: Bold;
  font-size: 30px;
  color: #2e3da3;
  @media (max-width: 1440px) {
    font-size: 24px;
  }

  @media (max-width: 1366px) {
    font-size: 24px;
  }
  @media (max-width: 480px) {
    font-size: 20px;
  }
`;
export const LoginHeader = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;
export const LoginTitle = styled.h3`
  margin: 0;
  font-weight: 700;
  font-style: Bold;
  font-size: 26px;

  @media (max-width: 1440px) {
    font-size: 24px;
  }

  @media (max-width: 1366px) {
    font-size: 22px;
  }
  @media (max-width: 480px) {
    font-size: 20px;
  }
`;

export const LoginText = styled.p`
  margin: 0;
  font-weight: 400;
  font-style: Regular;
  font-size: 14px;
  color: #535964;

  @media (max-width: 1440px) {
    font-size: 13px;
  }

  @media (max-width: 1366px) {
    font-size: 12px;
  }
  @media (max-width: 480px) {
    font-size: 11px;
  }
`;
export const SigninTitle = styled.h3`
  margin: 0;
  font-weight: 700;
  font-style: Bold;
  font-size: 20px;

  @media (max-width: 1440px) {
    font-size: 17px;
  }

  @media (max-width: 1366px) {
    font-size: 16px;
  }
  @media (max-width: 480px) {
    font-size: 15px;
  }
`;

export const CampoTextoContainer = styled.div``;
