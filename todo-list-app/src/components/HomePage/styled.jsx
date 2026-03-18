import styled from "styled-components";

export const HomeBgContainer = styled.div`
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: row;
  background-color: #f7f8fa;
`;

export const HomeContentContainer = styled.main`
  flex: 1;
  min-height: 100vh;
  padding: 36px;
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

export const GreetingContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

export const GreetingTitle = styled.h1`
  font-size: 32px;
  font-weight: 700;
  line-height: 1.2;
  color: #4f2a8c;
  margin: 0;
`;

export const GreetingSubtitle = styled.p`
  font-size: 15px;
  font-weight: 500;
  color: #5f6673;
  margin: 0;
`;

export const TaskInputContainer = styled.div`
  width: 100%;
  max-width: 90%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 10px;
  padding: 12px 14px;
  background-color: #ffffff;
  border: 1px solid #d9dce3;
  border-radius: 10px;
`;

export const PlusIcon = styled.span`
  color: #7a8090;
  font-size: 20px;
  font-weight: 700;
`;

export const TaskInput = styled.input`
  border: none;
  outline: none;
  width: 100%;
  font-size: 15px;
  font-weight: 500;
  color: #1b2333;
  &::placeholder {
    color: #9aa2b1;
  }
`;

export const SectionHeading = styled.h2`
  font-size: 24px;
  font-weight: 700;
  color: #4f2a8c;
  margin: 0;
`;
export const TransparentButton = styled.button`
  background-color: transparent;
  border: 0px;
  outline: none;
  cursor: pointer;
  margin: 0px 10px;
  font-size: 14px;
  font-weight: 700;
  color: #4f2a8c;
  padding: 0;
`;

export const InputContainerButtons = styled.div`
  width: 10%;
  display: flex;

  align-items: center;
  gap: 10px;
`;

export const InputContainerContent = styled(InputContainerButtons)`
  flex: 1;
`;

export const ActiveFolderContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;
export const TaskArrayListItems = styled.ul`
  width: 100%;
  max-width: 90%;
  background-color: #f7f7fb;
  color: #4f2a8c;
  font-size: 20px;
  font-weight: bold;
  padding: 20px;
  border-radius: 20px;
  box-shadow: 0px 8px 24px 0px rgba(79, 42, 140, 0.4);
  list-style-type: none;
`;
export const TaskLists = styled.li`
  margin-left: 20px;
  width: 100%;
`;
export const TaskListBoxContainer = styled.div`
  width: 100%;
  padding: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
export const TaskListContainer = styled.div`
  width: 80%;
  display: flex;
  align-items: center;
  gap: 10px;
`;

export const TasksCheckBox = styled.input`
  width: 20px;
  height: 20px;
  border: 1px solid #4f2a8c;
`;
export const DeleteButton = styled(TransparentButton)`
  border: 0px;
`;

export const TaskContent = styled.label`
  text-decoration: ${(props) => (props.$isDone ? "line-through" : "none")};
`;
