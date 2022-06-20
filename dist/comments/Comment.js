"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
var styles_1 = require("@mui/styles");
var CommentStyles_1 = require("./styles/CommentStyles");
var CommentForm_1 = require("./CommentForm");
var material_1 = require("@mui/material");
var material_2 = require("@mui/material");
function Comment(props) {
    var classes = props.classes, comment = props.comment, currentUserId = props.currentUserId, deleteComment = props.deleteComment, activeComment = props.activeComment, setActiveComment = props.setActiveComment, updateComment = props.updateComment;
    var twoMinutes = 120000;
    var timePassed = new Date() - new Date(comment.publishDate) > twoMinutes;
    var canEdit = currentUserId === comment.owner.id && !timePassed;
    var canDelete = currentUserId === comment.owner.id && !timePassed;
    var publishDate = new Date(comment.publishDate).toLocaleDateString();
    var isEditing = activeComment && activeComment.id === comment.id;
    return (react_1.default.createElement("div", { className: classes.comment },
        react_1.default.createElement("div", { className: classes.commentData },
            react_1.default.createElement("div", { className: classes.publishDate }, publishDate),
            react_1.default.createElement("div", { className: classes.author }, comment.tags),
            react_1.default.createElement(material_1.Divider, { className: classes.divider, variant: 'middle' })),
        !isEditing && react_1.default.createElement("div", { className: classes.content }, comment.text),
        isEditing && (react_1.default.createElement(CommentForm_1.default, { submitLabel: 'Update', hasCancelButton: true, initialText: comment.text, handleSubmit: function (text) { return updateComment(text, comment.id); }, handleCancel: function () { return setActiveComment(null); }, updateComment: updateComment })),
        react_1.default.createElement("div", { className: classes.commentActions },
            canEdit && !isEditing && (react_1.default.createElement(material_2.Button, { className: classes.actionButton, onClick: function () { return setActiveComment(comment); } }, "Edit")),
            canDelete && !isEditing && (react_1.default.createElement(material_2.Button, { className: classes.actionButton, onClick: function () { return deleteComment(comment.id); } }, "Delete")))));
}
exports.default = (0, styles_1.withStyles)(CommentStyles_1.default)(Comment);
