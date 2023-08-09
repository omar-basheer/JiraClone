import React from 'react';
import { IoPersonCircleSharp } from 'react-icons/io5'
import { IconType } from 'react-icons';
import { BsThreeDots } from "react-icons/bs";


function Issue(props: {
    description: string,
    tag: string,
    tagIcon: IconType,
    priority: string
}) {

    return (
        <div className='issue-card'>
            <div className='issue-description'>
                <div className='description-text'> {props.description}</div>
                <BsThreeDots className='icon' />
                </div>
            <div className='card-bottom'>
                <span className='tag'>
                    {React.createElement(props.tagIcon, { className: 'icon' })}
                    {props.tag}
                </span>
                <span className='arrow'>{props.priority}</span>
                <div className='profile-icon'>
                    <IoPersonCircleSharp />
                </div>
            </div>
        </div>
    )
}

export default Issue