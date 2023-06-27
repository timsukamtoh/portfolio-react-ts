import React, { ReactElement } from "react";

export default function Projects(): ReactElement {
    return (
        <div className="project-grid">
            <a className="project-card" href="https://timtoh168-jobly-frontend.surge.sh/" target="_blank">
                <h2>Jobly App</h2>
                <p>Technologies: PostgreSQL, Node.js, Express.js, React.js, CSS</p>
            </a>
            <a className="project-card" href="https://github.com/timsukamtoh/sharebnb-frontend" target="_blank">
                <h2>ShareBnB App</h2>
                <p>Technologies: AWS S3, PostgreSQL, Python, Flask, React.js, CSS</p>
            </a>
        </div>
    );
}