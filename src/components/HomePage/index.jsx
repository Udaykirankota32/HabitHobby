import {useState} from "react"
import {
  MdToday,
  MdWork,
  MdPerson,
  MdPriorityHigh,
  MdShoppingBag,
  MdSchool,
  MdFavorite,
  MdAttachMoney,
  MdFlightTakeoff,
  MdCheckCircle
} from "react-icons/md";
import NavBar from "../NavBar"
import { MdClear } from "react-icons/md";

import {
    HomeBgContainer,
    HomeContentContainer,
    GreetingContainer,
    GreetingTitle,
    GreetingSubtitle,
    TaskInputContainer,
    PlusIcon,
    TaskInput,InputContainerContent,
    SectionHeading,TransparentButton,InputContainerButtons,ActiveFolderContainer
} from './styled'

const privateFoldersList = [
    {
    id: "completed",
    name: "Completed",
    icon: MdCheckCircle
  },
  {
    id: "today",
    name: "Today",
    icon: MdToday
  },
  {
    id: "work",
    name: "Work",
    icon: MdWork
  },
  {
    id: "personal",
    name: "Personal",
    icon: MdPerson
  },
  {
    id: "important",
    name: "Important",
    icon: MdPriorityHigh
  },
  {
    id: "shopping",
    name: "Shopping",
    icon: MdShoppingBag
  },
  {
    id: "study",
    name: "Study",
    icon: MdSchool
  },
  {
    id: "health",
    name: "Health",
    icon: MdFavorite
  },
  {
    id: "finance",
    name: "Finance",
    icon: MdAttachMoney
  },
  {
    id: "travel",
    name: "Travel",
    icon: MdFlightTakeoff
  },
  
];

const HomePage=()=>{
    
    const [activeButton,setActiveButton]=useState(privateFoldersList[0]);
        return (
            <HomeBgContainer>
                <NavBar setActiveButton={setActiveButton} activeButton={activeButton} privateFoldersList={privateFoldersList} />
                <HomeContentContainer>
                    <GreetingContainer>
                        <GreetingTitle>Hello Williams</GreetingTitle>
                        <GreetingSubtitle>its Sunday</GreetingSubtitle>
                    </GreetingContainer>
                    <TaskInputContainer>
                        <InputContainerContent>
                            <PlusIcon>+</PlusIcon>
                            <TaskInput type="text" placeholder="New Task" />
                        </InputContainerContent>
                        <InputContainerButtons>
                            <TransparentButton ><MdClear size={18} /> </TransparentButton>
                            <TransparentButton >Add</TransparentButton>
                        </InputContainerButtons>



                    </TaskInputContainer>
                    <ActiveFolderContainer>
                        <activeButton.icon size={30} color="#4F2A8C" />
                        <SectionHeading>{activeButton.name}</SectionHeading>
                    </ActiveFolderContainer>
                </HomeContentContainer>
            </HomeBgContainer>
        )


}

export default HomePage