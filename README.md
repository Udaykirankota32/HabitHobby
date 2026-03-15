# Todo List App

A React + Vite task management UI built with styled-components and react-icons.

This project currently includes:

- A sidebar navigation with folder/category buttons
- A Home page with greeting, task input area, and active folder heading
- A Register page with Sign Up / Sign In views and social sign-in options

## Tech Stack

- React 19
- Vite 7
- styled-components
- react-icons
- ESLint

## Getting Started

### 1. Install dependencies

```bash
npm install
```

### 2. Start development server

```bash
npm run dev
```

### 3. Build for production

```bash
npm run build
```

### 4. Preview production build

```bash
npm run preview
```

## Available Scripts

- `npm run dev` - Starts Vite development server
- `npm run build` - Creates production build
- `npm run preview` - Previews the production build locally
- `npm run lint` - Runs ESLint checks

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

## Current App Flow

- `App.jsx` currently renders the Home page.
- Home page manages the active folder state and passes it to NavBar.
- NavBar highlights the selected folder button.
- Register page is available as a separate component and can be rendered from `App.jsx` when needed.

## Notes

- Styling is handled with styled-components for component-scoped styles.
- Icons are provided through react-icons.

## Future Improvements

- Add real task creation, listing, completion, and deletion logic
- Persist tasks using local storage or an API
- Add routing between Home and Register pages
- Add form validation and authentication integration

## Author

Created as part of Maincrafts assignments.
