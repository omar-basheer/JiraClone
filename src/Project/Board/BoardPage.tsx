import React, { useState } from 'react'
import { ImGithub } from 'react-icons/im';

import Breadcrumbs from '../../shared/components/BreadCrumbs'
import List from './Lists/List';
import Header from './Header';
import IssueFormModal from './CreateIssue/CreateIssueForm';
import { SingleIssue } from '../../shared/Types';
import { BsCheckSquare } from 'react-icons/bs';

function BoardPage() {

    const [isModalOpen, setIsModalOpen] = useState(false);

    const [toDoList, setToDoList] = useState<SingleIssue[]>([
        {
            description: "Implement backend support for the application",
            tag: "TASK-1",
            tagIcon: BsCheckSquare,
            priority: "^"
        }
    ])
    const [devList, setDevList] = useState<SingleIssue[]>([
        {
            description: "Add resizing functionality for Lists containers",
            tag: "TASK-2",
            tagIcon: BsCheckSquare,
            priority: "^"
        }
    ])
    const [progressList, setPrgressList] = useState<SingleIssue[]>([
        {
            description: "Implement backend support for the application",
            tag: "TASK-1",
            tagIcon: BsCheckSquare,
            priority: "^"
        },
        {
            description: "Implement drag and drop functionality for issues",
            tag: "TASK-3",
            tagIcon: BsCheckSquare,
            priority: "^"
        }
    ])
    const [completedList, setCompletedList] = useState<SingleIssue[]>([])

    function handleOpenModal(){
        setIsModalOpen(true)
    }

    function handleCloseModal(){
        setIsModalOpen(false)
    }

    
    
    return (
        <div className='work-area'>
            <Breadcrumbs />
            <Header />
            <div className='list-sections'>
                <List 
                listName='TO DO'
                issueList={toDoList}
                issueNumber={toDoList.length}
                isModalOpen={isModalOpen}
                handleCloseModal={handleCloseModal}
                handleOpenModal={handleOpenModal}
                />
                <List 
                listName='SELECTED FOR DEV'
                issueNumber={devList.length}
                issueList={devList}
                isModalOpen={isModalOpen}
                handleCloseModal={handleCloseModal}
                handleOpenModal={handleOpenModal}
                />
                <List 
                listName='IN PROGRESS'
                issueNumber={progressList.length}
                issueList={progressList}
                isModalOpen={isModalOpen}
                handleCloseModal={handleCloseModal}
                handleOpenModal={handleOpenModal}
                />
                <List 
                listName='COMPLETED'
                issueNumber={completedList.length}
                issueList={completedList}
                isModalOpen={isModalOpen}
                handleCloseModal={handleCloseModal}
                handleOpenModal={handleOpenModal}
                />
            </div>
            {/* <div className='error'>404 Not Found</div>
            <div className='error-msg'>Oops... looks like the Board page is still under construction</div> */}
            <div>

            </div>
            <IssueFormModal 
            isOpen={isModalOpen}
            onClose={handleCloseModal}
            />
        </div>
    )
}

export default BoardPage