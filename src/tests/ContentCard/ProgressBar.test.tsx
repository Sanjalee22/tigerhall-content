import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import ProgressBar from '../../components/ContentCard/ProgressBar';

describe('ProgressBar Component', () => {
    const mockProps: ContentInformationProps = {
        category: 'Technology',
        name: 'Introduction to React',
        expertFirstName: 'Jane',
        expertLastName: 'Doe',
        expertTitle: 'Senior Developer'
    };

    it('renders correctly', () => {
        render(<ProgressBar progressPercent={50} />);
    });

    it('shows correct progress for 50%', () => {
        const { container } = render(<ProgressBar progressPercent={50} />);
        const filledBar = container.firstChild?.firstChild;
        expect(filledBar).toHaveStyle('width: 50%');
    });

    it('shows correct progress for 75%', () => {
        const { container } = render(<ProgressBar progressPercent={75} />);
        const filledBar = container.firstChild?.firstChild;
        expect(filledBar).toHaveStyle('width: 75%');
    });

    it('does not exceed 100% progress', () => {
        const { container } = render(<ProgressBar progressPercent={110} />);
        const filledBar = container.firstChild?.firstChild;
        expect(filledBar).toHaveStyle('maxWidth: 100%');
    });
});
