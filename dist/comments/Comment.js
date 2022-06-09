import { withStyles } from '@mui/styles';
import styles from './styles/CommentStyles';
import { Divider } from '@mui/material';
function Comment(props) {
    const { classes, comment, currentUserId, deleteComment, activeComment, setActiveComment, updateComment, } = props;
    const twoMinutes = 120000;
    const timePassed = new Date() - new Date(comment.publishDate) > twoMinutes;
    const canEdit = currentUserId === comment.owner.id && !timePassed;
    const canDelete = currentUserId === comment.owner.id && !timePassed;
    const publishDate = new Date(comment.publishDate).toLocaleDateString();
    const isEditing = activeComment && activeComment.id === comment.id;
    return className = { classes, : .comment } >
        className;
    {
        classes.commentData;
    }
     >
        className;
    {
        classes.publishDate;
    }
     > { publishDate } < /div>
        < div;
    className = { classes, : .author } > { comment, : .tags } < /div>
        < Divider;
    className = { classes, : .divider };
    variant = 'middle' /  >
        /div>;
    {
        !isEditing && className;
        {
            classes.content;
        }
         > { comment, : .text } < /div>};
        {
            isEditing && submitLabel;
            'Update';
            hasCancelButton;
            initialText = { comment, : .text };
            handleSubmit = {}(text);
            updateComment(text, comment.id);
        }
        handleCancel = {}();
        setActiveComment(null);
    }
    updateComment = { updateComment }
        /  >
    ;
}
className;
{
    classes.commentActions;
}
 >
    { canEdit } && !isEditing && className;
{
    classes.actionButton;
}
onClick = {}();
setActiveComment(comment);
    >
        Edit
    < /Button>;
{
    canDelete && !isEditing && className;
    {
        classes.actionButton;
    }
    onClick = {}();
    deleteComment(comment.id);
}
    >
        Delete
    < /Button>;
/div>
    < /div>;
;
export default withStyles(styles)(Comment);
