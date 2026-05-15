import { useState } from "react";

function AIAnalysis() {

    const [skills, setSkills] = useState([]);

    const analyzeResume = () => {

        // Simulated AI skill extraction

        const detectedSkills = [

            "React",
            "Node.js",
            "MongoDB",
            "JavaScript",
            "Communication"
        ];

        setSkills(detectedSkills);
    };

    return (

        <div className="dashboard">

            <h1>AI Resume Analysis</h1>

            <div className="dashboard-card">

                <button onClick={analyzeResume}>

                    Analyze Resume

                </button>

                <br /><br />

                {
                    skills.length > 0 && (

                        <div>

                            <h3>Detected Skills</h3>

                            <ul>

                                {
                                    skills.map((skill, index) => (

                                        <li key={index}>
                                            {skill}
                                        </li>
                                    ))
                                }

                            </ul>

                        </div>
                    )
                }

            </div>

        </div>
    );
}

export default AIAnalysis;