import React, { Component } from "react"
import logo1 from "../asset/LOGO1.svg"
import "../css/fold.css"
import "../mobile/fold.css"
import "../css/scroll.css"

class Fold extends Component {
    constructor(props) {
        super(props)
        this.state = {
            input: ""
        }
    }

    componentDidMount = () => {
        document.addEventListener("scroll", () => {
            this.scrollLogo();
            this.zLogo();
        })
    }

    componentWillUnmount = () => {
        document.removeEventListener("scroll")
    }

    scrollLogo = () => {
        // const logo = document.querySelector("#fullLogo > img")
        const logo = document.querySelector(".fold")
        const scrollY = window.scrollY
        const start = 1500
        if (scrollY >= (start - 1000) && scrollY < start) {
            logo.style.opacity = (scrollY-500) / 1000
        } else if (scrollY >= start && scrollY < (start + 500)) {
            logo.style.opacity = 1
        } else if (scrollY >= (start + 500) && scrollY < (start + 1500)) {
            logo.style.opacity = (start + 1500 - scrollY) / 1000
        } else {
            logo.style.opacity = 0
        }
    }

    zLogo = () => {
        // const logo = document.querySelector("#fullLogo > img")
        const logo = document.querySelector(".fold")
        const scrollY = window.scrollY
        const start = 1500
        if (scrollY < start) {
            logo.style.zIndex = 9998
        } else if (scrollY >= start && scrollY < (start + 1500)) {
            logo.style.zIndex = 9999
        } else {
            logo.style.zIndex = -1
        }
    }

    render() {
        return (
            <div className="fold">
                <div className="img" id="fullLogo">
                    <img src={logo1} alt="" />
                </div>
            </div>
        )
    }
}

export default Fold