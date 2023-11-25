import React from 'react';
import { Flex, Text } from "@chakra-ui/react"

const ContentInformation: React.FC<ContentInformationProps> = ({ category, name, expertFirstName, expertLastName, expertTitle }) => {
    return (
        <Flex
            direction="column"
            alignItems="flex-start"
            alignSelf="stretch"
            gap="8px"
            height="109px"
            justifyContent="space-between"
        >
            <Flex
                direction="column"
                alignItems="flex-start"
                gap="2px"
                alignSelf="stretch"
            >
                <Text sx={{ textStyle: 'xsMontrealHeaderMedium' }} color="Grey.700">{category.toUpperCase()}</Text>
                <Text sx={{ textStyle: 'mdMontrealHeaderBold' }}>{name}</Text>
            </Flex>
            <Flex
                direction="column"
                alignItems="flex-start"
                alignSelf="stretch"
            >
                <Text sx={{ textStyle: 'xsMontrealHeaderMedium' }} color="Grey.800">{`${expertFirstName} ${expertLastName}`}</Text>
                <Text sx={{ textStyle: 'xsMontrealHeaderBold' }} >{expertTitle || 'some title'}</Text>
            </Flex>

        </Flex>
    )
}

export default ContentInformation