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
  MdCheckCircle,MdDelete
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
    SectionHeading,TransparentButton,InputContainerButtons,ActiveFolderContainer,TaskArrayListItems,TaskLists,TaskListBoxContainer,TaskListContainer,TasksCheckBox,
    DeleteButton
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
        list:[{task:"To Eat",isDone:true},{task:"To sleep",isDone:true}]
    }
]

const HomePage=()=>{
    
    const [task,setTask]=useState("");
    const [activeButton,setActiveButton]=useState(privateFoldersList[0]);
    const [taskManagerArray,setTaskManagerArray]=useState(TaskMangerArray)
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
                : eachTask
            )
          };
        })
      );
    };

    const onClickDeleteTask=(task)=>{
      setTaskManagerArray(prevArray=>
        prevArray.map(eachFolder=>{
          if(eachFolder.id!==activeButton.id) {
            return eachFolder;
          }

          return {
            ...eachFolder,
            list:eachFolder.list.filter((eachTask)=>eachTask.task!==task),
          };

        })
      )
    }


    const TaskListView=()=>(
        <TaskArrayListItems>
                      {activeFolderTasks.map((eachItem, index)=>(
                        <TaskLists key={`${activeButton.id}-${index}`}>
                                <TaskListBoxContainer>
                                    <TaskListContainer>
                                  <TasksCheckBox
                                    type="checkbox"
                                    id={`${activeButton.id}-${index}`}
                                    checked={eachItem.isDone}
                                    onChange={() => onToggleTaskStatus(index)}
                                  />
                                  <label htmlFor={`${activeButton.id}-${index}`}>{eachItem.task}</label>
                                </TaskListContainer>
                                <DeleteButton type="button" onClick={()=>onClickDeleteTask(eachItem.task)}><MdDelete size={25} color="#4F2A8C" /></DeleteButton>
                                </TaskListBoxContainer>
                        </TaskLists>
                        ))}
          </TaskArrayListItems>
    )

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
            list:[{task:trimmedTask,isDone:false}]
          }
        ];
      }

      return prevTaskManagerArray.map((each)=>
        each.id === activeButton.id
          ? {...each, list:[...each.list, {task: trimmedTask, isDone: false}]}
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
                   {activeFolderTasks.length!==0 &&  TaskListView()
                   }
                    
                </HomeContentContainer>
            </HomeBgContainer>
        )


}

export default HomePage