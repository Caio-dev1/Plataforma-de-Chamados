import * as S from "./StyledElements";
import LoginBackground from "../../Img/LoginBackground.png";
import { useEffect, useState } from "react";
import Logo from "../../Img/Logo.png";
import CampoTexto from "../../Components/CampoTexto";
import LoginButton from "../../Components/LoginButton";

function Login() {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  useEffect(() => {
    const fundoAnterior = document.body.style.backgroundImage;
    const backgroundSizeAnterior = document.body.style.backgroundSize;
    const backgroundRepeatAnterior = document.body.style.backgroundRepeat;
    const backgroundPositionAnterior = document.body.style.backgroundPosition;

    document.body.style.backgroundImage = `url(${LoginBackground})`;
    document.body.style.backgroundSize = "cover";
    document.body.style.backgroundRepeat = "no-repeat";
    document.body.style.backgroundPosition = "center";

    return () => {
      document.body.style.backgroundImage = fundoAnterior;
      document.body.style.backgroundSize = backgroundSizeAnterior;
      document.body.style.backgroundRepeat = backgroundRepeatAnterior;
      document.body.style.backgroundPosition = backgroundPositionAnterior;
    };
  }, []);

  return (
    <S.LoginSection>
      <S.LoginWrapper>
        <S.HeaderLogo>
          <S.LogoImg src={Logo} alt="Logo da Help Desk" />
          <S.Brandname>Help Desk</S.Brandname>
        </S.HeaderLogo>
        <S.LoginForm>
          <S.LoginHeader>
            <S.LoginTitle>Acesse o portal</S.LoginTitle>
            <S.LoginText>
              Entre usando seu e-mail e senha cadastrados
            </S.LoginText>
          </S.LoginHeader>
          <S.CampoTextoContainer>
            <CampoTexto
              label="E-mail"
              name="email"
              placeholder="exemplo@mail.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              required
            />
            <CampoTexto
              label="Senha"
              name="senha"
              placeholder="Digite sua senha"
              value={senha}
              onChange={(e) => setSenha(e.target.value)}
              type="password"
              required
            />
          </S.CampoTextoContainer>
          <LoginButton type="submit">Entrar</LoginButton>
        </S.LoginForm>
        <S.SignIn>
          <S.LoginHeader>
            <S.SigninTitle>Ainda não tem uma conta?</S.SigninTitle>
            <S.LoginText>Cadastre-se agora mesmo</S.LoginText>
          </S.LoginHeader>
          <LoginButton
            backgroundvariant="secondary"
            colorvariant="secondary"
            type="button"
          >
            Criar conta
          </LoginButton>
        </S.SignIn>
      </S.LoginWrapper>
    </S.LoginSection>
  );
}

export default Login;
