import { useContext, useEffect, useState } from "react";

import * as requestService from "../../services/commentService";
import AuthContext from '../../contexts/authContext';

import "./commentsCSS.css"
import useForm from "../../hook/useForm";
import { useNavigate } from "react-router-dom";

const Comments = () => {
    const navigate = useNavigate();
    const { isAuthenticated, username, userId } = useContext(AuthContext);
    const [comments, setComments] = useState([]);
    const [currentDate, setCurrentDate] = useState(getDate());

    const getDate = () => {
        const today = new Date();
        const month = today.getMonth() + 1;
        const year = today.getFullYear();
        const date = today.getDate();
        return `${month}/${date}/${year}`;
      }

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
        values.comment = "";

    };

    const deleteButtonClickHandler = async (e) => {

        const hasConfirmed = confirm(`Are you sure you want to delete`);
       
        const targetedComment = e.currentTarget.value;

        if (hasConfirmed) {

            try{
                await requestService.remove(targetedComment);

                setComments(currentComment =>
                    currentComment.filter(comment => {
                        return comment._id !== targetedComment;
                    }))

            }catch(err){
                throw new Error(err)
            };

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
                    <div className="comment-container"  key={_id}>
                        <div className="head" >
                            <small><strong className="user">{username}</strong>{currentDate}</small>
                        </div>
                        <p>{content}</p>
                        {_ownerId === userId && (
                            <button className="del-button" value={_id} onClick={deleteButtonClickHandler}>Delete</button>
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