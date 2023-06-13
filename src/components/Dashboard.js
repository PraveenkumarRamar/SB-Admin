import React from 'react'
import Card from './Card'

function Dashboard() {
    let data = [{
    title : "Earnings(Monthly)",
    value : "40,000",
    color : "primary",
    symbol : "fa-calendar",
    bool : true
},
{
    title : "Earnings(Annual)",
    value : "215,000",
    color : "success",
    symbol : "fa-dollar-sign",
    bool : true
},
{
    title : "Tasks",
    value : 50,
    color : "info",
    symbol : "fa-clipboard-list",
    bool : false
},
{
    title : "Pending Requests",
    value : 18,
    color : "warning",
    symbol : "fa-comments",
    bool : true
}]
    return <>
    <div id="content-wrapper" className="d-flex flex-column">

<div id="content">

    <div className="container-fluid">

        <div className="d-sm-flex align-items-center justify-content-between mb-4">
            <h1 className="h3 mb-0 text-gray-800">Dashboard</h1>
            <a href="javascript(void)" className="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm"><i
                    className="fas fa-download fa-sm text-white-50"></i> Generate Report</a>
        </div>

        <div className="row">
            {
                data.map((e,i)=>{
                    return <>
                    <Card key={i}
                        // title={e.title}
                        // value={e.value}
                        // color={e.color}
                        // symbol={e.symbol}
                        input={e}
                    />
                    </>
                })
            }
        </div>

    </div>
</div>



</div>
    </>
}

export default Dashboard