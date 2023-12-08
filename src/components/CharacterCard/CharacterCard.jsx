import React from 'react';
import './CharacterCard.css';

const CharacterCard = ({ data }) => {
    const { name, status, species, gender, origin, location, image, episode } = data;

    const apperedEpisode = episode.map(url => parseInt(url.match(/\/(\d+)$/)[1])).join(',');

    return (
        <div className='card'>
            <img src={image} />
            <h2>{name}</h2>
            <p>Status: {status}</p>
            <p>Species: {species}</p>
            <p>Gender: {gender}</p>
            <p>Origin: {origin.name}</p>
            <p>Location: {location.name}</p>
            <p>
                Appered Episode : {apperedEpisode}
            </p>
            

        </div>
    )
}

export default CharacterCard