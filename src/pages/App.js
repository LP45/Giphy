import React from 'react';
import {Link} from 'react-router-dom'
import Nav from '../components/Nav';
import Footer from '../components/Footer';

const App = () => {
    return (
        <div>
            <Nav />
            {/* To attribute tells the URL what URL path paramter should look like */}
            <Link to="/home">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/contatct">Contact</Link>
            <Footer/>
        </div>
    );
};

export default App;