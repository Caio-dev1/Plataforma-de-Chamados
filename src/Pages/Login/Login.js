import * as S from "./StyledElements";
import LoginBackground from "../../Img/LoginBackground.png"
import { useEffect } from "react";

function Login() {
    useEffect(() => {
    const fundoAnterior = document.body.style.backgroundImage;
    document.body.style.backgroundImage =
      `url(${LoginBackground})`;
    return () => {
      document.body.style.backgroundImage = fundoAnterior;
    };
  }, []);

    return ( 
        <S.LoginSection>
            <S.LoginForm>

            </S.LoginForm>
        </S.LoginSection>
    );
}

export default Login;