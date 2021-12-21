import React from 'react';
import { useEffect, useState, useMemo } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';

import * as receptService from '../../services/receptService';
import * as likeService from '../../services/likeService';
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
    // const { addNotification } = useNotificationContext();
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

    const deleteHandler = (e) => {
        e.preventDefault();

        receptService.destroy(receptId, user.accessToken)
            .then(() => {
                navigate('/home');
            })
    };

    const ownerButtons = (
        <div>
            <Link className="owner button" to={`/edit/${receptId}`}>Edit</Link>
            <a className="owner button" href="#" onClick={deleteHandler}>Delete</a>
        </div>
    );

    const commentButtonClick = () => {
        setRecept({...recept, comments: [...recept.comments, recept._id]});
    };

    const userButtons = (
        <div>
            <textarea className='userBut-comment' cols="70" rows="10" placeholder='write your coment here...'></textarea>
            <p className='user button'><a type='button' hred="#" onClick={commentButtonClick}>Share Comment</a></p>
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
                            <span id="total-likes">Likes: {recept.likes?.length || 0}</span>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Details;