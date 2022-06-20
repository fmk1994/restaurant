"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
var Comment_1 = require("../comments/Comment");
var CommentForm_1 = require("../comments/CommentForm");
var material_1 = require("@mui/material");
var material_2 = require("@mui/material");
var uuid_1 = require("uuid");
var styles_1 = require("@mui/styles");
var CommentsStyles_1 = require("../styles/CommentsStyles");
var material_3 = require("@mui/material");
var axios_1 = require("axios");
var currentUserId = '60d0fe4f5311236168a10a0b';
var currentPostId = '627ad3feeaca7420ddf7e27b';
var axiosConfig = {
    headers: {
        'app-id': '6276996b23643119d097588f',
        'Content-Type': 'application/json',
    },
};
function Comments(props) {
    var _this = this;
    var classes = props.classes;
    var _a = (0, react_1.useState)([]), backendComments = _a[0], setBackendComments = _a[1];
    var _b = (0, react_1.useState)(null), activeComment = _b[0], setActiveComment = _b[1];
    var addComment = (0, react_1.useCallback)(function (text, username) {
        axios_1.default
            .post('https://dummyapi.io/data/v1/post/create', {
            owner: currentUserId,
            post: currentPostId,
            text: text,
            tags: [username],
        }, axiosConfig)
            .then(function (response) {
            setBackendComments(__spreadArray([response.data], backendComments, true));
            setActiveComment(null);
        })
            .catch(function (error) {
            console.log(error);
        });
    });
    var deleteComment = (0, react_1.useCallback)(function (commentId) {
        if (window.confirm('Are you sure that you want to remove comment?')) {
            axios_1.default
                .delete("https://dummyapi.io/data/v1/post/".concat(commentId), axiosConfig)
                .then(function () {
                var updatedBackendComments = backendComments.filter(function (backendComment) { return backendComment.id !== commentId; });
                setBackendComments(updatedBackendComments);
            })
                .catch(function (error) {
                alert(error);
            });
        }
    });
    var updateComment = function (text, commentId) {
        axios_1.default
            .put("https://dummyapi.io/data/v1/post/".concat(commentId), {
            text: text,
        }, axiosConfig)
            .then(function (response) {
            console.log(response.data);
            var updatedBackendComments = backendComments.map(function (backendComment) {
                console.log(backendComment);
                if (backendComment.id === commentId) {
                    console.log(backendComment);
                    return __assign(__assign({}, backendComment), { text: response.data.text });
                }
                return backendComment;
            });
            setBackendComments(updatedBackendComments);
            setActiveComment(null);
        })
            .catch(function (error) {
            alert(error);
        });
    };
    (0, react_1.useEffect)(function () { return __awaiter(_this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, axios_1.default
                        .get('https://dummyapi.io/data/v1/post?limit=10&created=1', axiosConfig)
                        .then(function (response) {
                        setBackendComments(__spreadArray([], response.data.data, true));
                    })
                        .catch(function (error) {
                        alert(error);
                    })];
                case 1:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    }); }, []);
    return (react_1.default.createElement("div", { className: classes.commentsWrapper, id: 'comments' },
        react_1.default.createElement(material_1.Typography, { variant: 'h1', align: 'center', className: classes.title }, "COMMENTS"),
        react_1.default.createElement(material_2.Divider, { className: classes.divider, variant: 'middle' }),
        react_1.default.createElement(material_3.Box, { className: classes.comments }, backendComments.map(function (comment) { return (react_1.default.createElement(Comment_1.default, { key: (0, uuid_1.v4)(), comment: comment, currentUserId: currentUserId, deleteComment: deleteComment, activeComment: activeComment, setActiveComment: setActiveComment, updateComment: updateComment })); })),
        react_1.default.createElement("div", { className: classes.commentFormWrapper },
            react_1.default.createElement("div", { className: classes.commentFormTitle }, "Write your comment!"),
            react_1.default.createElement(CommentForm_1.default, { submitLabel: 'post', handleSubmit: addComment }))));
}
exports.default = (0, styles_1.withStyles)(CommentsStyles_1.default)(Comments);
