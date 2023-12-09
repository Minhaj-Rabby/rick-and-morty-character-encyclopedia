import React, { useContext, useEffect, useState } from "react";
import InputGroup from "./InputGroup";
import { FavContext } from '../Layouts/Main';
import './Filter.css';


const Filter = () => {
    let [results, setResults] = useState([]);
    let [info, setInfo] = useState([]);
    let { air_date, episode, name } = info;
    let [id, setID] = useState(1);

    const [favchar, setFavChar] = useContext(FavContext);

    let api = `https://rickandmortyapi.com/api/episode/${id}`;

    useEffect(() => {
        (async function () {
            let data = await fetch(api).then((res) => res.json());
            setInfo(data);

            let a = await Promise.all(
                data.characters.map((x) => {
                    return fetch(x).then((res) => res.json());
                })
            );
            setResults(a);
        })();
    }, [api]);

    const episode_Character = info.characters?.map(url => parseInt(url.match(/\/(\d+)$/)[1]));
    const favontheEpisode = favchar?.filter((character) => episode_Character?.includes(character.id));


    return (
        <div>
            <div>
               { id && <>
                <h1>
                    Episode name :{" "}
                    <span className="">{name === "" ? "Unknown" : name}</span>
                </h1>
                <h3>{favontheEpisode .length} Character Appeard in Episode {id}  from the Favorite Character List</h3></>
                }
            </div>
            <div>
                <div className="pick-episode">
                    <h4>Pick Episode</h4>
                    <InputGroup name="Episode" changeID={setID} total={51} />
                </div>
                <div className='character-grid'>
                    {
                        favontheEpisode  &&
                        favontheEpisode .map((data,idx) =>

                            <div className='card' key={idx}>
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
    );
};

export default Filter;
