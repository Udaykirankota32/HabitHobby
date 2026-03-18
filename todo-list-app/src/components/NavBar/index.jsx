import { RxDragHandleDots2 } from "react-icons/rx";
import LogoImg from "../../assets/logo.svg";

import {
  NavBarBgContainer,
  NavbarAccountContainer,
  AppName,
  UserName,
  SidebarSectionTitle,
  FolderButton,
  FoldersListItems,
  ButtonAlignment,
  ButtonContent,
  CounterText,
} from "./styled";

const NavBar = (props) => {
  const { activeButton, setActiveButton, privateFoldersList } = props;

  return (
    <nav>
      <NavBarBgContainer>
        <NavbarAccountContainer>
          <img src={LogoImg} width={120} />
          <div>
            <AppName>Habbit Hobby</AppName>
            <UserName>Williams Shakespear</UserName>
          </div>
        </NavbarAccountContainer>
        <div>
          <SidebarSectionTitle>Private</SidebarSectionTitle>
          <FoldersListItems>
            {privateFoldersList.map((folder) => (
              <li key={folder.id}>
                <FolderButton
                  type="button"
                  $isActive={folder.id === activeButton.id}
                  onClick={() => {
                    setActiveButton({ ...folder });
                  }}
                >
                  <ButtonAlignment>
                    <ButtonContent>
                      <RxDragHandleDots2 color="#b5b2b2" size={20} />
                      <folder.icon
                        color={
                          folder.name === activeButton.name
                            ? "#ffffff"
                            : "#4F2A8C"
                        }
                        size={24}
                      />
                      <span>{folder.name}</span>
                    </ButtonContent>
                    <CounterText>0</CounterText>
                  </ButtonAlignment>
                </FolderButton>
              </li>
            ))}
          </FoldersListItems>
        </div>
      </NavBarBgContainer>
    </nav>
  );
};
export default NavBar;
