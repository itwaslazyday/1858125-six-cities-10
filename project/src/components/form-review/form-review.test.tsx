import {fireEvent, render, screen} from '@testing-library/react';
import FormReview from '../form-review/form-review';
import '@testing-library/jest-dom/extend-expect';
import { Provider } from 'react-redux';
import { store } from '../../store';
import userEvent from '@testing-library/user-event';

describe('Component: FormReview', () => {

  it('should render & submit new review', async () => {
    render(
      <Provider store={store}>
        <FormReview currentId={12}/>
      </Provider>);

    expect(screen.getByRole('button')).toBeInTheDocument();
    expect(screen.getByText(/To submit review/i)).toBeInTheDocument();

    fireEvent.click(screen.getByTitle('Might be better!'));
    await userEvent.type(screen.getByTestId('review'), 'Cool!');
    expect(screen.getByDisplayValue(/Cool!/i)).toBeInTheDocument();

    await userEvent.click(screen.getByRole('button'));
    expect(screen.getByRole('button')).toBeDisabled();

  });
});
