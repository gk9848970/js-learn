import React from 'react'

export default function Post({ post }) {
    return (
        <div>
            <div>{post.id} {post.title}</div>
            <div>{post.body}</div>
            <div>Price {post.price}</div>
        </div>
    )
}

export async function getStaticPaths() {
    return {
        paths: [
            {
                params: { productId: "1" }
            },
            {
                params: { productId: "2" }
            },
        ],
        fallback: false,
    }
}

export async function getStaticProps(context) {
    const { params } = context;
    const response = await fetch(`http://localhost:3001/posts/${params.productId}`);
    const data = await response.json();

    console.log("Building ", params.productId)
    return {
        props: {
            post: data
        },
        revalidate: 20,
    }
}
