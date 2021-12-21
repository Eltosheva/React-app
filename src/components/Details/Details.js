import React from 'react';
import { useEffect, useState, useMemo } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';

import * as receptService from '../../services/receptService';
import * as likeService from '../../services/likeService';
import * as commentService from '../../services/commentService';
import { useAuthContext } from '../../contexts/AuthContext';
import useLocalStorage from '../../hooks/useLocalStorage';
import useReceptState from '../../hooks/useReceptState';
import { useNotificationContext, types } from '../../contexts/NotificationContext';

import Edit from '../Edit/Edit';

//import ConfirmDialog from '../Common/ConfirmDialog';
//import { Button } from 'react-bootstrap';


const Details = () => {
    const navigate = useNavigate();
    const { user } = useAuthContext();
    const addNotification = useNotificationContext();
    //const [showDeleteDialog, setShowDeleteDialog] = useState(false);
    const { receptId } = useParams();
    // const { recept, setRecept } = useReceptState(receptId);
    const [recept, setRecept] = useState({});
    const controller = useMemo(() => {

    const controller = new AbortController();  
        return controller;
    }, []);
    
    useEffect(() => {
         receptService.getOne(receptId, controller.signal)
             .then(recept => {
                setRecept(recept)
             });
    }, []);

    useEffect(() => {
        likeService.getReceptLikes(receptId)
            .then(likes => {
                setRecept(state => ({...state, likes}))
            })
    }, []);

    useEffect(() => {
        commentService.getReceptComments(receptId)
            .then(comments => {
                setRecept(state => ({...state, comments}))
            })
    }, []);

    const deleteHandler = (e) => {
        e.preventDefault();

        receptService.destroy(receptId, user.accessToken)
            .then(() => {
                navigate('/home');
            })
    };
    
    const commentButtonClick = () => {
        setRecept(state => ({...state, comments: [...state.comments, user._id]}));
    };

    const likeButtonClick = () => {
        if (user._id === recept._ownerId) {
            return;
        }

        // if (recept.likes.includes(user._id)) {
        //     addNotification('You cannot like again!');
        //     return;
        // }

        likeService.like(user._id, receptId)
            .then(() => {
                setRecept(state => ({...state, likes: [...state.likes, user._id]}));

                // addNotification('Successfuly liked!', types.success);
            })
    };

    const ownerButtons = (
        <div>
            <Link className="owner button" to={`/edit/${receptId}`}>Edit</Link>
            <a className="owner button" href="#" onClick={deleteHandler}>Delete</a>
        </div>
    );

    const userButtons = (
        <div className='user-buttons'>  
            <a className="user button" href="#" onClick={likeButtonClick}>LIKE</a>
        </div>
    );
    
    return (
        <div className='details-container'>
            <section id="details-page" className="details">
                <div className="recept-information">
                    <h3 className='title'>Name: {recept.title}</h3>
                    <p className="type">Type: {recept.type}</p>
                    <p className="img"><img src={recept.imageUrl} /></p>
                    <div className="recept-ingredients">
                    <h3>Ingredients</h3>
                    <p>{recept.ingredients}</p>
                    </div>
                    <div className="recept-description">
                        <h3>Description:</h3>
                        <p>{recept.description}</p>
                    </div>
                    <div className="actions">
                        {user._id && (user._id == recept._ownerId
                            ? ownerButtons
                            : userButtons
                        )}
                        
                        <div className="likes">
                            <img className="hearts" src="/images/heart.png" />
                            <span id="total-likes"><b>Likes: {recept.likes?.length || 0}</b></span>
                        </div>
                        <div className="comments">  
                            <textarea className='userBut-comment' cols="70" rows="10" placeholder='write your coment here...'></textarea>
                            <p><a className='comment button' hred="#" onClick={commentButtonClick}>Share Comment</a></p>
                            <span id="total-comments"><b>Comments: {recept.comments}</b></span>
                        </div>  
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Details;