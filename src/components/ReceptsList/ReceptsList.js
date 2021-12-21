import React from 'react';

import ReceptCard from "./ReceptCard/ReceptCard";

const ReceptsList = ({
    recepts
}) => {
    return (
        <>
            {recepts.length > 0
                ? (
                <ul className="other-recepts-list">
                    {recepts.map(x => <ReceptCard key={x._id} recept={x} />)}
                </ul>
                ) 
                : <p className="no-recepts">No recepts in database!</p>
            }
        </>
    );
}

export default ReceptsList;