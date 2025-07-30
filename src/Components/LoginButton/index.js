import * as S from "./StyledElements";

function Botao({ 
  children, 
  onClick, 
  type = "button", 
  backgroundvariant = "primary", 
  colorvariant = "primary",
  disabled = false 
}) {
  return (
    <S.ButtonStyle
      onClick={onClick} 
      type={type} 
      backgroundvariant={backgroundvariant} 
      disabled={disabled}
      colorvariant={colorvariant}
    >
      {children}
    </S.ButtonStyle>
  );
}

export default Botao;
