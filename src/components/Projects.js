import ProjectsItem from './ProjectsItem.js'

const Projects = ({ projectsData }) => {
    return (
        <section className="Projects" id="projects">
            <div className="section-heading">
                    <h3>My Projects</h3>
                    <h2>Some Of My Latest Work.</h2>
                </div>
            
            <div className="projects-container">
                {projectsData.length > 0 && projectsData.map((data) => (
                    <ProjectsItem
                        key={data.id}
                        projectsData={data}
                    />
                ))}
            </div>
        </section>
    )
}

export default Projects
