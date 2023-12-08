import React, { useEffect, useState } from 'react'
import CharacterCard from '../CharacterCard/CharacterCard';
import './Home.css'
import SectionPage from '../SectionPage/SectionPage';

const Home = () => {
    const [fetchedData, updateFetchedData] = useState([]);
    const { info, results } = fetchedData;
    const [pageNumber, updatePageNumber] = useState(1);


  
    let api = `https://rickandmortyapi.com/api/character/?page=${pageNumber}`

    useEffect(() => {
        (async function () {
            let data = await fetch(api).then((res) => res.json());
            updateFetchedData(data);
        })();
    }, [api]);
    // console.log(fetchedData);

    return (
        <div className='container'>
            <h1> All Characters</h1>
            <div className='characted-grid'>
            
                {
                    results &&
                    results.map((data) =>  <CharacterCard
                    key={data.id}
                    data={data}

                    ></CharacterCard> )

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