import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import ReceptList from '../ReceptList/ReceptList';

const Home = () => {
    let oldTable = (
        <div className="delishes">
            <section className="delish-card-sec">
                <div className="card">
                    <img className="card-img" src="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/delish-thanksgiving-leftover-sandwich-horizontal-1542326155.jpg?crop=0.777xw:0.740xh;0.189xw,0.0765xh&resize=980:*" alt=""/>
                    <h3>Title</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt
                         labore consequuntur, vel vitae debitis ipsa consequatur animi dolore ullam, 
                         maiore. Deleniti alias, quibusdam eum autem deserunt nobis aliquam eos.</p>
                    <button type="submit"><b>Details</b></button>    
                </div>
            </section>
            <section className="delish-card-sec">
                <div className="card">                    <img className="card-img" src="https://hips.hearstapps.com/del.h-cdn.co/assets/17/41/2048x1024/landscape-1507827786-buddha-bowls-delish-1.jpg?resize=480:*" alt=""/>
                    <h3>Title</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt
                         labore consequuntur, vel vitae debitis ipsa consequatur animi dolore ullam, 
                         maiore. Deleniti alias, quibusdam eum autem deserunt nobis aliquam eos.</p>
                    <button type="submit"><b>Details</b></button>
                </div>
            </section>
            <section className="delish-card-sec">
                <div className="card">                    <img className="card-img" src="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/del090121opener4-001-preview-1631545970.jpg?crop=1.00xw:0.738xh;0,0.125xh&resize=480:*" alt=""/>
                    <h3>Title</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt
                         labore consequuntur, vel vitae debitis ipsa consequatur animi dolore ullam, 
                         maiore. Deleniti alias, quibusdam eum autem deserunt nobis aliquam eos.</p>
                    <button type="submit"><b>Details</b></button>
                </div>
            </section>
            <section className="delish-card-sec">
                <div className="card">                    <img className="card-img" src="https://hips.hearstapps.com/del.h-cdn.co/assets/18/11/2048x2048/square-1520901454-beer-cheese-stuffing-horizontal.jpg?resize=360%3A*" alt=""/>
                    <h3>Title</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt
                         labore consequuntur, vel vitae debitis ipsa consequatur animi dolore ullam, 
                         maiore. Deleniti alias, quibusdam eum autem deserunt nobis aliquam eos.</p>
                    <button type="submit"><b>Details</b></button>
                </div>
            </section>
            <section className="delish-card-sec">
                <div className="card">                    <img className="card-img" src="https://hips.hearstapps.com/hmg-prod/images/delish-brussels-sprouts-salad-1528221412.jpg?crop=0.75xw%3A1xh%3Bcenter%2Ctop&resize=360%3A*" alt=""/>
                    <h3>Title</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt
                         labore consequuntur, vel vitae debitis ipsa consequatur animi dolore ullam, 
                         maiore. Deleniti alias, quibusdam eum autem deserunt nobis aliquam eos.</p>
                    <button type="submit"><b>Details</b></button>
                </div>
            </section>
            <section className="delish-card-sec">
                <div className="card">                    
                <img className="card-img" src="https://hips.hearstapps.com/hmg-prod/images/211021-delish-seo-chicken-piccata-horizontal-0180-eb-1635447212.jpg?crop=0.788xw%3A0.590xh%3B0.0554xw%2C0.0366xh&resize=980%3A*" alt=""/>
                    <h3>Title</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt
                         labore consequuntur, vel vitae debitis ipsa consequatur animi dolore ullam, 
                         maiore. Deleniti alias, quibusdam eum autem deserunt nobis aliquam eos.</p>
                    <button type="submit"><b>Details</b></button>
                </div>
            </section>
        </div>
    );

    return (
    <div className="delishes">
        <section className="delish-card-sec">
            <Routes>
                <Route path="/" element={<ReceptList />} />
            </Routes>
        </section>
    </div>
);

}

export default Home; 