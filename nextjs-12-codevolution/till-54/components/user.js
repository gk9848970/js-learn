import React from 'react'

export default function User({ user }) {
  return (
    <div>
        <div>{user.name}</div>
        <div>{user.email}</div>
    </div>
  )
}