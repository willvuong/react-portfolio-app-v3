import SkillsItem from './SkillsItem.js'

const About = ({ skillsData }) => {
    return (
        <section className="About">
            <div className="section-heading">
                <h3>About Me</h3>
                <h2>Who I Am.</h2>
            </div>
            <section className="about-me" id="about">
                <img id="portfolio-img" src="portfolioImg.jpg" alt="portfolio-img" />
                <div className="about-me-description">
                    <p>
                        I am an open-minded, self-starter with a passion for all things
                        Web Development! My passion for development stems from my
                        desire for constantly learning, problem solving, and a need
                        to create. I am committed to achieving my goal; to make my
                        passion my career in Web Development. <br /><br /> During my time at Seneca
                        College studying Computer Programming, I discovered my true passion
                        for contemporary web development technologies. The program exposed
                        me to many web development technologies so I am familiar with the
                        process of reviewing, testing, and debugging code.

                    </p>
                </div>
            </section>

            <section className="skills">
                {/* <div className="section-heading">
                    <h3>My Skillset</h3>
                    <h2>Some Of The Skills I Offer.</h2>
                </div> */}
                {skillsData.length > 0 && skillsData.map((data) => (
                    <SkillsItem
                        key={data.id}
                        skillsData={data}
                    />
                ))}
            </section>
            
        </section>
    )
}

export default About
