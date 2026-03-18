import { useState,useEffect } from "react";
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
  MdCheckCircle,
  MdDelete,
} from "react-icons/md";
import NavBar from "../NavBar";
import { MdClear } from "react-icons/md";

import {
  HomeBgContainer,
  HomeContentContainer,
  GreetingContainer,
  GreetingTitle,
  GreetingSubtitle,
  TaskInputContainer,
  PlusIcon,
  TaskInput,
  InputContainerContent,
  SectionHeading,
  TransparentButton,
  InputContainerButtons,
  ActiveFolderContainer,
  TaskArrayListItems,
  TaskLists,
  TaskListBoxContainer,
  TaskListContainer,
  TasksCheckBox,
  DeleteButton,
  TaskContent,
} from "./styled";

const privateFoldersList = [
  {
    id: "completed",
    name: "Completed",
    icon: MdCheckCircle,
  },
  {
    id: "today",
    name: "Today",
    icon: MdToday,
  },
  {
    id: "work",
    name: "Work",
    icon: MdWork,
  },
  {
    id: "personal",
    name: "Personal",
    icon: MdPerson,
  },
  {
    id: "important",
    name: "Important",
    icon: MdPriorityHigh,
  },
  {
    id: "shopping",
    name: "Shopping",
    icon: MdShoppingBag,
  },
  {
    id: "study",
    name: "Study",
    icon: MdSchool,
  },
  {
    id: "health",
    name: "Health",
    icon: MdFavorite,
  },
  {
    id: "finance",
    name: "Finance",
    icon: MdAttachMoney,
  },
  {
    id: "travel",
    name: "Travel",
    icon: MdFlightTakeoff,
  },
];

const TaskMangerArray = [
  {
    id: "completed",
    list: [
      { task: "To Eat", isDone: true },
      { task: "To sleep", isDone: true },
    ],
  },
];

const HomePage = () => {
  const [inputTask, setInputTask] = useState("");
  const [activeButton, setActiveButton] = useState(privateFoldersList[0]);
  const [taskManagerArray, setTaskManagerArray] = useState(TaskMangerArray);


  useEffect(()=>{
    const fetchData=async()=>{
      try{
        const response = await fetch(`http://localhost:5000/api/todos/${activeButton.id}/`)
        if(response.ok){
          const data=await response.json()
          setTaskManagerArray([data])
        }
      }
      catch(error){
        console.log(error);
      }
    }
    fetchData()
  }, [activeButton.id])
  

  
  const activeFolderTasks =
    taskManagerArray.find((each) => each.id === activeButton.id)?.list || [];

  const onToggleTaskStatus = (taskIndex) => {
    setTaskManagerArray((prevArray) =>
      prevArray.map((eachFolder) => {
        if (eachFolder.id !== activeButton.id) {
          return eachFolder;
        }

        return {
          ...eachFolder,
          list: eachFolder.list.map((eachTask, index) =>
            index === taskIndex
              ? { ...eachTask, isDone: !eachTask.isDone }
              : eachTask,
          ),
        };
      }),
    );
  };

  const onClickDeleteTask = (task) => {
    setTaskManagerArray((prevArray) =>
      prevArray.map((eachFolder) => {
        if (eachFolder.id !== activeButton.id) {
          return eachFolder;
        }

        return {
          ...eachFolder,
          list: eachFolder.list.filter((eachTask) => eachTask.task !== task),
        };
      }),
    );
  };

  const TaskListView = () => (
    <TaskArrayListItems>
      {activeFolderTasks.map((eachItem, index) => (
        <TaskLists key={`${activeButton.id}-${index}`}>
          <TaskListBoxContainer>
            <TaskListContainer>
              <TasksCheckBox
                type="checkbox"
                id={`${activeButton.id}-${index}`}
                checked={eachItem.isDone}
                onChange={() => onToggleTaskStatus(index)}
              />
              <TaskContent
                htmlFor={`${activeButton.id}-${index}`}
                $isDone={eachItem.isDone}
              >
                {eachItem.task}
              </TaskContent>
            </TaskListContainer>
            <DeleteButton
              type="button"
              onClick={() => onClickDeleteTask(eachItem.task)}
            >
              <MdDelete size={25} color="#4F2A8C" />
            </DeleteButton>
          </TaskListBoxContainer>
        </TaskLists>
      ))}
    </TaskArrayListItems>
  );

  const onClickAddTask=async()=>{
    if(!inputTask.trim()) return ;

    const Body={
        task:inputTask.trim(),
        isDone:false,
      }
    
    const options={
      method:"POST",
      headers:{
        "Content-Type":"application/json",
      },
      body:JSON.stringify(Body)
    }
    try{
      const response =await fetch(`http://localhost:5000/api/todos/${activeButton.id}/tasks`,options);
      if(response.ok){
        const data=await response.json();
        setTaskManagerArray([data]);
        setInputTask("")
      }
    }

    catch(error){
      console.log(error)

    }

    

  }

  return (
    <HomeBgContainer>
      <NavBar
        setActiveButton={setActiveButton}
        activeButton={activeButton}
        privateFoldersList={privateFoldersList}
      />
      <HomeContentContainer>
        <GreetingContainer>
          <GreetingTitle>Hello Williams</GreetingTitle>
          <GreetingSubtitle>its Sunday</GreetingSubtitle>
        </GreetingContainer>
        <TaskInputContainer>
          <InputContainerContent>
            <PlusIcon>+</PlusIcon>
            <TaskInput
              type="text"
              value={inputTask}
              onChange={(e) => {
                setInputTask(e.target.value);
              }}
              placeholder="New Task"
            />
          </InputContainerContent>
          <InputContainerButtons>
            <TransparentButton
              type="button"
              onClick={() => {
                setInputTask("");
              }}
            >
              <MdClear size={18} />{" "}
            </TransparentButton>
            <TransparentButton type="button" onClick={onClickAddTask}>
              Add
            </TransparentButton>
          </InputContainerButtons>
        </TaskInputContainer>
        <ActiveFolderContainer>
          <activeButton.icon size={30} color="#4F2A8C" />
          <SectionHeading>{activeButton.name}</SectionHeading>
        </ActiveFolderContainer>
        {activeFolderTasks.length !== 0 && TaskListView()}
      </HomeContentContainer>
    </HomeBgContainer>
  );
};

export default HomePage;
