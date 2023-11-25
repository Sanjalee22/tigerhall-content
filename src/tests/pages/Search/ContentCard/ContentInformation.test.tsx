import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import ContentInformation from '../../../../pages/Search/ContentCard/ContentInformation';

describe('ContentInformation Component', () => {
    const mockProps: ContentInformationProps = {
        category: 'Technology',
        name: 'Introduction to React',
        expertFirstName: 'Jane',
        expertLastName: 'Doe',
        expertTitle: 'Senior Developer'
    };

    it('renders category, name, and expert information', () => {
        render(<ContentInformation {...mockProps} />);

        const categoryElement = screen.getByText(mockProps.category.toUpperCase());
        expect(categoryElement).toBeInTheDocument();

        const nameElement = screen.getByText(mockProps.name);
        expect(nameElement).toBeInTheDocument();

        const expertNameElement = screen.getByText(`${mockProps.expertFirstName} ${mockProps.expertLastName}`);
        expect(expertNameElement).toBeInTheDocument();

        if (mockProps.expertTitle) {
            const expertTitleElement: HTMLElement | undefined = screen.getByText(mockProps.expertTitle);
            expect(expertTitleElement).toBeInTheDocument();
        }

    });

    it('displays a default title if no expertTitle is provided', () => {
        const { expertTitle, ...propsWithoutTitle } = mockProps;
        render(<ContentInformation {...propsWithoutTitle} />);

        const defaultTitleElement = screen.getByText('some title');
        expect(defaultTitleElement).toBeInTheDocument();
    });
});
