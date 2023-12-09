import React, { useContext, useEffect, useState } from 'react'
import CharacterCard from '../CharacterCard/CharacterCard';
import './Home.css'
import SectionPage from '../SectionPage/SectionPage';
import { FavContext } from '../Layouts/Main';

const Home = () => {
    let [fetchedData, updateFetchedData] = useState([]);
    let { info, results } = fetchedData;
    const [pageNumber, updatePageNumber] = useState(1);
    const [favchar, setFavChar] = useContext(FavContext);


    let api = `https://rickandmortyapi.com/api/character/?page=${pageNumber}`

    useEffect(() => {
        (
            async function () {
            let data = await fetch(api).then((res) => res.json());
            updateFetchedData(data);
        })();
    }, [api]);

    {
        results &&
            results.forEach(character => {
                character.isFav ? character.isFav :  character.isFav = false;
            });
    }

    const toggleFavorite = (id) => {

        const character = results.find(char => char.id === id);
        character.isFav = !character.isFav;
        const isCharacterInFav = favchar.some((char) => char.id === id);

        if (!isCharacterInFav) {
            
            favchar.push(character);
            setFavChar(favchar);
        }

    }


    const handleFavData = (data) => {

    };

    return (
        <div className='container'>
            <h1> All Characters</h1>
            <div className='character-grid'>

                {
                    results &&
                    results.map((data) => <CharacterCard
                        key={data.id}
                        data={data}
                        toggleFavorite={toggleFavorite}
                        handleFavData={handleFavData}

                    ></CharacterCard>)

                }
            </div>
            <SectionPage
                info={info}
                pageNumber={pageNumber}
                updatePageNumber={updatePageNumber}

            ></SectionPage>
        </div>
    )
}

export default Home