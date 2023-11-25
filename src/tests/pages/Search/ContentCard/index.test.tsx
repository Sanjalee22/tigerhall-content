import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import ContentCard from '../../../../pages/Search/ContentCard';

describe('ContentCard Component', () => {
    const mockEdge = {
        image: { uri: 'test-uri' },
        categories: [{ name: 'Category1' }],
        name: 'Test Content',
        experts: [{ firstName: 'John', lastName: 'Doe', title: 'Expert' }],
    };

    test('renders ContentStatus component with correct props', () => {
        render(<ContentCard edge={mockEdge} />);
    });

    test('renders ProgressBar component with correct props', () => {
        render(<ContentCard edge={mockEdge} />);
    });

    test('renders ContentInformation component with correct props', () => {
        render(<ContentCard edge={mockEdge} />);
        expect(screen.getByText(mockEdge.name)).toBeInTheDocument();
    });

    test('renders ShareControls component', () => {
        render(<ContentCard edge={mockEdge} />);
    });
});
