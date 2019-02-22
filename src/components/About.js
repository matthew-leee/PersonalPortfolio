import React, { Component } from "react"
import "../css/about.css"
import "../mobile/about.css"

class About extends Component {
    componentDidMount = () => {
        document.addEventListener("scroll", () => {
            this.scrollAbout();
            this.zAbout();
        })
    }

    componentWillUnmount = () => {
        document.removeEventListener("scroll")
    }

    scrollAbout = () => {
        const about = document.querySelector(".about")
        const scrollY = window.scrollY
        const start = 3000
        if (scrollY >= (start - 1000) && scrollY < start) {
            about.style.opacity = (scrollY - (start - 1000)) / 1000
        } else if (scrollY >= start && scrollY < (start + 500)) {
            about.style.opacity = 1
        } else if (scrollY >= (start + 500) && scrollY < (start + 2000)) {
            about.style.opacity = (start + 2000 - scrollY) / 1000
        } else {
            about.style.opacity = 0
        }
    }

    zAbout = () => {
        const about = document.querySelector(".about")
        const scrollY = window.scrollY
        const start = 3000
        if (scrollY < start) {
            about.style.zIndex = 9997
        } else if (scrollY >= start && scrollY < (start + 2000)) {
            about.style.zIndex = 10000
        } else {
            about.style.zIndex = -1
        }
    }
    render() {
        return (
            <div className="about center">
                <div className="content">

                    <div className="intro">
                        <div className="aboutW" id="about1">
                            <h1>once a Psychology Major</h1>
                            <h3 style={{ fontSize: "1.5vw" }}>learn how people communicate</h3>
                        </div>
                        <div className="aboutW" id="about2">
                            <h1>Now a Software Engineer</h1>
                            <h3 style={{ fontSize: "1.5vw" }}>make machines communicate with people</h3>
                        </div>
                    </div>

                    <div class="timeline">
                        <div class="entry">
                            <div class="title">
                                <h3>9/2018-1/2019</h3>
                                <p>Xccelerate</p>
                            </div>
                            <div class="body">
                                <p>FULL STACK IMMERSIVE SOFTWARE ENGINEER PROGRAM</p>
                                <ul>
                                    <li>Comprehensive training covering frontend and backend techniques</li>
                                    <li>Gained hands-on experience with building webapp projects</li>
                                </ul>
                            </div>
                        </div>
                        <div class="entry">
                            <div class="title">
                                <h3>2016-2018</h3>
                                <p>City Chain Co.</p>
                            </div>
                            <div class="body">
                                <p>RETAIL MANAGEMENT INTERN</p>
                                <ul>
                                    <li>Designed and created staff training materials to improve sales performance</li>
                                    <li>In-depth hands-on experience of selling products to customers</li>
                                </ul>
                            </div>
                        </div>
                        <div class="entry">
                            <div class="title">
                                <h3>2013-2017</h3>
                                <p>The Chinese University of Hong Kong</p>
                            </div>
                            <div class="body">
                                <p>B.S.S.C PSYCHOLOGY</p>
                                <ul>
                                    <li>Upper Second Class Honour</li>
                                    <li>Concentrated on Neuroscience studies and brain-signal processing</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        )
    }
}

export default About