import React from 'react'

export default function Search(props) {

    const {
        onGameSearch
    } = props

    return (
        <div className="page-search">
            <form action="">
                <input id="game-filter" onChange={onGameSearch} type="text" className="name-search" placeholder="Search" />
                <button type="submit"><span className="icon-search"></span></button>
            </form>
        </div>
    )
}
