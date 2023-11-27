import React from 'react';
import { Flex } from "@chakra-ui/react"
import { StatusContainerProps } from './components.type';

const StatusContainer: React.FC<StatusContainerProps> = ({ children }) => {
    return (
        <Flex marginTop="200px" direction="column" gap="8px" alignItems="center">
            {children}
        </Flex>
    )
}

export default StatusContainer