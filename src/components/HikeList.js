import React from 'react'
import HikeCard from './HikeCard'

const HikeList = ({ hikes, currentPage, hikesPerPage }) => {
        const indexOfLastHike = currentPage * hikesPerPage;
        const indexOfFirstHike = indexOfLastHike - hikesPerPage;
        const currentHikes = hikes.slice(indexOfFirstHike, indexOfLastHike);
        
        const hikeList = currentHikes.map((hike,index) => {
            return <HikeCard key={index} hike={hike}/>
        })
        return(
            <div className="ui grid container">
                {hikeList}
            </div>
        )
    }

export default HikeList;