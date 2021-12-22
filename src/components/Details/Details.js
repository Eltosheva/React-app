import React from 'react';
import { useEffect, useState, useMemo } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';

import * as receptService from '../../services/receptService';
import * as likeService from '../../services/likeService';
import { useAuthContext } from '../../contexts/AuthContext';
import { useNotificationContext, types } from '../../contexts/NotificationContext';

const Details = () => {
    const navigate = useNavigate();
    const { user } = useAuthContext();
    const addNotification = useNotificationContext();
    const { receptId } = useParams();
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

    const deleteHandler = (e) => {
        e.preventDefault();

        receptService.destroy(receptId, user.accessToken)
            .then(() => {
                navigate('/home');
            })
    };

    const likeButtonClick = () => {
        if (user._id === recept._ownerId) {
            return;
        }

        if (recept.likes?.includes(user._id)) {
            alert('You cannot like again!');
            return;
        }

        likeService.like(user._id, receptId)
            .then(() => {
                setRecept(state => ({...state, likes: [...state.likes, user._id]}));
                alert('Successfuly liked!', types.success);
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
                    <h1 className='title'>Name: {recept.title}</h1>
                    <h3 className="type">Type: {recept.type}</h3>
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
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Details;