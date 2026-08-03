import React, { type CSSProperties } from 'react';
import {
    ComposableMap,
    Geographies,
    Geography,
    Marker,
    ZoomableGroup
} from "react-simple-maps";
import TextSpanXS from '../../atom/text/textSpanXS';

// URL for France departments TopoJSON (includes departments for better look)
const geoUrl = "https://raw.githubusercontent.com/deldersveld/topojson/master/countries/france/france-departments.json";

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
                    <TextSpanXS>{title}</TextSpanXS>
                </div>
            )}
            <div className="m-cardMap__container">
                <ComposableMap
                    projection="geoAzimuthalEqualArea"
                    projectionConfig={{
                        rotate: [-2.5, -46.5, 0],
                        scale: 2500
                    }}
                    width={800}
                    height={600}
                >
                    <ZoomableGroup zoom={zoom} center={[lng, lat]} filterZoomEvent={() => false}>
                        <Geographies geography={geoUrl}>
                            {({ geographies }: { geographies: any[] }) =>
                                geographies.map((geo: any) => (
                                    <Geography
                                        key={geo.rsmKey}
                                        geography={geo}
                                        className="rsm-geography"
                                    />
                                ))
                            }
                        </Geographies>
                        <Marker coordinates={[lng, lat]}>
                            <circle r={8} />
                            {markerLabel && (
                                <text
                                    textAnchor="middle"
                                    y={-20}
                                    className="rsm-marker-text"
                                >
                                    {markerLabel}
                                </text>
                            )}
                        </Marker>
                    </ZoomableGroup>
                </ComposableMap>
            </div>
        </div>
    );
}
