import '../styles/Home.css';

import React from 'react';

const Home = () => {
    const title = 'Hi. I\'m Michael.';
    
    return (
        <div className='Home'>
            <div className='Title'>{title}</div>
            <div className='Body'>PROJECTS</div> 
        </div>
    );
}

export default Home;