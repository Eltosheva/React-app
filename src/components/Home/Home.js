import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import ReceptList from '../ReceptList/ReceptList';

const Home = () => {
    return(
        <div className="delishes">
            <section className="delish-card-sec">
                <div className="card">
                    <img className="card-img" src="/images/avocado.jpg" alt="Food- with-avocado"/>
                    <h3>Title</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt
                         labore consequuntur, vel vitae debitis ipsa consequatur animi dolore ullam, 
                         maiore. Deleniti alias, quibusdam eum autem deserunt nobis aliquam eos.</p>
                    <button type="submit"><b>Details</b></button>    
                </div>
            </section>
            <section className="delish-card-sec">
                <div className="card">                    
                <img className="card-img" src="/images/beer-cheese-sruffing.jpg" alt="Beer-cheese-sruffing"/>
                    <h3>Title</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt
                         labore consequuntur, vel vitae debitis ipsa consequatur animi dolore ullam, 
                         maiore. Deleniti alias, quibusdam eum autem deserunt nobis aliquam eos.</p>
                    <button type="submit"><b>Details</b></button>
                </div>
            </section>
            <section className="delish-card-sec">
                <div className="card">                    
                <img className="card-img" src="/images/brusels-sprouts-salad.jpg" alt="Brusels-sprouts-salad"/>
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
                <img className="card-img" src="/images/chiken-piccata.jpg" alt="Chiken-piccata"/>
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