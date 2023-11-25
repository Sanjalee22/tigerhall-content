import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import PageNotFound from '../../../pages/PageNotFound';
import { PAGE_NOT_FOUND } from '../../../utils/constants';

// Helper function to render the component within a Router
const renderWithRouter = (ui: React.ReactElement, { route = '/' } = {}) => {
  window.history.pushState({}, 'Test page', route);
  return render(ui, { wrapper: Router });
};

describe('PageNotFound Component', () => {
  test('renders the 404 text', () => {
    renderWithRouter(<PageNotFound />);
    const textElement = screen.getByText(PAGE_NOT_FOUND.ERROR);
    expect(textElement).toBeInTheDocument();
  });

  test('renders the not found message', () => {
    renderWithRouter(<PageNotFound />);
    const messageElement = screen.getByText(PAGE_NOT_FOUND.MESSAGE);
    expect(messageElement).toBeInTheDocument();
  });

  test('renders a link to the home page', () => {
    renderWithRouter(<PageNotFound />);
    const linkElement = screen.getByRole('link', { name: PAGE_NOT_FOUND.HOME_LINK});
    expect(linkElement).toBeInTheDocument();
    expect(linkElement).toHaveAttribute('href', '/');
  });
});
