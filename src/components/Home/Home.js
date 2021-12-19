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
        /*
    return(
        <div className="delishes">
            <section className="delish-card-sec">
                <div className="card">
                    <img className="card-img" src="/images/avocado.jpg" alt="Food-with-avocado"/>
                    <h3>Title</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt
                         labore consequuntur, vel vitae debitis ipsa consequatur animi dolore ullam, 
                         maiore. Deleniti alias, quibusdam eum autem deserunt nobis aliquam eos.</p>
                    <button type="submit"><b>Details</b></button>    
                </div>
            </section>
            <section className="delish-card-sec">
                <div className="card">                    
                <img className="card-img" src="/images/homemade-taco.jpg" alt="Homemade-taco"/>
                    <h3>Title</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt
                         labore consequuntur, vel vitae debitis ipsa consequatur animi dolore ullam, 
                         maiore. Deleniti alias, quibusdam eum autem deserunt nobis aliquam eos.</p>
                    <button type="submit"><b>Details</b></button>
                </div>
            </section>
            <section className="delish-card-sec">
                <div className="card">                    
                <img className="card-img" src="/images/seo-orzo-and-salmon.jpg" alt="Seo-orzo-and-salmon"/>
                    <h3>Title</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt
                         labore consequuntur, vel vitae debitis ipsa consequatur animi dolore ullam, 
                         maiore. Deleniti alias, quibusdam eum autem deserunt nobis aliquam eos.</p>
                    <button type="submit"><b>Details</b></button>
                </div>
            </section>
            <section className="delish-card-sec">
                <div className="card">                    
                <img className="card-img" src="/images/buddha-bowls.jpg" alt="Buddha-bowls"/>
                    <h3>Title</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt
                         labore consequuntur, vel vitae debitis ipsa consequatur animi dolore ullam, 
                         maiore. Deleniti alias, quibusdam eum autem deserunt nobis aliquam eos.</p>
                    <button type="submit"><b>Details</b></button>
                </div>
            </section>
            <section className="delish-card-sec">
                <div className="card">                    
                <img className="card-img" src="/images/spaghetti-meatballs.jpg" alt="Spaghetti-meatballs"/>
                    <h3>Title</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt
                         labore consequuntur, vel vitae debitis ipsa consequatur animi dolore ullam, 
                         maiore. Deleniti alias, quibusdam eum autem deserunt nobis aliquam eos.</p>
                    <button type="submit"><b>Details</b></button>
                </div>
            </section>
            <section className="delish-card-sec">
                <div className="card">                    
                <img className="card-img" src="/images/sandwich.jpg" alt="Sandwich"/>
                    <h3>Title</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt
                         labore consequuntur, vel vitae debitis ipsa consequatur animi dolore ullam, 
                         maiore. Deleniti alias, quibusdam eum autem deserunt nobis aliquam eos.</p>
                    <button type="submit"><b>Details</b></button>
                </div>
            </section>
        </div>
    );
        */
    // return (
    // <div className="delishes">
    //     <section className="delish-card-sec">
    //         <Routes>
    //             <Route path="/" element={<ReceptList />} />
    //         </Routes>
    //     </section>
    // </div>
// );

}

export default Home; 