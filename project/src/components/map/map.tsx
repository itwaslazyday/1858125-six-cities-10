import {useRef, useEffect} from 'react';
import {places, cities} from '../../fish/fish-offers';
import useCreateMap from '../../hooks/useCreateMap/useCreateMap';
import leaflet from 'leaflet';
import 'leaflet/dist/leaflet.css';

function Map (): JSX.Element {
  const mapRef = useRef(null);
  const map = useCreateMap(mapRef, cities[3]);

  useEffect(() => {
    if (map) {
      places.forEach((place) => {
        leaflet
          .marker({
            lat: place.lat,
            lng: place.lng,
          }
          )
          .addTo(map);
      });
    }
  }, [map, places]);

  return (
    <section className="cities__map map" ref={mapRef}></section>
  );
}

export default Map;
