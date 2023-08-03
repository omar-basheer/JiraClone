import React from 'react'
import { ImGithub } from 'react-icons/im';

import Breadcrumbs from '../../shared/components/BreadCrumbs'
import List from './Lists/List';
import Header from './Header';

function BoardPage() {

    return (
        <div className='work-area'>
            <Breadcrumbs />
            <Header />
            <div className='list-sections'>
                <List 
                listName='TO DO'
                issueNumber={3}
                />
                <List 
                listName='SELECTED FOR DEV'
                issueNumber={3}
                />
                <List 
                listName='IN PROGRESS'
                issueNumber={3}
                />
                <List 
                listName='COMPLETED'
                issueNumber={3}
                />
            </div>
            {/* <div className='error'>404 Not Found</div>
            <div className='error-msg'>Oops... looks like the Board page is still under construction</div> */}
        </div>
    )
}

export default BoardPage