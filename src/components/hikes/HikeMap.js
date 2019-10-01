import React from 'react'
import GoogleMapReact from 'google-map-react'

const Marker = () => {
    return(
        <i className="big map pin icon"/>
    )
}

const HikeMap = ({hikes,lat,lng}) => {
    return(
    <div className="ui container" style={{height: '600px', width: '100%'}}>
        <GoogleMapReact
                       bootstrapURLKeys={{key:'AIzaSyBw74zIVpg0E4GzS1gb6voAidAf6pAxDZM'}}
                       defaultCenter={{lat: lat, lng: lng}}
                       center={{lat: lat, lng: lng}}
                       defaultZoom={11}
        >
             {
                 hikes.map(hike => {
                     return(    
                        <Marker
                            lat={hike.latitude}
                            lng={hike.longitude}
                            text={hike.name}
                        />
                     )
                 })
            }
        </GoogleMapReact>

    </div>
    )
}

export default HikeMap;