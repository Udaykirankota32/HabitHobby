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
  const { activeButton, setActiveButton, privateFoldersList, taskManagerArray } = props;

  const getFolderTaskCount = (folderId) => {
    const matchedFolder = taskManagerArray.find(
      (eachItem) => (eachItem.folderName || eachItem.id) === folderId,
    );
    return matchedFolder?.list?.length || 0;
  };

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
                          folder.id === activeButton.id
                            ? "#ffffff"
                            : "#4F2A8C"
                        }
                        size={24}
                      />
                      <span>{folder.name}</span>
                    </ButtonContent>
                    <CounterText>{getFolderTaskCount(folder.id)}</CounterText>
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
