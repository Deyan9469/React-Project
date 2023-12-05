import { useContext, useEffect, useState } from "react";

import * as requestService from "../../services/commentService";
import AuthContext from '../../contexts/authContext';

import "./commentsCSS.css"
import useForm from "../../hook/useForm";

const Comments = () => {
    const { isAuthenticated, username, userId } = useContext(AuthContext);
    const [comments, setComments] = useState([]);

    useEffect(() => {
        requestService.getAll()
            .then(data => { setComments(data) });
    }, []);

    const addCommentHandler = async (values) => {

        const newComment = await requestService.create(
            userId,
            username,
            values.comment,
        );

        setComments(state => [...state, newComment]);

    };

    const deleteButtonClickHandler = async () => {

        const hasConfirmed = confirm(`Are you sure you want to delete`);

        if (hasConfirmed) {

            await requestService.remove(userId);

        }
    }

    const { values, onChange, onSubmit } = useForm(addCommentHandler, {
        comment: '',
    });

    return (

        <div className="container">
            <div className="row">
                <h2 className="commentHeader">Comments</h2>
            </div>
            <hr />
            <div className="row comment" >

                {comments.map(({ _id, username, content, _ownerId }) => (
                    <div className="comment-container" key={_id}>
                        <div  className="head" >
                            <small><strong className="user">{username}</strong> 30.10.2017 12:13</small>
                        </div>
                        <p>{content}</p>
                        {_ownerId === userId && (
                            <button className="del-button" onClick={deleteButtonClickHandler}>Delete</button>
                        )}

                    </div>

                ))}
                {comments.length === 0 && (
                    <p className="no-comment">No comments.</p>
                )}
            </div>
            <hr />
            {isAuthenticated && (
                <div className="row" id="addcomment">
                <label>Add new comment:</label>
                <form className="form" onSubmit={onSubmit} >
                    <textarea className="form-control" name="comment" value={values.comment} onChange={onChange} placeholder="Comment content..." /><br />
                    <button className="btn btn-primary">Send</button>
                </form>
            </div>
            )}
            
        </div>

    );
}

export default Comments;