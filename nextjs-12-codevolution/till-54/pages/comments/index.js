import React, { useState } from 'react'

export default function CommentsList() {
    const [data, setData] = useState([]);
    const [comment, setComment] = useState('');

    const fetchComments = async () => {
        const response = await fetch('/api/comments');
        const data = await response.json();
        setData(data);
    }

    const submitComment = async () => {
        const response = await fetch('/api/comments', {
            method: "POST",
            body: JSON.stringify({ comment }),
            headers: {
                'Content-Type': 'application/json',
            },
        });
        const data = await response.json();
        console.log(data);
        fetchComments();
    }

    const deleteComment = async commentId => {
        const response = await fetch(`/api/comments/${commentId}`, {
            method: "DELETE",
        });
        const data = await response.json();
        console.log(data);
        fetchComments();
    }

    const editComment = async (commentId, newText) => {
        const response = await fetch(`/api/comments/${commentId}`, {
            method: "PATCH",
            body: JSON.stringify({ text: newText }),
            headers: {
                'Content-Type': 'application/json'
            }
        });
        const data = await response.json();
        console.log(data);
        fetchComments();
    }

    return (
        <>
            <div>CommentsList</div>
            <input value={comment} onChange={e => setComment(e.target.value)}></input>
            <button onClick={fetchComments}>Load Comments</button>
            <button onClick={submitComment}>Submit Comment</button>
            {data.map(cmnt => 
                (
                    <div key={cmnt.id}>
                        <div>{cmnt.text}</div>
                        <button onClick={() => deleteComment(cmnt.id)}>Delete Comment</button>
                        <button onClick={() => editComment(cmnt.id, comment)}>Edit Comment</button>
                    </div>
                )
            )}
        </>
    )
}
