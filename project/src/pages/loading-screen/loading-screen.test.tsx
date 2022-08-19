import {render, screen} from '@testing-library/react';
import LoadingScreen from './loading-screen';
import '@testing-library/jest-dom/extend-expect';

describe('Component: LoadingScreen', () => {

  it('should render correctly', () => {
    render(
      <LoadingScreen />
    );
    expect(screen.getByText(/Loading places to stay.../i)).toBeInTheDocument();
  });
});
