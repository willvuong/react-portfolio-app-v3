
const ProjectsItem = ({ projectsData }) => {
    return (
        <div className="ProjectsItem">

            <div className="innerProjectsContainer">
                <img src={projectsData.img} ></img>
                <div className="overlay"></div>

                <div className="project-info">
                    <h3>{projectsData.name}</h3>
                    <p>{projectsData.description}</p>

                    <div className="project-links">
                            <a href={projectsData.demoLink} target="_blank">Demo <i class="fas fa-arrow-right"></i></a>
                            <a href={projectsData.sourceCode} target="_blank">Source <i class="fas fa-arrow-right"></i></a>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default ProjectsItem
