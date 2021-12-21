import React from 'react';
import { useState, useEffect } from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import ReceptsList from '../ReceptsList/ReceptsList';
import * as receptService from '../../services/receptService';


const Home = () => {
    const [recepts, setRecepts] = useState([]);
    
    useEffect(() => {
        receptService.getAll()
            .then(result => {
                setRecepts(result);
            })
            .catch(err => {
                console.log(err);
            })
    }, []);

    return (
        <section id="home-page" className="home">
            <h3>All Recepts</h3>
            <section>
                <ReceptsList recepts={recepts} />
            </section>
        </section>
    );

}

export default Home; 