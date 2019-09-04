import React from 'react'
import GoogleMapReact from 'google-map-react'

const MarkerComponent = ({text}) => {
    return(
        <div className="marker">
            
        </div>
    )
}

class HikeMap extends React.Component {
    static defaultProps = {
        zoom: 11
    };
    render() {
    const {latitude, longitude, name} = this.props.hike;
    return (
        <div style={{height: '300px', width: '100%'}}>
            <GoogleMapReact
                           bootstrapURLKeys={{key:'AIzaSyBw74zIVpg0E4GzS1gb6voAidAf6pAxDZM'}}
                           defaultCenter={{lat: latitude, lng: longitude}}
                           defaultZoom={this.props.zoom}
            >
                 <MarkerComponent
                    lat={latitude}
                    lng={longitude}
                    text={name}
                /> 
            </GoogleMapReact>

        </div>
    )
}
}

export default HikeMap;