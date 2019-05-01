import React from 'react';

import { Link } from 'react-router-dom';

const arrayOfCats = [
    'ProfessorOak',
    'Ash',
    'Gary',
    'Misty'
]

function Cats(props) {

    const catLinks = arrayOfCats.map(catName => (
        <li><Link to={`/cats/${catName}`}>{catName}</Link></li>
    ));

    return (
        <div>
            <h1>🐈</h1>
            <ul>
                {catLinks}
            </ul>
        </div>
    );
}

export default Cats;