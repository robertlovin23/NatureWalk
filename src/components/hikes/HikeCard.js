import React from 'react'
import { Button, Modal } from 'semantic-ui-react'
import HikeMap from './GoogleMap'

import '../../Hike.css'

const HikeCard = ({ hike }) => {
        return(
        <div className="column" key={hike.id} style={{width: "100%!important"}}>
            <div className="ui card" style={{width: "100%", marginBottom: "20px"}}>
                <div className="image">
                    <img src={hike.imgMedium} alt={hike.summary} className="imgSize"/>
                </div>
                <div className="title" style={{marginTop:'10px', marginBottom:'10px'}}>
                    <h3><b>{hike.name}</b></h3>
                </div>
                <div className="desc-class" style={{height:"75px", marginBottom:"20px"}}>
                    <div className="description" style={{marginBottom:"5px"}}>
                        <b>Difficulty: </b>{hike.difficulty}
                    </div>
                    <div className="description" style={{marginBottom:"10px"}}>
                        <b>Miles: </b>{hike.length}
                    </div>
                    <div className="description">
                        {hike.summary}
                    </div>
                </div>
                <div>
                <Modal trigger={<Button className="ui primary button" style={{width: "100%"}}>Learn More</Button>}>
                        <div className="header">
                            {hike.name}
                        </div>
                        <div className="image content">
                            <div class="ui medium image">
                                <img src={hike.imgMedium} alt={hike.name} style={{width:"400px", height: "200px"}}></img>
                            </div>
                            <div className="description">
                                <div className="ui header"><b><h3>{hike.name}</h3></b></div>
                                <p>{hike.summary}</p>
                                <div style={{marginBottom: '1px'}}>
                                    <b>Difficulty: </b>{hike.difficulty}
                                </div>
                                <div style={{marginBottom: '1px'}}>
                                    <b>Miles: </b>{hike.length}
                                </div>                
                                <div style={{marginBottom: '1px'}}>
                                    <b> Latest Conditions:</b><p>{hike.conditionDetails}</p>
                                </div>
                            </div>
                        </div>
                        <div>
                            <HikeMap hike={hike}/>
                        </div>
                 </Modal>   
                </div>
            </div>
        </div>
        )
}

export default HikeCard;