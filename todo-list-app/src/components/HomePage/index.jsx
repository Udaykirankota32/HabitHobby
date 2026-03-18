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
    list: [],
  },
];

const HomePage = () => {
  const [inputTask, setInputTask] = useState("");
  const [activeButton, setActiveButton] = useState(privateFoldersList[0]);
  const [taskManagerArray, setTaskManagerArray] = useState(TaskMangerArray);
  const getFolderKey = (folder) => folder.folderName || folder.id;


  useEffect(()=>{ //**** */
    const fetchData=async()=>{
      try{
        const response = await fetch(`http://localhost:5000/api/todos/${activeButton.id}/`)
        if(response.ok){
          const data=await response.json()
          setTaskManagerArray((prevArray) => {
            const folderExists = prevArray.some(
              (eachFolder) => getFolderKey(eachFolder) === getFolderKey(data),
            );
            if (folderExists) {
              return prevArray.map((eachFolder) =>
                getFolderKey(eachFolder) === getFolderKey(data) ? data : eachFolder,
              );
            }
            return [...prevArray, data];
          })
        }
      }
      catch(error){
        console.log(error);
      }
    }
    fetchData()
  }, [activeButton.id])
  
//**** */
  
  const activeFolderTasks =
    taskManagerArray.find((each) => getFolderKey(each) === activeButton.id)?.list || [];

  const onToggleTaskStatus = (taskId, taskIndex) => {
    setTaskManagerArray((prevArray) =>
      prevArray.map((eachFolder) => {
        if (getFolderKey(eachFolder) !== activeButton.id) {
          return eachFolder;
        }

        return {
          ...eachFolder,
          list: eachFolder.list.map((eachTask, index) =>
            eachTask.taskId
              ? eachTask.taskId === taskId
                ? { ...eachTask, isDone: !eachTask.isDone }
                : eachTask
              : index === taskIndex
              ? { ...eachTask, isDone: !eachTask.isDone }
              : eachTask,
          ),
        };
      }),
    );
  };

  


  const onClickDeleteTask=async(taskId)=>{
      const options={
        method:"DELETE",
        headers:{
        "Content-Type":"application/json",
        }
      }

      try{
          const response =await fetch(`http://localhost:5000/api/todos/${activeButton.id}/tasks/${taskId}`,options);
          if(response.ok){
            const data=await response.json();
            setTaskManagerArray((prevArray) => {
              const folderExists = prevArray.some(
                (eachFolder) => getFolderKey(eachFolder) === getFolderKey(data),
              );
              if (folderExists) {
                return prevArray.map((eachFolder) =>
                  getFolderKey(eachFolder) === getFolderKey(data) ? data : eachFolder,
                );
              }
              return [...prevArray, data];
            })
          }
      }
      catch(error){
          console.log(error)
      }
  }



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
        setTaskManagerArray((prevArray) => {
          const folderExists = prevArray.some(
            (eachFolder) => getFolderKey(eachFolder) === getFolderKey(data),
          );
          if (folderExists) {
            return prevArray.map((eachFolder) =>
              getFolderKey(eachFolder) === getFolderKey(data) ? data : eachFolder,
            );
          }
          return [...prevArray, data];
        });
        setInputTask("")
      }
    }

    catch(error){
      console.log(error)

    }

    

  }


  const TaskListView = () => (
    <TaskArrayListItems>
      {activeFolderTasks.map((eachItem, index) => (
        <TaskLists key={eachItem.taskId || eachItem._id || `${activeButton.id}-${index}`}>
          <TaskListBoxContainer>
            <TaskListContainer>
              <TasksCheckBox
                type="checkbox"
                id={eachItem.taskId || eachItem._id || `${activeButton.id}-${index}`}
                checked={eachItem.isDone}
                onChange={() => onToggleTaskStatus(eachItem.taskId, index)}
              />
              <TaskContent
                htmlFor={eachItem.taskId || eachItem._id || `${activeButton.id}-${index}`}
                $isDone={eachItem.isDone}
              >
                {eachItem.task}
              </TaskContent>
            </TaskListContainer>
            <DeleteButton
              type="button"
              onClick={() => onClickDeleteTask(eachItem.taskId || eachItem._id)}
            >
              <MdDelete size={25} color="#4F2A8C" />
            </DeleteButton>
          </TaskListBoxContainer>
        </TaskLists>
      ))}
    </TaskArrayListItems>
  );

  

  return (
    <HomeBgContainer>
      <NavBar
        setActiveButton={setActiveButton}
        activeButton={activeButton}
        privateFoldersList={privateFoldersList}
        taskManagerArray={taskManagerArray}
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
