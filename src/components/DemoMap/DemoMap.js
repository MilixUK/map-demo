import React, {Component} from 'react';
import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';
import Drivers from '../../api/Drivers';
import Slider from '@material-ui/core/Slider';



class DemoMap extends Component {


        state = {
            drivers: [],
            count: 30
        };


    displayDrivers = () => {
        const x = 51.5049375;
        const y = -0.0964509;
        const {count} = this.state;

        Drivers.getDriversList(x, y, count).then(response => {
            this.setState({drivers: response.data.drivers});
        });
    };

    componentDidMount() {
        this.displayDrivers();
    }

    render()   {
        const mapStyle = {
            width: '100%',
            height: '100%',
        };
        const {count, drivers} = this.state;
        const initialLatitude = 51.5049375;
        const initialLongitude = -0.0964509;
        const icon = { url: 'https://img.icons8.com/color/48/000000/taxi.png', scaledSize: { width: 32, height: 32 } };

        return (
            <div>
                <Map
                    google={this.props.google}
                    defaultZoom={15}
                    style={mapStyle}
                    initialCenter={{lat: initialLatitude, lng: initialLongitude}}>
                        <Marker position={{
                            lat: initialLatitude,
                            lng: initialLongitude
                        }}/>

                        {drivers.map((drivers, index) => {
                            return <Marker
                                    key={index}
                                    id={index}
                                    position={{
                                        lat: drivers.location.latitude,
                                        lng: drivers.location.longitude
                                    }}
                                    icon = {icon}/>})
                        }

                </Map>
                <div>
                    <Slider
                        defaultValue={count}
                        step={1}
                        marks
                        min={1}
                        max={50}
                        onChangeCommitted={(e, value) => {
                            this.setState({count: value });
                            this.displayDrivers();
                        }}
                    />
                </div>
            </div>
        );
    }

}

export default GoogleApiWrapper({
    apiKey: 'AIzaSyATIV_luHYcb_fRL8l3aVXfxNlPxoygBrc'
})(DemoMap);
