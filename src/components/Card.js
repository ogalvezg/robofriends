import React from 'react';

const Card = ({ name, email, id }) => {
    return (
        
        <div className='tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5'>
            <h2>Cool Robots</h2>
            <img src={`https://robohash.org/${id}?200x200`}  alt='robots' /> 
            <div>
                <h3>{name}</h3>
                <p>{email}</p>
            </div>
        </div>
    );
}

export default Card;

// we use templete strings in the src {``} because is a js expression