import { useState, useEffect } from 'react'

const Navigation = () => {
    return (
        <nav className="Navigation">
            <ul id="navigation-links">
                <li>
                    <a href="#about">About</a>
                </li>
                <li>
                    <a href="#projects">Projects</a>
                </li>
                <li>
                    <a href="#contact">Contact</a>
                </li>
                <li id="resume">
                    <a href="WilliamVuong_Resume.pdf" download><i className="far fa-file"></i> Resume</a>
                </li>
            </ul>
        </nav>
    )
}

export default Navigation
