import React from 'react';
import GameItem from './GameItem'
import { v4 as uuidv4 } from 'uuid';

export default function GameList(props) {
    
    const {
        games,
        filteredGamesClass
    } = props;

    return (
        <div className={`container ${filteredGamesClass}`}>
            {
                games.map(game => {
                    return <GameItem key={uuidv4()} game={game} />
                })
            }
        </div>
    )
}
