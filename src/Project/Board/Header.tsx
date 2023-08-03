import React from "react";
import { ImGithub } from "react-icons/im";

function Header(){
    return(
        <div className='header-section'>
        <div className='boardtitle'>Agile Board</div>
        <a href="https://github.com/omar-basheer/JiraClone" target="_blank" rel="noreferrer noopener">
            <button className='github-button'>
                <ImGithub className='github-icon' />
                <span>Github Repo</span>
            </button>
        </a>
    </div>
    )
}

export default Header