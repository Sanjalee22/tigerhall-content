import React from 'react';
import { Image, Text } from "@chakra-ui/react"
import StatusContainer from './StatusContainer';
import NoContent from "../assets/images/NoContent.png"
import { StatusMessage } from './components.type';

const EmptyState: React.FC<StatusMessage> = ({ messageText }) => {
    return (
        <StatusContainer>
            <Image src={NoContent} alt="No data found" width="50px" height="50px"></Image>
            <Text sx={{ textStyle: 'xsMontrealHeaderMedium' }} color="Grey.300">
                {messageText}
            </Text>
        </StatusContainer>
    )
}

export default EmptyState