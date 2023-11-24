import React from 'react';
import { Flex, Image, Text } from "@chakra-ui/react"
import NoContent from "../../assets/images/NoContent.png"

const EmptyState: React.FC<EmptyStateProps> = ({messageText}) => {
    return (
        <Flex marginTop="200px" direction="column" gap="8px" alignItems="center">
        <Image src={NoContent} alt="No data found" width="50px" height="50px"></Image>
        <Text sx={{ textStyle: 'xsMontrealHeaderMedium' }} color="Grey.300">
            {messageText}
        </Text>
    </Flex>
    )
}

export default EmptyState