import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import EmptyState from '../../components/EmptyState';

describe('EmptyState Component', () => {
    const testMessage = 'No data available';

    test('renders the no content image', () => {
        render(<EmptyState messageText={testMessage} />);
        const image = screen.getByRole('img', { name: 'No data found' });
        expect(image).toBeInTheDocument();
    });

    test('renders the provided message text', () => {
        render(<EmptyState messageText={testMessage} />);
        const message = screen.getByText(testMessage);
        expect(message).toBeInTheDocument();
    });
});
