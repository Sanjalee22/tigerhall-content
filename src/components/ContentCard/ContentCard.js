import { Box, Flex, Image, Text, Icon } from "@chakra-ui/react"
import { ReactComponent as ShareIcon } from '../../assets/icons/Share.svg';
import { ReactComponent as BookmarkIcon } from '../../assets/icons/Bookmark.svg';
import { editImageUri } from "../../utils";

const ContentCard = ({ edge }) => {

    return (
        <Box height="272px" borderRadius="8px" backgroundColor="White.1000">
            <Image
                objectFit='cover'
                maxW={{ base: '100%', sm: '200px' }}
                src={editImageUri(edge.image.uri)}
                alt={edge.name}
                height="118px"
                borderRadius="8px 8px 0px 0px"
            />
            <Box height="2px" backgroundColor="Grey.400"></Box>
            <Flex 
                direction="column" 
                padding="8px 8px 12px 8px" 
                justifyContent="space-between"
                alignItems="flex-start"
                flex="1 0 0"
                alignSelf="stretch"
                height="152px"
            >
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
                        <Text sx={{ textStyle: 'xsMontrealHeaderMedium' }} color="Grey.700">{edge?.categories[0]?.name.toUpperCase()}</Text>
                        <Text sx={{ textStyle: 'mdMontrealHeaderBold' }}>{edge?.name}</Text>
                    </Flex>
                    <Flex 
                        direction="column" 
                        alignItems="flex-start"
                        alignSelf="stretch"
                    >
                        <Text sx={{ textStyle: 'xsMontrealHeaderMedium' }} color="Grey.800">{`${edge?.experts[0]?.firstName} ${edge?.experts[0]?.lastName}`}</Text>
                        <Text sx={{ textStyle: 'xsMontrealHeaderBold' }} >{edge?.experts[0]?.title || 'some title'}</Text>
                    </Flex>

                </Flex>
                <Flex
                    justifyContent="flex-end"
                    alignItems="center"
                    gap="12px"
                    alignSelf="stretch"
                >
                    <Icon as={ShareIcon}></Icon>
                    <Icon as={BookmarkIcon}></Icon>
                </Flex>
            </Flex>
        </Box>
    )
}

export default ContentCard