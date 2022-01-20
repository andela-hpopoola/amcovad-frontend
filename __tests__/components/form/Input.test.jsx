import { render, screen } from '@testing-library/react';
import { Input } from '../../../components/form';

describe('Input', () => {
  it('renders a default input', () => {
    render(<Input />);
    const input = screen.getByRole('textbox');
    expect(input).toHaveClass('border-[#D6D9DD]');
  });
});
