import React from 'react';
import { Link } from 'react-router-dom';
const ReceptCard = ({
    recept 
}) => {
    return (
        <li className="otherRecept">
            <h3>Name: {recept.title}</h3>
            <p>Type: {recept.type}</p>
           
            <p className="img"><img src={recept.imageUrl}/></p>
            <Link className="details button" to={`/details/${recept._id}`}>Details</Link>
        </li>
    );
}

export default ReceptCard;