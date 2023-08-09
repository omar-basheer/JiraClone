import React from 'react'
import { HandleCloseModal } from '../../../shared/Types'


function IssueFormModal(props: {
    isOpen: boolean,
    onClose: HandleCloseModal
}) {

    if (!props.isOpen) return null

    return (
        <div className='modal-overlay'>
            <div className='modal-container'>
                <div className='modal-header'>
                    Create Issue
                </div>
                <div className='modal-content'>
                    <form action="">
                        <div className='form-field'>
                            <div className='issue-type'>
                                <label htmlFor="issueType">Issue Type</label>
                                <select name="issueType" id="issueType">
                                    <option value="Task">Task</option>
                                    <option value="Bug">Bug</option>
                                    <option value="Story">Story</option>
                                </select>
                                <label htmlFor="issueType" className='label-hint'>Select the issue type</label>
                            </div>
                        </div>
                        <div className='form-field'>
                            <label htmlFor='issueSummary'>Issue Summary:</label>
                            <input type='text' id='issueSummary' name='issueSummary' />
                            <label htmlFor="issueType" className='label-hint'>Concisely summarize the issue in about two sentences</label>
                        </div>
                        <div className='form-field'>
                            <label htmlFor='issueDescription'>Issue Description:</label>
                            <textarea id='issueDescription' name='issueDescription' rows={6}></textarea>
                            <label htmlFor="issueType" className='label-hint'>Describe the issue in as much detail as you'd like</label>
                        </div>
                        <div className='form-field'>
                            <div className='reporter'>
                                <label htmlFor="reporter">Reporter</label>
                                <select name="reporter" id="reporter">
                                    <option value="Aang">Aang</option>
                                    <option value="Korra">Korra</option>
                                    <option value="Sokka">Sokka</option>
                                </select>
                                {/* <label htmlFor="issueType" className='label-hint'>Select the issue type</label> */}
                            </div>
                        </div>
                        <div className='form-field'>
                            <div className='assignee'>
                                <label htmlFor="assignee">Assignee</label>
                                <select name="assignee" id="assignee">
                                    <option value="Aang">Aang</option>
                                    <option value="Korra">Korra</option>
                                    <option value="Sokka">Sokka</option>
                                </select>
                                {/* <label htmlFor="issueType" className='label-hint'>Select the issue type</label> */}
                            </div>
                        </div>
                        <div className='form-field'>
                            <div className='priority'>
                                <label htmlFor="priority">Priority</label>
                                <select name="priority" id="priority">
                                    <option value="Highest">Highest</option>
                                    <option value="High">High</option>
                                    <option value="Medium">Medium</option>
                                    <option value="Low">Low</option>
                                    <option value="Lowest">Lowest</option>
                                </select>
                                <label htmlFor="priority" className='label-hint'>Priority in relation to other issues</label>
                            </div>
                        </div>
                    </form>
                </div>
                <div className='modal-buttons'>
                    <button className='create-issue' onClick={props.onClose}>Create Issue</button>
                    <button className='cancel' onClick={props.onClose}>Cancel</button>
                </div>
            </div>
        </div>
    )
}

export default IssueFormModal