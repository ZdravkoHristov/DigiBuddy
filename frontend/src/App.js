import { Routes, Route } from "react-router-dom";

import Home from "./components/Home";
import LoggedTeacher from "./components/LoggedTeacher/LoggedTeacher";
import LoggedStudent from "./components/LoggedStudent/LoggedStudent";

function App() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="loggedTeacher" element={<LoggedTeacher />} />
            <Route path="loggedStudent" element={<LoggedStudent />} />
        </Routes>
    );
}

export default App;
