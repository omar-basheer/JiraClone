import React, { useState } from "react";
import Issue from "./Issues/Issue";
import { HiOutlinePlus } from "react-icons/hi";
import { BsCheckSquare } from "react-icons/bs";
import IssueFormModal from "../CreateIssue/CreateIssueForm";
import { HandleCloseModal, HandleOpenModal, SingleIssue } from "../../../shared/Types";


function List( props: {
    listName: string,
    issueNumber: number,
    issueList: SingleIssue[]
    isModalOpen: boolean,
    handleCloseModal: HandleCloseModal
    handleOpenModal: HandleOpenModal

}) {



    return (
        <div className="single-list">
            <div className="list-header">
                <span className="heading">{props.listName}</span>
                <span className="heading">{props.issueNumber} ISSUES</span>
            </div>

            <div className="issue-comp">
                {props.issueList.map((issue, index) =>(
                    <Issue
                    description={issue.description}
                    tag={issue.tag}
                    tagIcon={issue.tagIcon}
                    priority={issue.priority}
                    />
                ))}
                {/* <Issue
                    description="Implement backend support for the application"
                    tag="TASK-1"
                    tagIcon={BsCheckSquare}
                    priority="^"
                />
                <Issue
                    description="Add resiszing functionality for Lists containers"
                    tag="TASK-2"
                    tagIcon={BsCheckSquare}
                    priority="^"
                />
                <Issue
                    description="Implement drag and drop functionality for issues"
                    tag="TASK-3"
                    tagIcon={BsCheckSquare}
                    priority="^"
                /> */}

            </div>

            <button onClick={props.handleOpenModal}>
                <HiOutlinePlus className="new-issue-icon" />
                <span>Create issue</span>
            </button>
        </div>
    )
}

export default List;