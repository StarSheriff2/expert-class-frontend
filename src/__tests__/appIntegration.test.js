import React from 'react';
import { HashRouter } from 'react-router-dom';
import ReactRouter from 'react-router';
import { render, cleanup, fireEvent } from '../tests/test-utils';
import App from '../App';

afterEach(cleanup);

describe('App', () => {
  test('Shows loading animation while waiting for API response', () => {
    const { getByTestId } = render(<App />);
    expect(getByTestId('spinnerSpan').textContent).toBe('Loading...');
  });

  test('Renders Landing page when user is not signed in', async () => {
    const { findByText } = render(
      <HashRouter>
        <App />
      </HashRouter>,
    );

    expect(await findByText('OUR EXPERT CLASSES')).toBeInTheDocument();
    expect(await findByText('SignIn')).toBeInTheDocument();
    expect(await findByText('SignUp')).toBeInTheDocument();
  });

  test('When user clicks the signIn button he is taken to the Signin page', async () => {
    const { findByText, getByRole, getByPlaceholderText } = render(
      <HashRouter>
        <App />
      </HashRouter>,
    );

    const signInLink = await findByText('SignIn');
    expect(signInLink).toBeInTheDocument();

    fireEvent.click(signInLink);
    expect(getByRole('button')).toBeInTheDocument();
    expect(getByRole('textbox')).toBeInTheDocument();
    expect(getByPlaceholderText('username')).toBeInTheDocument();
  });

  test('When user signs in he is taken to Classes page by default', async () => {
    jest.spyOn(ReactRouter, 'useLocation').mockReturnValue({
      pathname: '/sign-in',
      search: '',
      hash: '',
      state: undefined,
    });

    const { findByText, getByRole, getByTestId } = render(
      <HashRouter>
        <App />
      </HashRouter>,
    );

    await findByText('Sign In');
    const submitBtn = getByRole('button');
    const input = getByRole('textbox');

    fireEvent.change(input, { target: { value: 'john_doe' } });

    fireEvent.submit(submitBtn);
    expect(getByTestId('spinnerSpan').textContent).toBe('Loading...');
    expect(await findByText('English Composition')).toBeInTheDocument();
    expect(await findByText('Jeremy Campbell')).toBeInTheDocument();
  });

  test('When user logs out he is taken to Landing Page', async () => {
    jest.spyOn(ReactRouter, 'useLocation').mockReturnValue({
      pathname: '/sign-in',
      search: '',
      hash: '',
      state: undefined,
    });

    const {
      findByText, getByRole, getByTestId,
    } = render(
      <HashRouter>
        <App />
      </HashRouter>,
    );

    await findByText('Sign In');
    const submitBtn = getByRole('button');
    const input = getByRole('textbox');

    fireEvent.change(input, { target: { value: 'john_doe' } });

    fireEvent.submit(submitBtn);
    expect(getByTestId('spinnerSpan').textContent).toBe('Loading...');
    expect(await findByText('English Composition')).toBeInTheDocument();
    expect(await findByText('Jeremy Campbell')).toBeInTheDocument();

    // Logout
    const logoutBtn = await findByText('Logout');
    fireEvent.click(logoutBtn);
    expect(await findByText('OUR EXPERT CLASSES')).toBeInTheDocument();
    expect(await findByText('SignIn')).toBeInTheDocument();
  });

  test('Renders Classes page when user is already signed in', async () => {
    const customState = {
      users: {
        user: {
          id: 1,
          username: 'john_doe',
          name: 'john',
          created_at: '2020-11-05T23:43:07.938Z',
          updated_at: '2020-11-05T23:43:07.938Z',
        },
        logged_in: true,
        status: 'fulfilled',
        error: null,
      },
    };

    const { findByText, queryByText } = render(
      <HashRouter>
        <App />
      </HashRouter>, { initialState: { users: { ...customState.users } } },
    );

    expect(await findByText('English Composition')).toBeInTheDocument();
    expect(await findByText('Jeremy Campbell')).toBeInTheDocument();

    // Landing Page elements should not be here
    const landingPageText = await queryByText('OUR EXPERT CLASSES');
    expect(landingPageText).not.toBeInTheDocument();
  });

  test('When user signs in he is taken to previously visited page', async () => {
    jest.spyOn(ReactRouter, 'useLocation').mockReturnValue({
      pathname: '/sign-in',
      search: '',
      hash: '',
      state: {
        from:
      {
        pathname: '/reserve', state: undefined, search: '', hash: '',
      },
      },
    });

    const { findByText, getByRole, getByTestId } = render(
      <HashRouter>
        <App />
      </HashRouter>,
    );

    await findByText('Sign In');
    const submitBtn = getByRole('button');
    const input = getByRole('textbox');

    fireEvent.change(input, { target: { value: 'john_doe' } });

    fireEvent.submit(submitBtn);
    expect(getByTestId('spinnerSpan').textContent).toBe('Loading...');
    expect(await findByText('Register for an Expert Class')).toBeInTheDocument();
    expect(getByRole('button', { name: /Register/i })).toBeInTheDocument();
  });
});

/* describe('Countries page by current group', () => {
  test('When user clicks the back arrow, app goes back to homepage', async () => {
    const { findByText, getByTestId } = renderWithRedux(<App />);

    userEvent.click(await findByText('South Asia'));
    expect(await findByText('India')).toBeInTheDocument();
    const arrowBtn = screen.queryByText('<');
    userEvent.click(arrowBtn);
    expect(await findByText('North America')).toBeInTheDocument();
    expect(getByTestId('currentCategory').textContent).toBe('REGIONS');
  });
}); */
