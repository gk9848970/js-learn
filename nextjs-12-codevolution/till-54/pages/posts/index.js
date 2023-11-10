import Link from 'next/link';
import React from 'react'

export default function Posts({ posts }) {
    return (
        <div>
            <div>Posts</div>
            {posts.map(post => (
                <Link key={post.id} href={`/posts/${post.id}`}>
                    <div>{post.id} {post.title}</div>
                    <div>{post.body}</div>
                    <div>Price {post.price}</div>
                </Link>
            ))}
        </div>
    )
}

export async function getStaticProps() {
    console.log("trying poists page");
    const response = await fetch('http://localhost:3001/posts');
    const data = await response.json();

    return {
        props: {
            posts: data
        },
        revalidate: 10,
    }
}
