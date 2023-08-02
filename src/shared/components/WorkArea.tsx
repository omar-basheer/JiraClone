import React, { useState } from 'react'
import RoadmapPage from '../../Project/RoadMap/RoadmapPage'
import BoardPage from '../../Project/Board/BoardPage';
import CodePage from '../../Project/Code/CodePage';


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