import * as S from "./StyledElements";

function CampoTexto({ 
  label, 
  placeholder, 
  value, 
  onChange, 
  type = "text", 
  name, 
  required = false 
}) {
  return (
    <S.CampoTextoWrapper>
      {label && <S.Label htmlFor={name}>{label}</S.Label>}
      <S.Input
        id={name}
        name={name}
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        required={required}
      />
    </S.CampoTextoWrapper>
  );
}

export default CampoTexto;
