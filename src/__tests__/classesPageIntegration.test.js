import React from 'react';
import { HashRouter } from 'react-router-dom';
import {
  render, cleanup, waitFor,
} from '../tests/test-utils';
import ClassesPage from '../pages/classesPage/classesPage';

afterEach(cleanup);

describe('Classes Page', () => {
  let renderedComponent;

  beforeEach(() => {
    renderedComponent = render(
      <HashRouter>
        <ClassesPage />
      </HashRouter>,
    );
  });

  test('Shows available classes', async () => {
    const { getByText, findByText } = renderedComponent;

    await waitFor(() => expect(getByText('Our Classes')).toBeInTheDocument());
    expect(await findByText('English Composition')).toBeInTheDocument();
    expect(await findByText('Singing')).toBeInTheDocument();
  });
});
