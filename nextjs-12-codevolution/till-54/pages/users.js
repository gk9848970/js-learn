import React from 'react'
import User from '../components/user'

// https://jsonplaceholder.typicode.com/users

export default function Users({ users }) {
  return (
    <div>
        <h1>users</h1>
        {users.map(user => (
            <div key={user.name}>
                <User user={user}/>
            </div>
        ))}
    </div>
  )
}

export async function getStaticProps() {
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await response.json();

    return {
        props: {
            users: data
        }
    }
}
