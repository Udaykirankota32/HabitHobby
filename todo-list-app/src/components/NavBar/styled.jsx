import styled from "styled-components";

export const NavBarBgContainer = styled.div`
  padding: 18px 18px;
  background-color: #edeff2;
  width: 300px;
  min-height: 100vh;
  border-top-right-radius: 10px;
  border-bottom-right-radius: 10px;
`;
export const NavbarAccountContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 18px;
`;

export const AppName = styled.h1`
  margin: 0;
  font-size: 20px;
  font-weight: 700;
  line-height: 1.2;
  color: #2a2f3a;
`;

export const UserName = styled.p`
  margin: 2px 0 0 0;
  font-size: 13px;
  font-weight: 500;
  color: #667085;
`;

export const SidebarSectionTitle = styled.h2`
  margin: 0 0 12px 0;
  font-size: 16px;
  font-weight: 700;
  color: #4f2a8c;
`;

export const FoldersListItems = styled.ul`
  gap: 10px;
  display: flex;
  flex-direction: column;
  list-style-type: none;
  padding: 0;
  margin: 0;
`;

export const FolderButton = styled.button`
  background-color: ${(props) => (props.isActive ? "#4F28AC" : "transparent")};
  color: ${(props) => (props.isActive ? "#ffffff" : "#2f3747")};
  font-size: 14px;
  font-weight: 600;
  width: 100%;
  border: 0px;
  border-radius: 10px;
  padding: 10px 12px;
  cursor: pointer;
  outline: none;
  transition:
    background-color 0.2s ease,
    color 0.2s ease;
  &:hover {
    background-color: #8562d6;
    color: #ffffff;
  }
`;
export const ButtonAlignment = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
export const ButtonContent = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

export const CounterText = styled.span`
  font-size: 12px;
  font-weight: 700;
  color: inherit;
`;
