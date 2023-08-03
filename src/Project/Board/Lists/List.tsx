import React from "react";
import Issue from "./Issues/Issue";
import { HiOutlinePlus } from "react-icons/hi";


function List() {
    return (
        <div className="single-list">
            <div className="list-header">
                <span>TO DO</span>
                <span>3 ISSUES</span>
            </div>

            <div className="issue-comp">
                <Issue />
                <Issue />
                <Issue />
            </div>

            <button>
                <HiOutlinePlus className="new-issue-icon"/>
                <span>Create issue</span>
            </button>
        </div>
    )
}

export default List;