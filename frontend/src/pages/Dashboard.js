function Dashboard() {

    const token = localStorage.getItem("token");

    return (

        <div className="dashboard">

            <h1>Dashboard</h1>

            <div className="dashboard-card">

                {
                    token ? (

                        <p>User Logged In ✅</p>

                    ) : (

                        <p>Please Login ❌</p>
                    )
                }

            </div>

        </div>
    );
}

export default Dashboard;