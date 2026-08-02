import React, { useEffect, useState, type CSSProperties } from 'react';
import TextSpanXS from '../../atom/text/textSpanXS';

/**
 * Properties of the CardMap component.
 */
export type CardMapProps = {
    /**
     * Latitude of the map center and marker.
     */
    lat: number;
    /**
     * Longitude of the map center and marker.
     */
    lng: number;
    /**
     * Initial zoom level.
     */
    zoom?: number;
    /**
     * Label displayed in a popup when the marker is clicked.
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
    /**
     * Tile layer URL (optional, defaults to OSM).
     */
    tileUrl?: string;
};

/**
 * Molecule Component: Card Map
 * A card displaying an interactive geographic map using Leaflet.
 */
export default function CardMap({
                                    lat,
                                    lng,
                                    zoom = 13,
                                    markerLabel,
                                    title,
                                    classname = '',
                                    aosDuration,
                                    aosEffect,
                                    style,
                                    tileUrl = 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
                                }: CardMapProps) {
    const [isClient, setIsClient] = useState(false);
    const [MapComponents, setMapComponents] = useState<any>(null);

    useEffect(() => {
        const loadLeaflet = async () => {
            try {
                // @ts-ignore
                const [L, ReactLeaflet] = await Promise.all([
                    import('leaflet'),
                    import('react-leaflet'),
                    import('leaflet/dist/leaflet.css')
                ]);

                const Leaflet = L.default || L;

                // Fix for leaflet default icon issue in webpack/vite environments
                if (Leaflet.Icon && Leaflet.Icon.Default) {
                    delete (Leaflet.Icon.Default.prototype as any)._getIconUrl;
                    Leaflet.Icon.Default.mergeOptions({
                        iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png',
                        iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
                        shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
                    });
                }

                setMapComponents({
                    MapContainer: ReactLeaflet.MapContainer,
                    TileLayer: ReactLeaflet.TileLayer,
                    Marker: ReactLeaflet.Marker,
                    Popup: ReactLeaflet.Popup
                });
                setIsClient(true);
            } catch (error) {
                console.error("Failed to load Leaflet:", error);
            }
        };

        loadLeaflet();
    }, []);

    if (!isClient || !MapComponents) {
        return (
            <div
                className={`m-cardMap ${classname}`.trim()}
                style={{ minHeight: '200px', ...style }}
                data-aos={aosEffect || undefined}
                data-aos-duration={aosDuration}
            >
                {title && (
                    <div className="m-cardMap__a-title">
                        <TextSpanXS>{title}</TextSpanXS>
                    </div>
                )}
            </div>
        );
    }

    const { MapContainer, TileLayer, Marker, Popup } = MapComponents;

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
            <MapContainer
                center={[lat, lng]}
                zoom={zoom}
                scrollWheelZoom={false}
                className="m-cardMap__container"
            >
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url={tileUrl}
                />
                <Marker position={[lat, lng]}>
                    {markerLabel && (
                        <Popup>
                            {markerLabel}
                        </Popup>
                    )}
                </Marker>
            </MapContainer>
        </div>
    );
}
