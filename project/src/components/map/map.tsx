import {useRef, useEffect} from 'react';
import useCreateMap from '../../hooks/useCreateMap/useCreateMap';
import {Place} from '../../types/types';
import {URL_MARKER_DEFAULT, URL_MARKER_CURRENT} from '../../const';
import {Icon, Marker} from 'leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

type MapProps = {
  places: Place[];
  classPrefix: string;
  selectedPoint: Place | undefined;
  city: string;
};

const defaultCustomIcon = new Icon({
  iconUrl: URL_MARKER_DEFAULT,
  iconSize: [40, 40],
  iconAnchor: [20, 40]
});

const currentCustomIcon = new Icon({
  iconUrl: URL_MARKER_CURRENT,
  iconSize: [40, 40],
  iconAnchor: [20, 40]
});

function Map ({classPrefix, places, selectedPoint, city}: MapProps): JSX.Element {
  const mapRef = useRef(null);
  const map = useCreateMap(mapRef, city);

  useEffect(() => {
    const layerGroup = L.layerGroup([]);
    if (map) {
      places.forEach((place) => {
        const marker = new Marker({
          lat: place.location.latitude,
          lng: place.location.longitude,
        });
        marker
          .setIcon(selectedPoint !== undefined && place.id === selectedPoint.id
            ? currentCustomIcon
            : defaultCustomIcon);
        layerGroup
          .addLayer(marker);
      });
      layerGroup
        .addTo(map);
    }
    return () => {
      map?.removeLayer(layerGroup);
    };
  }, [map, places, selectedPoint]);

  return (
    <section className={`${classPrefix}__map map`} ref={mapRef}></section>
  );
}

export default Map;
