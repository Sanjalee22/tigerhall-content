import { Flex, Text } from "@chakra-ui/react"

const ErrorState = ({ errorText }) => {
    return (
        <Flex marginTop="200px" direction="column" gap="8px" alignItems="center">
            <Text sx={{ textStyle: 'xlFormulaHeader' }} color="Red.300">
                X
            </Text>
            <Text sx={{ textStyle: 'xsMontrealHeaderMedium' }} color="Grey.300">
                {errorText}
            </Text>
        </Flex>
    )
}

export default ErrorState