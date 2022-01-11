import React from 'react';
import { HashRouter } from 'react-router-dom';
import { render, cleanup, fireEvent } from '../tests/test-utils';
import App from '../App';
import NavPanel from '../components/navPanel/navPanel';

afterEach(cleanup);

describe('NavPanel', () => {
  test('Shows all the app\'s navigation links and the logout button', () => {
    const { getByRole, getAllByRole } = render(
      <HashRouter>
        <NavPanel />
      </HashRouter>,
    );
    const navLinks = (getAllByRole('link'));
    expect(navLinks).toHaveLength(6);
    expect(getByRole('button', { name: /Logout/i })).toBeInTheDocument();
  });

  test('When user clicks a link, it opens the correct page', async () => {
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

    const {
      findByText, getAllByRole, getByRole, getAllByTestId,
    } = render(
      <HashRouter>
        <App />
      </HashRouter>, { initialState: { users: { ...customState.users } } },
    );

    const navLinks = (getAllByRole('link'));
    expect(navLinks).toHaveLength(11);
    fireEvent.click(navLinks[1]);
    expect(await findByText('English Composition')).toBeInTheDocument();
    expect(await findByText('Singing')).toBeInTheDocument();
    fireEvent.click(navLinks[2]);
    expect(await findByText('Register for an Expert Class')).toBeInTheDocument();
    expect(getByRole('button', { name: /Register/i })).toBeInTheDocument();
    fireEvent.click(navLinks[3]);
    expect(await findByText('Class: Photography')).toBeInTheDocument();
    fireEvent.click(navLinks[4]);
    const addClassInputs = (getAllByRole('textbox'));
    expect(addClassInputs).toHaveLength(3);
    expect(getByRole('button', { name: /Add/i })).toBeInTheDocument();
    fireEvent.click(navLinks[5]);
    const removeButtons = (getAllByTestId('removeBtn'));
    expect(removeButtons).toHaveLength(2);
  });
});
