import React, { Component } from "react"
import "../css/scroll.css"

class Scroll extends Component {

    componentDidMount = () => {
        document.addEventListener("scroll", () => {
            this.scrollArrow();
            this.zArrow();
        })
    }

    componentWillUnmount = () => {
        document.removeEventListener("scroll")
    }

    scrollArrow = () => {
        const scroll = document.querySelector(".scrollContainer")
        const scrollY = window.scrollY
        const start = 0
        if (scrollY > (start + 500) && scrollY < (start + 1500)) {
            scroll.style.opacity = (1500 - scrollY) / 1000
        }
    }

    zArrow = () => {
        const scroll = document.querySelector(".scrollContainer")
        const scrollY = window.scrollY
        if (scrollY < 1500){
            scroll.style.zIndex = 99999
        } else {
            scroll.style.zIndex = -1
        }
    }

    render() {
        return (
            <div className="scrollContainer center">
                <div className="container">
                    <div className="chevron"></div>
                    <div className="chevron"></div>
                    <div className="chevron"></div>
                    <span className="text">Keep Scrolling</span>
                </div>
            </div>

        )
    }
}

export default Scroll