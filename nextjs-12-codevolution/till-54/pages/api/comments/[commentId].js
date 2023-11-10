import { comments } from "@/data/comments";

export default function handler(req, res) {
    const { commentId } = req.query;
    if(req.method === "GET") {
        const comment = comments.find(comment => comment.id === parseInt(commentId));
        res.status(201).json(comment);
    }
    else if(req.method === "DELETE") {
        const deleteComment = comments.find(comment => comment.id === parseInt(commentId));
        const index = comments.findIndex(comment => comment.id === parseInt(commentId));
        comments.splice(index, 1);
        res.status(200).json(deleteComment);
    }
    else if(req.method === "PATCH") {
        const commentText = req.body.text;
        const index = comments.findIndex(comment => comment.id === parseInt(commentId));
        comments[index].text = commentText;
        res.status(200).json(comments[index]);
    }
}