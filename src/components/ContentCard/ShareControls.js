import { Flex, Icon } from "@chakra-ui/react"
import { ReactComponent as ShareIcon } from '../../assets/icons/Share.svg';
import { ReactComponent as BookmarkIcon } from '../../assets/icons/Bookmark.svg';

const ShareControls = () => {
    return(
        <Flex
        justifyContent="flex-end"
        alignItems="center"
        gap="12px"
        alignSelf="stretch"
    >
        <Icon as={ShareIcon}></Icon>
        <Icon as={BookmarkIcon}></Icon>
    </Flex>
    )

}

export default ShareControls