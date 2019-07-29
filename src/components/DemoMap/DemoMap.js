import React, {Component} from 'react';
import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';
import Drivers from '../../api/Drivers';

class DemoMap extends Component {


    constructor(props) {
        super(props);

        this.state = {
            drivers: [],
            count: 10
        }

    }

    displayMarkers = () => {
        return this.state.drivers.map((drivers, index) => {
            return <Marker key={index} id={index} position={{
                lat: drivers.location.latitude,
                lng: drivers.location.longitude
            }} />

        })
    };

    componentDidMount() {
        const x = 51.5049375;
        const y =  -0.0964509;
        const {count} = this.state;

        Drivers.getDriversList(x, y, count).then(response => {
            this.setState({drivers: response.data.drivers});

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
