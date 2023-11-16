import { getServerSession } from 'next-auth/next';
import React from 'react'
import { authOptions } from './api/auth/[...nextauth]';

export default function ServerSideAuth({ data }) {
  return (
    <div>server-side-auth {data}</div>
  )
}

export async function getServerSideProps(context) {
    const { req, res } = context;
    const session = await getServerSession(req, res, authOptions);

    if(!session) {
        return {
            redirect: {
                destination: "/api/auth/signin?callbackUrl=http://localhost:3000/server-side-auth",
                permanent: false,
            }
        }
    }

    return {
        props: {
            session,
            data: session ? "I have session" : "I don't"
        }
    }
}
