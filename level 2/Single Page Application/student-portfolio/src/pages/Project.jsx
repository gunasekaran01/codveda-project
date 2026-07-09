function Projects() {

    const projects = [

        {
            title: "Student Management System",
            description:
                "A web application to manage student records using React."
        },

        {
            title: "Weather App",
            description:
                "A React application that fetches live weather information using an API."
        },

        {
            title: "Portfolio Website",
            description:
                "A responsive personal portfolio website built using React."
        },

        {
            title: "Task Manager",
            description:
                "A simple to-do application with add, edit and delete functionality."
        },

        {
            title: "Calculator",
            description:
                "A basic calculator built using React and JavaScript."
        },

        {
            title: "Movie Search App",
            description:
                "Search movies dynamically using an online movie API."
        }

    ];

    return (

        <section>

            <h1 className="page-title">
                My Projects
            </h1>

            <p className="page-text">
                Here are some sample projects developed using modern web technologies.
            </p>

            <div className="cards">

                {projects.map((project, index) => (

                    <div className="card" key={index}>

                        <h2>{project.title}</h2>

                        <p>{project.description}</p>

                    </div>

                ))}

            </div>

        </section>

    );

}

export default Projects;