import {useEffect, useState, MutableRefObject} from 'react';
import {Map, TileLayer} from 'leaflet';
import {cities} from '../../const';
import {City} from '../../types/types';
import L from 'leaflet';

function useCreateMap (mapRef: MutableRefObject<HTMLElement | null>, city: string): Map | null {
  const [map, setMap] = useState<Map | null>(null);
  const [currentCityState, setCurrentCity] = useState<string>(city);

  const currentCity = cities.find((item) => (item.name === city)) as City;
  const {latitude, longitude, zoom } = currentCity.location;
  if (currentCity.name !== currentCityState) {
    map?.setView(new L.LatLng(latitude, longitude), zoom);
    setCurrentCity(city);
  }

  useEffect(() => {
    if (mapRef.current !== null && map === null) {
      const instance = new Map(mapRef.current, {
        center: {
          lat: latitude,
          lng: longitude
        },
        zoom: zoom
      });

      const layer = new TileLayer(
        'https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png',
        {
          attribution:
            '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>'
        }
      );

      instance.addLayer(layer);

      setMap(instance);
    }
  }, [latitude, longitude, map, mapRef, zoom]);

  return map;
}

export default useCreateMap;
