import React, { useState, ChangeEvent } from 'react';
import { Input, InputGroup, InputLeftElement } from '@chakra-ui/react';
import { SearchIcon } from '@chakra-ui/icons'

const SearchBar: React.FC<SearchBarProps> = ({ onSearch }) => {
    const [input, setInput] = useState<string>('');

    const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
        setInput(e.target.value);
        onSearch(e.target.value)
    };

    return (
        <InputGroup>
            <InputLeftElement pointerEvents='none'>
                <SearchIcon color="White.1000"/>
            </InputLeftElement>
            <Input
                value={input}
                onChange={handleInputChange}
                bgColor="Grey.900"
                type="text"
                borderColor="Grey.700" color="Grey.300"
                sx={{ textStyle: 'mdBodyMedium' }}
            />
        </InputGroup>
    );
};

export default SearchBar;