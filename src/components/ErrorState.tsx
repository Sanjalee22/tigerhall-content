import React from 'react';
import { Image, Text } from "@chakra-ui/react"
import StatusContainer from './StatusContainer';
import Error from "../assets/images/Error.png"
import { StatusMessage } from './components.type';

const ErrorState: React.FC<StatusMessage> = ({ messageText }) => {
    return (
        <StatusContainer>
            <Image src={Error} alt="An error occured" width="50px" height="50px"></Image>
            <Text sx={{ textStyle: 'xsMontrealHeaderMedium' }} color="Grey.300">
                {messageText}
            </Text>
        </StatusContainer>
    )
}

export default ErrorState