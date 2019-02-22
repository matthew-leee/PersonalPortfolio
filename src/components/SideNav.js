import React, { Component } from "react"
import "../css/sideNav.css"
import "../mobile/sideNav.css"
import logoC from "../asset/LOGOc.svg"

class SideNav extends Component {
    click = (type) => {
        switch (type) {
            case "about":
                window.scrollTo(0, 3000)
                break
            case "portfolio":
                window.scrollTo(0, 5000)
                break
            case "contact":
                window.scrollTo(0, document.body.scrollHeight)
                break
            default:
                return
        }
    }
    render() {
        return (
            <div className="sideNav">
                <ul>
                    <li onClick={() => { this.click("about") }}>
                        <img src={logoC} alt="" />
                    </li>
                    <li onClick={() => { this.click("about") }}>
                        <p>About</p>
                    </li>
                    <li onClick={() => { this.click("portfolio") }}>
                        <p>Portfolio</p>
                    </li>
                    <li onClick={() => { this.click("contact") }}>
                        <p>Contact</p>
                    </li>
                </ul>
            </div>
        )
    }
}

export default SideNav

