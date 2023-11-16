import React from 'react'
import { signIn, signOut, useSession } from 'next-auth/react'
import Link from 'next/link'

export default function Navbar() {
    const {data: session, status} = useSession();
    return (
        <div style={{ background: "lightpink" }}>
            <div>Navbar</div>
            <div style={{ display: 'flex' }}>
                <Link href='/'>Home</Link>
                {
                    (status === "authenticated") && (
                        <Link href="/secure-page">Secured Page</Link>
                    )
                }
                {
                    (status === "loading" || status === "unauthenticated") && (
                        <Link href="/api/auth/signin" onClick={e => { 
                            e.preventDefault();
                            signIn('github');
                        }}>Sign In</Link>
                    )
                }
                {
                    (status === "authenticated") && (
                        <Link href="/api/auth/signout" onClick={e => { 
                            e.preventDefault();
                            signOut();
                        }}>Sign Out</Link>
                    )
                }
            </div>
        </div>
    )
}
