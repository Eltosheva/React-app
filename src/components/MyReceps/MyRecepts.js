import React from 'react';
import { useState, useEffect } from 'react';

import * as receptService from '../../services/receptService';
import { useAuthContext } from '../../contexts/AuthContext';

import ReceptsList from '../ReceptsList/ReceptsList';

const MyRecepts = () => {
    const [recepts, setRecepts] = useState([]);
    const { user } = useAuthContext();

    useEffect(() => {
        receptService.getMyRecepts(user._id)
            .then(receptResult => {
                setRecepts(receptResult);   
            });
    }, []);

    return (
        <section id="my-recepts-page" className="my-recepts">
            <h2>My Recepts</h2>
            <section>
                <ReceptsList recepts={recepts} />
            </section>
        </section>
    );
}

export default MyRecepts;