import { comments } from '@/data/comments';
import React from 'react'

export default function Comment({ comment }) {
  return (
    <div>
        <div>{comment.id}</div>
        <div>{comment.text}</div>
    </div>
  )
}

export async function getStaticPaths() {
    return {
        paths: [
            { params: { commentId: '1' } },
            { params: { commentId: '2' } },
            { params: { commentId: '3' } },
        ],
        fallback: false,
    }
}

export async function getStaticProps(context) {
    const { params } = context;
    const { commentId } = params;
    const comment = comments.find(comment => comment.id === parseInt(commentId));

    return {
        props: { comment }
    }
}
