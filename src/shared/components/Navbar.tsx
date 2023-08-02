import React from "react"
import { IoAppsSharp, IoSettingsSharp, IoPersonCircleSharp } from 'react-icons/io5'

function Navbar() {
    return (
        <nav>
            <div className="navbar">
                <div className="navbar-apps-button">
                    <IoAppsSharp />
                </div>
                <div className="navbar-logo"></div>
                <div className="navbar-title">Jira Software</div>
                <div className="navbar-tabs">
                    <div className="navbar-tab">Dashboard</div>
                    <div className="navbar-tab">Projects</div>
                    <div className="navbar-tab">People</div>
                </div>
                <div className="navbar-icons">
                    <div className="navbar-icon">
                        <IoSettingsSharp />
                    </div>
                    <div className="navbar-icon">
                        <IoPersonCircleSharp />
                    </div>
                </div>


            </div>
        </nav>
    )
}

export default Navbar