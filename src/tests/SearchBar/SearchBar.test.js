import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import SearchBar from '../../components/SearchBar/SearchBar'; 

describe('SearchBar Component', () => {
    it('renders the search input', () => {
        render(<SearchBar onSearch={() => {}} />);
        const inputElement = screen.getByRole('textbox');
        expect(inputElement).toBeInTheDocument();
    });

    it('calls onSearch prop with input value on change', () => {
        const mockOnSearch = jest.fn();
        render(<SearchBar onSearch={mockOnSearch} />);
        const inputElement = screen.getByRole('textbox');
        fireEvent.change(inputElement, { target: { value: 'test query' } });
        expect(mockOnSearch).toHaveBeenCalledWith('test query');
    });

    it('updates input value on change', () => {
        render(<SearchBar onSearch={() => {}} />);
        const inputElement = screen.getByRole('textbox');
        fireEvent.change(inputElement, { target: { value: 'new value' } });
        expect(inputElement.value).toBe('new value');
    });
});
