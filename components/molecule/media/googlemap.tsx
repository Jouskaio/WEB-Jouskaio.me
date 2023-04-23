import { Component } from "react";
import GoogleMapReact from 'google-map-react';
import PropTypes from "prop-types";


const Marker = ({ lat, lng }) => (
    <div style={{
        position: 'absolute',
        transform: 'translate(-50%, -100%)',
        backgroundImage: "url('/icons/mapmarker.png')",
        backgroundSize: 'contain',
        backgroundRepeat: 'no-repeat',
        width: '30px',
        height: '30px'
    }}></div>
);


class GoogleMap extends Component {
    static propTypes = {
        latitude: PropTypes.number.isRequired,
        longitude: PropTypes.number.isRequired,
        width: PropTypes.oneOfType([
            PropTypes.string,
            PropTypes.number
        ]).isRequired,
        height: PropTypes.string.isRequired,
        zoom: PropTypes.number.isRequired,
        defaultCenter: PropTypes.arrayOf(PropTypes.number)
    };

    static defaultProps = {
        defaultCenter: []
    }

    render() {
        const {
            // @ts-ignore
            latitude,
            // @ts-ignore
            longitude,
            // @ts-ignore
            width,
            // @ts-ignore
            height,
            // @ts-ignore
            zoom,
            // @ts-ignore
            defaultCenter,
        } = this.props;

        return (
            <div style={{ height: height, width: width }}>
                <GoogleMapReact
                    bootstrapURLKeys={{ key: "AIzaSyAtF-q-yhwhqXsLcDUHnX8z8Mv7p0yoLlc" }}
                    defaultCenter={[latitude, longitude]}
                    defaultZoom={zoom}
                    yesIWantToUseGoogleMapApiInternals
                >
                    <Marker lat={latitude} lng={longitude} />
                </GoogleMapReact>
                <script
                    src="https://maps.googleapis.com/maps/api/js?key=AIzaSyAtF-q-yhwhqXsLcDUHnX8z8Mv7p0yoLlc&libraries=places"
                    defer
                ></script>
            </div>
        );
    }
}

export default GoogleMap;
