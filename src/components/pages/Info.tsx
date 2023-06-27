import React, { ReactElement } from "react";

export default function Info(): ReactElement {
    return (
        <div className="info-card">
            <p className="info">Github: <a href="https://github.com/timsukamtoh" target="_blank">timsukamtoh</a></p>
            <p className="info">LinkedIn: <a href="https://www.linkedin.com/in/timothy-sukamtoh-605733163/" target="_blank">Timothy Sukamtoh</a></p>
            <p className="info">Phone: (626) 258-9686</p>
            <p className="info">Email: timothysukamtoh@gmail.com</p>
        </div>
    );
}