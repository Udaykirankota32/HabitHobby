# HabitHobby - Todo List App

A React and Vite based task management UI with folder-wise task grouping.

## Current Features

- Sidebar navigation with private folders such as Completed, Today, Work, Personal, and more.
- Active folder selection from NavBar.
- Home screen greeting section.
- Task input area with Add and Clear actions.
- Add button inserts a task into the currently active folder.
- Clear button resets the task input.
- Dynamic task list rendering based on selected folder.
- Each task is stored with `task` and `isDone` state.
- Checkbox interaction toggles task completion state.
- Delete action removes a task from the active folder.
- Register page component with Sign Up and Sign In UI (available in codebase).

## Tech Stack

- React 19
- Vite 7
- styled-components
- react-icons
- ESLint

## Run Locally

1. Install dependencies:

```bash
npm install
```

2. Start dev server:

```bash
npm run dev
```

3. Build production bundle:

```bash
npm run build
```

4. Preview production build:

```bash
npm run preview
```

## Scripts

- npm run dev: Run development server.
- npm run build: Create production build.
- npm run preview: Preview production build locally.
- npm run lint: Run ESLint checks.

## Project Structure

```text
todo-list-app/
  public/
  src/
    assets/
    components/
      HomePage/
      NavBar/
      RegisterPage/
    App.jsx
    main.jsx
  index.html
  package.json
```

## Current App Behavior

- App currently renders the HomePage component.
- HomePage manages activeButton for selected folder state.
- HomePage manages task for new task input value.
- HomePage manages taskManagerArray for folder-wise task storage.
- NavBar receives folder data and updates activeButton on folder click.
- Add button inserts task into the active folder list.
- Task list below heading shows tasks for the selected folder only.
- Each task row includes a checkbox to mark completion.
- Each task row includes a delete button to remove the task.
- Tasks are stored in component state only, so data resets on refresh.

## Notes

- Styling is done using styled-components.
- Icons are rendered using react-icons.
- Data is currently in-memory only and resets on page refresh.

## Planned Improvements

- Persist tasks using local storage or backend API.
- Add React Router for Register and Home navigation.
- Add edit task functionality.
- Add input validation and better empty-state messaging.

## Author

Created as part of Maincrafts assignment practice.
