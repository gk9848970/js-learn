import React from 'react'
import useSWR from 'swr';

async function fetcher() {
    const response = await fetch('http://localhost:3001/dashboard');
    const data = await response.json();
    return data;
  }

export default function DashboardSWR() {
    console.log("I re rendered");
    const { data, error } = useSWR('dashboard', fetcher);

    if(error) {
        return "ERROR";
    }

    if(!data) {
        return "Data not found";
    }

    return <div>Dashboard {data.user} {data.age}</div>
}
