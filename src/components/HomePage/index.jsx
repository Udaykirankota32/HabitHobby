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

const TaskMangerArray=[
    {
        id:'completed',
        list:["To eat","To sleep"]
    }
]

const HomePage=()=>{
    
    const [task,setTask]=useState("");
    const [activeButton,setActiveButton]=useState(privateFoldersList[0]);
    const [taskManagerArray,setTaskManagerArray]=useState(TaskMangerArray)
    const activeFolderTasks =
      taskManagerArray.find((each) => each.id === activeButton.id)?.list || [];

  const onClickAddTask=()=>{
    const trimmedTask = task.trim();
    if (trimmedTask === "") {
      return;
    }

    setTaskManagerArray((prevTaskManagerArray)=>{
      const activeFolderIndex = prevTaskManagerArray.findIndex(
        (each)=>each.id === activeButton.id
      );

      if (activeFolderIndex === -1) {
        return [
          ...prevTaskManagerArray,
          {
            id:activeButton.id,
            list:[trimmedTask]
          }
        ];
      }

      return prevTaskManagerArray.map((each)=>
        each.id === activeButton.id
          ? {...each, list:[...each.list, trimmedTask]}
          : each
      );
    });

    setTask("");
  }
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
                            <TaskInput type="text" value={task} onChange={(e)=>{setTask(e.target.value)}} placeholder="New Task" />
                        </InputContainerContent>
                        <InputContainerButtons>
                            <TransparentButton type="button" onClick={()=>{setTask("")}} ><MdClear size={18} /> </TransparentButton>
                          <TransparentButton type="button" onClick={onClickAddTask} >Add</TransparentButton>
                        </InputContainerButtons>
                    </TaskInputContainer>
                    <ActiveFolderContainer>
                        <activeButton.icon size={30} color="#4F2A8C" />
                        <SectionHeading>{activeButton.name}</SectionHeading>
                    </ActiveFolderContainer>
                    <ul>
                      {activeFolderTasks.map((eachItem, index)=>(
                        <li key={`${activeButton.id}-${index}`}>
                                {eachItem}
                            </li>
                        ))}
                    </ul>
                    
                </HomeContentContainer>
            </HomeBgContainer>
        )


}

export default HomePage