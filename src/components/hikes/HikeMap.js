import React from 'react'
import GoogleMapReact from 'google-map-react'
import { Modal } from 'semantic-ui-react'
import '../../Hike.css'

class Marker extends React.Component {
    constructor(){
        super()
        this.state={
            open: false
        }
    }
    onOpen(){
        this.setState({
            open: true
        })
    }
    onHide(){
        this.setState({
            open: false
        })
    }
    render() {
        return(
            <i className="big map pin icon"/>
        )
    }
}

const HikeMap = ({hikes,lat,lng}) => {
    return(
    <div className="ui container mapStyles">
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
                            style={{color: `${hike.difficulty}`}}
                        >
                        </Marker>
                     )
                 })
            }
        </GoogleMapReact>

    </div>
    )
}

export default HikeMap;