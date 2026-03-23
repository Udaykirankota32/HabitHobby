import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom"

import RegisterPage from "./components/RegisterPage";
import HomePage from "./components/HomePage";
import ProtectedRoute from "./ProtectedRoute";

const App = () => (
    <BrowserRouter>
            <Routes>
                <Route path="/register" element={<RegisterPage />} />
                <Route path="/" element={<ProtectedRoute><HomePage /></ProtectedRoute>} />
                <Route path="/api/todos/:folderId" element={<ProtectedRoute><HomePage /></ProtectedRoute>} />
                <Route path="*" element={<Navigate to="/" replace />} />
            </Routes>

    </BrowserRouter>
)

export default App;
