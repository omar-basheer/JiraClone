import React, { useState } from 'react'
import RoadmapPage from './RoadmapPage'
import BoardPage from './BoardPage';
import CodePage from './CodePage';


function WorkArea(props: {
    activePage: string
}) {

    return (
        <div >
            {props.activePage === 'Roadmap' && <RoadmapPage />}
            {props.activePage === 'Board' && <BoardPage />}
            {props.activePage === 'Code' && <CodePage />}
        </div>
    )
}

export default WorkArea