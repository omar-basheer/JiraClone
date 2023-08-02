import React, { useState } from 'react'
import { MdOutlineRoute } from "react-icons/md";
import { BsCodeSlash } from "react-icons/bs";
import { CgBoard } from "react-icons/cg";
import { SideMenuClickFunction } from '../Types';



function Sidebar(props:{
    onMenuClick: SideMenuClickFunction
}
) {
    const [depressedMenuItem, setDepressedMenuItem] = useState('');
    function depressMenuButton(menuButton: string){
        setDepressedMenuItem(menuButton)
    }
    // using annonymous function call within onClick saves you from having to define f
    // switching functions for each button

    function switchToRoadmap(event: React.MouseEvent<HTMLDivElement>){
        props.onMenuClick('Roadmap')
        depressMenuButton('Roadmap')
        
    }
    function switchToBoard(event: React.MouseEvent<HTMLDivElement>){
        props.onMenuClick('Board')
        depressMenuButton('Board')
    }
    function switchToCode(event: React.MouseEvent<HTMLDivElement>){
        props.onMenuClick('Code')
        depressMenuButton('Code')
    }

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
                <div className={`sidebar-menu-item ${depressedMenuItem === 'Roadmap' ? 'active' : '' }`} onClick={switchToRoadmap}>
                    <MdOutlineRoute />
                    <span>Roadmap</span>
                </div>
                <div className={`sidebar-menu-item ${depressedMenuItem === 'Board' ? 'active' : '' }`}onClick={switchToBoard}>
                    <CgBoard />
                    <span>Board</span>
                </div>
                <div className={`sidebar-menu-item ${depressedMenuItem === 'Code' ? 'active' : '' }`} onClick={switchToCode}>
                    <BsCodeSlash />
                    <span>Code</span>
                </div>
            </div>
        </div>
    )
}

export default Sidebar