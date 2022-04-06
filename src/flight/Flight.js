import React from 'react';

const Flight = (props) => {
    let {name, year, img} = props;
    return (
        <div className={'wrap'}>
            <div>
                <h1>{name}</h1>
                <h2>{year}</h2>
            </div>
            <div><img src={img} alt={name}/></div>
        </div>

    );
};

export default Flight;