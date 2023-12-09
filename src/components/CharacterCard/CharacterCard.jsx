import React, { useState } from 'react';
import './CharacterCard.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';

const CharacterCard = ({ data ,toggleFavorite ,handleFavData}) => {
    const { id,name, status, species, gender, origin, location, image, episode,isFav} = data;

    const[fav ,setFav]=useState([data]);

    const apperedEpisode = episode.map(url => parseInt(url.match(/\/(\d+)$/)[1])).join(',');

    const handleFavoriteCharacters = () => {
        toggleFavorite(id);
        setFav({ ...fav, isFav: !fav.isFav });

        handleFavData(data);
    }

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
            <div>
                <button className='fav-btn' onClick={handleFavoriteCharacters}>
                    Add to Favorite <FontAwesomeIcon className={`${fav.isFav? 'heart-red':'heart-black'}`} icon={faHeart} />
                </button>
            </div>


        </div>
    )
}

export default CharacterCard