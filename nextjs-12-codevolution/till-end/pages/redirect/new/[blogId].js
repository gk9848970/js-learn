import React from 'react'

export default function BlogId({ data }) {
    console.log(process.env.DB_USER, process.env.NEXT_PUBLIC_DB_USER);
  return (
    <div>BlogId {data}</div>
  )
}

export async function getServerSideProps() {
    console.log(process.env.DB_USER, process.env.NEXT_PUBLIC_DB_USER);
    return {
        props: {
            data: "Hiiiiii"
        }
    }
}