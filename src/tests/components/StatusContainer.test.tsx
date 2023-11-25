import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import StatusContainer from '../../components/StatusContainer';

describe('StatusContainer Component', () => {
    test('renders its children', () => {
        render(
            <StatusContainer>
                <div data-testid="child">Child Content</div>
            </StatusContainer>
        );

        const childElement = screen.getByTestId('child');
        expect(childElement).toBeInTheDocument();
        expect(childElement.textContent).toBe('Child Content');
    });

    test('applies correct styling', () => {
        const { container } = render(
            <StatusContainer>
                <div>Content</div>
            </StatusContainer>
        );

        expect(container.firstChild).toHaveStyle('margin-top: 200px');
        expect(container.firstChild).toHaveStyle('flex-direction: column');
        expect(container.firstChild).toHaveStyle('gap: 8px');
        expect(container.firstChild).toHaveStyle('align-items: center');
    });
});
