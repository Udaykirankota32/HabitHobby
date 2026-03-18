import {BrowserRouter,Route,Routes} from "react-router-dom"

import RegisterPage from "./components/RegisterPage";
import HomePage from "./components/HomePage";

const App = () => (
    <BrowserRouter>
            <Routes>
                <Route  path="/"  element={<HomePage />} />
                <Route  path="/api/todos/:folderId" element={<HomePage />} />
            </Routes>

    </BrowserRouter>
)

export default App;
