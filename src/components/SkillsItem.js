
const SkillsItem = ({ skillsData }) => {
    return (
        <div className="SkillsItem">
            <i className={skillsData.icon}></i> 
            <p>{skillsData.title}</p>
        </div>
    )
}

export default SkillsItem
