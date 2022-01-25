import { render, screen } from '@testing-library/react';
import { Input } from '../../../components/form';

describe('Input', () => {
  it('renders a default input', () => {
    render(<Input />);
    const input = screen.getByRole('textbox');
    expect(input).toHaveClass('border-[#D6D9DD]');
  });

  it('render a placeholder ', () => {
    const placeholder = 'Email Placeholder';
    render(<Input name="email" placeholder={placeholder} />);

    const inputPlaceHolder = screen.getByPlaceholderText(placeholder);

    expect(inputPlaceHolder).toBeInTheDocument();
    expect(inputPlaceHolder).toHaveAttribute('placeholder', placeholder);
  });

  it('render null if label is given', () => {
    const label = 'Email address';
    const placeholder = 'Email Placeholder';
    render(<Input label={label} placeholder={placeholder} />);

    const inputLabel = screen.getByRole('textbox');
    expect(inputLabel).not.toHaveAttribute('placeholder');
  });

  it('render placeholder if label is null', () => {
    const label = null;
    const placeholder = 'Email Placeholder';
    render(<Input label={label} placeholder={placeholder} />);

    const inputPlaceHolder = screen.getByRole('textbox');
    expect(inputPlaceHolder).toHaveAttribute('placeholder', placeholder);
  });

  //                   <<<----test for className props is passed to className --->>>

  it('render className props is passed to className', () => {
    const classNameProp = 'p-20';
    render(<Input name="email" className={classNameProp} />);
    const inputClassName = screen.getByRole('textbox');

    expect(inputClassName).toHaveClass(classNameProp);
  });

  //      <<<---Icons is passed to Icon, icon is not displayed if not given --->>>

  // it('render Icons is passed to Icon', () => {
  //   const IconPass = '<PasswordCheckIcon width="18px" height="18px" fill="#292D32" />';
  //   render(<Input Icon={IconPass} />);

  //   const inputIcon = screen.getByRole();
  //   //TODO ->  Add id for span
  //   expect(inputIcon).toBeInTheDocument();
  //   //expect(inputIcon).toContainElement(IconPass);
  // });

  //                <<<---label shows when given, not present if not given--->>>
  it('render label when given', () => {
    const label = 'Email address';
    render(<Input name="email" label={label} />);

    const inputLabel = screen.getByRole('textbox');
    expect(inputLabel).toBeInTheDocument();
    // To contain element
  });

  it('render label not present if not given', () => {
    const label = null;
    const placeholder = 'Password placeholder';
    render(<Input name="password" label={label} placeholder={placeholder} />);

    // test logic is wrong
    const inputLabel = screen.getByRole('textbox');
    expect(inputLabel).not.toHaveAttribute('label', label);
  });

  //                       <<<----type is set accordingly (text, password, email)---->>>

  it('render type is set accordingly to text ', () => {
    render(<Input name="email" />);

    const inputTypeText = screen.getByRole('textbox');
    expect(inputTypeText).toBeInTheDocument();
    expect(inputTypeText).toHaveAttribute('type', 'text');
  });

  it.only('render type is set accordingly to password', () => {
    const { debug } = render(<Input name="email" label="Password" type="password" />);
    debug();
    const inputTypePassword = screen.getByLabelText('Password');

    expect(inputTypePassword).toBeInTheDocument();
    expect(inputTypePassword).toHaveAttribute('type', 'password');
  });
});
