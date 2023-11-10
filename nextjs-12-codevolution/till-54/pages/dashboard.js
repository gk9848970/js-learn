import React, { useState, useEffect } from 'react'

export default function Dashboard() {
    const [loading, setLoading] = useState(true);
    const [data, setData] = useState(null);

    useEffect(() => {
      async function fetchDashboardData() {
        const response = await fetch('http://localhost:3001/dashboard');
        const dashBoardData = await response.json();
        console.log(dashBoardData);
        setData(dashBoardData);
        setLoading(false);
      }

      fetchDashboardData();
    }, [])    

    if(loading) {
        return <div>Loading....</div>
    }

    return (
        <div>Dashboard {data.user} {data.age}</div>
    )
}
