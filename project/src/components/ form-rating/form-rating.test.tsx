import {fireEvent, render, screen} from '@testing-library/react';
import FormRating from './form-rating';
import '@testing-library/jest-dom/extend-expect';

describe('Component: FormRating', () => {
  it('should render correctly', () => {

    render(
      <FormRating isChecked handleFieldChange={() => null} index={3} isDisabled={false}/>
    );

    expect(screen.getByTitle('Might be better!')).toBeInTheDocument();

    fireEvent.change(screen.getByRole('radio'));
    expect(screen.getByRole('radio')).toBeChecked();
  });
});
