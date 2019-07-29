import React, {Component} from 'react';
import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';
import Drivers from '../../api/Drivers';
import Slider from '@material-ui/core/Slider';

class DemoMap extends Component {


    constructor(props) {
        super(props);

        this.state = {
            drivers: [],
            count: 30
        }

    }


    displayDrivers = () => {
        const icon = { url: 'https://img.icons8.com/color/48/000000/taxi.png', scaledSize: { width: 32, height: 32 } };
        console.log(icon);
        return this.state.drivers.map((drivers, index) => {
            return <Marker key={index} id={index} position={{
                lat: drivers.location.latitude,
                lng: drivers.location.longitude
                }}
               icon = {icon}

            />

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
        const mapStyle = {
            width: '100%',
            height: '100%',
        };
        const {count} = this.state;
        const initialLatitude = 51.5049375;
        const initialLongitude = -0.0964509;


        return (
            <div>
                <Map
                    google={this.props.google}
                    defaultZoom={15}
                    style={mapStyle}
                    initialCenter={{lat: initialLatitude, lng: initialLongitude}}

                >
                    <Marker position={{
                        lat: initialLatitude,
                        lng: initialLongitude
                    }}/>

                    {this.displayDrivers()}
                    <div >
                        <Slider
                            defaultValue={count}
                            step={1}
                            marks
                            min={1}
                            max={50}
                            // value={this.state.count}
                            onChangeCommitted={(e, value) => {

                               this.setState({count: value });
                                this.componentDidMount();
                            }}
                        />
                    </div>
                </Map>

            </div>
        );
    }

}

export default GoogleApiWrapper({
    apiKey: 'AIzaSyATIV_luHYcb_fRL8l3aVXfxNlPxoygBrc'
})(DemoMap);
