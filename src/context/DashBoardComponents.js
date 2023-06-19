import React, { useState } from 'react'

export const dashboardComponents = React.createContext()
function DashBoardComponents({ children }) {
    let [data, setData] = useState([{
        title: "Earnings (Monthly)",
        value: "$5000",
        color: "primary",
        icon: "fa-calendar",
        isProgress: false
    },
    {
        title: "Earnings (Annual)",
        value: "$60000",
        color: "success",
        icon: "fa-dollar-sign",
        isProgress: false
    },
    {
        title: "Task",
        value: "90",
        color: "info",
        icon: "fa-clipboard-list",
        isProgress: true
    },
    {
        title: "Pending Request",
        value: "18",
        color: "warning",
        icon: "fa-comments",
        isProgress: false
    }
    ])
    return <>
        <dashboardComponents.Provider value={{ data, setData }}>
            {children}
        </dashboardComponents.Provider>
    </>
}

export default DashBoardComponents