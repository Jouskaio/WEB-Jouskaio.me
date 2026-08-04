import React, { type CSSProperties } from 'react';
import {
    ComposableMap,
    Geographies,
    Geography,
    Marker,
    ZoomableGroup
} from "react-simple-maps";
import worldGeo from '../../../assets/world.json';
import TextDefault from "../../atom/text/TextDefault";

// Use the imported JSON directly
const geoUrl = worldGeo;

/**
 * Properties of the CardMap component.
 */
export type CardMapProps = {
    /**
     * Latitude of the marker.
     */
    lat: number;
    /**
     * Longitude of the marker.
     */
    lng: number;
    /**
     * Zoom level (optional, defaults to 1).
     */
    zoom?: number;
    /**
     * Label displayed near the marker.
     */
    markerLabel?: string;
    /**
     * Optional title displayed on top of the map.
     */
    title?: string;
    /**
     * Additional CSS classes.
     */
    classname?: string;
    /**
     * AOS animation duration in milliseconds.
     */
    aosDuration?: number;
    /**
     * AOS animation effect.
     */
    aosEffect?: string;
    /**
     * Inlined CSS styles.
     */
    style?: CSSProperties;
};

/**
 * Molecule Component: Card Map
 * A card displaying a stylized vector geographic map using react-simple-maps.
 */
export default function CardMap({
                                    lat,
                                    lng,
                                    zoom = 1,
                                    markerLabel,
                                    title,
                                    classname = '',
                                    aosDuration,
                                    aosEffect,
                                    style,
                                }: CardMapProps) {
    return (
        <div
            className={`m-cardMap ${classname}`.trim()}
            style={style}
            data-aos={aosEffect || undefined}
            data-aos-duration={aosDuration}
        >
            {title && (
                <div className="m-cardMap__a-title">
                    <TextDefault>{title}</TextDefault>
                </div>
            )}
            <div className="m-cardMap__container">
                <ComposableMap
                    projection="geoAzimuthalEqualArea"
                    projectionConfig={{
                        rotate: [-2.5, -46.5, 0],
                        scale: 1000
                    }}
                    width={800}
                    height={600}
                >
                    <ZoomableGroup zoom={zoom} center={[lng, lat]} filterZoomEvent={() => false}>
                        <Geographies geography={geoUrl}>
                            {({ geographies }: { geographies: any[] }) =>
                                geographies.map((geo: any) => {
                                    const isFrance = geo.properties.name === "France";
                                    return (
                                        <Geography
                                            key={geo.rsmKey}
                                            geography={geo}
                                            className={isFrance ? "rsm-geography--france" : "rsm-geography--neighbor"}
                                        />
                                    );
                                })
                            }
                        </Geographies>
                        <Marker coordinates={[lng, lat]}>
                            <circle r={8} />
                            {markerLabel && (
                                <foreignObject x="-80" y="-35" width="160" height="30">
                                    <div style={{
                                        display: 'flex',
                                        justifyContent: 'center',
                                        width: '100%',
                                        pointerEvents: 'none'
                                    }}>
                                        <TextDefault classname="m-cardMap__marker-label">
                                            {markerLabel}
                                        </TextDefault>
                                    </div>
                                </foreignObject>
                            )}
                        </Marker>
                    </ZoomableGroup>
                </ComposableMap>
            </div>
        </div>
    );
}
