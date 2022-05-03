import React, { useEffect, useState } from 'react';
import Comment from '../comments/Comment';
import CommentForm from '../comments/CommentForm';
import {
	getComments as getCommentsApi,
	createComment as createCommentApi,
    deleteComment as deleteCommentApi,
	updateComment as updateCommentApi,
} from '../data/api';
import { withStyles } from '@mui/styles';
import styles from '../styles/CommentsStyles';
import { Box } from '@mui/material';


function Comments(props) {
	const { classes, currentUserId } = props;

	const [backendComments, setBackendComments] = useState([]);
    const [activeComment, setActiveComment] = useState(null)

	const addComment = (text, username) => {
		createCommentApi(text, username).then((comment) => {
			setBackendComments([comment, ...backendComments]);
			
		});
	};

const deleteComment = (commentId) =>{
    if(window.confirm('Are you sure that you want to remove comment?')){
        deleteCommentApi(commentId).then(()=>{
           const updatedBackendComments = backendComments.filter(backendComment=>backendComment.id !== commentId);
           setBackendComments(updatedBackendComments);
        })
    }


};

const updateComment = (text, commentId) =>{
updateCommentApi(text, commentId).then(()=>{
	const updatedBackendComments = backendComments.map(backendComment=>{
		if(backendComment.id===commentId){
			return {...backendComment, body:text}

		}
		return backendComment;
	});
	setBackendComments(updatedBackendComments);
	setActiveComment(null);
})
}

	useEffect(() => {
		getCommentsApi().then((data) => {
			setBackendComments(data);
		});
	}, []);

	return (
		<div className={classes.commentsWrapper}>

			<Box className={classes.comments}>
				{backendComments.map((comment) => (
					<Comment
						key={comment.id}
						comment={comment}
						currentUserId={currentUserId}
                        deleteComment={deleteComment}
                        activeComment={activeComment}
                        setActiveComment={setActiveComment}
						updateComment={updateComment}
					/>
				))}
			</Box>
			<div className={classes.commentFormWrapper}>
			<div className={classes.commentFormTitle}>Write your comment!</div>
			<CommentForm submitLabel='write' handleSubmit={addComment} />
			</div>
		</div>
	);
}

export default withStyles(styles)(Comments);
