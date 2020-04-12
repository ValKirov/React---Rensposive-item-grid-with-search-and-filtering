import React from 'react'
import { v4 as uuidv4 } from 'uuid';

export default function GameItem({ game }) {
    // const newLabel = <span className="game-label new"><img src={require("./assets/images/labels/new.png")} alt="New label" /></span>;
    // const highLimitLabel = <span className="game-label high-limit"><img src={require("./assets/images/labels/high-limit.png")} alt="High limit label" /></span>;
    const labels = [];

    // if (game.labels.includes("new")) labels.push(newLabel);
    // if (game.labels.includes("high-limit")) labels.push(highLimitLabel);
    const gameLabels = game.labels.split(",");

    if (game.labels !== "") {

        gameLabels.map(label => {
            
            let labelName = label.trim();
            const labelHtml = <span key={uuidv4()} className={`game-label ${labelName}`}><img src={require(`./assets/images/labels/${labelName}.png`)} alt={labelName} /></span>;
            
            labels.push(labelHtml);
            return labels;
        });
    }

    return (
        <div className={`box ${game.size}`} data-game={game.name} data-tags={game.tags}>
            <a href={game.url}>
                <img className="game-img" src={require(`${game.image}`)} alt={game.name} />
                {labels}
            </a>
        </div>
    )
}
