import React from 'react';
import { useState } from "react";
import ReceptCard from "./ReceptCard/ReceptCard";

const ReceptList = () => {
    const [recept, setRecept] = useState([]);

    return (
        <>
            {recept.length > 0}
            ? (
                <ul className="other-recept-list">
                    {recept.map(x => <ReceptCard key={x._id} recept={x} />)}
                </ul>
            ) 
            : <p className="no-recept">No recept in database! Add some ... :)</p>

        </>
    )
}

export default ReceptList;