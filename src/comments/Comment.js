import React from 'react';
import { withStyles } from '@mui/styles';
import styles from './styles/CommentStyles';
import CommentForm from './CommentForm';
import { Divider } from '@mui/material';
import { Button } from '@mui/material';

function Comment(props) {
	const {
		classes,
		comment,
		currentUserId,
		deleteComment,
		activeComment,
		setActiveComment,
		updateComment,
	} = props;
	const twoMinutes = 120000;
	const timePassed = new Date() - new Date(comment.publishDate) > twoMinutes;
	const canEdit = currentUserId === comment.owner.id && !timePassed;
const canDelete = currentUserId === comment.owner.id && timePassed;
	const publishDate = new Date(comment.publishDate).toLocaleDateString();
	const isEditing = activeComment && activeComment.id === comment.id;

	return (
		<div className={classes.comment}>
			<div className={classes.commentData}>
			
			<div className={classes.publishDate}>{publishDate}</div>
			<div className={classes.author}>{comment.owner.firstName}</div>
			</div>
			<Divider
					sx={{ width: '50vw', bgcolor: 'brown', marginBottom: '20px' }}
					variant='middle'
				/>
			{!isEditing && <div className={classes.content}>{comment.message}</div>}
			{isEditing && (
				<CommentForm
					submitLabel='Update'
					hasCancelButton
					initialText={comment.message}
					handleSubmit={(text) => updateComment(text, comment.id)}
					handleCancel={() => setActiveComment(null)}
					updateComment={updateComment}
				/>
			)}
			<div className={classes.commentActions}>
				{canEdit && (
					<Button
						className={classes.actionButton}
						onClick={() => setActiveComment(comment)}
					>
						Edit
					</Button>
				)}
				{canDelete && (
					<Button
						className={classes.actionButton}
						onClick={() => deleteComment(comment.id)}
					>
						Delete
					</Button>
				)} 
			</div>
		</div>
	);
}

export default withStyles(styles)(Comment);
