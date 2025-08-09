import SideBar from "../../Components/Sidebar";
import * as S from "./StyledElements";

function Adm() {
  return ( 
    <S.PageContainer>
      <SideBar />
      <S.MainContent>
        <h1>Chamados</h1>
      </S.MainContent>
    </S.PageContainer>
  );
}

export default Adm;
