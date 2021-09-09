import React from 'react'

const Home = () => {
    return (
        <section className="Home">
            <title>William Vuong</title>

            <section className="home-container">
                <div className="bio">
                    <h2>HELLO, I'M WILLIAM.</h2>
                    <p>Web Developer based in the Greater Toronto Area.</p>
                </div>
                <video id="home-video" autoPlay loop muted >
                    <source src="light.mp4" type="video/mp4" />
                </video>
            </section>

        </section>
    )
}

export default Home
