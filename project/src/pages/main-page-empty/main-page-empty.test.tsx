import {render, screen} from '@testing-library/react';
import MainPageEmpty from './main-page-empty';
import '@testing-library/jest-dom/extend-expect';

describe('Component: MainPageEmpty', () => {
  const city = 'Paris';

  it('should render correctly', () => {
    render(
      <MainPageEmpty city={city}/>
    );
    expect(screen.getByText(/No places to stay available/i)).toBeInTheDocument();
  });
});
