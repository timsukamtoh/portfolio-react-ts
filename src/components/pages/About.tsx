import React, { ReactElement } from "react";

export default function About(): ReactElement {
    return (
        <div className="info-card">
            <img src="./Professional.jpg" className="headshot"></img>
            <p className="info">
                Born and raised in California. UC Berkeley Alumni with a BS in Bioengineering.
                Currently pivoting careers into software engineering.
                <br /><br />
                I am currently a student at software engineering bootcamp, Rithm.
                I have had exposure to algorithmic programming through college courses.
                Additionally, during my previous occupation as an Integration Engineer at Epic Systems,
                I worked with SQL to generate internal reports to allow other engineers
                to better track submission of feedback.
                <br /><br />
                Some of my hobbies include weight-training, snowboarding, trading, and golfing.
            </p>
        </div>
    );
}