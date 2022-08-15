import {render, screen} from '@testing-library/react';
import Map from './map';
import '@testing-library/jest-dom/extend-expect';
import { makeFakeOfferProcess, makeFakeOffersProcess } from '../../utiles/mocks';
import { Place } from '../../types/types';

const currentPlaces = makeFakeOffersProcess().map((item) => ({...item, city: {...item.city, name: 'Paris'}}));
const currentPlace = makeFakeOfferProcess().room as Place;
currentPlace.city.name = 'Paris';

describe('Component: Map', () => {
  it('should render map-section correctly', () => {
    render(<Map classPrefix='cities' places={currentPlaces} selectedPoint={currentPlace} city='Paris'/>);

    expect(screen.getByTestId('map')).toBeInTheDocument();
  });
});
