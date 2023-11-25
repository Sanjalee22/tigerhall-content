import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

import ErrorState from '../../components/ErrorState';

describe('EmptyState Component', () => {
    const testMessage = 'No data available';

    test('renders the no content image', () => {
        render(<ErrorState messageText={testMessage} />);
        const image = screen.getByRole('img', { name: 'An error occured' });
        expect(image).toBeInTheDocument();
    });

    test('renders the provided message text', () => {
        render(<ErrorState messageText={testMessage} />);
        const message = screen.getByText(testMessage);
        expect(message).toBeInTheDocument();
    });
});
