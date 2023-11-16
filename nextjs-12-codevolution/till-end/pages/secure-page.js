import { signIn, useSession } from 'next-auth/react'
import React from 'react'

export default function SecuredPage() {
    const { status } = useSession();
    
    if(status === "loading") {
        return <div>Loading...</div>
    }
    else if(status === "unauthenticated") {
        signIn();
    }

    return (
        <div>Only seen if user is logged in</div>
    )
}
