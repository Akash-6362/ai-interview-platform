import { useState } from "react";

function InterviewQuestions() {

    const [questions, setQuestions] = useState([]);

    const generateQuestions = () => {

        const aiQuestions = [

            "Explain React Virtual DOM.",

            "Difference between SQL and NoSQL?",

            "What is JWT Authentication?",

            "Explain REST API.",

            "What are React Hooks?"
        ];

        setQuestions(aiQuestions);
    };

    return (

        <div className="dashboard">

            <h1>AI Interview Questions</h1>

            <div className="dashboard-card">

                <button onClick={generateQuestions}>

                    Generate Questions

                </button>

                <br /><br />

                <ol>

                    {
                        questions.map((q, index) => (

                            <li key={index}>
                                {q}
                            </li>
                        ))
                    }

                </ol>

            </div>

        </div>
    );
}

export default InterviewQuestions;