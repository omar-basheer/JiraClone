import React from 'react'
import { MdOutlineRoute } from "react-icons/md";
import { BsCodeSlash } from "react-icons/bs";
import { CgBoard } from "react-icons/cg";



function Sidebar() {
    return (
        <div className='sidebar'>
            <div className='sidebar-heading'>
                <div className='project-info'>
                    <div className='project-image'>
                        <img src="../Assets/gettyimages-884008000-612x612.jpg" alt="" />
                    </div>
                    <div className='description'>
                        <div className='project-name'>Jira Clone (React)</div>
                        <div className='project-description'>Software Project</div>
                    </div>
                </div>
            </div>
            <div className='sidebar-menu'>
                <div className='sidebar-menu-item'>
                    <MdOutlineRoute />
                    <span>Roadmap</span>
                </div>
                <div className='sidebar-menu-item'>
                    <CgBoard />
                    <span>Board</span>
                </div>
                <div className='sidebar-menu-item'>
                    <BsCodeSlash />
                    <span>Code</span>
                </div>
            </div>
        </div>
    )
}

export default Sidebar