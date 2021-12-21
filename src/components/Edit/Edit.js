import React from 'react';
import { useNavigate} from 'react-router'; 
import { useState, useMemo, useEffect} from 'react';
import { useParams } from 'react-router-dom';

import * as receptService from '../../services/receptService';

// import { Alert } from 'react-bootstrap';

const types = [
    { value: 'deserts', text: 'Deserts' },
    { value: 'main-dishes', text: 'Main Dishes' },
    { value: 'salats', text: 'Salats' },
    { value: 'other', text: 'Other' },
]

const Edit = () => {
    const { receptId } = useParams();
    const navigate = useNavigate();
    const [recept, setRecept] = useState({});
    //const [errors, setErrors] = useState({name: false})

    
    const controller = useMemo(() => {
        const controller = new AbortController()
        return controller;
    }, []);

    useEffect(() => {
        receptService.getOne(receptId, controller.signal)
            .then(receptResult => {
                setRecept(receptResult)
            })

        return () => {
            controller.abort();
        }
    }, [receptId, controller]);

    const receptEditHendler = (e) => {
        e.preventDefault();

        let receptData = Object.fromEntries(new FormData(e.currentTarget));
        console.log(receptData);
        
        receptService.update(receptId, receptData);
        navigate (`/details/${receptId}`);
    }

    // const titleChangeHandler = (e) => {
    //     let currentTitle = e.target.value;
    //     if (currentTitle.length < 3) {
    //         setErrors(state => ({...state, title: 'Your title sould be at least 3 characters!'}))
    //     } else if (currentTitle.length > 20) {
    //         setErrors(state => ({...state, title: 'Your title sould be max 20 characters!'}))
    //     } else {
    //         setErrors(state => ({...state, title: false}))
    //     }
    // };

    // const ingrChangeHandler = (e) => {
    //     let currentIngre = e.target.value;
    //     if(currentIngre.length < 5) {
    //         setErrors(state => ({...state, ingredients: 'You must have minimum 1 ingredient!'}))
    //     } else {
    //         setErrors(state => ({...state, ingredients: false}))
    //     }
    // };
    
    return(
        <div className="edit">
            <section className="edit-sec">
                <h1>DeliSH</h1>
                <form className="edit-form" method='POST' onSubmit={receptEditHendler}>
                    <p className="field">
                        <label htmlFor="title">Title</label>
                        <span className="input" >
                            {/* style={{borderColor: errors.title ? 'red' : 'inherit'}} */}
                            <input type="text" name="title" id="title" defaultValue={recept.title} /> 
                        </span>
                        {/* <Alert variant="danger" show={errors.title}>{errors.title}</Alert> */}
                    </p>
                    <p className="field">
                        <label htmlFor="type">Type</label>
                        <span className="input">   
                            <select id="type" name="type" value={recept.type} onChange={
                                (e) => setRecept({recept : e.target.value})}>
                                {types.map(x => <option key={x.value} value={x.value}>{x.text}</option>)}
                            </select>
                        </span>
                    </p>
                    <p className="field">
                        <label htmlFor="ingredients">Ingredients</label>
                        {/* style={{borderColor: errors.ingredients ? 'red' : 'inherit'}} */}
                        <span className="input" >
                            <textarea name="ingredients" id="ingredients" cols="45" rows="5" value={recept.ingredients}></textarea>
                        </span>
                    </p>
                    <p className="field">
                        <label htmlFor="description">Description</label>
                        <span className="input">
                            <textarea name="description" id="description" cols="45" rows="5" value={recept.description}></textarea>
                        </span>
                    </p>
                    <p className="field">
                        <label htmlFor="image">Image</label>
                        <span className="input">
                            <input type="text" name="imageUrl" id="image" defaultValue={recept.imageUrl} />
                        </span>
                    </p>
                    <input className="button submit" type="submit" value="Edit Recept" />
                </form>
            </section>
        </div>
    );
}

export default Edit;