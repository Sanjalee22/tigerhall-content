import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import ContentStatus from '../../../../pages/Search/ContentCard/ContentStatus';

describe('ContentStatus Component', () => {
    const mockProps: ContentStatusProps = {
        uri: 'test-uri',
        completionPercentage: 75,
        durationMinutes: 30
    };

    it('displays the correct completion percentage', () => {
        render(<ContentStatus {...mockProps} />);
        const completionText = screen.getByText(`${mockProps.completionPercentage}% completed`);
        expect(completionText).toBeInTheDocument();
    });

    it('displays the correct duration in minutes', () => {
        render(<ContentStatus {...mockProps} />);
        const durationText = screen.getByText(`${mockProps.durationMinutes}m`);
        expect(durationText).toBeInTheDocument();
    });

    // it('displays completion and time icons', () => {
    //     render(<ContentStatus {...mockProps} />);
    //     const completionIcon = screen.getByTestId('completion-status-icon');
    //     const timeIcon = screen.getByTestId('time-icon');
    //     expect(completionIcon).toBeInTheDocument();
    //     expect(timeIcon).toBeInTheDocument();
    // });
});
