import { Link } from "react-router-dom";

function Navbar() {

    const logout = () => {

        localStorage.removeItem("token");

        window.location.href = "/";
    };

    return (

        <nav>

            <Link to="/">Login</Link>

            <Link to="/register">Register</Link>

            <Link to="/dashboard">Dashboard</Link>

            <Link to="/upload">Upload Resume</Link>

            <Link to="/tests">Tests</Link>

            <Link to="/ai-analysis">AI Analysis</Link>

            <Link to="/ai-questions">AI Questions</Link>

            <Link to="/feedback">AI Feedback</Link>
            
            <button onClick={logout}>
                Logout
            </button>

            

        </nav>
    );
}

export default Navbar;