import React, { useContext } from 'react'
import { FavContext } from '../Layouts/Main';
import Filter from './FIlter';
import './Favorites.css';
const Favorites = () => {
  const [favchar, setFavChar] = useContext(FavContext);

  return (
    <div className='container'>
      <div>
        <Filter></Filter>
      </div>
      <div>
        <h1>All Favorites Character</h1>
        <div className='character-grid'>
          {
            favchar &&
            favchar.map((data) =>

              <div className='card' key={data.id}>
                <img src={data.image} />
                <h2>{data.name}</h2>
                <p>Status: {data.status}</p>
                <p>Species: {data.species}</p>
                <p>Gender: {data.gender}</p>
                <p>Origin: {data.origin.name}</p>
                <p>Location: {data.location.name}</p>
                <p>
                  Appered Episode : {data.episode.map(url => parseInt(url.match(/\/(\d+)$/)[1])).join(',')}
                </p>
              </div>
            )

          }

        </div>
      </div>
    </div>
  )
}

export default Favorites