import React, {Component} from 'react';
import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';
import Drivers from '../../api/Drivers';

class DemoMap extends Component {


    // constructor(props) {
    //     super(props);
    //
    //     this.state = {
    //         drivers: [{lat: 51.506, lng: -0.0964545},
    //             {latitude: 51.50475, longitude: -0.096445},
    //             {latitude: 51.509375, longitude: -0.0964545},
    //             {latitude: 51.502375, longitude: -0.09645},
    //             {latitude: 51.504375, longitude: -0.0964545},
    //             {latitude: 51.502375, longitude: -0.0964545}]
    //     }
    //
    // }

    displayMarkers = () => {
        const x = 51.5049375;
        const y =  -0.0964509;
        const count = 5;
        Drivers.getDriversList(x, y, count).then(response => {
            console.log(response.data.drivers);
            return response.data.drivers.map((driver) => {

                return <Marker key={driver.driver_id} id={driver.driver_id} position={{
                    lat: driver.location.latitude,
                    lng: driver.location.longitude
                }} />

            })

        });

        // return this.state.drivers.map((drivers, index) => {
        //     return <Marker key={index} id={index} position={{
        //         lat: drivers.latitude,
        //         lng: drivers.longitude
        //     }} />
        //
        // })
    };


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
