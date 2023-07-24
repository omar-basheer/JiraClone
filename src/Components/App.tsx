import React, { useState } from "react"
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import WorkArea from "./WorkArea";

function App() {
    const [activePage, setActivePage] = useState('Roadmap')
    function handlePageChange(page: string) {
        setActivePage(page);
        
    }
    return (
        <div>
            <Navbar />
            <Sidebar
                onMenuClick={handlePageChange}
            />
            <WorkArea
                activePage={activePage}
            />
        </div>
    )
}

export default App;