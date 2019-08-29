import React from 'react'
import GoogleMapReact from 'google-map-react'

const MarkerComponent = ({text}) => <div>{text}</div>

class HikeMap extends React.Component {
    static defaultProps = {
        center: {
            lat: 40.0274,
            lng: -105.2519
        },
        zoom: 8
    };
    render() {
    const {latitude, longitude, name} = this.props.hike;
    return (
        <div style={{height: '300px', width: '100%'}}>
            <GoogleMapReact
                           bootstrapURLKeys={{key:'AIzaSyBw74zIVpg0E4GzS1gb6voAidAf6pAxDZM'}}
                           defaultCenter={this.props.center}
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