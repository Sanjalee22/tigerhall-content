import { Flex, Text, Icon } from "@chakra-ui/react"
import { ReactComponent as CompletionStatus } from '../../assets/icons/Vector.svg';
import { ReactComponent as Headphones } from '../../assets/icons/Headphones.svg';
import { ReactComponent as Time } from '../../assets/icons/Time.svg';
import { editImageUri } from "../../utils";

const ContentStatus = ({ uri, completionPercentage, durationMinutes }) => {

    return (
        <Flex
            bgImage={editImageUri(uri)}
            backgroundSize="cover"
            backgroundPosition="center"
            backgroundRepeat="no-repeat"
            width="100%"
            height="118px"
            borderRadius="8px 8px 0px 0px"
            direction="column"
            justifyContent="space-between"
        >

            <Flex
                padding="8px"
                alignItems="center"
                gap="4px"
                borderRadius="8px 0px 5px 0px"
                background="Orange.50"
                width="fit-content"
            >
                <Icon as={CompletionStatus}></Icon>
                <Text sx={{ textStyle: 'xsMontrealHeaderBold' }} color="Grey.900">{`${completionPercentage}% completed`}</Text>
            </Flex>
            <Flex padding="0px 8px 8px 8px" justifyContent="space-between">
                <Flex justifyContent="center" direction="column">
                    <Icon as={Headphones}></Icon>
                </Flex>
                <Flex
                    height="24px"
                    padding="4px 8px"
                    alignItems="center"
                    gap="4px"
                    borderRadius="100px"
                    background="#000000B2"
                >
                    <Icon as={Time}></Icon>
                    <Text sx={{ textStyle: 'xsMontrealHeaderBold' }} color="White.1000">{`${durationMinutes}m`}</Text>
                </Flex>
            </Flex>
        </Flex>
    )

}

export default ContentStatus