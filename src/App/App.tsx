import React, { useState } from "react"
import Navbar from "../shared/components/Navbar";
import Sidebar from "../shared/components/Sidebar";
import WorkArea from "../shared/components/WorkArea";

function App() {
    const [activePage, setActivePage] = useState('Board')
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