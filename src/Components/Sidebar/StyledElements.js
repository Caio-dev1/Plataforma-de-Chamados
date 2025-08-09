import styled from "styled-components";

export const Container = styled.aside`
  width: 250px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const BrandSection = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 20px;
`;

export const BrandName = styled.h1`
  font-size: 24px;
  font-weight: 700;
  color: #fff;
  margin: 0;
  margin-bottom: 5px;
`;

export const BrandRole = styled.p`
  font-size: 14px;
  margin: 0;
  font-weight: 700;
  color: #8996eb;
`;

export const Menu = styled.nav`
  display: flex;
  flex-direction: column;
  gap: 8px;
  padding: 0 10px;
  padding-top: 2rem;
  padding-bottom: 25rem;
  border-top: 1px solid #1E2024;
`;

export const MenuIcon = styled.div`
  display: flex;
  align-items: center;

  svg {
    stroke: ${({ active }) => (active ? "#FFFFFF" : "#858b99")};
    transition: stroke 0.3s ease;
    width: 32px;
    height: 32px;
  }
`;

export const MenuItem = styled.button`
  font-family: 'Lato', sans-serif;
  font-size: 16px;
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 10px;
  border-radius: 8px;
  background-color: ${({ active }) => (active ? "#4e5ba6" : "transparent")};
  color: ${({ active }) => (active ? "#fff" : "#858b99")};
  border: none;
  cursor: pointer;

  &:hover {
    background-color: ${({ active }) => (active ? "#4e5ba6" : "#1f2229")};
  }
`;

export const ProfileSection = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 25px 10px 25px 10px;
  border-top: 1px solid #1E2024;
`;

export const Avatar = styled.div`
  background-color: #4e5ba6;
  width: 45px;
  height: 45px;
  border-radius: 50%;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
`;
export const UserInfo = styled.div`
 display: flex;
 flex-direction: column;
 gap: 5px
`
export const UserName = styled.p`
  font-size: 14px;
  margin: 0;
  color: white;
`;

export const UserEmail = styled.p`
  font-size: 12px;
  margin: 0;
  color: #858b99;
`;
