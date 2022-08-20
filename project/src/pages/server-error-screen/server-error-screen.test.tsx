import {render, screen} from '@testing-library/react';
import ServerErrorScreen from './server-error-screen';
import '@testing-library/jest-dom/extend-expect';

describe('Component: ServerErrorScreen', () => {
  it('should render correctly', () => {

    render(
      <ServerErrorScreen />
    );

    expect(screen.getByText(/Server is not available now/i)).toBeInTheDocument();
  });
});
