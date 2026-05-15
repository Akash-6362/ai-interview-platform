import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";
import UploadResume from "./pages/UploadResume";
import Tests from "./pages/Tests";
import Navbar from "./components/Navbar";
import AIAnalysis from "./pages/AIAnalysis";
import InterviewQuestions from "./pages/InterviewQuestions";
import Feedback from "./pages/Feedback";

function App() {

  return (

    <BrowserRouter>
      <Navbar />
      <Routes>

        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/upload" element={<UploadResume />} />
        <Route path="/tests" element={<Tests />} />
        <Route path="/ai-analysis" element={<AIAnalysis />} />
        <Route path="/ai-questions" element={<InterviewQuestions />}/>
        <Route path="/feedback" element={<Feedback />} />
        
      </Routes>

    </BrowserRouter>
  );
}

export default App;