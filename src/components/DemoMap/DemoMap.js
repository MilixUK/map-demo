import React, {Component} from 'react';
import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';
import Drivers from '../../api/Drivers';

class DemoMap extends Component {


    constructor(props) {
        super(props);

        this.state = {
            drivers: [{lat: 51.506, lng: -0.0964545},
                {latitude: 51.50475, longitude: -0.096445},
                {latitude: 51.509375, longitude: -0.0964545},
                {latitude: 51.502375, longitude: -0.09645},
                {latitude: 51.504375, longitude: -0.0964545},
                {latitude: 51.502375, longitude: -0.0964545}]
        }

    }

    displayMarkers = () => {

        return this.state.drivers.map((drivers, index) => {
            return <Marker key={index} id={index} position={{
                lat: drivers.latitude,
                lng: drivers.longitude
            }} />

        })
    };

    componentDidMount() {
        const x = 51.5049375;
        const y =  -0.0964509;
        const count = 8;
        console.log(x, y, count);
        Drivers.getDriversList(x, y, count).then(response => {
            const {data} = response;
            console.log(response, data);
        });
    }



        render()   {
        const mapStyles = {
            width: '100%',
            height: '100%',
        };

        const initialLatitude = 51.5049375;
        const initialLongitude = -0.0964509;
        return (
            <Map
                google={this.props.google}
                defaultZoom={15}
                style={mapStyles}
                initialCenter={{lat: initialLatitude, lng: initialLongitude}}

            >
                <Marker position={{
                    lat: initialLatitude,
                    lng: initialLongitude
                }}/>

                {this.displayMarkers()}

            </Map>
        );
    }

}

export default GoogleApiWrapper({
    apiKey: 'AIzaSyATIV_luHYcb_fRL8l3aVXfxNlPxoygBrc'
})(DemoMap);
