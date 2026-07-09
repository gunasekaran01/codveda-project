import { Link } from "react-router-dom";

function Home() {

    return (

        <section>

            <h1 className="page-title">
                Welcome to My Portfolio
            </h1>

            <p className="page-text">

                Hi, I'm a passionate Artificial Intelligence and Data Science student.
                I enjoy building responsive websites, web applications, and solving
                real-world problems using modern technologies.

            </p>

            <div style={{ textAlign: "center" }}>

                <Link to="/projects" className="btn">
                    View My Projects
                </Link>

            </div>

            <div className="cards">

                <div className="card">

                    <h2>Web Development</h2>

                    <p>
                        Building responsive and user-friendly websites using
                        HTML, CSS, JavaScript and React.
                    </p>

                </div>

                <div className="card">

                    <h2>Data Analytics</h2>

                    <p>
                        Creating dashboards and analyzing datasets using
                        Python, SQL and Power BI.
                    </p>

                </div>

                <div className="card">

                    <h2>Artificial Intelligence</h2>

                    <p>
                        Developing AI solutions using Machine Learning
                        and Deep Learning techniques.
                    </p>

                </div>

            </div>

        </section>

    );

}

export default Home;