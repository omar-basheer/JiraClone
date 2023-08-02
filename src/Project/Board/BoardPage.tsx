import React from 'react'
import { ImGithub } from 'react-icons/im';

import Breadcrumbs from '../../shared/components/BreadCrumbs'

function BoardPage() {
    return (
        <div className='work-area'>
            <Breadcrumbs />
            <div className='header-section'>
                <div className='boardtitle'>Agile Board</div>
                <a href="https://github.com/omar-basheer/JiraClone" target="_blank" rel="noreferrer noopener">
                    <button className='github-button'>
                        <ImGithub className='github-icon' />
                        <span>Github Repo</span>
                    </button>
                </a>
            </div>
            {/* <div className='error'>404 Not Found</div>
            <div className='error-msg'>Oops... looks like the Board page is still under construction</div> */}
        </div>
    )
}

export default BoardPage