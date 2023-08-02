import React from 'react';
import {  IoPersonCircleSharp } from 'react-icons/io5'

function Issue(){
    return(
        <div className='issue-card'>
            <p className='issue-description'>Implement backend server for application</p>
            <div className='card-bottom'>
                <span>TASK-1</span>
                <span>^</span>
                <IoPersonCircleSharp />
            </div>
        </div>
    )
}

export default Issue