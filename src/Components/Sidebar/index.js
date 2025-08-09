import * as S from "./StyledElements";
import LogoDark from "../../Img/LogoDark.svg";
import { ClipboardList, Users, BriefcaseBusiness, Wrench } from "lucide-react";

function SideBar() {
  return (
    <S.Container>
      <S.BrandSection>
        <img src={LogoDark} alt="Logo" />
        <div>
          <S.BrandName>HelpDesk</S.BrandName>
          <S.BrandRole>ADMIN</S.BrandRole>
        </div>
      </S.BrandSection>
      <S.Menu>
        <S.MenuItem active>
          <S.MenuIcon active>
            <ClipboardList />
          </S.MenuIcon>
          Chamados
        </S.MenuItem>
        <S.MenuItem>
          <S.MenuIcon>
            <Users />
          </S.MenuIcon>
          Técnicos
        </S.MenuItem>
        <S.MenuItem>
          <S.MenuIcon>
            <BriefcaseBusiness />
          </S.MenuIcon>
          Clientes
        </S.MenuItem>
        <S.MenuItem>
          <S.MenuIcon>
            <Wrench />
          </S.MenuIcon>
          Serviços
        </S.MenuItem>
      </S.Menu>
      <S.ProfileSection>
        <S.Avatar>UA</S.Avatar>
        <S.UserInfo>
          <S.UserName>Usuário Adm</S.UserName>
          <S.UserEmail>user.adm@test.com</S.UserEmail>
        </S.UserInfo>
      </S.ProfileSection>
    </S.Container>
  );
}

export default SideBar;
