import { Flex, Spinner } from "@chakra-ui/react"
import React from "react"
import { LoadingContentProps } from "./types"

const LoadingContent: React.FC<LoadingContentProps> = ({ isVisible }) => {
    return (
        <Flex
            justifyContent="center"
            alignItems="center"
            visibility={isVisible ? 'visible' : 'hidden'}
        >
            <Spinner
                thickness='4px'
                speed='0.7s'
                emptyColor='#00000014'
                color='Orange.600'
                size='xl'
            />
        </Flex>
    )
}

export default LoadingContent
