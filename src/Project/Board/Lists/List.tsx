import React from "react";
import Issue from "./Issues/Issue";

function List(){
    return(
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

            <button>Create issue</button>
        </div>
    )
}

export default List;