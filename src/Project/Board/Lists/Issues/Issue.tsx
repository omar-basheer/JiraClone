import React from 'react';
import { IoPersonCircleSharp } from 'react-icons/io5'

function Issue() {
    return (
        <div className='issue-card'>
            <div className='issue-description'>Implement backend server for application</div>
            <div className='card-bottom'>
                <span className='tag'>TASK-1</span>
                <span className='arrow'>^</span>
                <div className='profile-icon'>
                    <IoPersonCircleSharp />
                </div>

            </div>
        </div>
    )
}

export default Issue