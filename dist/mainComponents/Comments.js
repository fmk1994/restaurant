var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { useEffect, useState, useCallback } from 'react';
import CommentForm from '../comments/CommentForm';
import { Divider } from '@mui/material';
import { withStyles } from '@mui/styles';
import styles from '../styles/CommentsStyles';
import axios from 'axios';
const currentUserId = '60d0fe4f5311236168a10a0b';
const currentPostId = '627ad3feeaca7420ddf7e27b';
const axiosConfig = {
    headers: {
        'app-id': '6276996b23643119d097588f',
        'Content-Type': 'application/json',
    },
};
function Comments(props) {
    const { classes } = props;
    const [backendComments, setBackendComments] = useState([]);
    const [activeComment, setActiveComment] = useState(null);
    const addComment = useCallback((text, username) => {
        axios
            .post('https://dummyapi.io/data/v1/post/create', {
            owner: currentUserId,
            post: currentPostId,
            text: text,
            tags: [username],
        }, axiosConfig)
            .then((response) => {
            setBackendComments([response.data, ...backendComments]);
            setActiveComment(null);
        })
            .catch((error) => {
            console.log(error);
        });
    });
    const deleteComment = useCallback((commentId) => {
        if (window.confirm('Are you sure that you want to remove comment?')) {
            axios
                .delete(`https://dummyapi.io/data/v1/post/${commentId}`, axiosConfig)
                .then(() => {
                const updatedBackendComments = backendComments.filter((backendComment) => backendComment.id !== commentId);
                setBackendComments(updatedBackendComments);
            })
                .catch((error) => {
                alert(error);
            });
        }
    });
    const updateComment = (text, commentId) => {
        axios
            .put(`https://dummyapi.io/data/v1/post/${commentId}`, {
            text: text,
        }, axiosConfig)
            .then((response) => {
            console.log(response.data);
            const updatedBackendComments = backendComments.map((backendComment) => {
                console.log(backendComment);
                if (backendComment.id === commentId) {
                    console.log(backendComment);
                    return Object.assign(Object.assign({}, backendComment), { text: response.data.text });
                }
                return backendComment;
            });
            setBackendComments(updatedBackendComments);
            setActiveComment(null);
        })
            .catch((error) => {
            alert(error);
        });
    };
    useEffect(() => __awaiter(this, void 0, void 0, function* () {
        yield axios
            .get('https://dummyapi.io/data/v1/post?limit=10&created=1', axiosConfig)
            .then((response) => {
            setBackendComments([...response.data.data]);
        })
            .catch((error) => {
            alert(error);
        });
    }), []);
    return className = { classes, : .commentsWrapper };
    id = 'comments' >
        variant;
    'h1';
    align = 'center';
    className = { classes, : .title } >
        COMMENTS
        < /Typography>
        < Divider;
    className = { classes, : .divider };
    variant = 'middle'
        /  >
        className;
    {
        classes.comments;
    }
     >
        { backendComments, : .map((comment) => key = {}, comment = { comment }, currentUserId = { currentUserId }, deleteComment = { deleteComment }, activeComment = { activeComment }, setActiveComment = { setActiveComment }, updateComment = { updateComment }
                /  >
            ) }
        < /Box>
        < div;
    className = { classes, : .commentFormWrapper } >
        className;
    {
        classes.commentFormTitle;
    }
     > Write;
    your;
    comment < /div>
        < CommentForm;
    submitLabel = 'post';
    handleSubmit = { addComment } /  >
        /div>
        < /div>;
    ;
}
export default withStyles(styles)(Comments);
