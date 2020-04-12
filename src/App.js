import React, { useState } from 'react';
import './sass/styles.scss';
import GameList from './GameList'
import Search from './Search'
import Filters from './Filters'
//import { v4 as uuidv4 } from 'uuid';

function App() {

    const games = [
        {
            "name": "Fruit Spin",
            "tags": "new",
            "url": "",
            "labels": "new, high-limit",
            "image": "./assets/images/games/1.jpg",
            "size": ""
        },
        {
            "name": "Jack Hammer",
            "tags": "top",
            "url": "",
            "labels": "high-limit",
            "image": "./assets/images/games/2.jpg",
            "size": ""
        },
        {
            "name": "3Hit Pay Pulse",
            "tags": "new",
            "url": "",
            "labels": "",
            "image": "./assets/images/games/big-1.jpg",
            "size": "big"
        },
        {
            "name": "Spinata Grande",
            "tags": "new, top",
            "url": "",
            "labels": "",
            "image": "./assets/images/games/3.jpg",
            "size": ""
        },
        {
            "name": "Sugar Smash",
            "tags": "new, top",
            "url": "",
            "labels": "",
            "image": "./assets/images/games/4.jpg",
            "size": ""
        },
        {
            "name": "Fa-Fa Twins",
            "tags": "",
            "url": "",
            "labels": "",
            "image": "./assets/images/games/5.jpg",
            "size": ""
        },
        {
            "name": "Smokin` Hot Gems",
            "tags": "new",
            "url": "",
            "labels": "new",
            "image": "./assets/images/games/6.jpg",
            "size": ""
        },
        {
            "name": "Kokos",
            "tags": "new",
            "url": "",
            "labels": "new",
            "image": "./assets/images/games/7.jpg",
            "size": ""
        },
        {
            "name": "Hotline",
            "tags": "top",
            "url": "",
            "labels": "",
            "image": "./assets/images/games/8.jpg",
            "size": ""
        },
        {
            "name": "Fruit Spin",
            "tags": "top",
            "url": "",
            "labels": "",
            "image": "./assets/images/games/9.jpg",
            "size": ""
        },
        {
            "name": "Spinata Grande",
            "tags": "new",
            "url": "",
            "labels": "new",
            "image": "./assets/images/games/10.jpg",
            "size": ""
        },
        {
            "name": "Hotline",
            "tags": "top",
            "url": "",
            "labels": "",
            "image": "./assets/images/games/11.jpg",
            "size": ""
        },
        {
            "name": "Near Jwigle",
            "tags": "",
            "url": "",
            "labels": "",
            "image": "./assets/images/games/12.jpg",
            "size": ""
        },
        {
            "name": "Sea of Tranquility",
            "tags": "new",
            "url": "",
            "labels": "new",
            "image": "./assets/images/games/13.jpg",
            "size": ""
        },
        {
            "name": "Aloha! Cluster pays",
            "tags": "",
            "url": "",
            "labels": "",
            "image": "./assets/images/games/14.jpg",
            "size": ""
        },
        {
            "name": "Jumanji Video Slot",
            "tags": "top",
            "url": "",
            "labels": "",
            "image": "./assets/images/games/big-2.jpg",
            "size": "big"
        },
        {
            "name": "Day of the dead",
            "tags": "",
            "url": "",
            "labels": "",
            "image": "./assets/images/games/15.jpg",
            "size": ""
        },
        {
            "name": "Dr. Jekyll & Mr. Hyde",
            "tags": "",
            "url": "",
            "labels": "",
            "image": "./assets/images/games/16.jpg",
            "size": ""
        },
        {
            "name": "Day of the dead",
            "tags": "new",
            "url": "",
            "labels": "new",
            "image": "./assets/images/games/17.jpg",
            "size": ""
        },
        {
            "name": "Dr. Jekyll & Mr. Hyde",
            "tags": "",
            "url": "",
            "labels": "",
            "image": "./assets/images/games/18.jpg",
            "size": ""
        },
        {
            "name": "Day of the dead",
            "tags": "top",
            "url": "",
            "labels": "high-limit",
            "image": "./assets/images/games/19.jpg",
            "size": ""
        },
        {
            "name": "Dr. Jekyll & Mr. Hyde",
            "tags": "",
            "url": "",
            "labels": "",
            "image": "./assets/images/games/20.jpg",
            "size": ""
        }
    ]

    //const [loading, setLoading] = useState(false);
    const [search, setSearch] = useState("");
    const [tagFilter, setTagFilter] = useState("all");
    const [filteredGamesClass, setFilteredGamesClass] = useState("")

    ////////// To be used when fetching data from API
    // useEffect(() => {
    //     setLoading(true);
    //     axios
    //         .get("URL_GOES_HERE")
    //         .then(res => {
    //             setGames(res.data);
    //             setLoading(false);
    //         })
    //         .catch(err => {
    //             console.log(err);
    //         });
    // }, []);

    const filteredGames = games.filter(game => {
        return game.name.toLowerCase().includes(search.toLowerCase());
    })


    const filteredByTag = filteredGames.filter(game => {
        if (tagFilter !== "all") {         
            return game.tags.toLowerCase().includes(tagFilter.toLowerCase());
        } else {
            return true
        }

    })


    // if (loading) {
    //     return <p>Loading countries...</p>;
    // }
    
    function handleGameSearch(e) {
        
        const query = e.target.value;

        setSearch(query)

        query !== '' ? setFilteredGamesClass("filtered-games") : setFilteredGamesClass("")
    }

    function handleTagSelected(tag) {
        
        setTagFilter(tag)

        filteredGamesClass === '' && tag !== "all" ? setFilteredGamesClass("filtered-games") : setFilteredGamesClass("")
    }
    

    return (
        <div className="main">
            <div className="page-upper">
                <div className="page-title">
                    <h1>Slots</h1>
                </div>
                <Search
                    onGameSearch={handleGameSearch}
                />
                <Filters
                    tagSelected={handleTagSelected}
                />
            </div>
            <div className="page-lower">
                <GameList
                    filteredGamesClass={filteredGamesClass}
                    games={filteredByTag}
                />
            </div>
        </div>
    );
}

export default App;
