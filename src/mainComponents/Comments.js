import React, { useEffect, useState } from 'react';
import Comment from '../comments/Comment';
import CommentForm from '../comments/CommentForm';
import { v4 as uuidv4 } from 'uuid';
// import {
// 	createComment as createCommentApi,
// 	deleteComment as deleteCommentApi,
// 	updateComment as updateCommentApi,
// } from '../data/api';
import { withStyles } from '@mui/styles';
import styles from '../styles/CommentsStyles';
import { Box } from '@mui/material';
import axios from 'axios';

function Comments(props) {
	const { classes, currentUserId } = props;

	const [backendComments, setBackendComments] = useState([]);
	const [activeComment, setActiveComment] = useState(null);

	useEffect(() => {
		axios
			.get('https://dummyapi.io/data/v1/comment?limit=5&created=0', {
				headers: { 'app-id': '6276996b23643119d097588f' },
			})
			.then((response) => {
				setBackendComments(response.data.data);
				console.log(response)
			})
			.catch((error) => {
				alert(error);
			});
	}, []);

	{
		/*==========================================================
	const addComment = (text, username) => {
		createCommentApi(text, username).then((comment) => {
			setBackendComments([comment, ...backendComments]);
			
		});
	};
=============================================================*/
	}

	async function addComment  (text, username)  {
		await axios
			.post(
				'https://dummyapi.io/data/v1/comment/create',
				{

					owner: {
						firstName: username,
						id: uuidv4(),
						lastName: '',
						picture: '',
						title: '',
					},
					post: '',
					message:text
				},
				{
					headers: {
						'app-id': '6276996b23643119d097588f',
					},
				}
			)
			.then((comment) => {
				setBackendComments([comment, ...backendComments]);
				console.log(comment)
			})
			.catch((error) => {
				alert(error);
			});

	};

	const deleteComment = (commentId) => {
		console.log(commentId);
		if (window.confirm('Are you sure that you want to remove comment?')) {
			axios
				.delete(`https://dummyapi.io/data/v1/comment/${commentId}`, {
					headers: { 'app-id': '6276996b23643119d097588f' },
				})
				.then(() => {
					const updatedBackendComments = backendComments.filter(
						(backendComment) => backendComment.id !== commentId
					);
					setBackendComments(updatedBackendComments);
				})
				.catch((error) => {
					alert(error);
				});
		}
	}
	//
	// const updateComment = (text, commentId) => {
	// 	updateCommentApi(text, commentId).then(() => {
	// 		const updatedBackendComments = backendComments.map((backendComment) => {
	// 			if (backendComment.id === commentId) {
	// 				return { ...backendComment, body: text };
	// 			}
	// 			return backendComment;
	// 		});
	// 		setBackendComments(updatedBackendComments);
	// 		setActiveComment(null);
	// 	});
	// };

	
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
						// updateComment={updateComment}
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
