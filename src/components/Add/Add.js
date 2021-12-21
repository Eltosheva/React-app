import React from 'react';
import { useNavigate } from 'react-router'; 
import { useContext } from 'react'; 
import { AuthContext } from '../../contexts/AuthContext';
import * as receptService from '../../services/receptService';
import { types } from '../../contexts/NotificationContext';

const Add = () => {
    const { user } = useContext(AuthContext);
    const navigate = useNavigate();

    const onReceptAdd = (e) => {
        e.preventDefault();
        let formData = new FormData(e.currentTarget);

        let title = formData.get('title');
        let type = formData.get('type');
        let ingredients = formData.get('ingredients');
        let description = formData.get('description');
        let imageUrl = formData.get('imageUrl');

        let data = {
            title,
            type,
            ingredients,
            description,
            imageUrl
        };
        receptService.add(data, user.accessToken)
            .then(result => {
                navigate('/home');
            })
    }

    return(
        <div className="add">
            <section className="add-sec">
                <h1>ADD NEW DeliSH</h1>
                <form className="add-form" onSubmit={onReceptAdd} method="POST">
                <legend>Add new recept</legend>
                    <p className="field">
                        <label htmlFor="title">Title</label>
                        <span className="input">
                            <input type="text" name="title" id="title" placeholder="Title" />
                        </span>
                    </p>
                    <p className="field">
                        <label htmlFor="type">Type</label>
                        <span className="input">
                            <select id="type" name="type">
                                <option value="deserts">Deserts</option>
                                <option value="salads">Salats</option>
                                <option value="main-dishes">Main dishes</option>
                                <option value="other">Other</option>
                            </select>
                        </span>
                    </p>
                    <p className="field">
                        <label htmlFor="ingredients">Ingredients</label>
                        <span className="input">
                            <textarea name="ingredients" id="ingredients" cols="45" rows="5"placeholder="Ingredients"></textarea>
                        </span>
                    </p>
                    <p className="field">
                        <label htmlFor="description">Description</label>
                        <span className="input">
                            <textarea name="description" id="description" cols="45" rows="5" placeholder="Description"></textarea>
                        </span>
                    </p>
                    <p className="field">
                        <label htmlFor="image">Image</label>
                        <span className="input">
                            <input type="text" name="imageUrl" id="image" placeholder="ImageURL" />
                        </span>
                    </p>
                    <input className="button submit" type="submit" value="Add Recept" />
                    {/* <button className="button submit" type="submit" value="Add Recept"><b>ADD</b></button> */}
                </form>
            </section>
        </div>
    );

};

export default Add;