import React from 'react';
import { useNavigate } from 'react-router'; 
import { useContext } from 'react'; 
import { AuthContext } from '../../contexts/AuthContext';
import { receptsService } from '../../services/receptsService';

const Add = () => {
    const { user } = useContext(AuthContext);
    const navigate = useNavigate();

    const onReceptAdd = (e) => {
        e.preventDefault();

        let formData = new FormData(e.currentTarget);

        let name = formData.get('name');
        let description = formData.get('description');
        let imageUrl = formData.get('imageUrl');
        let type = formData.get('type');

        let data = {
            name,
            description,
            imageUrl,
            type,
        };
        receptsService.add(data, user.accessToken)
            .then(result => {
                navigate('/home');
            })
    }

    return(
        <div class="add">
            <section class="add-sec">
                <h1>NEW DeliSH</h1>
                <form class ="add-form" onSubmit={onReceptAdd} method="POST">
                    <label for="title">Title</label>
                    <input type="text" name="add" id="add"/>
                    <label for="img">Image URL</label>
                    <input type="url" name="img" id= "img"/>
                    <label for="ingredients">INGREDIENTS</label>
                    <textarea name="products" id="ingredients" cols="30" rows="30"></textarea>
                    <label for="text">DIRECTIONS</label>
                    <textarea name="text" id="text" cols="50" rows="30"></textarea>
                    <button type="add"><b>ADD</b></button>
                </form>
            </section>
        </div>
    );

};

export default Add;