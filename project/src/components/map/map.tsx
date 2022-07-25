import {useRef, useEffect} from 'react';
import useCreateMap from '../../hooks/useCreateMap/useCreateMap';
import 'leaflet/dist/leaflet.css';
import {Place, City} from '../../types/types';
import {URL_MARKER_DEFAULT, URL_MARKER_CURRENT} from '../../const';
import {Icon, Marker} from 'leaflet';

type MapProps = {
  places: Place[];
  classPrefix: string;
  city: City;
  selectedPoint: Place | undefined;
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

function Map ({classPrefix, places, city, selectedPoint}: MapProps): JSX.Element {
  const mapRef = useRef(null);
  const map = useCreateMap(mapRef, city);

  useEffect(() => {
    if (map) {
      places.forEach((place) => {
        const marker = new Marker({
          lat: place.location.latitude,
          lng: place.location.longitude,
        });
        marker
          .setIcon(selectedPoint !== undefined && place.id === selectedPoint.id
            ? currentCustomIcon
            : defaultCustomIcon)
          .addTo(map);
      });
    }
  }, [map, places, selectedPoint]);

  return (
    <section className={`${classPrefix}__map map`} ref={mapRef}></section>
  );
}

export default Map;
