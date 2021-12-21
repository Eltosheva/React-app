import { useState, useEffect, useMemo } from 'react';

import * as receptService from '../services/receptService';

const useReceptState = (receptId) => {
    const [recept, setRecept] = useState({});
    
    const controller = useMemo(() => {
        const controller = new AbortController();
        
        return controller;
    }, []);
    
    useEffect(() => {
        receptService.getOne(receptId, controller.signal)
            .then(receptResult => {
                setRecept(receptResult);
            });

        return () => {
            controller.abort();
        }

    }, [receptId, controller]);

    return [
        recept,
        setRecept
    ];
};

export default useReceptState;